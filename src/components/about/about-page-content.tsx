"use client";

import { FounderTherapistsGroup } from "@/components/home/founder-therapists-group";
import { JourneyTimeline } from "@/components/home/journey-timeline";
import { Mission } from "@/components/home/mission";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { aboutContent, missionContent } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

function AboutPageHero() {
  const introParagraph = missionContent.body.split("\n\n")[0];

  return (
    <section className="bg-gradient-to-b from-cream via-white to-cream pt-12 pb-16 md:pt-20 md:pb-20">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <Reveal>
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-sage uppercase">
            About Eunoira Wellness
          </p>
          <h1 className="text-3xl leading-tight font-semibold text-purple-deep sm:text-4xl md:text-5xl lg:text-6xl">
            {missionContent.heading}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-charcoal/70 md:text-lg">
            {introParagraph}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function AboutBottomCta() {
  return (
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
  );
}

export function AboutPageContent() {
  return (
    <>
      <AboutPageHero />
      <Mission />
      <FounderTherapistsGroup />
      <JourneyTimeline />
      <AboutBottomCta />
    </>
  );
}
