import { AppContextType, Language } from '@/typings/generalTypes';
import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <AppContext.Provider
      value={{ language, setLanguage, isMenuOpen, toggleMenu }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error('useAppContext must be used within AppProvider');
  return context;
};
