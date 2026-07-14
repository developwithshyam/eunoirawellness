import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/about-page-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Eunoira Wellness — our mission, team, and commitment to compassionate mental health care.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
