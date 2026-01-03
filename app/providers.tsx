'use client';

import { ReactNode } from 'react';
import { BookingProvider } from '@/lib/context/BookingContext';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <BookingProvider>
      {children}
    </BookingProvider>
  );
}

