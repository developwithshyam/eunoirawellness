import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/contact-page-content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Eunoira Wellness. Book a session, ask a question, or explore career opportunities.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
