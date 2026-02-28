import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuth, logout, fetchAppointments, type AdminAppointment } from './authApi';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<string | null>(null);
  const [loggingOut, setLoggingOut] = useState(false);
  const [appointments, setAppointments] = useState<AdminAppointment[]>([]);
  const [appointmentsLoading, setAppointmentsLoading] = useState(true);

  const today = useMemo(() => new Date(), []);
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth(); // 0-11
  const todayDate = today.getDate();

  const [viewYear, setViewYear] = useState(todayYear);
  const [viewMonth, setViewMonth] = useState(todayMonth);

  const firstDayOfMonth = new Date(viewYear, viewMonth, 1);
  const startWeekday = firstDayOfMonth.getDay(); // 0 (Sun) - 6 (Sat)
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const days: Array<number | null> = [];
  for (let i = 0; i < startWeekday; i += 1) {
    days.push(null);
  }
  for (let d = 1; d <= daysInMonth; d += 1) {
    days.push(d);
  }

  const monthLabel = useMemo(
    () =>
      new Date(viewYear, viewMonth, 1).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
      }),
    [viewYear, viewMonth]
  );
  const weekdayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const twoWeeksLater = useMemo(() => {
    const d = new Date(today);
    d.setDate(d.getDate() + 14);
    return d;
  }, [today]);
  const maxYear = twoWeeksLater.getFullYear();
  const maxMonth = twoWeeksLater.getMonth();

  const canGoPrev = viewYear > todayYear || (viewYear === todayYear && viewMonth > todayMonth);
  const canGoNext =
    viewYear < maxYear || (viewYear === maxYear && viewMonth < maxMonth);

  const handlePrevMonth = () => {
    if (!canGoPrev) return;
    setViewMonth((prev) => {
      if (prev === 0) {
        setViewYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const handleNextMonth = () => {
    if (!canGoNext) return;
    setViewMonth((prev) => {
      if (prev === 11) {
        setViewYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const appointmentCounts = useMemo(() => {
    const now = new Date();
    const map = new Map<number, number>();

    const getAppointmentEnd = (appt: AdminAppointment): Date => {
      const [yStr, mStr, dStr] = appt.appointmentDate.split('-');
      const y = Number(yStr) || todayYear;
      const m = (Number(mStr) || 1) - 1;
      const d = Number(dStr) || 1;
      let hour = 23;
      let minute = 59;
      const parts = appt.appointmentTime.split('–');
      const endPart = (parts[1] ?? parts[0] ?? '').trim(); // fall back to start if no range
      if (endPart) {
        const [hm, ampmRaw] = endPart.split(' ');
        const [hStr, minStr] = (hm ?? '').split(':');
        hour = Number(hStr) || 0;
        minute = Number(minStr) || 0;
        const ampm = (ampmRaw || '').toUpperCase();
        if (ampm.startsWith('P') && hour < 12) hour += 12;
        if (ampm.startsWith('A') && hour === 12) hour = 0;
      }
      return new Date(y, m, d, hour, minute);
    };

    appointments.forEach((appt) => {
      const end = getAppointmentEnd(appt);
      if (end.getTime() < now.getTime()) return; // skip past appointments

      const parts = appt.appointmentDate.split('-').map((p) => Number(p));
      if (parts.length === 3) {
        const [y, m, d] = parts;
        const localDate = new Date(y, m - 1, d);
        if (localDate.getFullYear() === viewYear && localDate.getMonth() === viewMonth) {
          const day = localDate.getDate();
          map.set(day, (map.get(day) ?? 0) + 1);
        }
      }
    });
    return map;
  }, [appointments, viewYear, viewMonth, todayYear]);

  const groupedAppointments = useMemo(() => {
    const now = new Date();

    const parseDateOnly = (dateStr: string): number => {
      const [yStr, mStr, dStr] = dateStr.split('-');
      const y = Number(yStr) || todayYear;
      const m = (Number(mStr) || 1) - 1;
      const d = Number(dStr) || 1;
      return new Date(y, m, d, 0, 0, 0, 0).getTime();
    };

    const parseDateTime = (appt: AdminAppointment): number => {
      const [yStr, mStr, dStr] = appt.appointmentDate.split('-');
      const y = Number(yStr) || todayYear;
      const m = (Number(mStr) || 1) - 1;
      const d = Number(dStr) || 1;
      let hour = 0;
      let minute = 0;
      const [range] = appt.appointmentTime.split('–');
      if (range) {
        const t = range.trim(); // e.g. "10:00 AM"
        const [hm, ampmRaw] = t.split(' ');
        const [hStr, minStr] = (hm ?? '').split(':');
        hour = Number(hStr) || 0;
        minute = Number(minStr) || 0;
        const ampm = (ampmRaw || '').toUpperCase();
        if (ampm.startsWith('P') && hour < 12) hour += 12;
        if (ampm.startsWith('A') && hour === 12) hour = 0;
      }
      return new Date(y, m, d, hour, minute).getTime();
    };

    const getAppointmentEnd = (appt: AdminAppointment): Date => {
      const [yStr, mStr, dStr] = appt.appointmentDate.split('-');
      const y = Number(yStr) || todayYear;
      const m = (Number(mStr) || 1) - 1;
      const d = Number(dStr) || 1;
      let hour = 23;
      let minute = 59;
      const parts = appt.appointmentTime.split('–');
      const endPart = (parts[1] ?? parts[0] ?? '').trim();
      if (endPart) {
        const [hm, ampmRaw] = endPart.split(' ');
        const [hStr, minStr] = (hm ?? '').split(':');
        hour = Number(hStr) || 0;
        minute = Number(minStr) || 0;
        const ampm = (ampmRaw || '').toUpperCase();
        if (ampm.startsWith('P') && hour < 12) hour += 12;
        if (ampm.startsWith('A') && hour === 12) hour = 0;
      }
      return new Date(y, m, d, hour, minute);
    };

    const groups = new Map<string, AdminAppointment[]>();
    appointments.forEach((appt) => {
      const end = getAppointmentEnd(appt);
      if (end.getTime() < now.getTime()) return; // skip past

      const key = appt.appointmentDate;
      if (!groups.has(key)) {
        groups.set(key, []);
      }
      groups.get(key)!.push(appt);
    });

    const entries = Array.from(groups.entries());
    entries.sort((a, b) => parseDateOnly(a[0]) - parseDateOnly(b[0]));

    return entries.map(([date, items]) => ({
      date,
      items: [...items].sort((a, b) => parseDateTime(a) - parseDateTime(b)),
    }));
  }, [appointments, todayYear]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { status, data } = await checkAuth();
      if (cancelled) return;
      if (status === 200 && data?.user) {
        setUser(data.user);
        const result = await fetchAppointments();
        if (!cancelled && result.status === 200 && result.data?.items) {
          setAppointments(result.data.items);
        }
      } else {
        navigate('/admin/login', { replace: true });
      }
      setLoading(false);
      setAppointmentsLoading(false);
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
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8 text-base sm:text-lg">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 tracking-tight">Admin</h1>
          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="bg-gray-200 text-gray-800 px-5 py-2.5 rounded-lg text-base sm:text-lg font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors disabled:opacity-60"
          >
            {loggingOut ? 'Signing out…' : 'Sign out'}
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-base sm:text-lg font-medium text-gray-500">Calendar</p>
                <p className="text-xl sm:text-2xl font-semibold text-gray-800">{monthLabel}</p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrevMonth}
                  disabled={!canGoPrev}
                  className="px-3 py-1.5 rounded border border-gray-300 text-sm disabled:opacity-40"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={handleNextMonth}
                  disabled={!canGoNext}
                  className="px-3 py-1.5 rounded border border-gray-300 text-sm disabled:opacity-40"
                >
                  ›
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-sm sm:text-base mb-1 text-gray-500">
              {weekdayLabels.map((label) => (
                <div key={label} className="text-center font-medium">
                  {label}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 sm:gap-1.5 text-sm sm:text-base">
              {days.map((day, index) => {
                if (day === null) {
                  return <div key={`empty-${index}`} />;
                }
                const count = appointmentCounts.get(day) ?? 0;
                const hasAppt = count > 0;
                const isToday =
                  viewYear === todayYear && viewMonth === todayMonth && day === todayDate && !(
                    viewYear < todayYear ||
                    (viewYear === todayYear && viewMonth < todayMonth)
                  );
                const isPast =
                  viewYear < todayYear ||
                  (viewYear === todayYear && viewMonth < todayMonth) ||
                  (viewYear === todayYear && viewMonth === todayMonth && day < todayDate);
                const title = hasAppt ? `${count} appointment${count > 1 ? 's' : ''}` : undefined;
                return (
                  <div
                    key={day}
                    title={title}
                    className={
                      isPast
                        ? 'h-9 sm:h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 bg-gray-50'
                        : isToday
                        ? 'h-9 sm:h-10 flex items-center justify-center rounded-full bg-brand-primary text-white font-semibold cursor-pointer hover:bg-brand-accent transition-colors'
                        : hasAppt
                        ? 'h-9 sm:h-10 flex items-center justify-center rounded-full bg-brand-light text-gray-900 border border-brand-primary cursor-pointer hover:bg-brand-accent/80 transition-colors'
                        : 'h-9 sm:h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors'
                    }
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-base sm:text-xl font-semibold text-gray-800 mb-2">
              Recent appointment requests
            </h2>
            {appointmentsLoading ? (
              <p className="text-base text-gray-500">Loading…</p>
            ) : appointments.length === 0 ? (
              <p className="text-base text-gray-500">No requests yet.</p>
            ) : (
              <ul className="space-y-4 max-h-80 overflow-y-auto pr-1">
                {groupedAppointments.map((group) => (
                  <li key={group.date}>
                    <div className="mb-1 text-sm sm:text-base font-semibold text-gray-700">
                      {group.date}
                    </div>
                    <div className="space-y-2">
                      {group.items.map((appt) => (
                        <div
                          key={appt.id}
                          className="border border-gray-200 rounded-lg px-3 py-3 text-sm sm:text-base"
                        >
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="font-medium text-gray-800">{appt.name}</span>
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-primary text-white text-xs font-semibold">
                              {appt.appointmentTime}
                            </span>
                          </div>
                          <div className="text-gray-700">
                            <span className="font-medium">{appt.phone}</span>
                            <span className="text-gray-500"> · {appt.email}</span>
                          </div>
                          {appt.additionalInfo && (
                            <div className="text-gray-500 mt-1 line-clamp-2">
                              {appt.additionalInfo}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
