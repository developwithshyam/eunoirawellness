"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { contactContent } from "@/lib/content";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";

interface FormData {
  name: string;
  email: string;
  phone: string;
  intent: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  intent?: string;
  message?: string;
}

const initialForm = (intent: string): FormData => ({
  name: "",
  email: "",
  phone: "",
  intent,
  message: "",
});

function ContactForm() {
  const searchParams = useSearchParams();
  const defaultIntent = searchParams.get("intent") || "general";

  const [form, setForm] = useState<FormData>(() => initialForm(defaultIntent));
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.intent) newErrors.intent = "Please select an option";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          intent: form.intent,
          message: form.message,
          _gotcha: "",
        }),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setForm(initialForm(defaultIntent));
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-sage/30 bg-purple-mid/5 p-10 text-center"
      >
        <p className="text-2xl font-semibold text-purple-deep">
          {contactContent.formSuccess}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-colors focus:border-purple-mid focus:outline-none focus:ring-2 focus:ring-purple-mid/20 ${
              errors.name ? "border-red-400" : "border-sage/30"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-colors focus:border-purple-mid focus:outline-none focus:ring-2 focus:ring-purple-mid/20 ${
              errors.email ? "border-red-400" : "border-sage/30"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-colors focus:border-purple-mid focus:outline-none focus:ring-2 focus:ring-purple-mid/20 ${
              errors.phone ? "border-red-400" : "border-sage/30"
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
          )}
        </div>
        <div>
          <label htmlFor="intent" className="mb-1.5 block text-sm font-medium text-charcoal">
            Choose an option
          </label>
          <select
            id="intent"
            value={form.intent}
            onChange={(e) => updateField("intent", e.target.value)}
            className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-colors focus:border-purple-mid focus:outline-none focus:ring-2 focus:ring-purple-mid/20 ${
              errors.intent ? "border-red-400" : "border-sage/30"
            }`}
          >
            {contactContent.intentOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.intent && (
            <p className="mt-1 text-xs text-red-500">{errors.intent}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={`w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm transition-colors focus:border-purple-mid focus:outline-none focus:ring-2 focus:ring-purple-mid/20 ${
            errors.message ? "border-red-400" : "border-sage/30"
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>

      {error && (
        <p className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}

function ContactPageInner() {
  return (
    <>
      <section className="bg-purple-deep py-8 text-center text-white md:py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-sm md:text-base">{contactContent.bookingStrip}</p>
          <Button
            href={siteConfig.bookingUrl}
            className="mt-4 !bg-white !text-purple-deep hover:!bg-white/90"
          >
            Book a Therapist
          </Button>
        </div>
      </section>

      <section className="bg-gradient-to-b from-cream via-white to-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-semibold text-purple-deep md:text-4xl">
                {contactContent.philosophyTitle}
              </h1>
              <p className="mt-4 leading-relaxed text-charcoal/70">
                {contactContent.philosophyBody}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group flex flex-col items-center rounded-2xl border border-sage/20 bg-white p-8 text-center transition-all hover:-translate-y-1 hover:border-purple-mid/30 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-mid/10 text-purple-mid transition-colors group-hover:bg-purple-mid group-hover:text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <p className="text-sm text-sage">{contactContent.writeLabel}</p>
                <p className="mt-2 font-medium text-purple-deep">
                  {siteConfig.contact.email}
                </p>
                <p className="mt-1 text-sm text-charcoal/60">
                  {siteConfig.contact.careersEmail}
                </p>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="group flex flex-col items-center rounded-2xl border border-sage/20 bg-white p-8 text-center transition-all hover:-translate-y-1 hover:border-purple-mid/30 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-mid/10 text-purple-mid transition-colors group-hover:bg-purple-mid group-hover:text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <p className="text-sm text-sage">{contactContent.callLabel}</p>
                <p className="mt-2 font-medium text-purple-deep">
                  {siteConfig.contact.phone}
                </p>
              </a>

              <a
                href={getWhatsAppUrl("contact")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center rounded-2xl border border-sage/20 bg-white p-8 text-center transition-all hover:-translate-y-1 hover:border-purple-mid/30 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-mid/10 text-purple-mid transition-colors group-hover:bg-purple-mid group-hover:text-white">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <p className="text-sm text-sage">{contactContent.whatsappLabel}</p>
                <p className="mt-2 font-medium text-purple-deep">WhatsApp</p>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 text-center">
              <p className="text-sm font-semibold tracking-wider text-sage uppercase">
                {contactContent.socialTitle}
              </p>
              <div className="mt-4 flex justify-center gap-4">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-purple-mid/10 p-3 text-purple-mid transition-colors hover:bg-purple-mid hover:text-white"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-purple-mid/10 p-3 text-purple-mid transition-colors hover:bg-purple-mid hover:text-white"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 md:px-6">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-purple-deep md:text-3xl">
              {contactContent.formTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function ContactPageContent() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-sage">Loading...</div>}>
      <ContactPageInner />
    </Suspense>
  );
}
