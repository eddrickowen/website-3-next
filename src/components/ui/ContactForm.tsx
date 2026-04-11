"use client";

import { useState, FormEvent, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface ContactFormProps {
  dark?: boolean;
}

export default function ContactForm({ dark = false }: ContactFormProps) {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const SERVICE_OPTIONS = useMemo(() => [
    t("home.services.items.0.title"),
    t("home.services.items.1.title"),
    t("home.services.items.2.title"),
    t("home.services.items.3.title"),
    t("home.services.items.4.title"),
    t("home.services.items.5.title"),
    t("home.services.items.6.title"),
    t("home.services.items.7.title"),
    t("home.services.items.8.title"),
    "General Inquiry",
    t("home.lead.formOther"),
  ], [t]);

  const inputClass = dark
    ? "w-full bg-white/5 border border-white/10 text-dark-fg placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent/40 rounded-xl px-4 py-3 font-sans text-sm outline-none transition-all"
    : "w-full bg-surface-dim border border-outline focus:border-accent focus:ring-1 focus:ring-accent/40 rounded-xl px-4 py-3 font-sans text-sm outline-none transition-all text-foreground placeholder-foreground/40";

  const labelClass = `label-mono text-[10px] mb-2 block ${dark ? "text-dark-muted" : "text-foreground/50"}`;

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // REPLACE 'FORM_ID_HERE' with your real Formspree ID
      const response = await fetch("https://formspree.io/f/FORM_ID_HERE", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Submission failed. Please check your details and try again.");
      }
    } catch (err) {
      setError("Unable to connect to service. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="flex flex-col items-center justify-center py-12 text-center gap-4"
      >
        <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-2" aria-hidden="true">
          <span className="material-symbols-outlined text-accent text-3xl">check_circle</span>
        </div>
        <h3 className={`font-headline text-2xl font-bold ${dark ? "text-dark-fg" : "text-foreground"}`}>
          {t("home.lead.formSuccessTitle")}
        </h3>
        <p className={`font-sans text-sm leading-relaxed max-w-xs ${dark ? "text-dark-muted" : "text-foreground/60"}`}>
          {t("home.lead.formSuccessDesc")}
        </p>
        <button
          onClick={() => { setSubmitted(false); setSelectedService(""); }}
          className="mt-4 label-mono text-[10px] text-accent underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-accent/50 rounded"
        >
          {t("home.lead.formSuccessCta")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pb-10 md:pb-0" aria-busy={loading} noValidate>
      <div>
        <label className={labelClass} htmlFor="cf-name">{t("home.lead.formName")}</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          placeholder={t("home.lead.formPlaceholderName")}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="cf-company">{t("home.lead.formCompany")}</label>
        <input
          id="cf-company"
          name="company"
          type="text"
          required
          placeholder={t("home.lead.formPlaceholderCompany")}
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="cf-city">{t("home.lead.formCity")}</label>
          <input
            id="cf-city"
            name="city"
            type="text"
            required
            placeholder={t("home.lead.formPlaceholderCity")}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-email">{t("home.lead.formEmail")}</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder={t("home.lead.formPlaceholderEmail")}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="cf-service">{t("home.lead.formService")}</label>
        <select
          id="cf-service"
          name="service"
          className={inputClass}
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          required
        >
          <option value="" disabled>{t("home.lead.formPlaceholderService")}</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {selectedService === t("home.lead.formOther") && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
          <label className={labelClass} htmlFor="cf-custom-service">{t("home.lead.formSpecify")}</label>
          <input
            id="cf-custom-service"
            name="custom_service"
            type="text"
            required
            placeholder={t("home.lead.formPlaceholderSpecify")}
            className={inputClass}
          />
        </div>
      )}

      <div>
        <label className={labelClass} htmlFor="cf-message">{t("home.lead.formMessage")}</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={3}
          placeholder={t("home.lead.formPlaceholderMessage")}
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <p className="text-red-500 font-sans text-[11px] font-medium animate-in fade-in slide-in-from-top-1">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-accent text-dark-bg font-headline font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-accent/90 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-accent/20"
      >
        {loading ? t("home.lead.formSending") : t("home.lead.formSubmit")}
      </button>
    </form>
  );
}
