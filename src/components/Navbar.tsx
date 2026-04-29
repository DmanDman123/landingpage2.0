import React from 'react';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-4 bg-brand-bg/90 backdrop-blur-lg border-b border-brand-border">
      <a href="#" className="flex items-center no-underline">
        <img 
          src="https://dieberater.de/wp-content/uploads/2025/01/Die-Berater-Logo-2025.png" 
          alt="Die Berater Logo" 
          className="h-8 md:h-10 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </a>
      <div className="flex items-center gap-6">
        <a href="tel:+4935187446264" className="hidden md:block text-xs md:text-sm text-brand-grey no-underline tracking-wide hover:text-brand-accent transition-colors">
          +49 351 874 462 64
        </a>
        <a 
          href="#analyse" 
          className="bg-brand-button text-brand-bg font-sans text-xs md:text-sm font-semibold tracking-wider px-4 md:px-6 py-2.5 no-underline transition-all hover:bg-brand-button-hover hover:-translate-y-0.5 active:translate-y-0"
        >
          Jetzt Analyse anfragen
        </a>
      </div>
    </nav>
  );
};
