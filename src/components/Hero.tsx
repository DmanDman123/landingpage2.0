import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Star, Clock, ShieldCheck, Play, Volume2, VolumeX } from 'lucide-react';

export const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-57px)] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(243,177,124,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-brand-accent) 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

      <div className="flex flex-col justify-start pt-12 md:pt-16 lg:pt-20 px-6 md:px-12 lg:pl-20 lg:pr-12 pb-16 lg:pb-20 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-white mb-6 font-syne"
        >
          Dein Google Ads Konto<br />
          <em className="not-italic text-brand-accent">verliert Geld.</em>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl font-medium text-white/90 mb-8 max-w-xl leading-snug"
        >
          Exklusiv für E-Commerce Shops ab <span className="text-brand-accent">5.000 € monatlichem Ad-Spend.</span>
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-base md:text-lg font-normal leading-relaxed text-brand-grey max-w-lg mb-10"
        >
          Kein Verkaufsdruck, kein generischer Report. Du erhältst ein individuelles Video-Audit von Experten mit konkreten Quick-Wins für deinen Shop — kostenlos und in 48 Stunden.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12"
        >
          {[
            'Persönliches Video-Audit',
            'E-Commerce Fokus',
            'Ab 5.000 € Werbebudget',
            'Keine Verpflichtung'
          ].map((benefit, i) => (
            <div key={i} className="flex items-center gap-3 text-sm font-semibold text-white/90">
              <div className="w-5 h-5 bg-brand-accent rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(243,177,124,0.3)]">
                <Check className="w-3 h-3 text-brand-bg" strokeWidth={4} />
              </div>
              {benefit}
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-6 flex-wrap mb-12"
        >
          <a 
            href="#analyse" 
            className="group relative inline-flex items-center gap-3 bg-brand-button text-brand-bg font-instrument text-base md:text-lg font-bold px-10 py-5 no-underline transition-all hover:bg-brand-button-hover hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(255,174,114,0.4)] active:translate-y-0"
          >
            Analyse jetzt anfordern
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a 
            href="https://share.google/bdkxLBnfqNUvlj9Ns" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col gap-1 group/reviews"
          >
            <div className="flex items-center gap-1 text-brand-accent transition-transform group-hover/reviews:scale-105 origin-left">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <div className="text-xs text-brand-grey font-bold uppercase tracking-widest group-hover/reviews:text-white transition-colors flex items-center gap-2">
              4,9/5 · Google Reviews
              <svg viewBox="0 0 24 24" className="w-3 h-3 opacity-50 group-hover/reviews:opacity-100 transition-opacity">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </div>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-8 pt-8 border-t border-brand-border/50 flex-wrap"
        >
          <div className="flex items-center gap-2.5 text-[11px] text-brand-grey font-bold uppercase tracking-widest">
            <Star className="w-4 h-4 text-brand-accent fill-brand-accent" />
            #1 Kanal DACH
          </div>
          <div className="flex items-center gap-2.5 text-[11px] text-brand-grey font-bold uppercase tracking-widest">
            <Clock className="w-4 h-4 text-brand-accent" />
            10+ Jahre Erfahrung
          </div>
          <div className="flex items-center gap-2.5 text-[11px] text-brand-grey font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-brand-accent" />
            Faire Verträge
          </div>
        </motion.div>
      </div>

      <div className="relative bg-brand-bg-mid/50 flex items-center justify-center overflow-hidden min-h-[560px] lg:min-h-0 border-l border-brand-border/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(243,177,124,0.08)_0%,transparent_60%)]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[280px] md:w-[320px] aspect-[9/19] bg-brand-bg shadow-[0_60px_120px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(243,177,124,0.15)] rounded-[40px] p-3 z-10"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-brand-bg rounded-b-2xl z-20" />
          <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-brand-bg-card">
            <video 
              ref={videoRef}
              className="w-full h-full object-cover block cursor-pointer"
              playsInline 
              loop 
              muted={isMuted}
              autoPlay
              onClick={() => toggleVideo()}
            >
              <source src="https://dieberater.de/wp-content/uploads/2026/03/DB-AD-Take-1-Papier-Opener.mp4" type="video/mp4" />
            </video>

            {/* Mute Toggle */}
            <button 
              onClick={toggleMute}
              className="absolute bottom-6 right-6 z-30 w-10 h-10 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white transition-all hover:bg-brand-accent hover:text-brand-bg hover:scale-110"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] cursor-pointer transition-all hover:bg-black/10"
                onClick={() => toggleVideo()}
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(243,177,124,0.4)]"
                >
                  <Play className="w-8 h-8 text-brand-bg fill-brand-bg ml-1.5" />
                </motion.div>
                <div className="absolute bottom-12 left-0 right-0 text-center">
                  <div className="text-white font-syne text-sm font-bold tracking-widest uppercase">Video abspielen</div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Floating Stats Refined */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="absolute z-20 bg-brand-bg-card/90 backdrop-blur-md border border-brand-accent/20 p-4 md:p-5 top-[5%] left-[2%] md:top-[20%] md:left-[10%] shadow-2xl"
        >
          <div className="font-syne text-3xl font-extrabold text-brand-accent leading-none mb-1 tracking-tighter">26K+</div>
          <div className="text-[10px] text-brand-grey font-bold uppercase tracking-widest">YouTube Subs</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="absolute z-20 bg-brand-bg-card/90 backdrop-blur-md border border-brand-accent/20 p-4 md:p-5 bottom-[14%] right-[2%] md:bottom-[22%] md:right-[10%] shadow-2xl"
        >
          <div className="font-syne text-3xl font-extrabold text-brand-accent leading-none mb-1 tracking-tighter">4.9★</div>
          <div className="text-[10px] text-brand-grey font-bold uppercase tracking-widest">Top Rating</div>
        </motion.div>

        {/* Decorative Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-brand-accent/5 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-brand-accent/5 rounded-full pointer-events-none" />
      </div>
    </section>
  );
};
