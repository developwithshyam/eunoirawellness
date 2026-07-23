const WHATSAPP_NUMBER = "919292012779"; 

const BASE_URL = "https://www.eunoirawellness.com";

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

export function getServicePageUrl(serviceId: ServiceWhatsAppIntent) {
  return `/services?service=${serviceId}`;
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
    email: "eunoirawellness11@gmail.com",
    careersEmail: "eunoirawellness11@gmail.com",
    phone: "+91 92920 12779",
    whatsapp: "+91 92920 12779",
    whatsappNumber: WHATSAPP_NUMBER,
    /** Default WhatsApp link with general enquiry message */
    whatsappUrl: getWhatsAppUrl("general"),
  },
  social: {
    instagram: "https://www.instagram.com/eunoira_wellness_",
    facebook: "https://www.facebook.com/share/1DZrKtWN8k/?mibextid=wwXIfr",
  },
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
      { label: "Individual Counselling", href: getServicePageUrl("therapy") },
      { label: "Teens Counselling", href: getServicePageUrl("counselling") },
      { label: "Couples Counselling", href: getServicePageUrl("couple") },
      { label: "Parents Counselling", href: getServicePageUrl("counselling") },
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
