'use client';

import { ReactNode } from 'react';
import TopNavigation from './Navigation';
import BottomNavigation from '../mobile/BottomNavigation';
import BookingModal from '../mobile/BookingModal';
import { useBooking } from '@/lib/context/BookingContext';

interface ResponsiveLayoutProps {
  children: ReactNode;
}

export default function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  const { showBookingModal, setShowBookingModal } = useBooking();

  return (
    <div className="min-h-screen bg-cream">
      {/* Top Navigation - visible on desktop */}
      <div className="hidden md:block">
        <TopNavigation />
      </div>
      
      {/* Main Content */}
      <main className="pt-0 md:pt-20 pb-20 md:pb-0">
        {children}
      </main>
      
      {/* Bottom Navigation - visible on mobile only */}
      <div className="md:hidden">
        <BottomNavigation />
      </div>
      
      {/* Booking Modal */}
      {showBookingModal && (
        <BookingModal onClose={() => setShowBookingModal(false)} />
      )}
    </div>
  );
}

