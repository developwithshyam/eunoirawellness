"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { referContent } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export function ReferCta() {
  const [copied, setCopied] = useState(false);

  const handleRefer = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore — clipboard may be unavailable outside secure context
    }
  };

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-charcoal px-8 py-14 text-center md:px-16 md:py-20">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-purple-200/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-lavender/20 blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                {referContent.heading}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/70">
                {referContent.body}
              </p>
              <Button
                type="button"
                onClick={handleRefer}
                className="mt-8 !bg-white !text-purple-deep hover:!bg-white/90"
                aria-live="polite"
              >
                {copied ? "Link copied!" : referContent.cta}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
