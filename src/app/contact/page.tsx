import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/contact-page-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Eunoira Wellness to book confidential counselling for women and children, ask a question, or explore career opportunities.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
