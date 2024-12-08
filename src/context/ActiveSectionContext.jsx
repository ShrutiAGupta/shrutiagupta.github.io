// src/context/ActiveSectionContext.jsx
import React, { createContext, useContext, useState } from 'react';

const ActiveSectionContext = createContext(undefined);

export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error('useActiveSection must be used within an ActiveSectionProvider');
  }
  return context;
};