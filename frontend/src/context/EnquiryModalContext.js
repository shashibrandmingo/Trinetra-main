'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const EnquiryModalContext = createContext({
  isOpen: false,
  options: {},
  openEnquiry: () => {},
  closeEnquiry: () => {},
});

export function EnquiryProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState({});

  const openEnquiry = useCallback((opts = {}) => {
    setOptions(opts || {});
    setIsOpen(true);
  }, []);

  const closeEnquiry = useCallback(() => {
    setIsOpen(false);
    setOptions({});
  }, []);

  // Global browser listeners: allow buttons anywhere (data-open-enquiry or custom window event) to trigger popup
  useEffect(() => {
    const handleCustomEvent = (event) => {
      openEnquiry(event.detail || {});
    };

    const handleGlobalClick = (e) => {
      const trigger = e.target.closest('[data-open-enquiry]');
      if (trigger) {
        e.preventDefault();
        const practiceArea = trigger.getAttribute('data-practice') || '';
        const courtForum = trigger.getAttribute('data-court') || '';
        const urgency = trigger.getAttribute('data-urgency') || '';
        const note = trigger.getAttribute('data-note') || '';
        openEnquiry({ practiceArea, courtForum, urgency, note });
      }
    };

    if (typeof window !== 'undefined') {
      window.openEnquiryModal = openEnquiry;
      window.closeEnquiryModal = closeEnquiry;
      window.addEventListener('open-enquiry-modal', handleCustomEvent);
      document.addEventListener('click', handleGlobalClick);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('open-enquiry-modal', handleCustomEvent);
        document.removeEventListener('click', handleGlobalClick);
      }
    };
  }, [openEnquiry, closeEnquiry]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  return (
    <EnquiryModalContext.Provider value={{ isOpen, options, openEnquiry, closeEnquiry }}>
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const context = useContext(EnquiryModalContext);
  if (!context) {
    throw new Error('useEnquiryModal must be used within an EnquiryProvider');
  }
  return context;
}
