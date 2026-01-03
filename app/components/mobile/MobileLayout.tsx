'use client';

import { ReactNode } from 'react';
import BottomNavigation from './BottomNavigation';
import BookingModal from './BookingModal';
import { useBooking } from '@/lib/context/BookingContext';

interface MobileLayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

export default function MobileLayout({ children, showNav = true }: MobileLayoutProps) {
  const { showBookingModal, setShowBookingModal } = useBooking();

  return (
    <div className="min-h-screen bg-cream pb-20">
      {children}
      
      {showNav && <BottomNavigation />}
      
      {/* Booking Modal */}
      {showBookingModal && (
        <BookingModal onClose={() => setShowBookingModal(false)} />
      )}
    </div>
  );
}

