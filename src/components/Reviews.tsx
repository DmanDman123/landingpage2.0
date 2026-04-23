import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

const reviews = [
  {
    stars: '★★★★★',
    text: '„Unsere Google Ads Kampagnen wurden nicht nur gezielt optimiert, sondern auch strategisch weiterentwickelt. Innerhalb von 3 Monaten haben wir unseren ROAS deutlich gesteigert."',
    author: 'Rebecca A.',
    role: 'E-Commerce Managerin',
    initials: 'RA'
  },
  {
    stars: '★★★★★',
    text: '„Sehr kompetente und sympathische Agentur! Die Zusammenarbeit macht Spaß und die Ergebnisse können sich sehen lassen. Endlich eine Agentur, die wirklich zuhört."',
    author: 'Jonathan P.',
    role: 'Shop-Inhaber',
    initials: 'JP'
  },
  {
    stars: '★★★★★',
    text: '„Super Service als Rundum-Paket. Immer gut erreichbar und auch kurzfristige Projekte stellen kein Problem dar. Absolut empfehlenswert!"',
    author: 'Martin N.',
    role: 'Online-Händler',
    initials: 'MN'
  }
];

export const Reviews = () => {
  return (
    <section className="bg-brand-bg-mid px-6 md:px-12 py-32 border-t border-brand-border">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
          <div>
            <h2 className="font-syne text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.08] tracking-tight text-white mb-0">
              Echte Ergebnisse.<br />
              <em className="not-italic text-brand-accent">Echte Stimmen.</em>
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4.5">
              <div className="font-syne text-6xl font-extrabold leading-none text-brand-accent tracking-tighter">4.9</div>
              <div className="flex flex-col gap-1.5">
                <div className="text-brand-accent text-lg tracking-[3px]">★★★★★</div>
                <div className="flex items-center gap-2">
                  <div className="text-xs text-brand-grey font-medium">103 Google-Bewertungen</div>
                  <div className="flex items-center gap-1 px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-[8px] font-bold text-white/40 uppercase tracking-tighter">
                    <Star className="w-2 h-2 fill-brand-accent text-brand-accent" />
                    Verified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-brand-border mb-0.5">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-bg p-8.5 relative overflow-hidden transition-colors hover:bg-brand-bg-card group flex flex-col"
            >
              <div className="absolute top-2.5 right-5 font-syne text-8xl font-extrabold text-brand-accent/4 leading-none pointer-events-none group-hover:text-brand-accent/8 transition-colors">"</div>
              <div className="text-brand-accent text-xs tracking-[3px] mb-4">{review.stars}</div>
              <p className="text-sm font-normal leading-relaxed text-white/65 mb-5.5 italic flex-1">
                {review.text}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7.5 h-7.5 rounded-full bg-brand-accent-dim border border-brand-border-strong flex items-center justify-center font-syne text-[10px] font-extrabold text-brand-accent shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <div className="font-syne text-xs font-bold text-brand-accent-soft tracking-wider">{review.author}</div>
                    <div className="text-[11px] text-brand-grey font-normal">{review.role}</div>
                  </div>
                </div>
                <div className="opacity-40 group-hover:opacity-100 transition-opacity">
                  <svg viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8 mb-16">
          <a 
            href="https://share.google/bdkxLBnfqNUvlj9Ns" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 text-[11px] font-bold text-brand-grey uppercase tracking-widest transition-all hover:bg-white/10 hover:text-white hover:border-brand-accent/30"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Alle 103 Bewertungen auf Google lesen
          </a>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-bg-card border border-brand-border p-10 md:px-12 flex items-center justify-between gap-8 flex-wrap mt-0.5"
        >
          <div>
            <div className="font-syne text-xl font-bold text-white tracking-tight">
              Bereit für <span className="text-brand-accent">echte Ergebnisse</span>?
            </div>
            <div className="text-sm text-brand-grey mt-1">Kostenlose Konto-Analyse — persönlich, in 48 Stunden.</div>
          </div>
          <a 
            href="#analyse" 
            className="inline-flex items-center gap-2 bg-brand-button text-brand-bg font-instrument text-sm md:text-base font-bold px-8 py-4 no-underline transition-all hover:bg-brand-button-hover hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,174,114,0.3)] active:translate-y-0"
          >
            Jetzt Analyse anfragen
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
