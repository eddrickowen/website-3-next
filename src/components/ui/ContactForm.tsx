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
];

export default function ContactForm({ dark = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-2">
          <span className="material-symbols-outlined text-accent text-3xl">check_circle</span>
        </div>
        <h3 className={`font-headline text-2xl font-bold ${dark ? "text-dark-fg" : "text-foreground"}`}>
          Message Sent
        </h3>
        <p className={`font-sans text-sm leading-relaxed max-w-xs ${dark ? "text-dark-muted" : "text-foreground/60"}`}>
          Thank you for reaching out. Our team will get back to you within 1–2 business days.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 label-mono text-[10px] text-accent underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
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
          <label className={labelClass} htmlFor="cf-company">Company</label>
          <input
            id="cf-company"
            name="company"
            type="text"
            placeholder="PT. Your Company"
            className={inputClass}
          />
        </div>
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
      <div>
        <label className={labelClass} htmlFor="cf-service">Service Interest</label>
        <select
          id="cf-service"
          name="service"
          className={inputClass}
          defaultValue=""
        >
          <option value="" disabled>Select a service...</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          placeholder="Describe your project or inquiry..."
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-accent text-dark-bg font-headline font-bold text-sm tracking-wide rounded-xl hover:bg-accent/90 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
