import type { Metadata } from "next";
import { AssessmentStrip } from "@/components/home/assessment-strip";
import { Faq } from "@/components/home/faq";
import { FounderTherapistsGroup } from "@/components/home/founder-therapists-group";
import { Hero } from "@/components/home/hero";
import { JourneyTimeline } from "@/components/home/journey-timeline";
import { Mission } from "@/components/home/mission";
import { ReferCta } from "@/components/home/refer-cta";
import { ServicesPricing } from "@/components/home/services-pricing";
import { Testimonials } from "@/components/home/testimonials";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <AssessmentStrip />
      <FounderTherapistsGroup />
      <JourneyTimeline />
      <ServicesPricing />
      <Testimonials />
      <Faq />
      <ReferCta />
    </>
  );
}
