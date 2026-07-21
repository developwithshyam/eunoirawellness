import type { Metadata } from "next";
import { Google_Sans, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/logo-full.png",
        alt: `${siteConfig.name} — Counselling for Women & Children`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/logo-full.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  image: `${siteConfig.url}/logo-full.png`,
  areaServed: "IN",
  medicalSpecialty: "Psychiatric",
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.linkedin,
    siteConfig.social.facebook,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${googleSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream font-sans text-charcoal">
        <JsonLd data={organizationSchema} />
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
