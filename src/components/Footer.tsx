import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-brand-bg-mid border-t border-brand-border px-6 md:px-12 py-9 md:py-9 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-5 flex-wrap">
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
        <img 
          src="https://dieberater.de/wp-content/uploads/2025/01/Die-Berater-Logo-2025.png" 
          alt="Die Berater Logo" 
          className="h-6 md:h-8 w-auto object-contain opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
          referrerPolicy="no-referrer"
        />
        <div className="text-[11px] text-white/14 font-normal">
          Online Marketing GmbH & Co. KG · Dresden
        </div>
      </div>
      <div className="flex gap-7 items-center justify-center flex-wrap">
        <a href="https://dieberater.de/impressum/" className="text-xs text-white/20 no-underline transition-colors hover:text-brand-accent tracking-wider font-medium">
          Impressum
        </a>
        <a href="https://dieberater.de/datenschutz/" className="text-xs text-white/20 no-underline transition-colors hover:text-brand-accent tracking-wider font-medium">
          Datenschutz
        </a>
        <a href="tel:+4935187446264" className="text-xs text-white/20 no-underline transition-colors hover:text-brand-accent tracking-wider font-medium">
          +49 351 874 462 64
        </a>
      </div>
    </footer>
  );
};
