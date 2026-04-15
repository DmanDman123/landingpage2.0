import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "Ist die Konto-Analyse wirklich kostenlos?", a: "Ja, vollständig. Wir schauen uns dein bestehendes Google Ads Konto an, zeigen dir konkret, wo Potenzial und Verluste stecken — ohne versteckte Kosten, ohne Vertrag, ohne Verpflichtung. Kein Haken." },
  { q: "Was passiert nach der Analyse — werde ich unter Druck gesetzt?", a: "Nein. Das Versprechen ‚kein Verkaufsdruck' meinen wir wörtlich. Du bekommst dein Feedback und entscheidest in Ruhe, ob eine Zusammenarbeit Sinn ergibt. Keine 1.000 Anrufe danach." },
  { q: "Für wen ist die Analyse geeignet?", a: "Für E-Commerce Shops, die bereits Google Ads schalten und mindestens 5.000 € monatliches Budget investieren. Wir haben uns auf Online-Shops spezialisiert, bei denen wir durch unsere Expertise im E-Commerce den größten Hebel ansetzen können." },
  { q: "Wie lange dauert es, bis ich das Ergebnis bekomme?", a: "In der Regel innerhalb von 48 Stunden nach Eingang deiner Anfrage. Du erhältst ein persönliches Analyse-Video plus schriftliche Optimierungsempfehlungen — individuell auf dein Konto zugeschnitten." },
  { q: "Was unterscheidet euch von anderen Agenturen?", a: "Wir sind eine Boutique-Agentur: Weniger Kunden, damit jeder einen festen Ansprechpartner hat, der das Konto wirklich kennt. Dazu kommen über 10 Jahre Erfahrung und der größte rein auf Google Ads fokussierte YouTube-Kanal im DACH-Raum." },
  { q: "Wie läuft eine laufende Zusammenarbeit ab?", a: "Du bekommst einen persönlichen SEA Manager, regelmäßige Jour-Fixe Termine, transparente Reportings und kontinuierliche Optimierung. Keine Massenabfertigung — echte, proaktive Betreuung." },
  { q: "Gibt es Mindestlaufzeiten oder lange Vertragsbindungen?", a: "Nein. Wir setzen auf faire Vertragsbedingungen ohne lange Bindungen. Unsere Kunden bleiben, weil die Ergebnisse stimmen — nicht wegen Klauseln." },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-brand-bg-mid px-6 md:px-12 py-32 border-t border-brand-border">
      <div className="max-w-[780px] mx-auto">
        <h2 className="font-syne text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.08] tracking-tight text-white mb-12">
          Alles, was du wissen<br />
          <em className="not-italic text-brand-accent">möchtest.</em>
        </h2>
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-brand-border">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full flex items-center justify-between gap-5 py-5.5 bg-transparent border-none cursor-pointer text-left font-syne text-[15px] font-bold tracking-tight transition-colors ${openIndex === i ? 'text-white' : 'text-white/70 hover:text-white'}`}
              >
                <span>{faq.q}</span>
                <div className={`w-5.5 h-5.5 shrink-0 text-brand-accent border border-brand-border-strong rounded-full p-0.5 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-full h-full" />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.38, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-[15px] font-normal leading-relaxed text-brand-grey pb-5.5">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
