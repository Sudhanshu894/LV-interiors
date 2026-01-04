'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ResponsiveLayout from '../components/shared/ResponsiveLayout';
import { projects, Project } from '@/lib/data';
import { StarIcon, ChevronRightIcon, ChevronLeftIcon, CloseIcon } from '../components/shared/Icons';

// Hero Section - Responsive
function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] min-h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-interior.png"
          alt="LV Spaces"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6 md:p-12 pt-12 md:pt-24">
        {/* Logo - Mobile Only */}
        <div className="flex justify-center md:hidden">
          <Image
            src="/LVLogo.png"
            alt="LV Spaces Logo"
            width={80}
            height={80}
            className="drop-shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="text-center text-white space-y-4 md:space-y-6 flex-1 flex flex-col justify-center items-center">
          {/* Since Badge */}
          <div className="inline-flex flex-col items-center justify-center bg-white/20 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-xl border border-white/30">
            <span className="text-xs md:text-sm opacity-80">Since</span>
            <span className="text-2xl md:text-4xl font-bold">1995</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display leading-tight max-w-4xl">
            Curating Luxury Living<br />
            <span className="text-caramel">Where Elegance Meets Lifestyle</span>
          </h1>
          
          <p className="text-sm md:text-lg text-white/80 max-w-xs md:max-w-2xl mx-auto italic">
            "Elegance is not a luxury, it's lifestyle."<br />
            <span className="text-xs md:text-base not-italic mt-2 block">
              Bespoke interior design and premium finishing services for discerning clients in Delhi NCR.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-2 md:pt-4">
            <Link href="/services" className="btn-primary text-sm md:text-base px-6 md:px-8 py-3 md:py-4">
              Explore Services
            </Link>
            <Link href="/help" className="btn-secondary text-sm md:text-base px-6 md:px-8 py-3 md:py-4 bg-white/20 backdrop-blur border-white/30 text-white hover:bg-white/30">
              Get Free Quote
            </Link>
          </div>
        </div>

        {/* Bottom Badge */}
        <div className="text-center">
          <p className="text-xs md:text-sm text-white/70">
            Bespoke Design • Exceptional Craftsmanship • Timeless Elegance
          </p>
        </div>
      </div>
    </section>
  );
}

// Stats Section - Responsive
function StatsSection() {
  return (
    <section className="px-4 md:px-8 py-8 md:py-16 bg-gradient-to-r from-coffee to-espresso">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-4 md:gap-8 text-center text-white">
          <div className="p-4 md:p-8">
            <p className="text-3xl md:text-5xl lg:text-6xl font-bold font-display bg-gradient-to-br from-white via-gold to-white bg-clip-text text-transparent">30+</p>
            <p className="text-xs md:text-base text-white/70 mt-1 md:mt-2">Years of Experience</p>
          </div>
          <div className="p-4 md:p-8">
            <p className="text-3xl md:text-5xl lg:text-6xl font-bold font-display bg-gradient-to-br from-white via-gold to-white bg-clip-text text-transparent">500+</p>
            <p className="text-xs md:text-base text-white/70 mt-1 md:mt-2">Happy Clients</p>
          </div>
          <div className="p-4 md:p-8">
            <p className="text-3xl md:text-5xl lg:text-6xl font-bold font-display bg-gradient-to-br from-white via-gold to-white bg-clip-text text-transparent">98%</p>
            <p className="text-xs md:text-base text-white/70 mt-1 md:mt-2">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="group block w-full text-left"
    >
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
        <Image
          src={project.previewImages[0]}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Service Tags */}
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1">
          {project.services.slice(0, 2).map((service, i) => (
            <span 
              key={i}
              className="px-2 py-0.5 bg-white/90 text-coffee text-xs rounded-full"
            >
              {service}
            </span>
          ))}
          {project.services.length > 2 && (
            <span className="px-2 py-0.5 bg-caramel/90 text-white text-xs rounded-full">
              +{project.services.length - 2}
            </span>
          )}
        </div>
      </div>
      
      <h3 className="font-semibold text-espresso group-hover:text-caramel transition-colors text-base md:text-lg">
        {project.name}
      </h3>
      <p className="text-sm text-taupe">{project.category}</p>
      
      {/* Rating if available */}
      {project.feedbacks.length > 0 && (
        <div className="flex items-center gap-1 mt-1">
          <span className="text-gold"><StarIcon filled /></span>
          <span className="text-sm text-coffee font-medium">
            {(project.feedbacks.reduce((acc, f) => acc + f.rating, 0) / project.feedbacks.length).toFixed(1)}
          </span>
        </div>
      )}
    </button>
  );
}

// Project Gallery Modal
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(prev => 
      prev < project.allImages.length - 1 ? prev + 1 : 0
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => 
      prev > 0 ? prev - 1 : project.allImages.length - 1
    );
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 md:p-6 text-white">
        <div>
          <h2 className="font-semibold text-lg md:text-xl">{project.name}</h2>
          <p className="text-sm text-white/70">{project.category}</p>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
          <CloseIcon />
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 relative">
        <Image
          src={project.allImages[currentImageIndex]}
          alt={project.name}
          fill
          className="object-contain"
        />
        
        {/* Navigation */}
        {project.allImages.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/20 rounded-full backdrop-blur hover:bg-white/30 transition-colors"
            >
              <ChevronLeftIcon />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/20 rounded-full backdrop-blur hover:bg-white/30 transition-colors"
            >
              <ChevronRightIcon />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 rounded-full text-white text-sm">
          {currentImageIndex + 1} / {project.allImages.length}
        </div>
      </div>

      {/* Service Tags */}
      <div className="p-4 md:p-6">
        <p className="text-white/70 text-sm mb-2">Services Used:</p>
        <div className="flex flex-wrap gap-2">
          {project.services.map((service, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-caramel/20 text-caramel text-sm rounded-full border border-caramel/30"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="p-4 md:p-6 pt-0">
        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar justify-center">
          {project.allImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentImageIndex(i)}
              className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all ${
                i === currentImageIndex ? 'ring-2 ring-caramel scale-105' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={img}
                alt=""
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Gallery Section - Responsive
function GallerySection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="px-4 md:px-8 py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6 md:mb-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-espresso font-display">Our Work</h2>
            <p className="text-sm md:text-base text-taupe mt-1">Explore our completed projects</p>
          </div>
          <Link href="/gallery" className="text-caramel text-sm md:text-base font-medium hover:underline">
            View All →
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayedProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* View More Button */}
        {!showAll && projects.length > 4 && (
          <div className="text-center mt-8 md:mt-12">
            <button 
              onClick={() => setShowAll(true)}
              className="px-8 py-3 border-2 border-caramel text-caramel rounded-xl font-medium hover:bg-caramel hover:text-white transition-colors"
            >
              View More Projects
            </button>
          </div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
}

// CTA Section - Desktop
function CTASection() {
  return (
    <section className="hidden md:block px-8 py-16 bg-cream-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-espresso font-display mb-4">
          Ready to Transform Your Space?
        </h2>
        <p className="text-lg text-taupe mb-8 max-w-2xl mx-auto">
          Get a free consultation and quote from our expert team. 
          We&apos;ll help you bring your vision to life.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/services" className="btn-primary px-8 py-4">
            Browse Services
          </Link>
          <Link href="/help" className="btn-secondary px-8 py-4">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

// Footer - Desktop
function Footer() {
  return (
    <footer className="hidden md:block bg-espresso text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="col-span-2">
            <Image src="/LVLogo.png" alt="LV Spaces" width={60} height={60} className="mb-4" />
            <p className="text-white/70 max-w-md italic mb-2">
              "Elegance is not a luxury, it's lifestyle."
            </p>
            <p className="text-white/60 max-w-md text-sm">
              Since 1995, LV Spaces has been curating luxury living experiences for discerning clients across Delhi NCR. 
              Bespoke design, exceptional craftsmanship, timeless elegance.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/home" className="block text-white/70 hover:text-caramel transition-colors">Home</Link>
              <Link href="/services" className="block text-white/70 hover:text-caramel transition-colors">Services</Link>
              <Link href="/about" className="block text-white/70 hover:text-caramel transition-colors">About Us</Link>
              <Link href="/gallery" className="block text-white/70 hover:text-caramel transition-colors">Gallery</Link>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-white/70">
              <p>lvinteriorworks@gmail.com</p>
              <p>Delhi NCR, India</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} LV Spaces. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <ResponsiveLayout>
      <Hero />
      <StatsSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </ResponsiveLayout>
  );
}
