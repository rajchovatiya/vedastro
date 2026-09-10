import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

type BookingContextValue = {
  isOpen: boolean;
  service: string | null;
  open: (service?: string) => void;
  close: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState<string | null>(null);

  const open = useCallback((next?: string) => {
    setService(next ?? null);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, service, open, close }),
    [isOpen, service, open, close],
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking(): BookingContextValue {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within <BookingProvider>');
  return ctx;
}
