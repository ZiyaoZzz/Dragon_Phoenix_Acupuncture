import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = Number(process.env.PORT) || 3001;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173';
const ADMIN_USER_ID = (process.env.ADMIN_USER_ID || '').trim();
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '';
const JWT_SECRET = process.env.JWT_SECRET || '';
const COOKIE_SECURE = process.env.COOKIE_SECURE === 'true';
const COOKIE_NAME = 'auth';

if (!ADMIN_USER_ID || !ADMIN_PASSWORD_HASH || !JWT_SECRET) {
  console.error('Missing required env: ADMIN_USER_ID, ADMIN_PASSWORD_HASH, JWT_SECRET. See .env.example');
  process.exit(1);
}

app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
app.use(express.json());
app.use(cookieParser());

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

function setAuthCookie(res, token) {
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    secure: COOKIE_SECURE,
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000,
    path: '/',
  });
}

function clearAuthCookie(res) {
  res.clearCookie(COOKIE_NAME, { path: '/', httpOnly: true, secure: COOKIE_SECURE, sameSite: 'lax' });
}

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
  setAuthCookie(res, token);
  return res.status(200).json({ success: true });
});

app.get('/api/auth/check', (req, res) => {
  const token = req.cookies?.[COOKIE_NAME];
  if (!token) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    if (payload.sub !== ADMIN_USER_ID) return res.status(401).json({ error: 'Not authenticated' });
    return res.status(200).json({ user: payload.sub });
  } catch (_) {
    clearAuthCookie(res);
    return res.status(401).json({ error: 'Not authenticated' });
  }
});

app.post('/api/auth/logout', (_req, res) => {
  clearAuthCookie(res);
  return res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Auth server running at http://localhost:${PORT}`);
});
