"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials, testimonialsContent } from "@/lib/content";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const goToPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="bg-gradient-to-b from-cream to-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow={testimonialsContent.eyebrow}
            title={testimonialsContent.heading}
            subtitle={testimonialsContent.subheading}
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div
            className="relative mx-auto mt-12 max-w-3xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsPaused(false);
              }
            }}
          >
            <button
              type="button"
              onClick={goToPrev}
              className="absolute top-1/2 -left-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-sage/20 bg-white text-purple-deep shadow-sm transition-colors hover:border-purple-mid/30 hover:bg-cream md:-left-14"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="min-h-[260px] rounded-3xl border border-sage/20 bg-white p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="flex h-full flex-col items-center text-center"
                >
                  <Quote
                    className="mb-4 h-8 w-8 text-lavender/60"
                    aria-hidden="true"
                  />
                  <p className="text-lg leading-relaxed text-charcoal/80 md:text-xl">
                    &ldquo;{testimonials[index].text}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-sage" aria-hidden="true" />
                    <p className="text-sm font-medium text-purple-deep">
                      {testimonials[index].author}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={goToNext}
              className="absolute top-1/2 -right-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-sage/20 bg-white text-purple-deep shadow-sm transition-colors hover:border-purple-mid/30 hover:bg-cream md:-right-14"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-purple-mid"
                      : "w-2 bg-sage/40 hover:bg-sage"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
