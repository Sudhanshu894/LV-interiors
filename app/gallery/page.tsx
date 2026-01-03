"use client";

import Image from "next/image";
import { useState } from "react";
import ResponsiveLayout from "../components/shared/ResponsiveLayout";
import { projects } from "@/lib/data";
import { 
  StarIcon, 
  ChevronDownIcon, 
  ChevronUpIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  CloseIcon 
} from "../components/shared/Icons";

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

  const viewingProjectData = viewingProject ? projects.find(p => p.id === viewingProject) : null;

  return (
    <ResponsiveLayout>
      {/* Full Screen Gallery Modal */}
      {viewingProjectData && (
        <div className="fixed inset-0 z-[100] bg-black">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 md:p-6 bg-gradient-to-b from-black/70 to-transparent">
            <div>
              <h3 className="text-white font-semibold text-lg md:text-xl">{viewingProjectData.name}</h3>
              <p className="text-white/70 text-sm">{viewingProjectData.category}</p>
            </div>
            <button 
              onClick={closeFullGallery}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Main Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={viewingProjectData.allImages[currentImageIndex]}
              alt={viewingProjectData.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
          >
            <ChevronLeftIcon />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
          >
            <ChevronRightIcon />
          </button>

          {/* Bottom Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent">
            {/* Image Counter */}
            <div className="text-center mb-4">
              <span className="text-white/70 text-sm">
                {currentImageIndex + 1} / {viewingProjectData.allImages.length}
              </span>
            </div>
            
            {/* Service Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {viewingProjectData.services.map((service, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-caramel/20 text-caramel text-sm rounded-full border border-caramel/30"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
              {viewingProjectData.allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden transition-all ${
                    i === currentImageIndex ? 'ring-2 ring-caramel scale-105' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img}
                    alt=""
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Gallery Page Content */}
      <div className="px-4 md:px-8 pt-6 md:pt-10 pb-8 md:pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-espresso font-display mb-2 md:mb-4">
              Our Work Gallery
            </h1>
            <p className="text-sm md:text-lg text-taupe max-w-2xl mx-auto">
              Explore our portfolio of completed projects. Click on any project to view the full gallery.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-6 md:space-y-8">
            {projects.map((project) => {
              const isExpanded = expandedProjects.has(project.id);
              const avgRating = project.feedbacks.length > 0 
                ? (project.feedbacks.reduce((acc, f) => acc + f.rating, 0) / project.feedbacks.length).toFixed(1)
                : null;

              return (
                <div 
                  key={project.id}
                  className="bg-white rounded-2xl shadow-sm border border-sand overflow-hidden"
                >
                  {/* Project Header */}
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-cream-dark/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={project.previewImages[0]}
                          alt={project.name}
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-espresso text-lg md:text-xl">{project.name}</h3>
                        <p className="text-sm text-taupe">{project.category}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex flex-wrap gap-1">
                            {project.services.slice(0, 2).map((service, i) => (
                              <span 
                                key={i}
                                className="px-2 py-0.5 bg-caramel/10 text-caramel text-xs rounded-full"
                              >
                                {service}
                              </span>
                            ))}
                            {project.services.length > 2 && (
                              <span className="px-2 py-0.5 bg-sand text-taupe text-xs rounded-full">
                                +{project.services.length - 2}
                              </span>
                            )}
                          </div>
                          {avgRating && (
                            <div className="flex items-center gap-1 text-gold">
                              <StarIcon filled />
                              <span className="text-sm text-coffee font-medium">{avgRating}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-taupe">
                      {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="border-t border-sand p-4 md:p-6">
                      {/* Image Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-4">
                        {project.previewImages.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => openFullGallery(project.id)}
                            className="aspect-[4/3] rounded-xl overflow-hidden group"
                          >
                            <Image
                              src={img}
                              alt={`${project.name} - Image ${i + 1}`}
                              width={400}
                              height={300}
                              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                            />
                          </button>
                        ))}
                      </div>

                      {/* View All Button */}
                      <div className="flex justify-center">
                        <button
                          onClick={() => openFullGallery(project.id)}
                          className="px-6 py-2 bg-caramel/10 text-caramel rounded-full text-sm font-medium hover:bg-caramel hover:text-white transition-colors"
                        >
                          View All {project.allImages.length} Images
                        </button>
                      </div>

                      {/* Feedbacks */}
                      {project.feedbacks.length > 0 && (
                        <div className="mt-6 pt-4 border-t border-sand">
                          <h4 className="text-sm font-semibold text-taupe uppercase tracking-wide mb-3">
                            Client Reviews
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {project.feedbacks.map((feedback, i) => (
                              <div key={i} className="bg-cream-dark rounded-xl p-4">
                                <div className="flex items-center gap-1 text-gold mb-2">
                                  {[...Array(5)].map((_, j) => (
                                    <StarIcon key={j} filled={j < feedback.rating} />
                                  ))}
                                </div>
                                <p className="text-sm text-coffee mb-2">&quot;{feedback.comment}&quot;</p>
                                <p className="text-xs text-taupe font-medium">{feedback.name}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer - Desktop */}
      <footer className="hidden md:block bg-espresso text-white py-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center text-white/50 text-sm">
            © {new Date().getFullYear()} LV Interiors. All rights reserved.
          </div>
        </div>
      </footer>
    </ResponsiveLayout>
  );
}
