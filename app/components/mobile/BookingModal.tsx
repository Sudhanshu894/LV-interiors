'use client';

import { useState } from 'react';
import { useBooking } from '@/lib/context/BookingContext';
import { CloseIcon, TrashIcon, CheckIcon, ArrowLeftIcon } from '../shared/Icons';

interface BookingModalProps {
  onClose: () => void;
}

export default function BookingModal({ onClose }: BookingModalProps) {
  const {
    selectedServices,
    removeService,
    clearServices,
    bookingStep,
    setBookingStep,
    bookingData,
    setBookingData,
    bookingReference,
    setBookingReference,
    contractAccepted,
    setContractAccepted,
  } = useBooking();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const generateBookingReference = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'LV-';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleSubmitBooking = async () => {
    if (!contractAccepted) return;
    
    setIsSubmitting(true);
    setError('');

    try {
      const servicesList = selectedServices.map(s => {
        if (s.nestedSubcategoryTitle) {
          return `${s.serviceTitle} - ${s.subcategoryTitle} - ${s.nestedSubcategoryTitle}`;
        }
        if (s.subcategoryTitle) {
          return `${s.serviceTitle} - ${s.subcategoryTitle}`;
        }
        return s.serviceTitle;
      });

      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: bookingData.name,
          email: bookingData.email,
          phone: bookingData.phone,
          service: servicesList.join(', '),
          message: `Address: ${bookingData.address || 'N/A'}. Budget: ${bookingData.budget || 'N/A'}.`,
          status: 'requested',
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Failed to submit booking');
      }

      setBookingReference(generateBookingReference());
      setBookingStep('success');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    if (bookingStep === 'details') {
      setBookingStep('selection');
    } else if (bookingStep === 'contract') {
      setBookingStep('details');
    }
  };

  const handleClose = () => {
    if (bookingStep === 'success') {
      clearServices();
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 flex items-end justify-center">
      <div className="bg-white w-full max-h-[90vh] rounded-t-3xl overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-sand px-4 py-4 flex items-center justify-between z-10">
          {bookingStep !== 'selection' && bookingStep !== 'success' && (
            <button onClick={handleBack} className="p-2 -ml-2">
              <ArrowLeftIcon />
            </button>
          )}
          <h2 className="text-lg font-semibold text-espresso flex-1 text-center">
            {bookingStep === 'selection' && 'Selected Services'}
            {bookingStep === 'details' && 'Your Details'}
            {bookingStep === 'contract' && 'Confirm Booking'}
            {bookingStep === 'success' && 'Booking Confirmed!'}
          </h2>
          <button onClick={handleClose} className="p-2 -mr-2">
            <CloseIcon />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-4">
          {/* Selection Step - Show Cart */}
          {bookingStep === 'selection' && (
            <div className="space-y-4">
              {selectedServices.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-taupe mb-4">No services selected yet</p>
                  <button onClick={handleClose} className="btn-secondary">
                    Browse Services
                  </button>
                </div>
              ) : (
                <>
                  {selectedServices.map((service, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 bg-cream-dark rounded-xl"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-espresso">{service.serviceTitle}</p>
                        {service.subcategoryTitle && (
                          <p className="text-sm text-coffee">{service.subcategoryTitle}</p>
                        )}
                        {service.nestedSubcategoryTitle && (
                          <p className="text-xs text-taupe">{service.nestedSubcategoryTitle}</p>
                        )}
                      </div>
                      <button 
                        onClick={() => removeService(service)}
                        className="p-2 text-terracotta hover:bg-terracotta/10 rounded-lg transition-colors"
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-sand">
                    <p className="text-sm text-taupe mb-2">
                      {selectedServices.length} service{selectedServices.length > 1 ? 's' : ''} selected
                    </p>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Details Step - Form */}
          {bookingStep === 'details' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-coffee mb-1">Full Name *</label>
                <input
                  type="text"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:border-caramel focus:ring-2 focus:ring-caramel/20 outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-coffee mb-1">Phone Number *</label>
                <input
                  type="tel"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({ phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:border-caramel focus:ring-2 focus:ring-caramel/20 outline-none transition-all"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-coffee mb-1">Email Address *</label>
                <input
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({ email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:border-caramel focus:ring-2 focus:ring-caramel/20 outline-none transition-all"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-coffee mb-1">Address</label>
                <textarea
                  value={bookingData.address}
                  onChange={(e) => setBookingData({ address: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:border-caramel focus:ring-2 focus:ring-caramel/20 outline-none transition-all resize-none"
                  rows={3}
                  placeholder="Enter your address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-coffee mb-1">Budget (Optional)</label>
                <input
                  type="text"
                  value={bookingData.budget}
                  onChange={(e) => setBookingData({ budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:border-caramel focus:ring-2 focus:ring-caramel/20 outline-none transition-all"
                  placeholder="e.g., ₹50,000 - ₹1,00,000"
                />
              </div>
            </div>
          )}

          {/* Contract Step */}
          {bookingStep === 'contract' && (
            <div className="space-y-4">
              {/* Summary */}
              <div className="p-4 bg-cream-dark rounded-xl">
                <h3 className="font-medium text-espresso mb-3">Booking Summary</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="text-taupe">Name:</span> <span className="text-coffee">{bookingData.name}</span></p>
                  <p><span className="text-taupe">Phone:</span> <span className="text-coffee">{bookingData.phone}</span></p>
                  <p><span className="text-taupe">Email:</span> <span className="text-coffee">{bookingData.email}</span></p>
                  {bookingData.address && (
                    <p><span className="text-taupe">Address:</span> <span className="text-coffee">{bookingData.address}</span></p>
                  )}
                  <div className="pt-2 border-t border-sand mt-2">
                    <p className="text-taupe mb-1">Services:</p>
                    <ul className="list-disc list-inside text-coffee">
                      {selectedServices.map((s, i) => (
                        <li key={i}>
                          {s.nestedSubcategoryTitle || s.subcategoryTitle || s.serviceTitle}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="p-4 bg-cream-dark rounded-xl text-sm text-coffee">
                <p className="mb-2 font-medium">Terms & Conditions:</p>
                <ul className="list-disc list-inside space-y-1 text-taupe">
                  <li>Our team will contact you within 24-48 hours</li>
                  <li>Final pricing will be provided after site visit</li>
                  <li>50% advance required to start work</li>
                  <li>Balance payment upon completion</li>
                </ul>
              </div>

              {/* Accept checkbox */}
              <label className="flex items-start gap-3 cursor-pointer">
                <button
                  type="button"
                  onClick={() => setContractAccepted(!contractAccepted)}
                  className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                    contractAccepted 
                      ? 'bg-caramel border-caramel text-white' 
                      : 'border-taupe'
                  }`}
                >
                  {contractAccepted && <CheckIcon />}
                </button>
                <span className="text-sm text-coffee">
                  I agree to the terms and conditions and authorize LV Spaces to contact me regarding this booking.
                </span>
              </label>

              {error && (
                <p className="text-terracotta text-sm">{error}</p>
              )}
            </div>
          )}

          {/* Success Step */}
          {bookingStep === 'success' && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-olive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon />
              </div>
              <h3 className="text-xl font-semibold text-espresso mb-2">Booking Confirmed!</h3>
              <p className="text-coffee mb-4">
                Thank you for choosing LV Spaces
              </p>
              <div className="p-4 bg-cream-dark rounded-xl inline-block">
                <p className="text-sm text-taupe">Booking Reference</p>
                <p className="text-lg font-mono font-bold text-caramel">{bookingReference}</p>
              </div>
              <p className="text-sm text-taupe mt-4">
                Our team will contact you within 24-48 hours to discuss your requirements.
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t border-sand p-4 safe-area-bottom">
          {bookingStep === 'selection' && selectedServices.length > 0 && (
            <button
              onClick={() => setBookingStep('details')}
              className="w-full btn-primary py-4"
            >
              Continue to Details
            </button>
          )}
          
          {bookingStep === 'details' && (
            <button
              onClick={() => setBookingStep('contract')}
              disabled={!bookingData.name || !bookingData.phone || !bookingData.email}
              className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Review & Confirm
            </button>
          )}
          
          {bookingStep === 'contract' && (
            <button
              onClick={handleSubmitBooking}
              disabled={!contractAccepted || isSubmitting}
              className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Sign & Complete Booking'}
            </button>
          )}
          
          {bookingStep === 'success' && (
            <button
              onClick={handleClose}
              className="w-full btn-primary py-4"
            >
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

