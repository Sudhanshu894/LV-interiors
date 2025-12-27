"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

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

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
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

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About Us" },
    { href: "/#services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/#testimonials", label: "Testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/#home" className="flex items-center gap-2 hover-lift interactive-icon">
            <div className="w-40 h-40 rounded-xl flex items-center justify-center transition-transform hover:scale-110">
              <Image src="/Logo1.png" alt="LV Interiors" width={100} height={100} />
            </div>
            <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-espresso">
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-coffee hover:text-caramel transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#contact" className="btn-primary">
              Contact Us
            </Link>
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
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-coffee hover:text-caramel transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#contact" className="btn-primary inline-block mt-4" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

// Project data with service categories and feedbacks
const projects = [
  {
    id: 1,
    name: "Modern 3BHK Apartment",
    category: "Interior Painting",
    serviceCategory: "Surfaces Finishes",
    serviceSubcategory: "Painting Services",
    serviceNestedSubcategory: "Interior Painting",
    previewImages: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
    ],
    allImages: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    ],
    feedbacks: [
      { name: "Rahul Mehta", rating: 5, comment: "Excellent work! The team was professional and the finish is flawless." },
      { name: "Sneha Patel", rating: 5, comment: "Love the color choices. The painting quality exceeded our expectations." },
    ],
  },
  {
    id: 2,
    name: "Luxury Villa Renovation",
    category: "Complete Renovation",
    serviceCategory: "Upgrades & Renovations",
    serviceSubcategory: "Full Home Renovation",
    serviceNestedSubcategory: "Residential Area",
    previewImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
    ],
    allImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop",
    ],
    feedbacks: [
      { name: "Anita Mehta", rating: 5, comment: "Excellent residential renovation! The team transformed our villa beautifully." },
    ],
  },
  {
    id: 3,
    name: "Office Space Design",
    category: "Commercial Interiors",
    serviceCategory: "Upgrades & Renovations",
    serviceSubcategory: "Full Home Renovation",
    serviceNestedSubcategory: "Commercial Space",
    previewImages: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
    ],
    allImages: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    ],
    feedbacks: [
      { name: "Rajesh Kumar", rating: 5, comment: "Great commercial renovation! The office space looks modern and professional." },
    ],
  },
  {
    id: 4,
    name: "Heritage Home Restoration",
    category: "Wood Polish & PU",
    serviceCategory: "Interior & Furnishing",
    serviceSubcategory: "Polishing & PU & Duco",
    serviceNestedSubcategory: null,
    previewImages: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
    ],
    allImages: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop",
    ],
    feedbacks: [
      { name: "Amit Patel", rating: 5, comment: "My old furniture looks brand new after polishing! Excellent work." },
    ],
  },
  {
    id: 5,
    name: "Contemporary Penthouse",
    category: "Texture Paint & Feature Walls",
    serviceCategory: "Surfaces Finishes",
    serviceSubcategory: "Painting Services",
    serviceNestedSubcategory: "Texture Paint",
    previewImages: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
    ],
    allImages: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    ],
    feedbacks: [
      { name: "Vikram Singh", rating: 5, comment: "The texture wall in our living room is absolutely stunning!" },
    ],
  },
  {
    id: 6,
    name: "Restaurant Makeover",
    category: "Commercial Renovation",
    serviceCategory: "Upgrades & Renovations",
    serviceSubcategory: "Full Home Renovation",
    serviceNestedSubcategory: "Bars & Shops & Restaurant",
    previewImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    ],
    allImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    ],
    feedbacks: [
      { name: "Sunita Agarwal", rating: 5, comment: "Amazing restaurant renovation! Complete transformation." },
    ],
  },
];

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

// Gallery Page Component
export default function GalleryPage() {
  // All projects are expanded by default
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set(projects.map(p => p.id)));
  const [viewingProject, setViewingProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleProject = (projectId: number) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const openFullGallery = (projectId: number) => {
    setViewingProject(projectId);
    setCurrentImageIndex(0);
  };

  const closeFullGallery = () => {
    setViewingProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (viewingProject) {
      const project = projects.find(p => p.id === viewingProject);
      if (project) {
        setCurrentImageIndex((prev) => (prev + 1) % project.allImages.length);
      }
    }
  };

  const prevImage = () => {
    if (viewingProject) {
      const project = projects.find(p => p.id === viewingProject);
      if (project) {
        setCurrentImageIndex((prev) => (prev - 1 + project.allImages.length) % project.allImages.length);
      }
    }
  };

  const currentProject = viewingProject ? projects.find(p => p.id === viewingProject) : null;

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-cream to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="decorative-line mx-auto mb-6"></div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-display)] font-bold text-charcoal leading-tight mb-6">
                Our <span className="text-gradient">Project Gallery</span>
              </h1>
              <p className="text-lg text-coffee/80 max-w-2xl mx-auto">
                Explore our portfolio of completed projects. Each project showcases our commitment to quality, 
                attention to detail, and creative excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => {
                const isExpanded = expandedProjects.has(project.id);
                  
                  return (
                    <div
                      key={project.id}
                      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      {/* Project Card Header */}
                      <div
                        className="p-6 cursor-pointer hover:bg-cream/50 transition-colors"
                        onClick={() => toggleProject(project.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="text-xl font-[family-name:var(--font-display)] font-semibold text-charcoal mb-2">
                              {project.name}
                            </h3>
                            <p className="text-sm text-coffee/60 mb-1">{project.category}</p>
                            {project.serviceCategory && (
                              <p className="text-xs text-caramel font-medium">
                                {project.serviceCategory}
                                {project.serviceSubcategory && ` • ${project.serviceSubcategory}`}
                                {project.serviceNestedSubcategory && ` • ${project.serviceNestedSubcategory}`}
                              </p>
                            )}
                          </div>
                          <div className="ml-4">
                            {isExpanded ? (
                              <ChevronUpIcon />
                            ) : (
                              <ChevronDownIcon />
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Expanded Preview Gallery - Always visible by default */}
                      <div className="px-6 pb-6">
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          {project.previewImages.slice(0, 4).map((img, idx) => (
                            <div
                              key={idx}
                              className="relative aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                            >
                              <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${img})` }}
                              />
                            </div>
                          ))}
                        </div>
                        
                        {/* See All Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openFullGallery(project.id);
                          }}
                          className="btn-primary w-full justify-center"
                        >
                          See All Gallery
                          <ArrowRightIcon />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
          </div>
        </section>
      </main>

      {/* Full Gallery Modal */}
      {viewingProject && currentProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in overflow-y-auto">
          <div className="relative max-w-7xl w-full my-8 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 text-white">
              <div>
                <h2 className="text-3xl font-[family-name:var(--font-display)] font-semibold mb-1">
                  {currentProject.name}
                </h2>
                <p className="text-white/70 mb-1">{currentProject.category}</p>
                {currentProject.serviceCategory && (
                  <p className="text-sm text-white/60">
                    {currentProject.serviceCategory}
                    {currentProject.serviceSubcategory && ` • ${currentProject.serviceSubcategory}`}
                    {currentProject.serviceNestedSubcategory && ` • ${currentProject.serviceNestedSubcategory}`}
                  </p>
                )}
              </div>
              <button
                onClick={closeFullGallery}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <XIcon />
              </button>
            </div>

            {/* Main Image */}
            <div className="relative flex-1 flex items-center justify-center mb-6">
              <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-opacity duration-500"
                  style={{ backgroundImage: `url(${currentProject.allImages[currentImageIndex]})` }}
                />
              </div>

              {/* Navigation Arrows */}
              {currentProject.allImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
                  >
                    <ChevronLeftIcon />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
                  >
                    <ChevronRightIcon />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                {currentImageIndex + 1} / {currentProject.allImages.length}
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 max-h-32 overflow-y-auto mb-6">
              {currentProject.allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                    idx === currentImageIndex
                      ? 'ring-2 ring-caramel scale-105'
                      : 'opacity-60 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                </button>
              ))}
            </div>

            {/* Services Tags */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Services Used</h3>
              <div className="flex flex-wrap gap-2">
                {currentProject.serviceCategory && (
                  <span className="px-3 py-1.5 bg-caramel/20 text-white rounded-full text-sm font-medium border border-caramel/30">
                    {currentProject.serviceCategory}
                  </span>
                )}
                {currentProject.serviceSubcategory && (
                  <span className="px-3 py-1.5 bg-caramel/20 text-white rounded-full text-sm font-medium border border-caramel/30">
                    {currentProject.serviceSubcategory}
                  </span>
                )}
                {currentProject.serviceNestedSubcategory && (
                  <span className="px-3 py-1.5 bg-caramel/20 text-white rounded-full text-sm font-medium border border-caramel/30">
                    {currentProject.serviceNestedSubcategory}
                  </span>
                )}
              </div>
            </div>

            {/* Feedbacks Section */}
            {currentProject.feedbacks && currentProject.feedbacks.length > 0 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">Client Feedbacks</h3>
                <div className="space-y-4">
                  {currentProject.feedbacks.map((feedback, idx) => (
                    <div key={idx} className="bg-black/20 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(feedback.rating)].map((_, i) => (
                            <StarIcon key={i} />
                          ))}
                        </div>
                        <span className="font-semibold text-white">{feedback.name}</span>
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed">"{feedback.comment}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

