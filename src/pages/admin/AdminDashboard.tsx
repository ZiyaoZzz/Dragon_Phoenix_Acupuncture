import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuth, logout } from './authApi';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<string | null>(null);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { status, data } = await checkAuth();
      if (cancelled) return;
      if (status === 200 && data?.user) {
        setUser(data.user);
      } else {
        navigate('/admin/login', { replace: true });
      }
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [navigate]);

  const handleLogout = async () => {
    setLoggingOut(true);
    await logout();
    navigate('/admin/login', { replace: true });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Loading…</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8">
        <div className="bg-brand-primary -m-6 sm:-m-8 mb-6 sm:mb-8 px-6 sm:px-8 py-4 text-center">
          <h1 className="text-xl font-semibold text-white tracking-tight">Admin</h1>
        </div>
        <p className="text-gray-700 mb-6">You are logged in as <strong>{user}</strong>.</p>
        <button
          type="button"
          onClick={handleLogout}
          disabled={loggingOut}
          className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors disabled:opacity-60"
        >
          {loggingOut ? 'Signing out…' : 'Sign out'}
        </button>
      </div>
    </div>
  );
};
