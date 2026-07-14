"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { conditions, therapists, therapistsSection } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

function TherapistCard({
  therapist,
}: {
  therapist: (typeof therapists)[number];
}) {
  const initials = therapist.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="w-72 shrink-0 rounded-2xl border border-sage/20 bg-white p-6 shadow-sm transition-shadow hover:shadow-md hover:shadow-purple-deep/5">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-mid to-lavender text-lg font-semibold text-white">
          {initials}
        </div>
        <div>
          <h4 className="font-medium text-purple-deep">{therapist.name}</h4>
          <p className="text-xs text-sage">{therapist.role}</p>
        </div>
      </div>
      <div className="space-y-1 text-sm text-charcoal/70">
        <p>{therapist.experience} experience</p>
        <p>{therapist.languages}</p>
        <p className="font-semibold text-purple-mid">
          From {therapist.price}/session
        </p>
      </div>
      <Button href={siteConfig.bookingUrl} size="sm" className="mt-4 w-full">
        Book Now
      </Button>
    </div>
  );
}

export function TherapistsSection() {
  const prefersReducedMotion = useReducedMotion();
  const doubled = [...therapists, ...therapists];

  return (
    <section id="therapists" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            title={therapistsSection.heading}
            subtitle={therapistsSection.subheading}
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap justify-center gap-2 md:mt-12">
            {conditions.map((condition) => (
              <span
                key={condition}
                className="cursor-default rounded-full border border-sage/30 bg-cream px-4 py-1.5 text-sm text-charcoal/80 transition-all hover:border-purple-mid hover:bg-purple-mid/10 hover:text-purple-deep"
              >
                {condition}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="relative mt-12 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            className="flex gap-6"
            animate={
              prefersReducedMotion
                ? {}
                : { x: ["0%", "-50%"] }
            }
            transition={
              prefersReducedMotion
                ? {}
                : { duration: 30, repeat: Infinity, ease: "linear" }
            }
          >
            {doubled.map((therapist, i) => (
              <TherapistCard key={`${therapist.name}-${i}`} therapist={therapist} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
