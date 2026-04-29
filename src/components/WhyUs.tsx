import React from 'react';
import { motion } from 'motion/react';
import { User, Eye, FileText, Zap, Star, Youtube, Award, Calendar, ArrowRight } from 'lucide-react';

const stats = [
  { 
    num: '10+', 
    label: 'Jahre Google Ads Erfahrung',
    icon: <Calendar className="w-4 h-4" />
  },
  { 
    num: '26K+', 
    label: 'YouTube-Abonnenten',
    icon: <Youtube className="w-4 h-4" />
  },
  { 
    num: '4,9★', 
    label: '103 Google-Bewertungen',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    )
  },
  { 
    num: '#1', 
    label: 'Google Ads Kanal im DACH-Raum',
    icon: <Award className="w-4 h-4" />
  }
];

const features = [
  {
    icon: <User className="w-6 h-6" />,
    title: 'Fester Ansprechpartner',
    text: 'Immer derselbe SEA-Experte — der dein Konto, deine Ziele und deinen Markt kennt. Kein Wechsel, kein Einarbeiten von vorn.'
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: '100 % Transparenz',
    text: 'Keine versteckten Kosten, keine aufgeblähten Reports. Du weißt jederzeit genau, wofür du bezahlst — und was es bringt.'
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Faire Verträge',
    text: 'Keine langen Bindungen, die nur der Agentur nützen. Wir überzeugen monatlich durch Ergebnisse — nicht durch Klauseln.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Proaktive Optimierung',
    text: 'Regelmäßige Jour-fixe, kontinuierliche Anpassungen und Empfehlungen — nicht erst wenn du fragst, sondern bevor Probleme entstehen.'
  }
];

export const WhyUs = () => {
  return (
    <section className="relative py-32 overflow-hidden border-t border-brand-border bg-brand-bg">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-accent/20 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section - Full Width for better alignment */}
        <div className="max-w-4xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-white mb-8"
          >
            Boutique heißt:<br />
            Dein Konto.<br />
            <em className="not-italic text-brand-accent">Volle Aufmerksamkeit.</em>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-normal leading-relaxed text-brand-grey max-w-2xl"
          >
            Wir betreuen ausgewählte E-Commerce Shops — nicht Hunderte, sondern die, bei denen wir echten Unterschied machen. Persönlicher SEA-Manager, transparente Vergütung, messbare Ergebnisse.
          </motion.p>
        </div>

        {/* Unified Grid - Perfectly Flush (Bündig) */}
        <div className="flex flex-col border border-brand-border bg-brand-border gap-px overflow-hidden">
          
          {/* Row 1: Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px">
            {stats.map((stat, i) => {
              const content = (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-8 md:p-10 bg-brand-bg-card hover:bg-brand-bg-card-2 transition-all group relative overflow-hidden h-full"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <div className="scale-[2.5] origin-top-right text-brand-accent">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="font-sans text-4xl md:text-5xl font-extrabold text-brand-accent mb-3 tracking-tighter">
                      {stat.num}
                    </div>
                    <div className="text-[11px] font-bold text-brand-grey uppercase tracking-[0.15em] leading-tight max-w-[140px]">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );

              if (stat.label.includes('Google-Bewertungen')) {
                return (
                  <a 
                    key={i}
                    href="https://share.google/bdkxLBnfqNUvlj9Ns" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {content}
                  </a>
                );
              }
              return content;
            })}
          </div>

          {/* Row 2: Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="p-8 md:p-10 bg-brand-bg-mid hover:bg-brand-bg-card transition-all group flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-8 group-hover:bg-brand-accent group-hover:text-brand-bg transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="font-sans text-xl font-bold text-white mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm font-normal leading-relaxed text-brand-grey group-hover:text-white/90 transition-colors flex-grow">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
