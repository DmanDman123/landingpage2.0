import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    num: '01',
    title: 'Formular ausfüllen',
    text: 'Kurzes Formular — nur das Nötigste. Shop-URL, Budget, Kontakt. Fertig in unter 2 Minuten.',
    time: '~2 Min.'
  },
  {
    num: '02',
    title: 'Konto-Zugang teilen',
    text: 'Wir melden uns und erklären, wie du uns sicher lesenden Zugang zu deinem Google Ads Konto gibst.',
    time: '~5 Min.'
  },
  {
    num: '03',
    title: 'Analyse durch Experten',
    text: 'Unser SEA-Team analysiert Kampagnen, Gebote, Suchanfragen, Conversion-Tracking und Budgetverteilung.',
    time: '48 Std.'
  },
  {
    num: '04',
    title: 'Video & Empfehlungen',
    text: 'Persönliches Analyse-Video plus schriftliche Quick-Wins. Vollständig kostenlos und ohne Verpflichtung.',
    time: 'Kostenlos'
  }
];

export const Process = () => {
  return (
    <section className="bg-brand-bg-mid border-t border-brand-border px-6 md:px-12 py-32">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="font-syne text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.08] tracking-tight text-white mb-14">
          Von der Anfrage zur<br />
          <em className="not-italic text-brand-accent">Analyse in 48 Stunden.</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-border">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-brand-bg p-10 relative overflow-hidden transition-all duration-500 hover:bg-brand-bg-card"
            >
              {/* Oversized Background Number */}
              <div className="absolute -top-4 -right-4 font-syne text-[120px] font-black leading-none text-white/[0.03] transition-all duration-700 group-hover:text-brand-accent/[0.08] group-hover:scale-110 pointer-events-none select-none">
                {step.num}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-8 bg-brand-accent/40 group-hover:w-12 transition-all duration-500" />
                  <span className="font-syne text-[10px] font-bold tracking-[0.2em] uppercase text-brand-accent">
                    Schritt {step.num}
                  </span>
                </div>
                
                <h3 className="font-syne text-lg font-extrabold text-white mb-4 tracking-tight group-hover:text-brand-accent transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-sm font-normal leading-relaxed text-brand-grey mb-6">
                  {step.text}
                </p>
                
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                  <span className="text-[11px] font-bold tracking-widest text-brand-accent/80 uppercase">
                    {step.time}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
