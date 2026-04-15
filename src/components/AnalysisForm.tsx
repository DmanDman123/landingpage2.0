import React, { useState } from 'react';
import { Star, Check, Clock, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export const AnalysisForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    company: '',
    email: '',
    phone: '',
    google_ads_id: '',
    budget: '',
    website: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const portalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
    const formId = import.meta.env.VITE_HUBSPOT_FORM_ID;

    if (!portalId || !formId) {
      console.error('HubSpot IDs missing in environment variables');
      toast.error('Systemfehler: HubSpot-Konfiguration fehlt.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fields: [
              { name: 'firstname', value: formData.firstname },
              { name: 'lastname', value: formData.lastname },
              { name: 'company', value: formData.company },
              { name: 'email', value: formData.email },
              { name: 'phone', value: formData.phone },
              { name: 'google_ads_id', value: formData.google_ads_id },
              { name: 'budget', value: formData.budget },
              { name: 'website', value: formData.website },
              { name: 'message', value: formData.message }
            ],
            context: {
              pageUri: window.location.href,
              pageName: document.title
            }
          })
        }
      );

      if (response.ok) {
        toast.success('Anfrage erfolgreich gesendet! Wir melden uns in Kürze.');
        setFormData({
          firstname: '',
          lastname: '',
          company: '',
          email: '',
          phone: '',
          google_ads_id: '',
          budget: '',
          website: '',
          message: ''
        });
      } else {
        throw new Error('HubSpot submission failed');
      }
    } catch (error) {
      console.error('Error submitting to HubSpot:', error);
      toast.error('Fehler beim Senden. Bitte versuche es später erneut oder kontaktiere uns direkt.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-brand-bg px-6 md:px-12 py-32 border-t border-brand-border" id="analyse">
      <div className="max-w-[700px] mx-auto text-center">
        <h2 className="font-syne text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.08] tracking-tight text-white mb-3.5">
          Deine kostenlose<br />
          <em className="not-italic text-brand-accent">Konto-Analyse.</em>
        </h2>
        <p className="text-base font-normal text-brand-grey leading-relaxed mb-12">
          Für E-Commerce Shops ab <span className="text-brand-accent font-semibold">5.000 € monatlichem Google Ads Budget</span>. Du erhältst ein persönliches Video-Audit in 48 Stunden — kostenlos und ohne Verkaufsdruck.
        </p>
        
        <div className="bg-brand-bg-card border border-brand-border p-8 md:p-13 text-left relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.75 bg-gradient-to-r from-brand-accent to-brand-accent/30" />
          
          <div className="flex items-start gap-3 bg-brand-accent-dim border border-brand-border-strong p-3.5 md:p-4.5 mb-8 text-xs md:text-[13px] text-white/70 font-normal leading-relaxed">
            <Star className="w-4.5 h-4.5 text-brand-accent shrink-0 mt-0.25 fill-brand-accent" />
            <div>
              <strong className="text-brand-accent font-semibold">Unser Versprechen:</strong> Kein Verkaufsdruck, keine Folgeanrufe, kein Spam. Nur ehrliches, persönliches Feedback zu deinem Konto — immer.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-widest uppercase text-brand-accent/45">Vorname</label>
                <input 
                  required
                  type="text" 
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="Max" 
                  className="bg-white/4 border border-brand-border text-white font-instrument text-[15px] px-4 py-3.5 outline-none transition-all focus:border-brand-accent focus:bg-brand-accent/3"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-widest uppercase text-brand-accent/45">Nachname</label>
                <input 
                  required
                  type="text" 
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Mustermann" 
                  className="bg-white/4 border border-brand-border text-white font-instrument text-[15px] px-4 py-3.5 outline-none transition-all focus:border-brand-accent focus:bg-brand-accent/3"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold tracking-widest uppercase text-brand-accent/45">Firma / Shop-Name</label>
              <input 
                required
                type="text" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Mein Online Shop GmbH" 
                className="bg-white/4 border border-brand-border text-white font-instrument text-[15px] px-4 py-3.5 outline-none transition-all focus:border-brand-accent focus:bg-brand-accent/3"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-widest uppercase text-brand-accent/45">E-Mail Adresse</label>
                <input 
                  required
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="max@meinshop.de" 
                  className="bg-white/4 border border-brand-border text-white font-instrument text-[15px] px-4 py-3.5 outline-none transition-all focus:border-brand-accent focus:bg-brand-accent/3"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-widest uppercase text-brand-accent/45">Telefonnummer</label>
                <input 
                  required
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+49 123 456789" 
                  className="bg-white/4 border border-brand-border text-white font-instrument text-[15px] px-4 py-3.5 outline-none transition-all focus:border-brand-accent focus:bg-brand-accent/3"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold tracking-widest uppercase text-brand-accent/45">Google Ads Konto ID (10-stellig)</label>
              <input 
                required
                type="text" 
                name="google_ads_id"
                value={formData.google_ads_id}
                onChange={handleChange}
                placeholder="123-456-7890" 
                className="bg-white/4 border border-brand-border text-white font-instrument text-[15px] px-4 py-3.5 outline-none transition-all focus:border-brand-accent focus:bg-brand-accent/3"
              />
              <p className="text-[10px] text-brand-grey/60 mt-0.5 italic">Wird benötigt, um lesenden Zugriff für das Audit anzufragen.</p>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold tracking-widest uppercase text-brand-accent/45">Monatliches Google Ads Budget</label>
              <select 
                required
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="bg-white/4 border border-brand-border text-white font-instrument text-[15px] px-4 py-3.5 outline-none transition-all focus:border-brand-accent focus:bg-brand-accent/3 appearance-none"
              >
                <option value="" disabled>Bitte wählen …</option>
                <option value="5000-15000">5.000 – 15.000 €</option>
                <option value="15000-50000">15.000 – 50.000 €</option>
                <option value="50000+">Über 50.000 €</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold tracking-widest uppercase text-brand-accent/45">URL deines Online Shops</label>
              <input 
                required
                type="url" 
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://meinshop.de" 
                className="bg-white/4 border border-brand-border text-white font-instrument text-[15px] px-4 py-3.5 outline-none transition-all focus:border-brand-accent focus:bg-brand-accent/3"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold tracking-widest uppercase text-brand-accent/45">Deine Nachricht (Optional)</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Gibt es etwas Besonderes, auf das wir achten sollen?" 
                rows={3}
                className="bg-white/4 border border-brand-border text-white font-instrument text-[15px] px-4 py-3.5 outline-none transition-all focus:border-brand-accent focus:bg-brand-accent/3 resize-none"
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-brand-accent text-brand-bg font-instrument text-base font-bold px-8 py-5 border-none cursor-pointer mt-2.5 transition-all hover:bg-brand-accent-hover hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(243,177,124,0.22)] active:translate-y-0 flex items-center justify-center gap-2 tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Wird gesendet...
                </>
              ) : (
                <>
                  Kostenlose Analyse anfragen
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="flex items-center justify-center gap-5 mt-4.5 flex-wrap">
            <div className="flex items-center gap-1.5 text-xs text-white/25 font-medium">
              <Star className="w-3 h-3 text-brand-accent/55 fill-brand-accent/55" />
              Kein Spam
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/25 font-medium">
              <Check className="w-3 h-3 text-brand-accent/55" strokeWidth={3} />
              Kein Verkaufsdruck
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/25 font-medium">
              <Clock className="w-3 h-3 text-brand-accent/55" />
              Ergebnis in 48 Std.
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/25 font-medium">
              <Lock className="w-3 h-3 text-brand-accent/55" />
              100 % kostenlos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

