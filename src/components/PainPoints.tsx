import React from 'react';
import { motion } from 'motion/react';
import { Users2, TrendingDown, Flame, AlertCircle } from 'lucide-react';

const points = [
  {
    icon: <Users2 className="w-8 h-8" />,
    title: 'Du bist nur eine Nummer',
    text: 'Massenagentur, 200 Kunden, ständig wechselnde Junior-Betreuer. Niemand kennt dein Business wirklich — und niemand will es.'
  },
  {
    icon: <TrendingDown className="w-8 h-8" />,
    title: 'Bunte Reports, kein Wachstum',
    text: 'Monatlich schöne PDFs — aber die Conversions stagnieren. Intransparenz und Buzzwords ersetzen echte Ergebnisse.'
  },
  {
    icon: <Flame className="w-8 h-8" />,
    title: 'Budget verbrennen',
    text: 'Kampagnen von der Stange, nie für deinen Shop angepasst. Jeder unoptimierte Euro ist Verlust — jeden Tag.'
  }
];

export const PainPoints = () => {
  return (
    <section className="px-6 md:px-12 py-32 max-w-[1240px] mx-auto relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-white mb-6"
          >
            Warum die meisten Agenturen<br />
            <em className="not-italic text-brand-accent">ihr Versprechen nicht halten.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-grey max-w-2xl"
          >
            Die meisten Agenturen skalieren ihr eigenes Business, nicht deins. Das Ergebnis: Standard-Setups und mangelnde Betreuung.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-brand-bg-card border border-brand-border p-10 transition-all duration-500 hover:border-brand-accent/40 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-brand-bg border border-brand-border flex items-center justify-center mb-8 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-bg transition-all duration-500 shadow-xl">
                {point.icon}
              </div>

              <h3 className="font-syne text-xl font-bold mb-4 text-white tracking-tight group-hover:text-brand-accent transition-colors">
                {point.title}
              </h3>
              <p className="text-base font-normal leading-relaxed text-brand-grey group-hover:text-white/80 transition-colors">
                {point.text}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[2px] h-full bg-brand-accent/0 group-hover:bg-brand-accent/40 transition-all duration-500" />
                <div className="absolute top-0 right-0 w-full h-[2px] bg-brand-accent/0 group-hover:bg-brand-accent/40 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 md:mt-24 flex items-center justify-center gap-4 text-brand-accent font-bold uppercase tracking-widest text-[13px] md:text-sm text-center px-6"
        >
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>Kommt dir das bekannt vor? <span className="text-white">Dann wird es Zeit für einen Wechsel.</span></span>
        </motion.div>
      </div>
    </section>
  );
};

