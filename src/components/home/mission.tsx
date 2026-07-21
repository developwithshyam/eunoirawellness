"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { missionContent } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export function Mission() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const prefersReducedMotion = useReducedMotion();
  const panelY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="overflow-hidden bg-white pt-24 pb-20 sm:pt-28 md:pt-32 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                title={missionContent.heading}
                align="left"
                className="!max-w-none"
              />
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 space-y-4 text-charcoal/80 leading-relaxed whitespace-pre-line">
                {missionContent.body}
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8">
                <Button href={siteConfig.bookingUrl}>Book a Psychologist</Button>
              </div>
            </Reveal>
          </div>

          <Reveal variant="fade-right" delay={0.2}>
            <motion.div
              style={prefersReducedMotion ? {} : { y: panelY }}
              className="relative aspect-square max-w-lg mx-auto lg:mx-0 lg:ml-auto"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-mid/20 via-lavender/30 to-sage/20" />
              <div className="absolute inset-4 flex flex-col items-center justify-center rounded-2xl bg-white/80 p-8 text-center backdrop-blur-sm">
                <div className="mb-6 grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-highlight text-3xl font-medium text-purple-deep">13%</p>
                    <p className="mt-1 text-xs text-sage">need psychological help</p>
                  </div>
                  <div>
                    <p className="font-highlight text-3xl font-medium text-purple-deep">7/10</p>
                    <p className="mt-1 text-xs text-sage">productivity affected</p>
                  </div>
                  <div>
                    <p className="font-highlight text-3xl font-medium text-purple-deep">100%</p>
                    <p className="mt-1 text-xs text-sage">private & confidential</p>
                  </div>
                  <div>
                    <p className="font-highlight text-3xl font-medium text-purple-deep">24/7</p>
                    <p className="mt-1 text-xs text-sage">support available</p>
                  </div>
                </div>
                <p className="font-highlight text-lg text-purple-deep">
                  Science + Technology + Empathy
                </p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
