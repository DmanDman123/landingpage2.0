import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Logos } from './components/Logos';
import { PainPoints } from './components/PainPoints';
import { Process } from './components/Process';
import { WhyUs } from './components/WhyUs';
import { Reviews } from './components/Reviews';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { AnalysisForm } from './components/AnalysisForm';
import { Toaster } from 'sonner';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-accent selection:text-brand-bg">
      <Toaster position="top-center" expand={true} richColors />
      {/* Announce Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-brand-accent/10 border-b border-brand-border px-6 md:px-12 py-3 text-center relative overflow-hidden z-[110]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(243,177,124,0.05),transparent)] animate-[shimmer_3s_infinite]" />
        <p className="relative z-10 text-[11px] md:text-xs font-bold tracking-[0.05em] text-brand-accent uppercase">
          <span className="inline-block w-2 h-2 bg-brand-accent rounded-full animate-pulse mr-2" />
          <span className="underline decoration-2 underline-offset-4">Sichere dir jetzt</span> dein kostenloses Audit ↓
        </p>
      </motion.div>
      <Navbar />
      
      <main>
        <Hero />
        <Logos />
        <PainPoints />
        <Process />
        <WhyUs />
        <Reviews />
        <Team />
        <FAQ />
        <AnalysisForm />
      </main>

      <Footer />
    </div>
  );
}
