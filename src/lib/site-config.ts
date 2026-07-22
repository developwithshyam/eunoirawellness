const WHATSAPP_NUMBER = "918921569922";

export const whatsappMessages = {
  general:
    "Hi Eunoira Wellness, I'd like to enquire about your services. Could you please help me?",
  booking:
    "Hi Eunoira Wellness, I'd like to book a therapy session. Please share your available slots and pricing.",
  assessment:
    "Hi Eunoira Wellness, I'd like to book a free 30-minute assessment. Please let me know the next available time.",
  contact:
    "Hi Eunoira Wellness, I have a question and would love to connect with your team.",
  therapy:
    "Hi Eunoira Wellness, I'd like to know more about Therapy. Could you please share details on availability and pricing?",
  counselling:
    "Hi Eunoira Wellness, I'd like to know more about Counselling. Could you please help me get started?",
  psychiatrist:
    "Hi Eunoira Wellness, I'd like to know more about Psychiatry services. Could you please share more information?",
  couple:
    "Hi Eunoira Wellness, I'd like to know more about Couple Therapy. Could you please share details on how to book?",
} as const;

export type WhatsAppIntent = keyof typeof whatsappMessages;

export type ServiceWhatsAppIntent = "therapy" | "counselling" | "psychiatrist" | "couple";

export function getServiceWhatsAppUrl(serviceId: ServiceWhatsAppIntent) {
  return getWhatsAppUrl(serviceId);
}

/** Builds a wa.me link with a pre-filled message — customer only taps Send */
export function getWhatsAppUrl(intent: WhatsAppIntent = "general") {
  const text = whatsappMessages[intent];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const siteConfig = {
  name: "Eunoira Wellness",
  title: "Eunoira Wellness | Counselling for Women & Children",
  tagline: "Your companion in your healing journey",
  description:
    "Eunoira Wellness offers confidential counselling for women and children, connecting you with compassionate psychological support from qualified professionals.",
  keywords: [
    "counselling",
    "women counselling",
    "children counselling",
    "therapy",
    "mental health support",
    "psychological support",
    "confidential counselling",
    "Eunoira Wellness",
  ],
  url: "https://eunoirawellness.com",
  contact: {
    email: "hello@eunoirawellness.com",
    careersEmail: "careers@eunoirawellness.com",
    phone: "+91 89215 69922",
    whatsapp: "+91 89215 69922",
    whatsappNumber: WHATSAPP_NUMBER,
    /** Default WhatsApp link with general enquiry message */
    whatsappUrl: getWhatsAppUrl("general"),
  },
  social: {
    instagram: "https://www.instagram.com/eunoira_wellness_",
    linkedin: "https://linkedin.com/company/eunoirawellness",
    facebook: "https://facebook.com/eunoirawellness",
  },
  bookingUrl: "/contact?intent=booking",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerColumns = [
  {
    title: "Talk to Expert",
    links: [
      { label: "Individual Counselling", href: "/#services" },
      { label: "Teens Counselling", href: "/#services" },
      { label: "Couples Counselling", href: "/#services" },
      { label: "Parents Counselling", href: "/#services" },
    ],
  },

  {
    title: "Resources",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
] as const;

export const legalLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Therapy Agreement", href: "#" },
  { label: "Refund Policy", href: "#" },
] as const;

export const trustBadges = [
  "Certified",
  "Private",
  "Secure",
] as const;

export const workshops = [
  { label: "Pre-Marital Workshop", href: "#" },
  { label: "Marital Conflict Workshop", href: "#" },
  { label: "Positive Parenting Workshop", href: "#" },
] as const;
