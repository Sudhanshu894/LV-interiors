'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useBooking } from '@/lib/context/BookingContext';

// Icons
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const navLinks = [
  { href: '/home', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/help', label: 'Help & Feedback' },
];

export default function TopNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { selectedServices, setShowBookingModal } = useBooking();
  
  const cartCount = selectedServices.length;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-2 hover-lift interactive-icon">
            <div className="w-40 h-40 rounded-xl flex items-center justify-center transition-transform hover:scale-110">
              <Image src="/LVLogo.png" alt="LV Interiors" width={100} height={100} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || 
                              (link.href === '/home' && pathname === '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link font-medium transition-colors ${
                    isActive ? 'text-caramel' : 'text-coffee hover:text-caramel'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            
            {/* Cart Button */}
            {cartCount > 0 && (
              <button
                onClick={() => setShowBookingModal(true)}
                className="relative p-2 text-coffee hover:text-caramel transition-colors"
              >
                <CartIcon />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-terracotta text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
            )}
            
            <Link href="/help" className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {cartCount > 0 && (
              <button
                onClick={() => setShowBookingModal(true)}
                className="relative p-2 text-coffee"
              >
                <CartIcon />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-terracotta text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
            )}
            <button
              className="p-2 text-coffee"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-sand animate-fade-in">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 font-medium transition-colors ${
                    isActive ? 'text-caramel' : 'text-coffee hover:text-caramel'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link 
              href="/help" 
              className="btn-primary inline-block mt-4" 
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

