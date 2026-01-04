"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Icons as SVG components
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

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const PaintBrushIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"></path>
    <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"></path>
    <path d="M14.5 17.5 4.5 15"></path>
  </svg>
);

const WoodIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18"></path>
    <rect width="16" height="18" x="4" y="3" rx="2"></rect>
    <path d="M4 9h16"></path>
    <path d="M4 15h16"></path>
  </svg>
);

const HammerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"></path>
    <path d="M17.64 15 22 10.64"></path>
    <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"></path>
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
    <path d="M5 3v4"></path>
    <path d="M19 17v4"></path>
    <path d="M3 5h4"></path>
    <path d="M17 19h4"></path>
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const CheckboxIcon = ({ checked }: { checked: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={checked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {checked ? (
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ) : (
      <circle cx="12" cy="12" r="10" />
    )}
  </svg>
);

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const ImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
);

const FileTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const ElectricIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const PlumbingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
    <path d="M5 8V6a2 2 0 0 1 2-2h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2"></path>
    <circle cx="9" cy="15" r="1"></circle>
    <circle cx="15" cy="15" r="1"></circle>
    <path d="M9 15v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
  </svg>
);

const FlooringIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="3" y1="15" x2="21" y2="15"></line>
    <line x1="9" y1="3" x2="9" y2="21"></line>
    <line x1="15" y1="3" x2="15" y2="21"></line>
  </svg>
);

const DesignIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="9" y2="21"></line>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <path d="M9 9h6v6H9z"></path>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

// Hook for scroll-triggered animations
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, isVisible] as const;
}

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 hover-lift interactive-icon">
            <div className="w-50 h-50 rounded-xl flex items-center justify-center transition-transform hover:scale-110">
              {/* <span className="text-white font-bold text-lg font-[family-name:var(--font-display)]">A</span> */}
              <Image src="/LVLogo.png" alt="LV Interiors" width={120} height={120} />
            </div>
            <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-espresso">
              {/* <span className="text-caramel">Interiors</span> */}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-coffee hover:text-caramel transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-coffee"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-sand animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-coffee hover:text-caramel transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary inline-block mt-4" onClick={() => setIsOpen(false)}>
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-overlay opacity-30"></div>

      {/* Decorative Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-caramel/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md animate-fade-in-up hover-lift">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow"></span>
              <span className="text-sm font-medium text-coffee">Trusted by 500+ Happy Clients</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-display)] font-bold text-charcoal leading-tight animate-fade-in-up delay-100">
              Transform Your
              <span className="block text-gradient">Living Spaces</span>
            </h1>

            <p className="text-lg text-coffee/80 max-w-xl animate-fade-in-up delay-200">
              Premium painting, wood finishing, and renovation services that bring your vision to life.
              Serving homes and businesses with excellence and attention to detail.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a href="#services" className="btn-primary inline-flex items-center gap-2">
                Explore Services
                <ArrowRightIcon />
              </a>
              <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
                Contact Us
                <ArrowRightIcon />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-sand animate-fade-in-up delay-400">
              <div>
                <div className="stat-number">30+</div>
                <p className="text-sm text-coffee/70 mt-1">Years Experience</p>
              </div>
              <div>
                <div className="stat-number">500+</div>
                <p className="text-sm text-coffee/70 mt-1">Projects Done</p>
              </div>
              <div>
                <div className="stat-number">98%</div>
                <p className="text-sm text-coffee/70 mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:pl-12 animate-fade-in-up delay-300">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/hero-interior.png"
                    alt="Elegant Interior Design"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 floating-badge animate-float hover-lift cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-warm flex items-center justify-center interactive-icon">
                    <CheckIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Trusted & Reliable</p>
                    <p className="text-sm text-coffee/60">Premium Quality Guaranteed</p>
                  </div>
                </div>
              </div>

              {/* Another Floating Badge */}
              <div className="absolute -top-4 -right-4 floating-badge animate-float delay-200 hover-lift cursor-pointer">
                <div className="text-center">
                  <p className="text-md font-bold text-coffee/70">Since</p>
                  <p className="stat-number text-2xl">1995</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section
function About() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cream to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-center ${isVisible ? 'scroll-fade-in visible' : 'scroll-fade-in'}`}>
          {/* Image Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg h-48 hover-lift tilt-effect relative">
                  <Image
                    src="/painting-service.png"
                    alt="Premium Painting Services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg h-64 hover-lift tilt-effect relative">
                  <Image
                    src="/woodwork-service.png"
                    alt="Custom Wood Works"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg h-64 hover-lift tilt-effect relative">
                  <Image
                    src="/renovation-service.png"
                    alt="Professional Renovations"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg h-48 hover-lift tilt-effect relative">
                  <Image
                    src="/hero-interior.png"
                    alt="Beautiful Interiors"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 text-center">
              <p className="stat-number">30+</p>
              <p className="text-sm text-coffee/70 font-medium">Years of Excellence</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <div className="decorative-line mb-6"></div>
            <h2 className="section-title font-[family-name:var(--font-display)] text-charcoal">
              Who <span className="text-gradient">We Are</span>
            </h2>
            <p className="text-lg text-coffee/80 mb-6 leading-relaxed">
              At LV Interiors, we understand the challenges of creating exceptional spaces that blend elegance, quality, and functionality.
            </p>
            <p className="text-coffee/70 mb-8 leading-relaxed">
              As a premier interior services provider, we&apos;ve made it our mission to simplify your furnishing journey. We provide execution-focused interior services with plans to expand into complete design solutions. From initial consultation to final touches, every project is handled with care and precision.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {[
                "Expert craftsmen with 20+ years experience",
                "Premium quality materials & finishes",
                "On-time project delivery guarantee",
                "Comprehensive after-service support",
              ].map((point, index) => (
                <div key={index} className={`flex items-center gap-3 scroll-fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="w-6 h-6 rounded-full bg-caramel/20 flex items-center justify-center flex-shrink-0 interactive-icon">
                    <CheckIcon />
                  </div>
                  <span className="text-coffee">{point}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              Start Your Project
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Image Carousel Component
function ImageCarousel({ images, autoPlay = true, interval = 4000 }: { images: string[]; autoPlay?: boolean; interval?: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <div className="relative h-64 md:h-96 lg:h-[500px]">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-coffee transition-all hover:scale-110 z-10"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-coffee transition-all hover:scale-110 z-10"
          >
            <ChevronRightIcon />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-2'
                  }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Helper function to generate booking reference (moved outside component to avoid render issues)
const generateBookingReference = () => {
  return Date.now().toString().slice(-8);
};

// Services Catalogue Section
function Services() {
  const [ref, isVisible] = useScrollAnimation();
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<{ serviceId: number; subcategoryId: string }[]>([]);
  const [showRegistration, setShowRegistration] = useState(false);
  const [showSubcategoryDetail, setShowSubcategoryDetail] = useState<{ serviceId: number; subcategoryId: string } | null>(null);
  const [expandedNestedSubcategories, setExpandedNestedSubcategories] = useState<Set<string>>(new Set());
  const [showBooking, setShowBooking] = useState(false);
  const [bookingStep, setBookingStep] = useState<'form' | 'contract' | 'success'>('form');
  const [contractAccepted, setContractAccepted] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [bookingData, setBookingData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    budget: "",
    services: [] as string[],
  });
  const [bookingReference, setBookingReference] = useState<string>("");

  const services = [
    {
      id: 1,
      icon: <ElectricIcon />,
      title: "MEP Services",
      description: "Professional Mechanical, Electrical, and Plumbing services for your home and business.",
      bgGradient: "from-blue-100 to-cyan-50",
      imagePath: "/service-1.png",
      subcategories: [
        {
          id: "electric",
          title: "Electric",
          description: "Complete electrical solutions including wiring, installations, repairs, and maintenance services.",
          images: [
            "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
          ],
          gallery: [
            "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
          ],
          feedbacks: [
            { name: "Rajesh Kumar", rating: 5, comment: "Excellent electrical work! Professional and safe installation." },
          ],
        },
        {
          id: "plumbing",
          title: "Plumbing",
          description: "Expert plumbing services including installation, repairs, maintenance, and water supply solutions.",
          images: [
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
          ],
          gallery: [
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
          ],
          feedbacks: [
            { name: "Sunita Agarwal", rating: 5, comment: "Great plumbing service. Fixed all our water issues!" },
          ],
        },
      ],
    },
    {
      id: 2,
      icon: <WoodIcon />,
      title: "Interior & Furnishing",
      description: "Complete interior solutions including polishing, wood works, and fixed installations.",
      bgGradient: "from-amber-50 to-yellow-50",
      imagePath: "/service-2.png",
      subcategories: [
        {
          id: "polishing-pu-duco",
          title: "Polishing & PU & Duco",
          description: "Professional polishing services including PU coating and Duco finishing for furniture and surfaces.",
          images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
          ],
          gallery: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
          ],
          feedbacks: [
            { name: "Amit Patel", rating: 5, comment: "Excellent polishing work. Furniture looks brand new!" },
          ],
          nestedSubcategories: [
            {
              id: "polishing",
              title: "Polishing",
              description: "Professional polishing services for furniture and wooden surfaces.",
              images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Amit Patel", rating: 5, comment: "Excellent polishing work. Furniture looks brand new!" }],
            },
            {
              id: "duco",
              title: "Duco",
              description: "Premium Duco finishing services for a smooth and durable surface.",
              images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Priya Sharma", rating: 5, comment: "Beautiful Duco finish. Very satisfied!" }],
            },
            {
              id: "pu",
              title: "PU",
              description: "High-quality PU coating services for enhanced durability and protection.",
              images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Vikram Singh", rating: 5, comment: "Great PU coating. Very durable!" }],
            },
          ],
        },
        {
          id: "wood-works",
          title: "Wood Works",
          description: "Custom wood work solutions for all your furniture and carpentry needs.",
          images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
          ],
          gallery: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
          ],
          feedbacks: [],
          nestedSubcategories: [
            {
              id: "modular-furniture",
              title: "Modular Furniture",
              description: "Custom modular furniture solutions tailored to your space and needs.",
              images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Priya Sharma", rating: 5, comment: "Beautiful modular furniture. Perfect fit!" }],
            },
            {
              id: "custom-carpentry",
              title: "Custom Carpentry",
              description: "Expert carpentry services for custom furniture and built-in solutions.",
              images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Vikram Singh", rating: 5, comment: "Amazing custom carpentry work!" }],
            },
            {
              id: "wardrobes",
              title: "Wardrobes",
              description: "Custom wardrobe solutions designed to maximize your storage space.",
              images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Anita Mehta", rating: 5, comment: "Perfect wardrobes. Great storage solutions!" }],
            },
            {
              id: "kitchen-wood",
              title: "Kitchen",
              description: "Custom kitchen cabinets and wood work solutions.",
              images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Rahul Mehta", rating: 5, comment: "Beautiful kitchen cabinets!" }],
            },
          ],
        },
        {
          id: "fixed-installation",
          title: "Fixed Installation",
          description: "Professional fixed installation services for storage units, wall panels, and electrical units.",
          images: [
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
          ],
          gallery: [
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
          ],
          feedbacks: [],
          nestedSubcategories: [
            {
              id: "storage-units",
              title: "Storage Units",
              description: "Custom storage unit installations for optimal space utilization.",
              images: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Sneha Patel", rating: 5, comment: "Great storage solutions!" }],
            },
            {
              id: "wall-panels",
              title: "Wall Panels",
              description: "Modern wall panel installations for enhanced aesthetics.",
              images: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Amit Singh", rating: 5, comment: "Beautiful wall panels!" }],
            },
            {
              id: "electrical-units",
              title: "Electrical Units",
              description: "Fixed electrical unit installations and integrations.",
              images: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Rajesh Kumar", rating: 5, comment: "Professional electrical installations!" }],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      icon: <PaintBrushIcon />,
      title: "Surfaces Finishes",
      description: "Premium surface finishing solutions including painting and flooring services.",
      bgGradient: "from-amber-100 to-orange-50",
      imagePath: "/service-3.png",
      subcategories: [
        {
          id: "painting-services",
          title: "Painting Services",
          description: "Comprehensive painting solutions for interior and exterior surfaces.",
          images: [
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
          ],
          gallery: [
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
          ],
          feedbacks: [],
          nestedSubcategories: [
            {
              id: "interior-painting",
              title: "Interior Painting",
              description: "Professional interior painting services using premium quality paints.",
              images: [
                "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
              ],
              gallery: [
                "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
              ],
              feedbacks: [
                { name: "Rahul Mehta", rating: 5, comment: "Excellent work! The team was professional and the finish is flawless." },
                { name: "Sneha Patel", rating: 5, comment: "Love the color choices. The painting quality exceeded our expectations." },
              ],
            },
            {
              id: "exterior-painting",
              title: "Exterior Painting",
              description: "Weather-resistant exterior painting that protects and beautifies your home.",
              images: [
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
              ],
              gallery: [
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
              ],
              feedbacks: [
                { name: "Amit Singh", rating: 5, comment: "Great exterior paint job. Withstood monsoon perfectly!" },
              ],
            },
            {
              id: "texture-paint",
              title: "Texture Paint",
              description: "Create stunning feature walls with textured paints.",
              images: [
                "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
              ],
              gallery: [
                "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
              ],
              feedbacks: [
                { name: "Vikram Singh", rating: 5, comment: "The texture wall in our living room is absolutely stunning!" },
              ],
            },
            {
              id: "waterproof-coatings",
              title: "Water Proof Coatings",
              description: "Protect your walls from moisture and water damage.",
              images: [
                "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
              ],
              gallery: [
                "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
              ],
              feedbacks: [
                { name: "Priya Sharma", rating: 5, comment: "No more leakage issues. Excellent waterproofing work!" },
              ],
            },
          ],
        },
        {
          id: "flooring",
          title: "Flooring",
          description: "Premium flooring solutions for all your interior and exterior needs.",
          images: [
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
          ],
          gallery: [
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
          ],
          feedbacks: [],
          nestedSubcategories: [
            {
              id: "tile-flooring",
              title: "Tile Flooring",
              description: "Premium tile flooring solutions for all spaces.",
              images: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Vikram Singh", rating: 5, comment: "Perfect tiling work. Very satisfied!" }],
            },
            {
              id: "wooden-flooring",
              title: "Wooden Flooring",
              description: "Beautiful wooden flooring solutions.",
              images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Anita Mehta", rating: 5, comment: "Beautiful wooden floors!" }],
            },
            {
              id: "marble-granite",
              title: "Marble & Granite",
              description: "Premium marble and granite flooring solutions.",
              images: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Sunita Agarwal", rating: 5, comment: "Stunning marble work!" }],
            },
            {
              id: "vinyl-laminate",
              title: "Vinyl & Laminate",
              description: "Modern vinyl and laminate flooring options.",
              images: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Rajesh Kumar", rating: 5, comment: "Great vinyl flooring!" }],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      icon: <HammerIcon />,
      title: "Upgrades & Renovations",
      description: "Complete renovation and upgrade solutions for homes and commercial spaces.",
      bgGradient: "from-stone-100 to-neutral-50",
      imagePath: "/service-4.png",
      subcategories: [
        {
          id: "full-home-renovation",
          title: "Full Home Renovation",
          description: "Complete home renovation services from concept to completion.",
          images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
          ],
          gallery: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
          ],
          feedbacks: [],
          nestedSubcategories: [
            {
              id: "partial-remodeling",
              title: "Partial Remodeling",
              description: "Targeted remodeling solutions for specific areas.",
              images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Priya Sharma", rating: 5, comment: "Excellent partial renovation!" }],
            },
            {
              id: "commercial-space",
              title: "Commercial Space",
              description: "Complete commercial space renovation services.",
              images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Rajesh Kumar", rating: 5, comment: "Great commercial renovation!" }],
            },
            {
              id: "bars-shops-restaurant",
              title: "Bars & Shops & Restaurant",
              description: "Specialized renovation services for bars, shops, and restaurants.",
              images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Sunita Agarwal", rating: 5, comment: "Amazing restaurant renovation!" }],
            },
            {
              id: "showrooms",
              title: "Showrooms",
              description: "Professional showroom renovation and design services.",
              images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Vikram Singh", rating: 5, comment: "Beautiful showroom design!" }],
            },
            {
              id: "residential-area",
              title: "Residential Area",
              description: "Complete residential area renovation services.",
              images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Anita Mehta", rating: 5, comment: "Excellent residential renovation!" }],
            },
            {
              id: "bedroom",
              title: "Bedroom",
              description: "Specialized bedroom renovation and design services.",
              images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Rahul Mehta", rating: 5, comment: "Beautiful bedroom renovation!" }],
            },
            {
              id: "bathroom",
              title: "Bathroom",
              description: "Complete bathroom renovation and upgrade services.",
              images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Sneha Patel", rating: 5, comment: "Stunning bathroom renovation!" }],
            },
            {
              id: "kitchen-renovation",
              title: "Kitchen",
              description: "Complete kitchen renovation and design services.",
              images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Amit Singh", rating: 5, comment: "Amazing kitchen renovation!" }],
            },
            {
              id: "dining-room",
              title: "Dining Room",
              description: "Dining room renovation and design services.",
              images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Priya Sharma", rating: 5, comment: "Beautiful dining room!" }],
            },
            {
              id: "living-room",
              title: "Living Room",
              description: "Living room renovation and design services.",
              images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
              gallery: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
              feedbacks: [{ name: "Rajesh Kumar", rating: 5, comment: "Stunning living room renovation!" }],
            },
          ],
        },
        {
          id: "flat",
          title: "Flat",
          description: "Complete flat renovation and upgrade services.",
          images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
          ],
          gallery: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
          ],
          feedbacks: [
            { name: "Vikram Singh", rating: 5, comment: "Excellent flat renovation work!" },
          ],
        },
        {
          id: "terrace",
          title: "Terrace",
          description: "Terrace renovation and upgrade services.",
          images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
          ],
          gallery: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
          ],
          feedbacks: [
            { name: "Anita Mehta", rating: 5, comment: "Beautiful terrace renovation!" },
          ],
        },
        {
          id: "corporate-areas",
          title: "Corporate Areas",
          description: "Professional corporate space renovation and design services.",
          images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
          ],
          gallery: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
          ],
          feedbacks: [
            { name: "Sunita Agarwal", rating: 5, comment: "Excellent corporate renovation!" },
          ],
        },
      ],
    },
    {
      id: 5,
      icon: <DesignIcon />,
      title: "Interior Planning & Design",
      description: "Professional interior planning, furniture design, and 2D/3D visualization services to bring your vision to life.",
      bgGradient: "from-purple-100 to-pink-50",
      imagePath: "https://i.pinimg.com/1200x/2e/ec/16/2eec16de44834f8e460cccbba831ec2f.jpg",
      subcategories: [
        {
          id: "interior-planning",
          title: "Interior Planning",
          description: "Comprehensive interior space planning and layout design services for optimal functionality and aesthetics.",
          images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
          ],
          gallery: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
          ],
          feedbacks: [
            { name: "Rahul Mehta", rating: 5, comment: "Excellent space planning! Maximized our space beautifully." },
          ],
        },
        {
          id: "furniture-design",
          title: "Furniture Design",
          description: "Custom furniture design solutions tailored to your space, style, and functional requirements.",
          images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
          ],
          gallery: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
          ],
          feedbacks: [
            { name: "Priya Sharma", rating: 5, comment: "Beautiful custom furniture designs! Perfect fit for our home." },
          ],
        },
        {
          id: "2d-plans",
          title: "2D Plans",
          description: "Detailed 2D floor plans, layouts, and technical drawings for your interior projects.",
          images: [
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
          ],
          gallery: [
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
          ],
          feedbacks: [
            { name: "Amit Singh", rating: 5, comment: "Very detailed and professional 2D plans. Made execution easy!" },
          ],
        },
        {
          id: "3d-visualization",
          title: "3D Visualization",
          description: "Realistic 3D renders and visualizations to preview your space before execution.",
          images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
          ],
          gallery: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
          ],
          feedbacks: [
            { name: "Vikram Singh", rating: 5, comment: "Amazing 3D visualization! Could see exactly how it would look." },
          ],
        },
        {
          id: "space-planning",
          title: "Space Planning",
          description: "Expert space planning and optimization services to maximize functionality and flow.",
          images: [
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
          ],
          gallery: [
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
          ],
          feedbacks: [
            { name: "Anita Mehta", rating: 5, comment: "Perfect space planning! Every inch utilized beautifully." },
          ],
        },
      ],
    },
  ];

  const toggleService = (serviceId: number) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const toggleSubcategory = (serviceId: number, subcategoryId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const key = `${serviceId}-${subcategoryId}`;
    setSelectedSubcategories(prev => {
      const exists = prev.find(s => s.serviceId === serviceId && s.subcategoryId === subcategoryId);
      if (exists) {
        return prev.filter(s => !(s.serviceId === serviceId && s.subcategoryId === subcategoryId));
      } else {
        return [...prev, { serviceId, subcategoryId }];
      }
    });
  };

  const isSubcategorySelected = (serviceId: number, subcategoryId: string) => {
    return selectedSubcategories.some(s => s.serviceId === serviceId && s.subcategoryId === subcategoryId);
  };

  // Helper function to find subcategory (including nested subcategories)
  const findSubcategory = (serviceId: number, subcategoryId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (!service) return null;

    // First check direct subcategories
    const directSub = service.subcategories?.find(sub => sub.id === subcategoryId);
    if (directSub) return directSub;

    // Then check nested subcategories
    for (const sub of service.subcategories || []) {
      if ('nestedSubcategories' in sub && sub.nestedSubcategories && Array.isArray(sub.nestedSubcategories)) {
        const nested = (sub.nestedSubcategories as any[]).find(n => n.id === subcategoryId);
        if (nested) return nested;
      }
    }

    return null;
  };

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    const selectedServicesList = services
      .filter(s => selectedServices.includes(s.id))
      .map(s => s.title)
      .join(", ");

    try {
      // Record in DB
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: registrationData.name,
          email: registrationData.email,
          phone: registrationData.phone,
          service: selectedServicesList,
          message: registrationData.message,
          status: 'requested'
        })
      });

      if (!res.ok) throw new Error('Failed to save registration');

      // Also open WhatsApp as before (optional, preserving existing behavior)
      const message = `Hi, I'm ${registrationData.name}. I'm interested in: ${selectedServicesList}. ${registrationData.message}. Please contact me at ${registrationData.phone} or ${registrationData.email}.`;
      window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, '_blank');

      // Reset form
      setSelectedServices([]);
      setSelectedSubcategories([]);
      setRegistrationData({ name: "", phone: "", email: "", message: "" });
      setShowRegistration(false);
    } catch (error) {
      console.error(error);
      alert('Failed to register. Please try again.');
    }
  };

  const handleBooking = async (e?: React.FormEvent | React.MouseEvent) => {
    if (e && 'preventDefault' in e) {
    e.preventDefault();
    }
    if (bookingStep === 'form') {
      setBookingStep('contract');
    } else if (bookingStep === 'contract' && contractAccepted) {
      // Process booking
      const selectedItems = [
        ...services.filter(s => selectedServices.includes(s.id)).map(s => s.title),
        ...selectedSubcategories.map(sc => {
          const service = services.find(s => s.id === sc.serviceId);
          const subcat = findSubcategory(sc.serviceId, sc.subcategoryId);

          // Only return if both service and subcat are found
          if (service && subcat) {
            return `${service.title} - ${subcat.title}`;
          }
          // If service found but subcat not found, return just service title
          if (service) {
            return service.title;
          }
          // If nothing found, return empty string (will be filtered out)
          return '';
        }).filter(item => item !== '') // Filter out empty strings
      ];

      const fullBookingData = { ...bookingData, services: selectedItems };

      try {
        const res = await fetch('/api/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: fullBookingData.name,
            email: fullBookingData.email,
            phone: fullBookingData.phone,
            service: selectedItems.join(', '),
            message: `Address: ${fullBookingData.address || 'N/A'}. Budget: ${fullBookingData.budget || 'N/A'}.`,
            status: 'requested',
          }),
        });

        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.error || 'Failed to submit booking');
        }

        const data = await res.json();

        setBookingData(prev => ({ ...prev, services: selectedItems }));
        setBookingReference(generateBookingReference());
        console.log('Booking submitted:', data);
        setBookingStep('success');
      } catch (error: any) {
        console.error(error);
        alert(error.message || 'Something went wrong. Please try again.');
      }
    }
  };

  const getSelectedSubcategory = (): any => {
    if (!showSubcategoryDetail) return null;
    const service = services.find(s => s.id === showSubcategoryDetail.serviceId);
    if (!service) return null;

    // First check direct subcategories
    const directSub = service.subcategories?.find(sub => sub.id === showSubcategoryDetail.subcategoryId);
    if (directSub) return directSub;

    // Then check nested subcategories
    for (const subcat of service.subcategories || []) {
      if ('nestedSubcategories' in subcat && subcat.nestedSubcategories && Array.isArray(subcat.nestedSubcategories)) {
        const nested = (subcat.nestedSubcategories as Array<{ id: string; title: string; description: string; images: string[]; feedbacks: Array<{ name: string; rating: number; comment: string }> }>).find(n => n.id === showSubcategoryDetail.subcategoryId);
        if (nested) return nested;
      }
    }

    return null;
  };

  return (
    <section id="services" className="section-padding bg-cream relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-overlay opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="decorative-line mx-auto mb-6"></div>
          <h2 className="section-title font-[family-name:var(--font-display)] text-charcoal">
            Our <span className="text-gradient">Service Catalogue</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Comprehensive interior solutions tailored to your needs. We serve homes and businesses across the city with execution-focused services.
          </p>
        </div>

        {/* Services Catalogue Grid */}
        <div ref={ref} className="space-y-12">
          {services.map((service, index) => {
            const isSelected = selectedServices.includes(service.id);

            return (
              <div
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={`relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${isSelected ? 'ring-4 ring-caramel ring-offset-2' : ''
                  } scroll-fade-in ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {/* Selection Checkbox */}
                <div className="absolute top-4 right-4 z-20">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isSelected
                    ? 'bg-caramel text-white shadow-lg scale-110'
                    : 'bg-white/90 text-coffee shadow-md hover:scale-110'
                    }`}>
                    <CheckboxIcon checked={isSelected} />
                  </div>
                </div>

                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative h-72 lg:h-auto min-h-[320px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    {/* Image Container with Actual Image */}
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={service.imagePath}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient overlay to ensure text readability and match aesthetic */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-30 mix-blend-multiply`}></div>
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    {/* Placeholder with icon - simplified and moved to a small corner bubble or kept as is if desired */}
                    <div className="absolute top-6 left-6 z-10">
                      <div className={`w-12 h-12 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center text-caramel shadow-lg interactive-icon hover-lift ${isSelected ? 'scale-110' : ''
                        }`}>
                        {service.icon}
                      </div>
                    </div>

                    {/* Decorative bottom gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                    {/* Selected overlay */}
                    {isSelected && (
                      <div className="absolute inset-0 bg-caramel/20 flex items-center justify-center">
                        <div className="bg-white rounded-full px-6 py-3 shadow-xl">
                          <p className="text-caramel font-semibold text-sm">Selected</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Title & Description */}
                    <h3 className="text-2xl lg:text-3xl font-[family-name:var(--font-display)] font-semibold text-charcoal mb-4">
                      {service.title}
                    </h3>
                    <p className="text-coffee/70 mb-6 text-lg">
                      {service.description}
                    </p>

                    {/* Subcategories Grid */}
                    {service.subcategories && service.subcategories.length > 0 && (
                      <div className="mb-8">
                        <p className="text-sm font-medium text-coffee/70 mb-4">Select Subcategories:</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          {service.subcategories.map((subcat) => {
                            const isSubSelected = isSubcategorySelected(service.id, subcat.id);
                            const hasNested = subcat.nestedSubcategories && subcat.nestedSubcategories.length > 0;
                            return (
                              <div key={subcat.id} className="space-y-3">
                                <div
                                  onClick={(e) => toggleSubcategory(service.id, subcat.id, e)}
                                  className={`relative rounded-xl overflow-hidden cursor-pointer transition-all hover:scale-105 ${isSubSelected ? 'ring-2 ring-caramel' : 'ring-2 ring-transparent'
                                    }`}
                                >
                                  {/* Subcategory Image */}
                                  <div className="relative h-32">
                                    <div
                                      className="w-full h-full bg-cover bg-center"
                                      style={{ backgroundImage: `url(${subcat.images[0]})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                    {/* Selection Checkbox */}
                                    <div className="absolute top-2 right-2">
                                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isSubSelected
                                        ? 'bg-caramel text-white shadow-lg'
                                        : 'bg-white/90 text-coffee shadow-md'
                                        }`}>
                                        <CheckboxIcon checked={isSubSelected} />
                                      </div>
                                    </div>

                                    {/* Title */}
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                      <h4 className="text-white font-semibold text-sm">{subcat.title}</h4>
                                    </div>
                                  </div>

                                  {/* Explore Button */}
                                  <div className="p-3 bg-white">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setShowSubcategoryDetail({ serviceId: service.id, subcategoryId: subcat.id });
                                      }}
                                      className="w-full text-xs text-caramel hover:text-coffee font-medium text-center"
                                    >
                                      Explore Details →
                                    </button>
                                  </div>
                                </div>

                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Selection Hint */}
                    <div className="text-sm text-coffee/60 italic">
                      {isSelected ? "✓ Service selected" : "Click to select this service category"}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Services Summary & Registration */}
        {(selectedServices.length > 0 || selectedSubcategories.length > 0) && (
          <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl scroll-fade-in">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
              <div>
                <h3 className="text-2xl font-[family-name:var(--font-display)] font-semibold text-charcoal mb-2">
                  Selected Items ({selectedServices.length + selectedSubcategories.length})
                </h3>
                <p className="text-coffee/70">You&apos;ve selected the following services and subcategories:</p>
              </div>
              <button
                onClick={() => {
                  setSelectedServices([]);
                  setSelectedSubcategories([]);
                }}
                className="text-sm text-coffee/60 hover:text-caramel transition-colors underline"
              >
                Clear All
              </button>
            </div>

            {/* Selected Services & Subcategories List */}
            <div className="space-y-4 mb-8">
              {/* Services */}
              {selectedServices.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-coffee/70 mb-2">Service Categories:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {services
                      .filter(s => selectedServices.includes(s.id))
                      .map((service) => (
                        <div
                          key={service.id}
                          className="flex items-center justify-between p-4 bg-cream rounded-xl hover-lift"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-caramel/10 flex items-center justify-center text-caramel">
                              {service.icon}
                            </div>
                            <span className="font-medium text-charcoal">{service.title}</span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleService(service.id);
                            }}
                            className="text-caramel hover:text-coffee transition-colors"
                          >
                            <CloseIcon />
                          </button>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Subcategories */}
              {selectedSubcategories.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-coffee/70 mb-2">Subcategories:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedSubcategories.map((sc) => {
                      const service = services.find(s => s.id === sc.serviceId);
                      const subcat = findSubcategory(sc.serviceId, sc.subcategoryId);
                      if (!service || !subcat) return null;
                      return (
                        <div
                          key={`${sc.serviceId}-${sc.subcategoryId}`}
                          className="flex items-center justify-between p-4 bg-cream rounded-xl hover-lift"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                              <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${subcat.images?.[0] || ''})` }}
                              />
                            </div>
                            <div>
                              <p className="font-medium text-charcoal text-sm">{subcat.title}</p>
                              <p className="text-xs text-coffee/60">{service.title}</p>
                            </div>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleSubcategory(sc.serviceId, sc.subcategoryId, e);
                            }}
                            className="text-caramel hover:text-coffee transition-colors"
                          >
                            <CloseIcon />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowRegistration(true)}
                className="btn-secondary flex-1"
              >
                Request Consultation
                <ArrowRightIcon />
              </button>
              <button
                onClick={() => {
                  setBookingData({
                    ...bookingData,
                    services: [
                      ...services.filter(s => selectedServices.includes(s.id)).map(s => s.title),
                      ...selectedSubcategories.map(sc => {
                        const service = services.find(s => s.id === sc.serviceId);
                        const subcat = findSubcategory(sc.serviceId, sc.subcategoryId);
                        if (service && subcat) {
                          return `${service.title} - ${subcat.title}`;
                        }
                        if (service) {
                          return service.title;
                        }
                        return '';
                      }).filter(item => item !== '')
                    ]
                  });
                  setShowBooking(true);
                  setBookingStep('form');
                }}
                className="btn-primary flex-1"
              >
                Book Selected Services
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center bg-white rounded-2xl px-10 py-8 shadow-lg">
            {(selectedServices.length > 0 || selectedSubcategories.length > 0) ? (
              <>
                <p className="text-lg text-coffee/70 mb-6">
                  Ready to proceed? Book your selected services or get a consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                  <button
                    onClick={() => {
                      setBookingData({
                        ...bookingData,
                        services: [
                          ...services.filter(s => selectedServices.includes(s.id)).map(s => s.title),
                          ...selectedSubcategories.map(sc => {
                            const service = services.find(s => s.id === sc.serviceId);
                            const subcat = findSubcategory(sc.serviceId, sc.subcategoryId);
                            if (service && subcat) return `${service.title} - ${subcat.title}`;
                            if (service) return service.title;
                            return '';
                          }).filter(item => item !== '')
                        ]
                      });
                      setShowBooking(true);
                      setBookingStep('form');
                    }}
                    className="btn-primary flex-1"
                  >
                    Book Services
                    <ArrowRightIcon />
                  </button>
                  <button
                    onClick={() => {
                      setBookingData({
                        ...bookingData,
                        services: [
                          ...services.filter(s => selectedServices.includes(s.id)).map(s => s.title),
                          ...selectedSubcategories.map(sc => {
                            const service = services.find(s => s.id === sc.serviceId);
                            const subcat = findSubcategory(sc.serviceId, sc.subcategoryId);
                            if (service && subcat) return `${service.title} - ${subcat.title}`;
                            if (service) return service.title;
                            return '';
                          }).filter(item => item !== '')
                        ]
                      });
                      setShowBooking(true);
                      setBookingStep('contract');
                    }}
                    className="btn-secondary flex-1"
                  >
                    Sign Contract
                    <FileTextIcon />
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-lg text-coffee/70 mb-4">
                  Select services and subcategories from above or get a free consultation
                </p>
                <a href="#contact" className="btn-primary">
                  Get a Free Consultation
                  <ArrowRightIcon />
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      {showRegistration && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
            <div className="sticky top-0 bg-white border-b border-sand p-6 flex items-center justify-between">
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-semibold text-charcoal">
                Register for Selected Services
              </h3>
              <button
                onClick={() => setShowRegistration(false)}
                className="w-10 h-10 rounded-full bg-cream hover:bg-sand transition-colors flex items-center justify-center text-coffee"
              >
                <CloseIcon />
              </button>
            </div>

            <form onSubmit={handleRegistration} className="p-6 space-y-5">
              {/* Selected Services Summary */}
              <div className="bg-cream rounded-xl p-4 mb-6">
                <p className="text-sm font-medium text-coffee mb-2">Selected Items:</p>
                <ul className="space-y-1">
                  {services
                    .filter(s => selectedServices.includes(s.id))
                    .map((service) => (
                      <li key={service.id} className="text-sm text-coffee flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-caramel"></span>
                        {service.title}
                      </li>
                    ))}
                  {selectedSubcategories.map((sc) => {
                    const service = services.find(s => s.id === sc.serviceId);
                    const subcat = service?.subcategories?.find(sub => sub.id === sc.subcategoryId);
                    if (!subcat) return null;
                    return (
                      <li key={`${sc.serviceId}-${sc.subcategoryId}`} className="text-sm text-coffee flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-caramel"></span>
                        {service?.title} - {subcat.title}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={registrationData.name}
                  onChange={(e) => setRegistrationData({ ...registrationData, name: e.target.value })}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={registrationData.phone}
                  onChange={(e) => setRegistrationData({ ...registrationData, phone: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={registrationData.email}
                  onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })}
                />
              </div>

              <div>
                <textarea
                  placeholder="Tell us about your project requirements..."
                  rows={4}
                  value={registrationData.message}
                  onChange={(e) => setRegistrationData({ ...registrationData, message: e.target.value })}
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button type="submit" className="btn-primary flex-1">
                  Submit Registration
                </button>
                <button
                  type="button"
                  onClick={() => setShowRegistration(false)}
                  className="btn-secondary flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Subcategory Detail Modal */}
      {showSubcategoryDetail && (() => {
        const subcat = getSelectedSubcategory();
        if (!subcat) return null as React.ReactNode;
        const service = services.find(s => s.id === showSubcategoryDetail!.serviceId);
        return (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center p-4 animate-fade-in overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-6xl w-full my-8 shadow-2xl animate-scale-in">
              <div className="sticky top-0 bg-white border-b border-sand p-6 flex items-center justify-between z-10">
                <div>
                  <h3 className="text-2xl font-[family-name:var(--font-display)] font-semibold text-charcoal">
                    {subcat.title}
                  </h3>
                  <p className="text-sm text-coffee/60 mt-1">{service?.title}</p>
                </div>
                <button
                  onClick={() => setShowSubcategoryDetail(null)}
                  className="w-10 h-10 rounded-full bg-cream hover:bg-sand transition-colors flex items-center justify-center text-coffee"
                >
                  <CloseIcon />
                </button>
              </div>

              <div className="p-6 space-y-8">
                {/* Image Carousel */}
                <div>
                  <ImageCarousel images={subcat.images} autoPlay={subcat.images.length > 1} />
                </div>


                <div>
                  <h4 className="text-xl font-semibold text-charcoal mb-3">About This Service</h4>
                  <p className="text-coffee/70 leading-relaxed">{subcat?.description}</p>
                </div>


                {/* Work Gallery */}
                {'gallery' in subcat && subcat.gallery && Array.isArray(subcat.gallery) && subcat.gallery.length > 0 && (
                  <div>
                    <h4 className="text-xl font-semibold text-charcoal mb-4">Work Gallery</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {(subcat.gallery as string[]).map((img: string, idx: number) => (
                        <div
                          key={idx}
                          className="relative h-48 rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                        >
                          <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${img})` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Nested Subcategories */}
                {'nestedSubcategories' in subcat && subcat.nestedSubcategories && Array.isArray(subcat.nestedSubcategories) && subcat.nestedSubcategories.length > 0 && (
                  <div>
                    <h4 className="text-xl font-semibold text-charcoal mb-4">Nested Options</h4>
                    <div className="space-y-3">
                      {(subcat.nestedSubcategories as Array<{ id: string; title: string; description: string; images: string[]; feedbacks: Array<{ name: string; rating: number; comment: string }> }>).map((nested) => {
                        const isNestedExpanded = expandedNestedSubcategories.has(nested.id);
                        const isNestedSelected = isSubcategorySelected(service!.id, nested.id);
                        return (
                          <div key={nested.id} className="bg-cream rounded-xl overflow-hidden border border-sand/30">
                            <div
                              onClick={() => {
                                setExpandedNestedSubcategories(prev => {
                                  const newSet = new Set(prev);
                                  if (newSet.has(nested.id)) {
                                    newSet.delete(nested.id);
                                  } else {
                                    newSet.add(nested.id);
                                  }
                                  return newSet;
                                });
                              }}
                              className="p-4 cursor-pointer hover:bg-sand/50 transition-colors flex items-center justify-between"
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleSubcategory(service!.id, nested.id, e);
                                  }}
                                  className={`w-6 h-6 rounded flex items-center justify-center transition-all ${isNestedSelected
                                    ? 'bg-caramel text-white'
                                    : 'bg-white border-2 border-sand'
                                    }`}
                                >
                                  {isNestedSelected && <CheckIcon />}
                                </div>
                                <span className="font-medium text-charcoal">{nested.title}</span>
                              </div>
                              <div className="text-coffee/60">
                                {isNestedExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                              </div>
                            </div>

                            {isNestedExpanded && (
                              <div className="px-4 pb-4 space-y-4 animate-fade-in">
                                <p className="text-sm text-coffee/70">{nested.description}</p>

                                {nested.images && nested.images.length > 0 && (
                                  <div className="grid grid-cols-2 gap-3">
                                    {nested.images.map((img: string, idx: number) => (
                                      <div
                                        key={idx}
                                        className="relative h-32 rounded-lg overflow-hidden"
                                      >
                                        <div
                                          className="w-full h-full bg-cover bg-center"
                                          style={{ backgroundImage: `url(${img})` }}
                                        />
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {nested.feedbacks && nested.feedbacks.length > 0 && (
                                  <div className="space-y-2">
                                    {nested.feedbacks.map((feedback, idx: number) => (
                                      <div key={idx} className="bg-white rounded-lg p-3">
                                        <div className="flex items-center gap-2 mb-1">
                                          <div className="flex text-gold">
                                            {[...Array(feedback.rating)].map((_, i) => (
                                              <StarIcon key={i} />
                                            ))}
                                          </div>
                                          <span className="font-semibold text-charcoal text-sm">{feedback.name}</span>
                                        </div>
                                        <p className="text-coffee/70 text-xs">{feedback.comment}</p>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleSubcategory(service!.id, nested.id, e);
                                  }}
                                  className={`w-full text-sm py-2 rounded-lg font-medium transition-all ${isNestedSelected
                                    ? 'bg-white text-caramel border-2 border-caramel'
                                    : 'bg-caramel text-white hover:bg-caramel/90'
                                    }`}
                                >
                                  {isNestedSelected ? 'Deselect' : 'Select This Option'}
                                </button>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Feedbacks - Removed as per request */}


                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-sand">
                  <button
                    onClick={() => {
                      toggleSubcategory(showSubcategoryDetail.serviceId, showSubcategoryDetail.subcategoryId);
                      setShowSubcategoryDetail(null);
                    }}
                    className={`flex-1 ${isSubcategorySelected(showSubcategoryDetail.serviceId, showSubcategoryDetail.subcategoryId)
                      ? 'btn-secondary' : 'btn-primary'
                      }`}
                  >
                    {isSubcategorySelected(showSubcategoryDetail.serviceId, showSubcategoryDetail.subcategoryId)
                      ? 'Deselect' : 'Select This Service'}
                  </button>
                  <button
                    onClick={() => {
                      setShowSubcategoryDetail(null);
                      setShowBooking(true);
                      setBookingStep('form');
                      setBookingData({
                        ...bookingData,
                        services: [`${service?.title} - ${subcat.title}`]
                      });
                    }}
                    className="btn-primary flex-1"
                  >
                    Book This Service
                    <ArrowRightIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Booking Flow Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center p-4 animate-fade-in overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full my-8 shadow-2xl animate-scale-in">
            {bookingStep === 'form' && (
              <>
                <div className="sticky top-0 bg-white border-b border-sand p-6 flex items-center justify-between z-10">
                  <h3 className="text-2xl font-[family-name:var(--font-display)] font-semibold text-charcoal">
                    Book Services
                  </h3>
                  <button
                    onClick={() => {
                      setShowBooking(false);
                      setBookingStep('form');
                      setContractAccepted(false);
                    }}
                    className="w-10 h-10 rounded-full bg-cream hover:bg-sand transition-colors flex items-center justify-center text-coffee"
                  >
                    <CloseIcon />
                  </button>
                </div>

                <form onSubmit={handleBooking} className="p-6 space-y-5">
                  <div className="bg-cream rounded-xl p-4 mb-6">
                    <p className="text-sm font-medium text-coffee mb-2">Selected Services:</p>
                    <ul className="space-y-1">
                      {bookingData.services.map((service, idx) => (
                        <li key={idx} className="text-sm text-coffee flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-caramel"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={bookingData.email}
                      onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder="Complete Address *"
                      rows={3}
                      required
                      value={bookingData.address}
                      onChange={(e) => setBookingData({ ...bookingData, address: e.target.value })}
                    ></textarea>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Estimated Budget (Optional)"
                      value={bookingData.budget}
                      onChange={(e) => setBookingData({ ...bookingData, budget: e.target.value })}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button type="submit" className="btn-primary flex-1">
                      Continue to Contract
                      <ArrowRightIcon />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowBooking(false);
                        setBookingStep('form');
                        setContractAccepted(false);
                      }}
                      className="btn-secondary flex-1"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </>
            )}

            {bookingStep === 'contract' && (
              <>
                <div className="sticky top-0 bg-white border-b border-sand p-6 flex items-center justify-between z-10">
                  <h3 className="text-2xl font-[family-name:var(--font-display)] font-semibold text-charcoal">
                    Service Contract
                  </h3>
                  <button
                    onClick={() => {
                      setShowBooking(false);
                      setBookingStep('form');
                      setContractAccepted(false);
                    }}
                    className="w-10 h-10 rounded-full bg-cream hover:bg-sand transition-colors flex items-center justify-center text-coffee"
                  >
                    <CloseIcon />
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  <div className="bg-cream rounded-xl p-6 max-h-96 overflow-y-auto">
                    <h4 className="font-semibold text-charcoal mb-4">Terms & Conditions</h4>
                    <div className="space-y-3 text-sm text-coffee/70 leading-relaxed">
                      <p><strong>1. Service Agreement:</strong> This contract outlines the services to be provided by LV Interiors.</p>
                      <p><strong>2. Payment Terms:</strong> 30% advance payment required upon booking confirmation. Remaining 70% upon project completion.</p>
                      <p><strong>3. Timeline:</strong> Project timeline will be discussed and agreed upon before commencement.</p>
                      <p><strong>4. Quality Assurance:</strong> We guarantee premium quality workmanship and materials.</p>
                      <p><strong>5. Warranty:</strong> 1-year warranty on all workmanship and materials used.</p>
                      <p><strong>6. Cancellation:</strong> Cancellation must be made 48 hours before scheduled start date.</p>
                      <p><strong>7. Site Access:</strong> Client must provide necessary site access and permissions.</p>
                      <p><strong>8. Changes:</strong> Any changes to the agreed scope will be discussed and may affect pricing and timeline.</p>
                    </div>
                  </div>

                  <div className="w-full flex flex-row items-center justify-start p-2 bg-cream rounded-xl">
                    <input
                      type="checkbox"
                      id="contract-accept"
                      checked={contractAccepted}
                      onChange={(e) => setContractAccepted(e.target.checked)}
                      className="mt-1 w-5 h-5 focus:outline-none rounded border-sand text-caramel focus:ring-caramel"
                    />
                    <label htmlFor="contract-accept" className="text-sm w-[2500px] text-coffee cursor-pointer">
                      I have read and agree to the terms and conditions of this service contract. I understand that by proceeding, I am entering into a binding agreement with LV Interiors.
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      onClick={handleBooking}
                      disabled={!contractAccepted}
                      className={`flex-1 ${contractAccepted ? 'btn-primary' : 'btn-secondary opacity-50 cursor-not-allowed'}`}
                    >
                      Sign & Complete Booking
                      <FileTextIcon />
                    </button>
                    <button
                      onClick={() => setBookingStep('form')}
                      className="btn-secondary flex-1"
                    >
                      Back
                    </button>
                  </div>
                </div>
              </>
            )}

            {bookingStep === 'success' && (
              <div className="p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckIcon />
                </div>
                <h3 className="text-3xl font-[family-name:var(--font-display)] font-semibold text-charcoal mb-4">
                  Booking Successful!
                </h3>
                <p className="text-coffee/70 mb-8">
                  Thank you for booking with LV Interiors. We&apos;ve received your booking details and will contact you within 24 hours to confirm and schedule your project.
                </p>
                <div className="bg-cream rounded-xl p-6 mb-8 text-left">
                  <p className="font-semibold text-charcoal mb-2">Booking Reference:</p>
                  <p className="text-coffee/70 text-sm">#{bookingReference}</p>
                  <p className="font-semibold text-charcoal mb-2 mt-4">Services:</p>
                  {bookingData.services && bookingData.services.length > 0 ? (
                  <ul className="space-y-2">
                    {bookingData.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-coffee/90 text-sm">
                        <span className="w-2 h-2 rounded-full bg-caramel flex-shrink-0"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                  ) : (
                    <p className="text-coffee/70 text-sm">No services selected</p>
                  )}
                </div>
                <button
                  onClick={() => {
                    setShowBooking(false);
                    setBookingStep('form');
                    setContractAccepted(false);
                    setBookingReference("");
                    // Clear selected services/subcategories and booking data after a small delay to allow success screen to render
                    setTimeout(() => {
                      setSelectedServices([]);
                      setSelectedSubcategories([]);
                      setBookingData({ name: "", phone: "", email: "", address: "", budget: "", services: [] });
                    }, 100);
                  }}
                  className="btn-primary"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  const [ref, isVisible] = useScrollAnimation();
  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/feedback');
        if (res.ok) {
          const data = await res.json();
          // Only show visible feedbacks
          setTestimonials(data.filter((f: any) => f.visibility));
        }
      } catch (e) {
        console.error("Failed to fetch testimonials", e);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="decorative-line mx-auto mb-6"></div>
          <h2 className="section-title font-[family-name:var(--font-display)] text-charcoal">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Don&apos;t just take our word for it. Here&apos;s what our happy clients have to say about their experience with LV Interiors.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial-card scroll-scale-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
              {/* Stars */}
              <div className="flex gap-1 text-gold mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="interactive-icon" style={{ animationDelay: `${i * 0.1}s` }}>
                    <StarIcon />
                  </span>
                ))}
              </div>

              {/* Author - Moved to top */}
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-12 h-12 rounded-full gradient-warm flex items-center justify-center text-white font-bold interactive-icon hover-lift flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-charcoal">{testimonial.name}</p>
                  {testimonial.title && <p className="text-xs text-coffee/60 font-medium mt-0.5">{testimonial.title}</p>}
                  {(testimonial.services && testimonial.services.length > 0) ? (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {testimonial.services.map((s: string, idx: number) => (
                        <span key={idx} className="text-xs text-caramel bg-caramel/10 px-2 py-0.5 rounded whitespace-nowrap">
                          {s}
                        </span>
                      ))}
                    </div>
                  ) : testimonial.service && (
                    <p className="text-xs text-caramel mt-1">{testimonial.service}</p>
                  )}
                  {!testimonial.title && !testimonial.service && !(testimonial.services && testimonial.services.length > 0) && (
                    <p className="text-sm text-coffee/60 mt-1">{testimonial.role || "Client"}</p>
                  )}
                </div>
              </div>

              {/* Content - Moved below author */}
              <p className="text-coffee/80 relative z-10 leading-relaxed">
                {testimonial.message}
              </p>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-cream rounded-2xl px-8 py-6 shadow-md hover-lift">
            <div className="text-left">
              <p className="text-5xl stat-number font-semibold text-gradient count-up">30+</p>
              <p className="text-coffee/60 mt-1">Years of Experience</p>
            </div>
            <div className="text-left border-l border-sand pl-6">
              <p className="text-5xl stat-number font-semibold text-gradient count-up">98%</p>
              <p className="text-coffee/60 mt-1">Satisfaction Rate</p>
            </div>
            <div className="text-left border-l border-sand pl-6">
              <p className="text-5xl stat-number font-semibold text-gradient count-up">500+</p>
              <p className="text-coffee/60 mt-1">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function to get all services and subcategories for tag selection
const getAllServiceTags = () => {
  const services = [
    {
      id: 1,
      title: "MEP Services",
      subcategories: [
        { id: "electric", title: "Electric" },
        { id: "plumbing", title: "Plumbing" },
      ],
    },
    {
      id: 2,
      title: "Interior & Furnishing",
      subcategories: [
        { id: "polishing-pu-duco", title: "Polishing & PU & Duco", nested: [
          { id: "polishing", title: "Polishing" },
          { id: "duco", title: "Duco" },
          { id: "pu", title: "PU" },
        ]},
        { id: "wood-works", title: "Wood Works", nested: [
          { id: "modular-furniture", title: "Modular Furniture" },
          { id: "custom-carpentry", title: "Custom Carpentry" },
          { id: "wardrobes", title: "Wardrobes" },
          { id: "kitchen-wood", title: "Kitchen" },
        ]},
        { id: "fixed-installation", title: "Fixed Installation", nested: [
          { id: "storage-units", title: "Storage Units" },
          { id: "wall-panels", title: "Wall Panels" },
          { id: "electrical-units", title: "Electrical Units" },
        ]},
      ],
    },
    {
      id: 3,
      title: "Surfaces Finishes",
      subcategories: [
        { id: "painting-services", title: "Painting Services", nested: [
          { id: "interior-painting", title: "Interior Painting" },
          { id: "exterior-painting", title: "Exterior Painting" },
          { id: "texture-paint", title: "Texture Paint" },
          { id: "waterproof-coatings", title: "Water Proof Coatings" },
        ]},
        { id: "flooring", title: "Flooring", nested: [
          { id: "tile-flooring", title: "Tile Flooring" },
          { id: "wooden-flooring", title: "Wooden Flooring" },
          { id: "marble-granite", title: "Marble & Granite" },
          { id: "vinyl-laminate", title: "Vinyl & Laminate" },
        ]},
      ],
    },
    {
      id: 4,
      title: "Upgrades & Renovations",
      subcategories: [
        { id: "full-home-renovation", title: "Full Home Renovation", nested: [
          { id: "partial-remodeling", title: "Partial Remodeling" },
          { id: "commercial-space", title: "Commercial Space" },
          { id: "bars-shops-restaurant", title: "Bars & Shops & Restaurant" },
          { id: "showrooms", title: "Showrooms" },
          { id: "residential-area", title: "Residential Area" },
          { id: "bedroom", title: "Bedroom" },
          { id: "bathroom", title: "Bathroom" },
          { id: "kitchen-renovation", title: "Kitchen" },
          { id: "dining-room", title: "Dining Room" },
          { id: "living-room", title: "Living Room" },
        ]},
        { id: "flat", title: "Flat" },
        { id: "terrace", title: "Terrace" },
        { id: "corporate-areas", title: "Corporate Areas" },
      ],
    },
    {
      id: 5,
      title: "Interior Planning & Design",
      subcategories: [
        { id: "interior-planning", title: "Interior Planning" },
        { id: "furniture-design", title: "Furniture Design" },
        { id: "2d-plans", title: "2D Plans" },
        // { id: "3d-visualization", title: "3D Visualization" },
        { id: "space-planning", title: "Space Planning" },
      ],
    },
  ];

  const tags: { id: string; label: string; category: string }[] = [];
  
  services.forEach(service => {
    // Add main service category
    tags.push({ id: `service-${service.id}`, label: service.title, category: service.title });
    
    // Add subcategories - show only subcategory name
    service.subcategories.forEach(sub => {
      tags.push({ 
        id: `sub-${sub.id}`, 
        label: sub.title, 
        category: service.title 
      });
      
      // Add nested subcategories if they exist - show only nested subcategory name
      if (sub.nested) {
        sub.nested.forEach(nested => {
          tags.push({ 
            id: `nested-${nested.id}`, 
            label: nested.title, 
            category: service.title 
          });
        });
      }
    });
  });
  
  return tags;
};

// Contact Section
function Contact() {
  const [formType, setFormType] = useState<"query" | "feedback">("query");
  const [formData, setFormData] = useState({
    name: "",
    title: "", // New optional field
    phone: "",
    email: "",
    services: [] as string[], // Changed to array
    message: "",
    rating: 5,
  });
  const [submitted, setSubmitted] = useState(false);
  const [availableTags] = useState(getAllServiceTags());
  const [showTagDropdown, setShowTagDropdown] = useState(false);

  const toggleServiceTag = (tagId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(tagId)
        ? prev.services.filter(id => id !== tagId)
        : [...prev.services, tagId]
    }));
  };

  const removeServiceTag = (tagId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.filter(id => id !== tagId)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (formType === 'query') {
        // Validation: Email OR Phone
        if (!formData.email && !formData.phone) {
          alert("Please provide either an Email or Phone number so we can contact you.");
          return;
        }

        const servicesText = formData.services.length > 0 
          ? `Services: ${formData.services.map(id => availableTags.find(t => t.id === id)?.label).join(', ')}. `
          : '';

        const res = await fetch('/api/queries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: `${servicesText}${formData.message}`,
            status: 'requested'
          }),
        });

        if (!res.ok) throw new Error('Failed to submit query');
      } else {
        // Feedback
        const res = await fetch('/api/feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            title: formData.title,
            email: formData.email,
            services: formData.services.map(id => availableTags.find(t => t.id === id)?.label || id),
            message: formData.message,
            rating: formData.rating,
            visibility: false,
          }),
        });

        if (!res.ok) throw new Error('Failed to submit feedback');
      }

      console.log("Form submitted:", { formType, ...formData });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", title: "", phone: "", email: "", services: [], message: "", rating: 5 });
    } catch (error) {
      console.error(error);
      alert('Failed to submit. Please try again.');
    }
  };

  return (
    <section id="contact" className="section-padding bg-cream relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-overlay opacity-20"></div>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="decorative-line mb-6"></div>
            <h2 className="section-title font-[family-name:var(--font-display)] text-charcoal">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-coffee/80 mb-8 leading-relaxed">
              Ready to transform your space? Get in touch with us for a free consultation and site visit. We&apos;re here to bring your vision to life.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              {/* <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group hover-lift">
                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all interactive-icon">
                  <WhatsAppIcon />
                </div>
                <div>
                  <p className="text-sm text-coffee/60">WhatsApp</p>
                  <p className="text-lg font-semibold text-charcoal">+91 99999 99999</p>
                </div>
              </a> */}

              <a href="mailto:info@LVinteriors.com" className="flex items-center gap-4 group hover-lift">
                <div className="w-14 h-14 rounded-xl bg-caramel/10 flex items-center justify-center text-caramel group-hover:bg-caramel group-hover:text-white transition-all interactive-icon">
                  <MailIcon />
                </div>
                <div>
                  <p className="text-sm text-coffee/60">Email Us</p>
                  <p className="text-lg font-semibold text-charcoal">lvinteriorworks@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 hover-lift">
                <div className="w-14 h-14 rounded-xl bg-caramel/10 flex items-center justify-center text-caramel interactive-icon">
                  <LocationIcon />
                </div>
                <div>
                  <p className="text-sm text-coffee/60">Location</p>
                  <p className="text-lg font-semibold text-charcoal">Delhi NCR, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
            {/* Form Type Toggle */}
            <div className="flex gap-2 mb-8 bg-cream rounded-xl p-1.5">
              <button
                type="button"
                onClick={() => setFormType("query")}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${formType === "query"
                  ? "bg-white text-charcoal shadow-md"
                  : "text-coffee/60 hover:text-coffee"
                  }`}
              >
                Get a Free Query
              </button>
              <button
                type="button"
                onClick={() => setFormType("feedback")}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${formType === "feedback"
                  ? "bg-white text-charcoal shadow-md"
                  : "text-coffee/60 hover:text-coffee"
                  }`}
              >
                Register Feedback
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckIcon />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Thank You!</h3>
                <p className="text-coffee/60">
                  {formType === "query"
                    ? "We've received your query and will get back to you within 24 hours."
                    : "Thank you for your valuable feedback!"}
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-[family-name:var(--font-display)] font-semibold text-charcoal mb-2">
                  {formType === "query" ? "Get a Free Consultation" : "Share Your Feedback"}
                </h3>
                <p className="text-coffee/60 mb-8">
                  {formType === "query"
                    ? "Fill the form and we'll get back to you within 24 hours."
                    : "Help us improve by sharing your experience with our services."}
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  {formType === "feedback" && (
                    <div>
                      <input
                        type="text"
                        placeholder="Your Title (Optional, e.g. Homeowner, Architect)"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      />
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="tel"
                      placeholder="Phone Number (Optional)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <input
                      type="email"
                      placeholder="Email Address (Optional)"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-coffee mb-3">
                      TAGS
                    </label>
                    
                    {/* Tag Input Field with Selected Tags */}
                    <div className="relative">
                      <div
                        onClick={() => setShowTagDropdown(!showTagDropdown)}
                        className="w-full min-h-[56px] px-4 py-3 border-2 border-sand rounded-xl bg-white text-coffee focus-within:border-caramel transition-all cursor-text flex flex-wrap gap-2 items-center"
                      >
                        {formData.services.length > 0 ? (
                          formData.services.map(tagId => {
                            const tag = availableTags.find(t => t.id === tagId);
                            if (!tag) return null;
                            return (
                              <span
                                key={tagId}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-caramel/10 text-caramel rounded-full text-sm font-medium whitespace-nowrap"
                              >
                                <span className="whitespace-nowrap break-keep">{tag.label}</span>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeServiceTag(tagId);
                                  }}
                                  className="hover:text-coffee transition-colors text-caramel/70 hover:text-caramel flex-shrink-0"
                                >
                                  <CloseIcon />
                                </button>
                              </span>
                            );
                          })
                        ) : (
                          <span className="text-coffee/50 text-sm">
                            {formType === "query" ? "Select services..." : "Select services used..."}
                          </span>
                        )}
                      </div>
                      
                      {/* Tag Dropdown Panel */}
                      {showTagDropdown && (
                        <>
                          <div 
                            className="fixed inset-0 z-10" 
                            onClick={() => setShowTagDropdown(false)}
                          ></div>
                          <div className="absolute z-20 w-full mt-2 bg-white border-2 border-sand rounded-xl shadow-xl" style={{ maxHeight: '400px' }}>
                            <div className="p-4 overflow-y-auto hide-scrollbar" style={{ maxHeight: '384px' }}>
                              <div className="flex flex-wrap gap-2">
                                {availableTags.map(tag => {
                                  const isSelected = formData.services.includes(tag.id);
                                  return (
                                    <button
                                      key={tag.id}
                                      type="button"
                                      onClick={() => toggleServiceTag(tag.id)}
                                      className={`px-3 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap break-keep ${
                                        isSelected
                                          ? 'bg-caramel text-white hover:bg-caramel/90'
                                          : 'bg-cream text-coffee hover:bg-sand'
                                      }`}
                                    >
                                      {tag.label}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    
                    {formData.services.length === 0 && (
                      <p className="text-xs text-red-500 mt-1">* Please select at least one service</p>
                    )}
                  </div>

                  {formType === "feedback" && (
                    <div>
                      <label className="block text-sm font-medium text-coffee mb-3">Your Rating</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setFormData({ ...formData, rating: star })}
                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${star <= formData.rating
                              ? "text-gold bg-gold/10"
                              : "text-sand bg-cream hover:text-gold"
                              }`}
                          >
                            <StarIcon />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <textarea
                      placeholder={formType === "query"
                        ? "Tell us about your project..."
                        : "Share your experience with us..."}
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className={`btn-primary w-full text-center justify-center ${formData.services.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={formData.services.length === 0}
                  >
                    {formType === "query" ? "Submit Query" : "Submit Feedback"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/LVLogo.png" 
                alt="LV Interiors" 
                width={50} 
                height={50}
                className="object-contain bg-white rounded-full"
              />
              <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-cream">
                LV Interiors
              </span>
            </div>
            <p className="text-cream/60 mb-6 max-w-md leading-relaxed">
              Premium painting, wood finishing, and renovation services that bring your vision to life.
              Serving Delhi NCR with excellence since 1995.
            </p>
            <div className="flex gap-4">
              {/* <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center text-cream hover:bg-green-500 transition-colors"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="tel:+919999999999"
                className="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center text-cream hover:bg-caramel transition-colors"
              >
                <PhoneIcon />
              </a> */}
              <a
                href="mailto:lvinteriorworks@gmail.com"
                className="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center text-cream hover:bg-caramel transition-colors"
              >
                <MailIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cream mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Gallery", "Testimonials"].map((link) => (
                <li key={link}>
                  <a href={link === "Gallery" ? "/gallery" : `#${link.toLowerCase().replace(" ", "")}`} className="hover:text-caramel transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-cream mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Painting & Wall Finishes",
                "Wood Polish & PU",
                "Renovation Work",
                "False Ceiling",
                "Carpentry Work",
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-caramel transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-sm">
            © {new Date().getFullYear()} LV Interiors. All rights reserved.
          </p>
          <p className="text-cream/50 text-sm">
            Crafted with ❤️ for beautiful spaces
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
// export default function RootPage() {
//   redirect('/home');
// }
