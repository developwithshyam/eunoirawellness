import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { InstagramIcon, FacebookIcon } from "@/components/ui/social-icons";
import {
  footerColumns,
  getWhatsAppUrl,
  siteConfig,
  trustBadges,
} from "@/lib/site-config";

function FooterColumn({ column }: { column: (typeof footerColumns)[number] }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold tracking-wider text-sage uppercase">
        {column.title}
      </h3>
      <ul className="space-y-1.5">
        {column.links.map((link) => (
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
  );
}

export function Footer() {
  const [talkToExpert, resources] = footerColumns;

  return (
    <footer className="bg-charcoal text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 py-4 md:gap-8">
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-xs font-semibold tracking-wider text-sage uppercase"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              {badge}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="grid grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-3 md:gap-8 md:items-start">
          <div className="col-span-2 flex flex-col items-center text-center md:col-span-1 md:items-start md:text-left">
            <div className="flex items-center justify-center gap-4 md:flex-col md:items-start">
              <BrandLogo variant="transparent" height={40} />
              <div className="flex gap-3 md:mt-4">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-purple-mid"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-purple-mid"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a
                  href={getWhatsAppUrl("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-purple-mid"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
            <p className="mt-3 max-w-xs text-sm text-white/60">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="justify-self-center text-center md:justify-self-center md:text-left">
            <FooterColumn column={talkToExpert} />
          </div>

          <div className="justify-self-center text-center md:justify-self-end md:text-left">
            <FooterColumn column={resources} />
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/30 md:text-left">
            © 2026 Eunoira Wellness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
