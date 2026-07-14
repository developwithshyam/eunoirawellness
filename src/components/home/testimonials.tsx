"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials, testimonialsContent } from "@/lib/content";

function CountUp({
  target,
  suffix = "",
}: {
  target: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();
  const numericPart = parseInt(target.replace(/[^0-9]/g, ""), 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      const id = requestAnimationFrame(() => setCount(numericPart));
      return () => cancelAnimationFrame(id);
    }

    let start = 0;
    const duration = 2000;
    const step = Math.ceil(numericPart / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= numericPart) {
        setCount(numericPart);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, numericPart, prefersReducedMotion]);

  const formatted = count.toLocaleString();

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-cream to-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="text-center">
            <p className="font-highlight text-5xl font-medium text-purple-deep md:text-6xl lg:text-7xl">
              <CountUp
                target={testimonialsContent.stat}
                suffix="+"
              />
            </p>
            <SectionHeading
              title={testimonialsContent.heading}
              subtitle={testimonialsContent.subheading}
              className="mt-4"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative mx-auto mt-12 max-w-3xl">
            <div className="min-h-[200px] rounded-3xl border border-sage/20 bg-white p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <p className="text-lg leading-relaxed text-charcoal/80 md:text-xl">
                    &ldquo;{testimonials[index].text}&rdquo;
                  </p>
                  <p className="mt-6 text-sm font-medium text-purple-deep">
                    — {testimonials[index].author}
                  </p>
                  <p className="mt-1 text-xs text-sage">
                    Review for {testimonials[index].therapist}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

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
