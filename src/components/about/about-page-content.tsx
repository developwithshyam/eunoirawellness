"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  aboutContent,
  advisoryBoard,
  leadershipTeam,
} from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

function AnimatedStat({
  value,
  suffix,
  label,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      const id = requestAnimationFrame(() => setCount(value));
      return () => cancelAnimationFrame(id);
    }

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCount(Math.min(value, increment * step));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value, prefersReducedMotion]);

  const display =
    decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString();

  return (
    <div ref={ref} className="text-center">
      <p className="font-highlight text-4xl font-medium text-purple-deep md:text-5xl">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-charcoal/70">{label}</p>
    </div>
  );
}

function TeamCard({
  name,
  title,
  bio,
  isFounder,
}: {
  name: string;
  title: string;
  bio: string;
  isFounder?: boolean;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="group rounded-2xl border border-sage/20 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-deep/5">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-mid to-lavender text-2xl font-semibold text-white transition-transform group-hover:scale-105">
        {initials}
      </div>
      <h3 className="text-xl font-semibold text-purple-deep">{name}</h3>
      <p className="mt-1 text-sm font-semibold text-sage">{title}</p>
      {isFounder ? (
        <p className="mt-4 border-l-2 border-lavender pl-4 text-sm italic leading-relaxed text-purple-deep/80">
          &ldquo;{bio}&rdquo;
        </p>
      ) : (
        <p className="mt-4 text-sm leading-relaxed text-charcoal/70">{bio}</p>
      )}
    </div>
  );
}

export function AboutPageContent() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream via-white to-cream pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <Reveal>
            <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-sage uppercase">
              About Eunoira Wellness
            </p>
            <h1 className="text-4xl leading-tight font-semibold text-purple-deep md:text-5xl lg:text-6xl">
              {aboutContent.missionHero}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold text-purple-deep md:text-4xl">
              {aboutContent.storyTitle}
            </h2>
          </Reveal>
          <div className="mt-10 space-y-6">
            {aboutContent.storyParagraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="leading-relaxed text-charcoal/80">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <SectionHeading
              title={aboutContent.statsTitle}
              subtitle={aboutContent.statsSubtitle}
            />
          </Reveal>
          <StaggerContainer className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <AnimatedStat
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  decimals={"decimals" in stat ? stat.decimals : 0}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal delay={0.3}>
            <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact?intent=careers">Join the team</Button>
              <Button href={siteConfig.bookingUrl} variant="outline">
                Find your therapist
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <SectionHeading title={aboutContent.advisoryTitle} />
          </Reveal>
          <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-2">
            {advisoryBoard.map((member) => (
              <StaggerItem key={member.name}>
                <TeamCard
                  name={member.name}
                  title={member.title}
                  bio={member.bio}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <SectionHeading
              title={aboutContent.leadershipTitle}
              subtitle={aboutContent.leadershipSubtitle}
            />
          </Reveal>
          <StaggerContainer className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {leadershipTeam.map((member) => (
              <StaggerItem key={member.name}>
                <TeamCard
                  name={member.name}
                  title={member.role}
                  bio={member.bio}
                  isFounder={"isFounder" in member && member.isFounder}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <div className="gradient-brand rounded-3xl px-8 py-14 text-center text-white md:px-16 md:py-20">
              <h2 className="text-3xl font-semibold md:text-4xl">
                {aboutContent.bottomCta}
              </h2>
              <Button
                href={siteConfig.bookingUrl}
                className="mt-8 !bg-white !text-purple-deep hover:!bg-white/90"
              >
                Book Now
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
