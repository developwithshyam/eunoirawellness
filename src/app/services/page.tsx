import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/services/services-page-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore therapy, counselling, psychiatry, and couple support at Eunoira Wellness — confidential, compassionate care tailored to you.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
