import React from 'react';

const logos = [
  'Megazoo', 'Trailtoys', 'NettoHifi', 'Sandiia', 'BadBikes', 'Purelia', 
  'Bartels', 'Moniz', 'Maxerio', 'Waschhelden', 'Wildnest', 'Khroom'
];

export const Logos = () => {
  return (
    <div className="bg-brand-bg-mid border-y border-brand-border px-6 md:px-12 py-12 md:py-16 overflow-hidden">
      <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-white/20 mb-10">
        Shops & Marken, die uns vertrauen
      </p>
      <div className="mask-fade-x overflow-hidden">
        <div className="flex gap-20 items-center animate-scroll-logos w-max hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, i) => (
            <span 
              key={i} 
              className="font-sans text-xl md:text-2xl font-bold tracking-widest text-white/10 uppercase whitespace-nowrap transition-colors cursor-default hover:text-brand-accent/40"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
