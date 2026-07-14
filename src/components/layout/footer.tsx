import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/social-icons";
import {
  footerColumns,
  getWhatsAppUrl,
  legalLinks,
  siteConfig,
  trustBadges,
} from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-6 md:gap-12">
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-xs font-semibold tracking-wider text-sage uppercase md:text-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              {badge}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="mb-12 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-4 bg-transparent">
              <BrandLogo variant="transparent" height={44} />
            </div>
            <p className="max-w-xs text-sm text-white/60">
              {siteConfig.tagline}
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 transition-colors hover:bg-purple-mid"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 transition-colors hover:bg-purple-mid"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={getWhatsAppUrl("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 transition-colors hover:bg-purple-mid"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold tracking-wider text-sage uppercase">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-lavender"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4 border-t border-white/10 pt-8">
          {legalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs text-white/50 transition-colors hover:text-white/80"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-white/40">
          We are not a suicide prevention helpline. If you are feeling suicidal,
          we would suggest you immediately call up a suicide prevention
          helpline.
        </p>

        <p className="mt-4 text-xs text-white/30">
          © 2026 Eunoira Wellness. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
