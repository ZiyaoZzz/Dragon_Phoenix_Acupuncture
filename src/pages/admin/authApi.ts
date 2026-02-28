const API_BASE = import.meta.env.VITE_API_URL ?? '';

async function request<T>(
  path: string,
  options: RequestInit & { method?: string } = {}
): Promise<{ data?: T; status: number; error?: string }> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...options.headers },
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
  return request<{ success?: boolean }>('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ userId, password }),
  });
}

export async function checkAuth() {
  return request<{ user?: string }>('/api/auth/check');
}

export async function logout() {
  return request<{ success?: boolean }>('/api/auth/logout', { method: 'POST' });
}
