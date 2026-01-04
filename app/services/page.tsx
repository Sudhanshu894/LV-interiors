'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import ResponsiveLayout from '../components/shared/ResponsiveLayout';
import { services, projects, getFeedbacksForService, getImagesForService, Service, Subcategory, Feedback } from '@/lib/data';
import { useBooking, SelectedService } from '@/lib/context/BookingContext';
import { 
  StarIcon, 
  ChevronDownIcon, 
  ChevronUpIcon, 
  CheckIcon, 
  PlusIcon,
  getServiceIcon 
} from '../components/shared/Icons';

// Horizontal Service Tags Bar
function ServiceTagsBar({ 
  selectedTag, 
  onSelectTag 
}: { 
  selectedTag: string | null; 
  onSelectTag: (tag: string | null) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="sticky top-0 md:top-20 z-40 bg-cream border-b border-sand">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={scrollRef}
          className="flex gap-2 md:gap-3 p-4 md:py-6 overflow-x-auto hide-scrollbar md:justify-center"
        >
          <button
            onClick={() => onSelectTag(null)}
            className={`flex-shrink-0 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-colors ${
              selectedTag === null 
                ? 'bg-caramel text-white' 
                : 'bg-white text-coffee border border-sand hover:border-caramel'
            }`}
          >
            All Services
          </button>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => onSelectTag(service.title)}
              className={`flex-shrink-0 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-colors whitespace-nowrap ${
                selectedTag === service.title 
                  ? 'bg-caramel text-white' 
                  : 'bg-white text-coffee border border-sand hover:border-caramel'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Feedback Card
function FeedbackCard({ feedback }: { feedback: Feedback }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex items-center gap-1 text-gold mb-2">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} filled={i < feedback.rating} />
        ))}
      </div>
      <p className="text-sm text-coffee mb-2">{feedback.comment}</p>
      <p className="text-xs text-taupe font-medium">{feedback.name}</p>
    </div>
  );
}

// Service Subcategory Item
function SubcategoryItem({ 
  service,
  subcategory, 
  isExpanded, 
  onToggle,
  onSelectService,
  isSelected,
  selectedNested,
  onSelectNested,
}: { 
  service: Service;
  subcategory: Subcategory; 
  isExpanded: boolean;
  onToggle: () => void;
  onSelectService: () => void;
  isSelected: boolean;
  selectedNested: string[];
  onSelectNested: (nestedId: string) => void;
}) {
  const hasNested = subcategory.nestedSubcategories && subcategory.nestedSubcategories.length > 0;

  return (
    <div className="border border-sand rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow">
      {/* Header */}
      <button
        onClick={hasNested ? onToggle : onSelectService}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <div className="flex-1">
          <h4 className="font-medium text-espresso">{subcategory.title}</h4>
          <p className="text-xs md:text-sm text-taupe line-clamp-1">{subcategory.description}</p>
        </div>
        
        {hasNested ? (
          <div className="ml-2 text-taupe">
            {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </div>
        ) : (
          <div className={`ml-2 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            isSelected ? 'bg-caramel border-caramel text-white' : 'border-taupe hover:border-caramel'
          }`}>
            {isSelected ? <CheckIcon /> : <PlusIcon />}
          </div>
        )}
      </button>

      {/* Nested Subcategories */}
      {hasNested && isExpanded && (
        <div className="border-t border-sand bg-cream-dark p-3 space-y-2">
          {subcategory.nestedSubcategories?.map((nested) => {
            const isNestedSelected = selectedNested.includes(nested.id);
            return (
              <button
                key={nested.id}
                onClick={() => onSelectNested(nested.id)}
                className="w-full flex items-center justify-between p-3 rounded-lg bg-white text-left hover:shadow-sm transition-shadow"
              >
                <div className="flex-1">
                  <p className="font-medium text-sm text-coffee">{nested.title}</p>
                  <p className="text-xs text-taupe line-clamp-1">{nested.description}</p>
                </div>
                <div className={`ml-2 w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs transition-colors ${
                  isNestedSelected ? 'bg-caramel border-caramel text-white' : 'border-taupe hover:border-caramel'
                }`}>
                  {isNestedSelected && <CheckIcon />}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Service Section
function ServiceSection({ 
  service, 
  isFiltered 
}: { 
  service: Service; 
  isFiltered: boolean;
}) {
  const { addService, removeService, isServiceSelected, selectedServices } = useBooking();
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(null);
  const [showGallery, setShowGallery] = useState(false);
  const [showFeedbacks, setShowFeedbacks] = useState(false);

  // Get related images and feedbacks
  const serviceImages = getImagesForService(service.title);
  const serviceFeedbacks = getFeedbacksForService(service.title);

  const handleSelectSubcategory = (subcategory: Subcategory) => {
    const selectedService: SelectedService = {
      serviceId: service.id,
      serviceTitle: service.title,
      subcategoryId: subcategory.id,
      subcategoryTitle: subcategory.title,
    };

    if (isServiceSelected(service.id, subcategory.id)) {
      removeService(selectedService);
    } else {
      addService(selectedService);
    }
  };

  const handleSelectNested = (subcategory: Subcategory, nestedId: string) => {
    const nested = subcategory.nestedSubcategories?.find(n => n.id === nestedId);
    if (!nested) return;

    const selectedService: SelectedService = {
      serviceId: service.id,
      serviceTitle: service.title,
      subcategoryId: subcategory.id,
      subcategoryTitle: subcategory.title,
      nestedSubcategoryId: nested.id,
      nestedSubcategoryTitle: nested.title,
    };

    if (isServiceSelected(service.id, subcategory.id, nested.id)) {
      removeService(selectedService);
    } else {
      addService(selectedService);
    }
  };

  const getSelectedNestedIds = (subcategoryId: string): string[] => {
    return selectedServices
      .filter(s => s.serviceId === service.id && s.subcategoryId === subcategoryId && s.nestedSubcategoryId)
      .map(s => s.nestedSubcategoryId as string);
  };

  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-sand overflow-hidden ${isFiltered ? '' : 'opacity-100'}`}>
      {/* Service Header with Image */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src={service.imagePath}
          alt={service.title}
          fill
          className="object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-30`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Service Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
              {getServiceIcon(service.id)}
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-display">{service.title}</h3>
          </div>
          <p className="text-sm md:text-base text-white/80">{service.description}</p>
        </div>
      </div>

      {/* Subcategories */}
      <div className="p-4 md:p-6">
        <h4 className="text-sm font-semibold text-taupe uppercase tracking-wide mb-4">
          Select Services
        </h4>
        <div className="grid gap-3 md:grid-cols-2">
          {service.subcategories.map((subcategory) => (
            <SubcategoryItem
              key={subcategory.id}
              service={service}
              subcategory={subcategory}
              isExpanded={expandedSubcategory === subcategory.id}
              onToggle={() => setExpandedSubcategory(
                expandedSubcategory === subcategory.id ? null : subcategory.id
              )}
              onSelectService={() => handleSelectSubcategory(subcategory)}
              isSelected={isServiceSelected(service.id, subcategory.id)}
              selectedNested={getSelectedNestedIds(subcategory.id)}
              onSelectNested={(nestedId) => handleSelectNested(subcategory, nestedId)}
            />
          ))}
        </div>
      </div>

      {/* Gallery & Reviews */}
      <div className="border-t border-sand p-4 md:p-6 bg-cream-dark/50">
        <div className="flex flex-wrap gap-4">
          {/* Gallery Preview */}
          {serviceImages.length > 0 && (
            <div className="flex-1 min-w-[200px]">
              <button 
                onClick={() => setShowGallery(!showGallery)}
                className="flex items-center gap-2 text-sm text-caramel font-medium hover:underline"
              >
                <span>View Gallery ({serviceImages.length} images)</span>
                {showGallery ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </button>
              
              {showGallery && (
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-3">
                  {serviceImages.slice(0, 6).map((img, i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={img}
                        alt=""
                        width={120}
                        height={120}
                        className="object-cover w-full h-full hover:scale-110 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Feedbacks */}
          <div className="flex-1 min-w-[200px]">
            <button 
              onClick={() => setShowFeedbacks(!showFeedbacks)}
              className="flex items-center gap-2 text-sm text-caramel font-medium hover:underline"
            >
              <span>
                {serviceFeedbacks.length > 0 
                  ? `Reviews (${serviceFeedbacks.length})`
                  : 'No reviews yet'
                }
              </span>
              {serviceFeedbacks.length > 0 && (showFeedbacks ? <ChevronUpIcon /> : <ChevronDownIcon />)}
            </button>
            
            {showFeedbacks && serviceFeedbacks.length > 0 && (
              <div className="grid md:grid-cols-2 gap-3 mt-3">
                {serviceFeedbacks.slice(0, 4).map((feedback, i) => (
                  <FeedbackCard key={i} feedback={feedback} />
                ))}
              </div>
            )}

            {serviceFeedbacks.length === 0 && (
              <div className="text-center py-4 mt-3 bg-white rounded-xl border border-sand">
                <p className="text-sm text-taupe mb-2">Be the first to review this service!</p>
                <a href="/help" className="text-caramel text-sm font-medium hover:underline">
                  Leave a Review →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const { selectedServices, setShowBookingModal } = useBooking();

  const filteredServices = selectedTag 
    ? services.filter(s => s.title === selectedTag)
    : services;

  return (
    <ResponsiveLayout>
      {/* Header */}
      <div className="px-4 md:px-8 pt-6 md:pt-8 pb-2 md:pb-4 max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-espresso font-display">Bespoke Services</h1>
        <p className="text-sm md:text-lg text-taupe mt-1 italic">Curated solutions for discerning clientele</p>
      </div>

      {/* Tags Bar */}
      <ServiceTagsBar 
        selectedTag={selectedTag} 
        onSelectTag={setSelectedTag}
      />

      {/* Services List */}
      <div className="px-4 md:px-8 py-6 md:py-10">
        <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
          {filteredServices.map((service) => (
            <ServiceSection 
              key={service.id} 
              service={service}
              isFiltered={selectedTag !== null}
            />
          ))}
        </div>
      </div>

      {/* Floating Confirm Booking Button */}
      {selectedServices.length > 0 && (
        <div className="fixed bottom-20 md:bottom-8 left-4 right-4 md:left-auto md:right-8 z-40 md:w-auto">
          <button
            onClick={() => setShowBookingModal(true)}
            className="w-full md:w-auto btn-primary py-4 px-8 shadow-xl flex items-center justify-center gap-2"
          >
            <span>Confirm Booking</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              {selectedServices.length} selected
            </span>
          </button>
        </div>
      )}
    </ResponsiveLayout>
  );
}
