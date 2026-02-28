import React, { type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from './authApi';

/**
 * Admin login page. No public header/footer; minimal layout for backend access.
 */
export const AdminLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({ userId: false, password: false });
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ userId: true, password: true });
    setApiError(null);
    const form = e.currentTarget;
    if (!form.checkValidity()) return;
    setSubmitting(true);
    try {
      const { status, error } = await login(userId, password);
      if (status === 200) {
        navigate('/admin', { replace: true });
        return;
      }
      setApiError(error ?? 'Invalid user ID or password.');
    } finally {
      setSubmitting(false);
    }
  };

  const userIdError = touched.userId && !userId.trim();
  const passwordError = touched.password && !password;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-brand-primary px-6 py-4 text-center">
            <h1 className="text-xl font-semibold text-white tracking-tight">Admin</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="p-6 sm:p-8 space-y-5"
          >
            <div>
              <label htmlFor="admin-userid" className="block text-sm font-medium text-gray-700 mb-1.5">
                User ID
              </label>
              <input
                id="admin-userid"
                name="userId"
                type="text"
                autoComplete="username"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, userId: true }))}
                required
                aria-invalid={userIdError}
                aria-describedby={userIdError ? 'admin-userid-error' : undefined}
                className={`w-full border rounded-lg px-3 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent ${
                  userIdError ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter user ID"
              />
              {userIdError && (
                <p id="admin-userid-error" className="mt-1 text-sm text-red-600" role="alert">
                  This field is required.
                </p>
              )}
            </div>
            {apiError && (
              <p className="text-sm text-red-600" role="alert">
                {apiError}
              </p>
            )}
            <div>
              <label htmlFor="admin-password" className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <input
                id="admin-password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, password: true }))}
                required
                aria-invalid={passwordError}
                aria-describedby={passwordError ? 'admin-password-error' : undefined}
                className={`w-full border rounded-lg px-3 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent ${
                  passwordError ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter password"
              />
              {passwordError && (
                <p id="admin-password-error" className="mt-1 text-sm text-red-600" role="alert">
                  This field is required.
                </p>
              )}
            </div>
            <div className="pt-1">
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-brand-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-clinic-green-dark focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 transition-colors disabled:opacity-60 disabled:pointer-events-none"
              >
                {submitting ? 'Signing in…' : 'Sign in'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
