import React from 'react';
import { motion } from 'motion/react';

const team = [
  {
    name: 'Jonas Schindler',
    role: 'Geschäftsführer & SEA Manager',
    img: 'https://dieberater.de/wp-content/uploads/2024/10/Jonas-Schindler.png',
    initials: 'JS'
  },
  {
    name: 'Malte Helmhold',
    role: 'Geschäftsführer & Marketing',
    img: 'https://dieberater.de/wp-content/uploads/2024/11/Malte-Helmhold.png',
    initials: 'MH'
  },
  {
    name: 'Krystian Ueberberg',
    role: 'SEA Manager',
    img: 'https://dieberater.de/wp-content/uploads/2024/11/Krystian-Ueberberg.png',
    initials: 'KÜ'
  },
  {
    name: 'Daniel Wolff',
    role: 'SEA Manager',
    img: 'https://dieberater.de/wp-content/uploads/2024/11/Daniel-Wolff.png',
    initials: 'DW'
  },
  {
    name: 'Hanna Richter',
    role: 'UX & SEA Managerin',
    img: 'https://dieberater.de/wp-content/uploads/2024/11/Hanna-Richter.png',
    initials: 'HR'
  }
];

export const Team = () => {
  return (
    <section className="px-6 md:px-12 py-32 border-t border-brand-border">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-syne text-3xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-white mb-20">
          Die Experten hinter<br />
          <em className="not-italic text-brand-accent">deinem Konto.</em>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-brand-border mt-14">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-brand-bg p-8 pb-12 text-center transition-all duration-500 hover:bg-brand-bg-card relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-accent scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
              
              <div className="relative aspect-[3/4] w-full mx-auto mb-8 rounded-2xl overflow-hidden border-2 border-brand-border transition-all duration-500 group-hover:border-brand-accent shadow-2xl z-10 bg-brand-bg-card">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain object-center block transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    (e.target as HTMLImageElement).nextElementSibling?.classList.add('flex');
                  }}
                />
                <div className="hidden absolute inset-0 bg-brand-bg-card items-center justify-center font-syne text-4xl font-extrabold text-brand-accent">
                  {member.initials}
                </div>
              </div>

              <div className="relative z-10">
                <div className="font-syne text-lg md:text-xl font-bold text-white mb-2 tracking-tight group-hover:text-brand-accent transition-colors duration-300">
                  {member.name}
                </div>
                <div className="text-[13px] text-brand-grey font-normal leading-relaxed">
                  {member.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
