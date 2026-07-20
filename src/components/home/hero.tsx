"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ClipboardList, Heart, User, Users } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";
import { audienceCards, heroContent } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

const iconMap = {
  user: User,
  users: Users,
  heart: Heart,
  clipboard: ClipboardList,
};

export function Hero() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start end", "end start"],
  });
  const prefersReducedMotion = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 0.4], [24, 0]);

  return (
    <section className="relative grid h-screen w-full grid-rows-[1fr_auto] overflow-visible">
      <div className="relative z-10 flex items-center justify-center bg-linear-to-br from-violet-50 to-purple-100 px-4 md:px-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
          <Reveal delay={0.1}>
            <p className="mb-3 text-base font-medium text-sage md:mb-4 md:text-xl">
              {heroContent.greeting}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="max-w-4xl text-3xl leading-tight font-semibold text-purple-deep sm:text-4xl md:text-5xl lg:text-6xl">
              We have the best{" "}
              <span className="font-highlight font-medium text-purple-mid">
                psychologists and counsellors
              </span>{" "}
              for you!
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-4 max-w-2xl text-base text-charcoal/70 md:mt-6 md:text-lg">
              {heroContent.subheadline}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8 md:gap-4">
              <Button href={siteConfig.bookingUrl} size="lg">
                {heroContent.ctaPrimary}
              </Button>
              <Button href={siteConfig.bookingUrl} variant="outline" size="lg">
                {heroContent.ctaSecondary}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative shrink-0 bg-white px-4 pb-8 md:px-6 md:pb-12">
        <motion.div
          ref={cardsRef}
          style={prefersReducedMotion ? {} : { y }}
          className="relative z-20 -translate-y-1/2"
        >
          <StaggerContainer className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {audienceCards.map((card) => {
              const Icon = iconMap[card.icon];
              return (
                <StaggerItem key={card.title}>
                  <Link
                    href={card.href}
                    className="group flex h-full flex-col items-center rounded-2xl border border-sage/10 bg-white p-5 text-center shadow-lg shadow-purple-deep/10 transition-all duration-300 hover:-translate-y-1 hover:border-sage/40 hover:shadow-xl hover:shadow-purple-deep/15 md:p-6"
                  >
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-mid/10 text-purple-mid transition-colors group-hover:bg-purple-mid group-hover:text-white md:mb-4 md:h-14 md:w-14">
                      <Icon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-purple-deep md:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-sm text-sage">{card.subtitle}</p>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </motion.div>
      </div>
    </section>
  );
}
