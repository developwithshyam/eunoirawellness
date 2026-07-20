import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/about-page-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Eunoira Wellness — compassionate online counselling for women and children, our mission, and our team of psychological support specialists.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
