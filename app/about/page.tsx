'use client';

import Image from 'next/image';
import { useState } from 'react';
import ResponsiveLayout from '../components/shared/ResponsiveLayout';
import { StarIcon, CheckIcon, ChevronUpIcon, ChevronDownIcon } from '../components/shared/Icons';
import { getAllServiceTags } from '@/lib/data';

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Rahul Mehta",
    title: "Homeowner, South Delhi",
    rating: 5,
    message: "LV Spaces transformed our home beautifully. The attention to detail and quality of work exceeded our expectations. Highly recommended!",
    services: ["Interior Painting", "Wood Works"],
  },
  {
    id: 2,
    name: "Priya Sharma",
    title: "Business Owner, Gurgaon",
    rating: 5,
    message: "Professional team that delivered our office renovation on time and within budget. The design suggestions were excellent.",
    services: ["Commercial Renovation", "Modular Furniture"],
  },
  {
    id: 3,
    name: "Amit Patel",
    title: "Homeowner, Noida",
    rating: 5,
    message: "Outstanding polishing work on our furniture. They brought our old pieces back to life with their expert craftsmanship.",
    services: ["Polishing", "PU Coating"],
  },
  {
    id: 4,
    name: "Sunita Agarwal",
    title: "Restaurant Owner, CP",
    rating: 5,
    message: "Amazing restaurant renovation! Complete transformation that exceeded all our expectations.",
    services: ["Commercial Space", "Interior Painting"],
  },
];

// About Hero - Responsive
function AboutHero() {
  return (
    <section className="relative h-[40vh] md:h-[50vh] min-h-[280px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-coffee to-espresso" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 md:w-60 h-40 md:h-60 border border-caramel rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 md:w-80 h-60 md:h-80 border border-caramel rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 md:w-[500px] h-80 md:h-[500px] border border-caramel/50 rounded-full" />
      </div>

      <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
        <div className="mb-4 md:mb-6">
          <Image
            src="/LVLogo.png"
            alt="LV Spaces"
            width={80}
            height={80}
            className="mx-auto md:w-[100px] md:h-[100px]"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white font-display mb-2 md:mb-4">
          About LV Spaces
        </h1>
        <p className="text-white/70 max-w-sm md:max-w-xl text-sm md:text-lg italic">
          "Elegance is not a luxury, it's lifestyle."
        </p>
        <p className="text-white/60 max-w-sm md:max-w-xl text-xs md:text-base mt-2">
          Curating luxury living experiences since 1995
        </p>
      </div>
    </section>
  );
}

// Stats Bar - Responsive
function StatsBar() {
  return (
    <div className="grid grid-cols-3 gap-4 md:gap-8 p-6 md:py-12 bg-cream-dark border-y border-sand">
      <div className="text-center">
        <p className="text-2xl md:text-5xl font-bold text-caramel font-display">30+</p>
        <p className="text-xs md:text-base text-taupe mt-1">Years Experience</p>
      </div>
      <div className="text-center">
        <p className="text-2xl md:text-5xl font-bold text-caramel font-display">500+</p>
        <p className="text-xs md:text-base text-taupe mt-1">Happy Clients</p>
      </div>
      <div className="text-center">
        <p className="text-2xl md:text-5xl font-bold text-caramel font-display">98%</p>
        <p className="text-xs md:text-base text-taupe mt-1">Satisfaction Rate</p>
      </div>
    </div>
  );
}

// About Content - Responsive
function AboutContent() {
  return (
    <section className="px-4 md:px-8 py-8 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image Grid */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden h-48">
                <Image
                  src="/painting-service.png"
                  alt="Painting Services"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-64">
                <Image
                  src="/woodwork-service.png"
                  alt="Wood Works"
                  width={300}
                  height={260}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden h-64">
                <Image
                  src="/renovation-service.png"
                  alt="Renovation"
                  width={300}
                  height={260}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48">
                <Image
                  src="/hero-interior.png"
                  alt="Interior"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-espresso font-display mb-4 md:mb-6">Our Story</h2>
            
            <div className="space-y-4 text-coffee text-sm md:text-base">
              <p className="italic text-espresso">
                "Elegance is not a luxury, it's lifestyle."
              </p>
              
              <p>
                Since 1995, LV Spaces has been the preferred choice for discerning clients seeking bespoke interior solutions 
                in Delhi NCR. We don&apos;t just design spaces—we curate lifestyle experiences that reflect sophistication, 
                elegance, and timeless beauty.
              </p>
              
              <p>
                Our atelier of master craftsmen and design visionaries collaborate to create environments that transcend 
                trends, delivering interiors that are as functional as they are exquisite. Every project is a testament 
                to our unwavering commitment to excellence.
              </p>
            </div>

            {/* Values */}
            <div className="mt-6 md:mt-8">
              <h3 className="text-lg md:text-xl font-semibold text-espresso mb-4">Our Values</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { title: "Quality First", desc: "Premium materials and expert craftsmanship" },
                  { title: "Customer Focus", desc: "Your satisfaction is our priority" },
                  { title: "Timely Delivery", desc: "We respect your time and deadlines" },
                  { title: "Fair Pricing", desc: "Transparent quotes with no hidden costs" },
                ].map((value, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-cream-dark rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-olive/20 flex items-center justify-center text-olive flex-shrink-0">
                      <CheckIcon />
                    </div>
                    <div>
                      <p className="font-medium text-espresso text-sm md:text-base">{value.title}</p>
                      <p className="text-xs md:text-sm text-taupe">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonial Card
function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-sand h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="font-semibold text-espresso">{testimonial.name}</p>
          <p className="text-xs text-taupe">{testimonial.title}</p>
        </div>
        <div className="flex items-center gap-0.5 text-gold">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} filled={i < testimonial.rating} />
          ))}
        </div>
      </div>

      {/* Service Tags */}
      <div className="flex flex-wrap gap-1 mb-3">
        {testimonial.services.map((service, i) => (
          <span 
            key={i}
            className="px-2 py-0.5 bg-caramel/10 text-caramel text-xs rounded-full"
          >
            {service}
          </span>
        ))}
      </div>

      {/* Message */}
      <p className="text-sm text-coffee leading-relaxed flex-1">
        &quot;{testimonial.message}&quot;
      </p>
    </div>
  );
}

// Testimonials Section - Responsive
function TestimonialsSection() {
  return (
    <section className="px-4 md:px-8 py-8 md:py-16 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xl md:text-3xl font-bold text-espresso font-display mb-2">What Our Clients Say</h2>
          <p className="text-sm md:text-base text-taupe">Real feedback from our happy customers</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Feedback Form - Responsive
function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    services: [] as string[],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);

  const availableTags = getAllServiceTags();

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          rating: formData.rating,
          service: formData.services.join(', '),
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          rating: 5,
          services: [],
          message: '',
        });
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="px-4 md:px-8 py-8 md:py-16">
        <div className="max-w-xl mx-auto text-center py-12 bg-olive/10 rounded-2xl">
          <div className="w-16 h-16 bg-olive/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckIcon />
          </div>
          <h3 className="text-lg font-semibold text-espresso mb-2">Thank You!</h3>
          <p className="text-sm text-taupe">Your feedback has been submitted successfully.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 md:px-8 py-8 md:py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-3xl font-bold text-espresso font-display mb-2">Share Your Experience</h2>
          <p className="text-sm md:text-base text-taupe">Help others by sharing your feedback</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-sand">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-coffee mb-1">Your Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:border-caramel focus:ring-2 focus:ring-caramel/20 outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-coffee mb-1">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:border-caramel focus:ring-2 focus:ring-caramel/20 outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-coffee mb-2">Rating *</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className={`text-2xl md:text-3xl transition-transform hover:scale-110 ${
                    star <= formData.rating ? 'text-gold' : 'text-sand'
                  }`}
                >
                  <StarIcon filled={star <= formData.rating} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-coffee mb-1">Services Used</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowServiceDropdown(!showServiceDropdown)}
                className="w-full px-4 py-3 rounded-xl border border-sand bg-white text-left flex items-center justify-between"
              >
                <span className={formData.services.length > 0 ? 'text-coffee' : 'text-taupe'}>
                  {formData.services.length > 0 
                    ? `${formData.services.length} selected`
                    : 'Select services'
                  }
                </span>
                {showServiceDropdown ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </button>
              
              {showServiceDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-sand rounded-xl shadow-lg z-10 max-h-48 overflow-y-auto hide-scrollbar">
                  <div className="p-3 flex flex-wrap gap-2">
                    {availableTags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleService(tag)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                          formData.services.includes(tag)
                            ? 'bg-caramel text-white'
                            : 'bg-cream-dark text-coffee hover:bg-sand'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {formData.services.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.services.map((service) => (
                  <span
                    key={service}
                    className="px-2 py-1 bg-caramel/10 text-caramel text-xs rounded-full flex items-center gap-1"
                  >
                    {service}
                    <button
                      type="button"
                      onClick={() => toggleService(service)}
                      className="text-caramel/70 hover:text-caramel"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-coffee mb-1">Your Feedback *</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:border-caramel focus:ring-2 focus:ring-caramel/20 outline-none resize-none"
              rows={4}
              placeholder="Share your experience with us..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary py-4 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </button>
        </form>
      </div>
    </section>
  );
}

// Footer - Desktop
function Footer() {
  return (
    <footer className="hidden md:block bg-espresso text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center text-white/50 text-sm">
          © {new Date().getFullYear()} LV Spaces. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function AboutPage() {
  return (
    <ResponsiveLayout>
      <AboutHero />
      <StatsBar />
      <AboutContent />
      <TestimonialsSection />
      <FeedbackForm />
      <Footer />
    </ResponsiveLayout>
  );
}
