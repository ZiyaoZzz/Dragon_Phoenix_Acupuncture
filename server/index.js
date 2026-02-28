import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = Number(process.env.PORT) || 3001;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173';
const ADMIN_USER_ID = (process.env.ADMIN_USER_ID || '').trim();
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '';
const JWT_SECRET = process.env.JWT_SECRET || '';

if (!ADMIN_USER_ID || !ADMIN_PASSWORD_HASH || !JWT_SECRET) {
  console.error('Missing required env: ADMIN_USER_ID, ADMIN_PASSWORD_HASH, JWT_SECRET. See .env.example');
  process.exit(1);
}

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

app.get('/', (_req, res) => {
  return res.status(200).type('text').send('OK');
});

app.get('/api/health', (_req, res) => {
  return res.status(200).json({ ok: true });
});

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many attempts. Try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

app.post('/api/auth/login', loginLimiter, async (req, res) => {
  const userId = (req.body?.userId ?? '').trim();
  const password = req.body?.password ?? '';

  const genericError = { error: 'Invalid user ID or password.' };

  if (!userId || !password) {
    return res.status(401).json(genericError);
  }

  if (userId !== ADMIN_USER_ID) {
    return res.status(401).json(genericError);
  }

  let valid = false;
  try {
    valid = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
  } catch (_) {
    return res.status(401).json(genericError);
  }

  if (!valid) {
    return res.status(401).json(genericError);
  }

  const token = jwt.sign(
    { sub: userId, role: 'admin' },
    JWT_SECRET,
    { expiresIn: '24h' }
  );
  return res.status(200).json({ success: true, token });
});

app.get('/api/auth/check', (req, res) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';
  if (!token) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    if (payload.sub !== ADMIN_USER_ID) return res.status(401).json({ error: 'Not authenticated' });
    return res.status(200).json({ user: payload.sub });
  } catch (_) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
});

app.post('/api/auth/logout', (_req, res) => {
  return res.status(200).json({ success: true });
});

// In-memory appointment storage (resets when server restarts)
const appointments = [];

app.post('/api/appointments', async (req, res) => {
  const {
    name,
    email,
    phone,
    newClient,
    appointmentDate,
    appointmentTime,
    additionalInfo,
  } = req.body ?? {};

  if (!name || !email || !phone || !appointmentDate || !appointmentTime) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  const createdAt = new Date().toISOString();
  const item = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    email,
    phone,
    newClient: Boolean(newClient),
    appointmentDate,
    appointmentTime,
    additionalInfo: additionalInfo || '',
    createdAt,
  };

  appointments.unshift(item);
  return res.status(201).json({ success: true });
});

function requireAdmin(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';
  if (!token) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    if (payload.sub !== ADMIN_USER_ID) {
      return res.status(401).json({ error: 'Not authenticated' });
    }
    next();
  } catch {
    return res.status(401).json({ error: 'Not authenticated' });
  }
}

app.get('/api/admin/appointments', requireAdmin, (_req, res) => {
  return res.status(200).json({ items: appointments });
});

app.listen(PORT, () => {
  console.log(`Auth server running at http://localhost:${PORT}`);
});
