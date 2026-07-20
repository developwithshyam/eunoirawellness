const WHATSAPP_NUMBER = "918156909169";

export const whatsappMessages = {
  general:
    "Hi Eunoira Wellness, I'd like to enquire about your services. Could you please help me?",
  booking:
    "Hi Eunoira Wellness, I'd like to book a therapy session. Please share your available slots and pricing.",
  assessment:
    "Hi Eunoira Wellness, I'd like to book a free 30-minute assessment. Please let me know the next available time.",
  contact:
    "Hi Eunoira Wellness, I have a question and would love to connect with your team.",
} as const;

export type WhatsAppIntent = keyof typeof whatsappMessages;

/** Builds a wa.me link with a pre-filled message — customer only taps Send */
export function getWhatsAppUrl(intent: WhatsAppIntent = "general") {
  const text = whatsappMessages[intent];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const siteConfig = {
  name: "Eunoira Wellness",
  title: "Eunoira Wellness | Online Counselling for Women & Children",
  tagline: "Your companion in your healing journey",
  description:
    "Eunoira Wellness offers confidential online counselling for women and children, connecting you with compassionate psychological support from the comfort of home.",
  keywords: [
    "online counselling",
    "women counselling",
    "children counselling",
    "online therapy",
    "mental health support",
    "psychological support",
    "confidential counselling",
    "Eunoira Wellness",
  ],
  url: "https://eunoirawellness.com",
  contact: {
    email: "hello@eunoirawellness.com",
    careersEmail: "careers@eunoirawellness.com",
    phone: "+91 81569 09169",
    whatsapp: "+91 81569 09169",
    whatsappNumber: WHATSAPP_NUMBER,
    /** Default WhatsApp link with general enquiry message */
    whatsappUrl: getWhatsAppUrl("general"),
  },
  social: {
    instagram: "https://instagram.com/eunoirawellness",
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

export const serviceDropdown = [
  { label: "Individual Therapy", href: "/#services" },
  { label: "Couples Counselling", href: "/#services" },
  { label: "Teens (13–17)", href: "/#services" },
  { label: "Self Assessment", href: "/#services" },
] as const;

export const footerColumns = [
  {
    title: "Talk to Expert",
    links: [
      { label: "Relationship Coach", href: "/#services" },
      { label: "Career Coach", href: "/#services" },
      { label: "Psychologist Near Me", href: "/#therapists" },
    ],
  },
  {
    title: "For Business",
    links: [{ label: "Women's Health", href: "/#services" }],
  },
  {
    title: "Resources",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/#blog" },
      { label: "Careers", href: "/contact?intent=careers" },
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
  "Certified & Available",
  "Private & Secure",
  "SSL Secured (UPI & Card)",
] as const;

export const workshops = [
  { label: "Pre-Marital Workshop", href: "#" },
  { label: "Marital Conflict Workshop", href: "#" },
  { label: "Positive Parenting Workshop", href: "#" },
] as const;
