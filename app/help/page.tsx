'use client';

import { useState } from 'react';
import ResponsiveLayout from '../components/shared/ResponsiveLayout';
import { 
  MailIcon, 
  LocationIcon, 
  CheckIcon,
  StarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '../components/shared/Icons';
import { getAllServiceTags } from '@/lib/data';

// Contact Info Card - Responsive
function ContactInfo() {
  return (
    <section className="px-4 md:px-8 py-6 md:py-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-coffee to-espresso rounded-2xl p-6 md:p-10 text-white">
          <h2 className="text-xl md:text-3xl font-bold font-display mb-2">Get In Touch</h2>
          <p className="text-white/70 text-sm italic mb-4 md:mb-6">We're here to assist you with your luxury living aspirations</p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <a 
              href="mailto:lvinteriorworks@gmail.com"
              className="flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-caramel/20 rounded-lg flex items-center justify-center">
                <MailIcon />
              </div>
              <div>
                <p className="text-xs text-white/70">Email Us</p>
                <p className="text-sm md:text-base font-medium">lvinteriorworks@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-4 bg-white/10 rounded-xl">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-caramel/20 rounded-lg flex items-center justify-center">
                <LocationIcon />
              </div>
              <div>
                <p className="text-xs text-white/70">Location</p>
                <p className="text-sm md:text-base font-medium">Delhi NCR, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Query Form
function QueryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
      const res = await fetch('/api/queries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.services.join(', '),
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting query:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12 bg-olive/10 rounded-2xl">
        <div className="w-16 h-16 bg-olive/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckIcon />
        </div>
        <h3 className="text-lg font-semibold text-espresso mb-2">Query Submitted!</h3>
        <p className="text-sm text-taupe mb-4">We&apos;ll get back to you within 24-48 hours.</p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              services: [],
              message: '',
            });
          }}
          className="text-caramel text-sm font-medium hover:underline"
        >
          Submit Another Query
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-coffee mb-1">Full Name *</label>
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
          <label className="block text-sm font-medium text-coffee mb-1">Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:border-caramel focus:ring-2 focus:ring-caramel/20 outline-none"
            placeholder="Enter your phone number"
          />
        </div>
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

      <div>
        <label className="block text-sm font-medium text-coffee mb-1">Services Interested In</label>
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
                    className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
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
        <label className="block text-sm font-medium text-coffee mb-1">Your Message *</label>
        <textarea
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:border-caramel focus:ring-2 focus:ring-caramel/20 outline-none resize-none"
          rows={4}
          placeholder="Tell us about your requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary py-4 disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Query'}
      </button>
    </form>
  );
}

// Feedback Form
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
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12 bg-olive/10 rounded-2xl">
        <div className="w-16 h-16 bg-olive/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckIcon />
        </div>
        <h3 className="text-lg font-semibold text-espresso mb-2">Thank You!</h3>
        <p className="text-sm text-taupe mb-4">Your feedback has been submitted successfully.</p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              email: '',
              rating: 5,
              services: [],
              message: '',
            });
          }}
          className="text-caramel text-sm font-medium hover:underline"
        >
          Submit Another Feedback
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
        <label className="block text-sm font-medium text-coffee mb-2">Your Rating *</label>
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
                    className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
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
  );
}

// Tab Selector
function TabSelector({ 
  activeTab, 
  onTabChange 
}: { 
  activeTab: 'query' | 'feedback'; 
  onTabChange: (tab: 'query' | 'feedback') => void;
}) {
  return (
    <div className="flex gap-2 p-1 bg-cream-dark rounded-xl">
      <button
        onClick={() => onTabChange('query')}
        className={`flex-1 py-3 px-4 md:px-6 rounded-lg text-sm md:text-base font-medium transition-colors ${
          activeTab === 'query'
            ? 'bg-white text-espresso shadow-sm'
            : 'text-taupe hover:text-coffee'
        }`}
      >
        Submit Query
      </button>
      <button
        onClick={() => onTabChange('feedback')}
        className={`flex-1 py-3 px-4 md:px-6 rounded-lg text-sm md:text-base font-medium transition-colors ${
          activeTab === 'feedback'
            ? 'bg-white text-espresso shadow-sm'
            : 'text-taupe hover:text-coffee'
        }`}
      >
        Give Feedback
      </button>
    </div>
  );
}

// FAQ Section - Responsive
function FAQSection() {
  return (
    <section className="px-4 md:px-8 py-8 md:py-16 bg-cream-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-lg md:text-2xl font-bold text-espresso font-display">Frequently Asked Questions</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { q: "What areas do you serve?", a: "We serve all areas within Delhi NCR including Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad." },
            { q: "How long does a typical project take?", a: "Project duration varies based on scope. A room painting takes 2-3 days, while complete renovations may take 2-4 weeks." },
            { q: "Do you provide free estimates?", a: "Yes! We provide free site visits and detailed estimates for all our services." },
            { q: "What payment methods do you accept?", a: "We accept cash, bank transfers, UPI, and cheques. 50% advance is required to start work." },
          ].map((faq, i) => (
            <details key={i} className="bg-white rounded-xl overflow-hidden group">
              <summary className="p-4 md:p-5 font-medium text-espresso cursor-pointer flex items-center justify-between text-sm md:text-base">
                {faq.q}
                <span className="text-taupe group-open:rotate-180 transition-transform">
                  <ChevronDownIcon />
                </span>
              </summary>
              <p className="px-4 md:px-5 pb-4 md:pb-5 text-sm text-coffee">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer - Desktop
function Footer() {
  return (
    <footer className="hidden md:block bg-espresso text-white py-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center text-white/50 text-sm">
          © {new Date().getFullYear()} LV Spaces. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function HelpPage() {
  const [activeTab, setActiveTab] = useState<'query' | 'feedback'>('query');

  return (
    <ResponsiveLayout>
      {/* Header */}
      <div className="px-4 md:px-8 pt-6 md:pt-10 pb-2 max-w-4xl mx-auto text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-espresso font-display">Help & Feedback</h1>
        <p className="text-sm md:text-lg text-taupe mt-1">Have questions? We&apos;re here to help.</p>
      </div>

      <ContactInfo />

      {/* Forms Section */}
      <section className="px-4 md:px-8 py-6 md:py-10">
        <div className="max-w-2xl mx-auto">
          <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />
          
          <div className="mt-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-sand">
            {activeTab === 'query' ? <QueryForm /> : <FeedbackForm />}
          </div>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </ResponsiveLayout>
  );
}
