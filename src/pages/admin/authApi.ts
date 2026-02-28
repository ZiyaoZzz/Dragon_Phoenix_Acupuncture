const API_BASE = import.meta.env.VITE_API_URL ?? '';
const TOKEN_KEY = 'adminToken';

function getToken(): string | null {
  try {
    return window.localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

function setToken(token: string) {
  try {
    window.localStorage.setItem(TOKEN_KEY, token);
  } catch {
    // ignore storage errors
  }
}

export function clearToken() {
  try {
    window.localStorage.removeItem(TOKEN_KEY);
  } catch {
    // ignore storage errors
  }
}

export interface AdminAppointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  newClient: boolean;
  appointmentDate: string;
  appointmentTime: string;
  additionalInfo?: string;
  createdAt: string;
}

async function request<T>(
  path: string,
  options: RequestInit & { method?: string } = {}
): Promise<{ data?: T; status: number; error?: string }> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  const token = getToken();
  if (token) {
    (headers as Record<string, string>).Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });
  let data: unknown;
  try {
    data = await res.json();
  } catch {
    data = {};
  }
  const err = (data as { error?: string })?.error;
  return { data: data as T, status: res.status, error: err };
}

export async function login(userId: string, password: string) {
  const result = await request<{ success?: boolean; token?: string }>('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ userId, password }),
  });
  if (result.status === 200 && result.data?.token) {
    setToken(result.data.token);
  }
  return result;
}

export async function checkAuth() {
  return request<{ user?: string }>('/api/auth/check');
}

export async function logout() {
  clearToken();
  return request<{ success?: boolean }>('/api/auth/logout', { method: 'POST' });
}

export async function fetchAppointments() {
  return request<{ items: AdminAppointment[] }>('/api/admin/appointments');
}
