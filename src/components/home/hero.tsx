"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ClipboardList, Heart, User, Users } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";
import { audienceCards, heroContent } from "@/lib/content";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";

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
    <section className="hero-section hero-compact">
      <div className="hero-gradient bg-linear-to-br from-white to-purple-200 px-4 md:px-6">
        <div className="hero-content">
          <Reveal delay={0.1}>
            <p className="hero-greeting mb-3 text-base font-medium text-sage md:mb-4 md:text-xl">
              {heroContent.greeting}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="hero-headline">
              We have the best{" "}
              <span className="font-highlight font-medium text-purple-mid">
                psychologists and counsellors
              </span>{" "}
              for you!
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="hero-subheadline mt-4 max-w-2xl text-base text-charcoal/70 md:mt-6 md:text-lg">
              {heroContent.subheadline}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="hero-ctas mt-6 flex flex-col gap-3 sm:flex-row md:mt-8 md:gap-4">
              <Button href="/services" size="lg" className="w-full sm:w-auto">
                Check our services
              </Button>
              <Button
                href={getWhatsAppUrl("general")}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                {heroContent.ctaSecondary}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="hero-cards-strip">
        <motion.div
          ref={cardsRef}
          style={prefersReducedMotion ? {} : { y }}
          className="hero-cards-overlap"
        >
          <StaggerContainer
            animateOnMount
            className="mx-auto grid max-w-7xl grid-cols-2 gap-2 md:grid-cols-4 md:gap-3 lg:gap-5"
          >
            {audienceCards.map((card) => {
              const Icon = iconMap[card.icon];
              return (
                <StaggerItem key={card.title} className="min-w-0">
                  <Link
                    href={card.href}
                    className="group flex h-full min-w-0 flex-col items-center rounded-xl border border-sage/10 bg-white p-3 text-center shadow-md shadow-purple-deep/10 transition-all duration-300 hover:-translate-y-1 hover:border-sage/40 hover:shadow-xl hover:shadow-purple-deep/15 sm:rounded-2xl sm:shadow-lg md:p-5 lg:p-6"
                  >
                    <div className="mb-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-mid/10 text-purple-mid transition-colors group-hover:bg-purple-mid group-hover:text-white sm:mb-2 sm:h-10 sm:w-10 md:mb-3 md:h-12 md:w-12 lg:mb-4 lg:h-14 lg:w-14">
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                    </div>
                    <h3 className="w-full text-sm leading-tight font-semibold text-purple-deep md:text-lg lg:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-0.5 w-full text-xs leading-snug text-sage sm:mt-1 md:text-sm">
                      {card.subtitle}
                    </p>
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
