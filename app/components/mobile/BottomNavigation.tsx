'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useBooking } from '@/lib/context/BookingContext';

// Icons
const HomeIcon = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const ServicesIcon = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

const AboutIcon = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

const HelpIcon = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

interface NavItem {
  href: string;
  label: string;
  icon: (props: { active: boolean }) => React.ReactNode;
}

const navItems: NavItem[] = [
  { href: '/home', label: 'Home', icon: HomeIcon },
  { href: '/services', label: 'Services', icon: ServicesIcon },
  { href: '/about', label: 'About', icon: AboutIcon },
  { href: '/help', label: 'Help', icon: HelpIcon },
];

export default function BottomNavigation() {
  const pathname = usePathname();
  const { selectedServices, setShowCartPreview, setShowBookingModal } = useBooking();
  
  const cartCount = selectedServices.length;

  const handleCartClick = () => {
    if (cartCount > 0) {
      setShowBookingModal(true);
    }
  };

  return (
    <>
      {/* Floating Cart Button (visible when items in cart) */}
      {cartCount > 0 && (
        <button
          onClick={handleCartClick}
          className="fixed bottom-24 right-4 z-50 w-14 h-14 bg-caramel text-white rounded-full shadow-xl flex items-center justify-center hover:bg-coffee transition-colors"
        >
          <CartIcon />
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-terracotta text-white text-xs font-bold rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        </button>
      )}

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-sand shadow-lg safe-area-bottom">
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || 
                            (item.href === '/home' && pathname === '/') ||
                            (item.href === '/services' && pathname.startsWith('/services'));
            const IconComponent = item.icon;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-colors relative ${
                  isActive ? 'text-caramel' : 'text-taupe hover:text-coffee'
                }`}
              >
                <div className="relative">
                  <IconComponent active={isActive} />
                  {/* Badge for Services when items in cart */}
                  {item.href === '/services' && cartCount > 0 && (
                    <span className="absolute -top-1 -right-2 w-4 h-4 bg-terracotta text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className={`text-xs mt-1 font-medium ${isActive ? 'text-caramel' : ''}`}>
                  {item.label}
                </span>
                {/* Active indicator line */}
                {isActive && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-caramel rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

