/**
 * Generate bcrypt hash for admin password. Run: node scripts/hash-password.js "YourPassword"
 */
import bcrypt from 'bcrypt';

const password = process.argv[2];
if (!password) {
  console.error('Usage: node scripts/hash-password.js "YourPassword"');
  process.exit(1);
}

const hash = await bcrypt.hash(password, 10);
console.log('ADMIN_PASSWORD_HASH=' + hash);
