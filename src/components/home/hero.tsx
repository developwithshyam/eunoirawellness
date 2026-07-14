"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { heroContent, testimonials } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

function BotanicalShape({
  className,
  scrollYProgress,
  speed,
}: {
  className: string;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  speed: number;
}) {
  const y = useTransform(scrollYProgress, [0, 1], [0, speed]);
  return (
    <motion.div style={{ y }} className={className}>
      <svg viewBox="0 0 120 120" fill="none" className="h-full w-full">
        <path
          d="M60 10 C40 30, 20 50, 30 80 C35 95, 50 100, 60 90 C70 100, 85 95, 90 80 C100 50, 80 30, 60 10Z"
          fill="currentColor"
          opacity="0.15"
        />
        <path
          d="M60 30 C50 45, 45 55, 50 70 C52 78, 58 82, 60 78 C62 82, 68 78, 70 70 C75 55, 70 45, 60 30Z"
          fill="currentColor"
          opacity="0.25"
        />
      </svg>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const prefersReducedMotion = useReducedMotion();
  const [tickerIndex, setTickerIndex] = useState(0);

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-cream via-white to-cream pt-8 pb-20 md:pt-12 md:pb-28"
    >
      {!prefersReducedMotion && (
        <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0">
          <BotanicalShape
            className="absolute top-20 -left-10 h-40 w-40 text-sage md:h-64 md:w-64"
            scrollYProgress={scrollYProgress}
            speed={-80}
          />
          <BotanicalShape
            className="absolute top-40 right-0 h-32 w-32 text-lavender md:h-48 md:w-48"
            scrollYProgress={scrollYProgress}
            speed={-120}
          />
          <BotanicalShape
            className="absolute bottom-20 left-1/4 h-24 w-24 text-purple-mid/30 md:h-36 md:w-36"
            scrollYProgress={scrollYProgress}
            speed={-60}
          />
          <div className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-lavender/10 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 h-96 w-96 rounded-full bg-purple-mid/5 blur-3xl" />
        </motion.div>
      )}

      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <Reveal delay={0.1}>
            <p className="mb-4 text-lg font-medium text-sage md:text-xl">
              {heroContent.greeting}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="max-w-4xl text-4xl leading-tight font-semibold text-purple-deep md:text-5xl lg:text-6xl">
              We have the best{" "}
              <span className="font-highlight font-medium text-purple-mid">
                psychologists and counsellors
              </span>{" "}
              for you!
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-6 max-w-2xl text-lg text-charcoal/70">
              {heroContent.subheadline}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={siteConfig.bookingUrl} size="lg">
                {heroContent.ctaPrimary}
              </Button>
              <Button href={siteConfig.bookingUrl} variant="outline" size="lg">
                {heroContent.ctaSecondary}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-12 w-full max-w-xl rounded-2xl border border-sage/20 bg-white/60 px-6 py-4 backdrop-blur-sm">
              <p className="mb-1 text-xs font-semibold tracking-wider text-sage uppercase">
                Happy Clients
              </p>
              <div className="h-12 overflow-hidden">
                <motion.div
                  key={tickerIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-sm italic text-charcoal/80 md:text-base">
                    &ldquo;{testimonials[tickerIndex].text}&rdquo;
                  </p>
                  <p className="mt-1 text-xs text-sage">
                    — {testimonials[tickerIndex].author}
                  </p>
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </motion.div>
    </section>
  );
}
