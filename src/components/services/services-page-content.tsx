"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ServicesPricing } from "@/components/home/services-pricing";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { servicesPageContent } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

function ServicesPageHero() {
  return (
    <section className="bg-gradient-to-b from-cream via-white to-cream pt-12 pb-16 md:pt-20 md:pb-20">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <Reveal>
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-sage uppercase">
            {servicesPageContent.eyebrow}
          </p>
          <h1 className="text-3xl leading-tight font-semibold text-purple-deep sm:text-4xl md:text-5xl lg:text-6xl">
            {servicesPageContent.heading}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-charcoal/70 md:text-lg">
            {servicesPageContent.subheading}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesBottomCta() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 pt-20 md:pt-28">
        <Reveal>
          <div className="gradient-brand rounded-3xl px-8 py-14 text-center text-white md:px-16 md:py-20">
            <h2 className="text-2xl font-semibold md:text-3xl">
              {servicesPageContent.bottomCta}
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

function ServicesPricingSection() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("service") ?? undefined;

  return (
    <ServicesPricing
      initialServiceId={serviceId}
      syncUrl
      showHeading={false}
    />
  );
}

function ServicesPageInner() {
  return (
    <>
      <ServicesPageHero />
      <ServicesPricingSection />
      <ServicesBottomCta />
    </>
  );
}

export function ServicesPageContent() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-sage">Loading...</div>
      }
    >
      <ServicesPageInner />
    </Suspense>
  );
}
