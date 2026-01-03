'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

// Types for selected services
export interface SelectedService {
  serviceId: number;
  serviceTitle: string;
  subcategoryId?: string;
  subcategoryTitle?: string;
  nestedSubcategoryId?: string;
  nestedSubcategoryTitle?: string;
}

interface BookingContextType {
  // Selected services (cart)
  selectedServices: SelectedService[];
  addService: (service: SelectedService) => void;
  removeService: (service: SelectedService) => void;
  clearServices: () => void;
  isServiceSelected: (serviceId: number, subcategoryId?: string, nestedSubcategoryId?: string) => boolean;
  
  // Booking flow state
  bookingStep: 'selection' | 'details' | 'contract' | 'success';
  setBookingStep: (step: 'selection' | 'details' | 'contract' | 'success') => void;
  
  // Booking form data
  bookingData: {
    name: string;
    phone: string;
    email: string;
    address: string;
    budget: string;
  };
  setBookingData: (data: Partial<BookingContextType['bookingData']>) => void;
  
  // Booking reference
  bookingReference: string;
  setBookingReference: (ref: string) => void;
  
  // Contract acceptance
  contractAccepted: boolean;
  setContractAccepted: (accepted: boolean) => void;
  
  // UI State
  showBookingModal: boolean;
  setShowBookingModal: (show: boolean) => void;
  showCartPreview: boolean;
  setShowCartPreview: (show: boolean) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  // Cart state
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  
  // Booking flow
  const [bookingStep, setBookingStep] = useState<'selection' | 'details' | 'contract' | 'success'>('selection');
  const [bookingData, setBookingDataState] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    budget: '',
  });
  const [bookingReference, setBookingReference] = useState('');
  const [contractAccepted, setContractAccepted] = useState(false);
  
  // UI State
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showCartPreview, setShowCartPreview] = useState(false);

  // Add service to cart
  const addService = useCallback((service: SelectedService) => {
    setSelectedServices(prev => {
      // Check if already exists
      const exists = prev.some(s => 
        s.serviceId === service.serviceId &&
        s.subcategoryId === service.subcategoryId &&
        s.nestedSubcategoryId === service.nestedSubcategoryId
      );
      
      if (exists) return prev;
      return [...prev, service];
    });
  }, []);

  // Remove service from cart
  const removeService = useCallback((service: SelectedService) => {
    setSelectedServices(prev => 
      prev.filter(s => !(
        s.serviceId === service.serviceId &&
        s.subcategoryId === service.subcategoryId &&
        s.nestedSubcategoryId === service.nestedSubcategoryId
      ))
    );
  }, []);

  // Clear all services
  const clearServices = useCallback(() => {
    setSelectedServices([]);
    setBookingStep('selection');
    setContractAccepted(false);
    setBookingDataState({
      name: '',
      phone: '',
      email: '',
      address: '',
      budget: '',
    });
  }, []);

  // Check if service is selected
  const isServiceSelected = useCallback((serviceId: number, subcategoryId?: string, nestedSubcategoryId?: string) => {
    return selectedServices.some(s => 
      s.serviceId === serviceId &&
      s.subcategoryId === subcategoryId &&
      s.nestedSubcategoryId === nestedSubcategoryId
    );
  }, [selectedServices]);

  // Update booking data
  const setBookingData = useCallback((data: Partial<BookingContextType['bookingData']>) => {
    setBookingDataState(prev => ({ ...prev, ...data }));
  }, []);

  return (
    <BookingContext.Provider
      value={{
        selectedServices,
        addService,
        removeService,
        clearServices,
        isServiceSelected,
        bookingStep,
        setBookingStep,
        bookingData,
        setBookingData,
        bookingReference,
        setBookingReference,
        contractAccepted,
        setContractAccepted,
        showBookingModal,
        setShowBookingModal,
        showCartPreview,
        setShowCartPreview,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}

