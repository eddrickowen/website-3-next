"use client";

import { useState, FormEvent } from "react";

interface ContactFormProps {
  dark?: boolean;
}

const SERVICE_OPTIONS = [
  "Palm Oil Industrial Support (PKS)",
  "Plate Heat Exchanger (PHE) Service",
  "ABS & Electric Chiller Service",
  "Cooling Tower — Supply & Service",
  "Boiler Cleaning & Service",
  "Machining Workshop",
  "Mechanical, Electrical & Civil Works",
  "Chemical Distribution",
  "Spare Parts & Products Inquiry",
  "General Inquiry",
  "Other (Specify Below)",
];

export default function ContactForm({ dark = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const inputClass = dark
    ? "w-full bg-white/5 border border-white/10 text-dark-fg placeholder-white/30 focus:border-accent focus:ring-1 focus:ring-accent/40 rounded-xl px-4 py-3 font-sans text-sm outline-none transition-all"
    : "w-full bg-surface-dim border border-outline focus:border-accent focus:ring-1 focus:ring-accent/40 rounded-xl px-4 py-3 font-sans text-sm outline-none transition-all text-foreground placeholder-foreground/40";

  const labelClass = `label-mono text-[10px] mb-2 block ${dark ? "text-dark-muted" : "text-foreground/50"}`;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    setSubmitted(true);
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
          Message Sent
        </h3>
        <p className={`font-sans text-sm leading-relaxed max-w-xs ${dark ? "text-dark-muted" : "text-foreground/60"}`}>
          Thank you for reaching out. Our team will get back to you within 1–2 business days.
        </p>
        <button
          onClick={() => { setSubmitted(false); setSelectedService(""); }}
          className="mt-4 label-mono text-[10px] text-accent underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-accent/50 rounded"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pb-10 md:pb-0" aria-busy={loading} noValidate>
      <div>
        <label className={labelClass} htmlFor="cf-name">Full Name</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          placeholder="John Smith"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="cf-company">Company Name</label>
        <input
          id="cf-company"
          name="company"
          type="text"
          required
          placeholder="PT. Your Company"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="cf-city">Company Address (City)</label>
          <input
            id="cf-city"
            name="city"
            type="text"
            required
            placeholder="City, Province"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-email">Email Address</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="cf-service">Service Interest</label>
        <select
          id="cf-service"
          name="service"
          className={inputClass}
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          required
        >
          <option value="" disabled>Select a service...</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {selectedService === "Other (Specify Below)" && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
          <label className={labelClass} htmlFor="cf-custom-service">Please Specify Service</label>
          <input
            id="cf-custom-service"
            name="custom_service"
            type="text"
            required
            placeholder="Tell us what industrial support you need..."
            className={inputClass}
          />
        </div>
      )}

      <div>
        <label className={labelClass} htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={3}
          placeholder="Describe your project requirements or inquiry details..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-accent text-dark-bg font-headline font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-accent/90 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-accent/20"
      >
        {loading ? "Sending Enquiry..." : "Send Enquiry"}
      </button>
    </form>
  );
}
