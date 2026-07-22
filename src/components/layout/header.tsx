"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Button } from "@/components/ui/button";
import {
  getWhatsAppUrl,
  navLinks,
  siteConfig,
  workshops,
} from "@/lib/site-config";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (mobileOpen) setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBg =
    scrolled || !isHome
      ? "bg-cream/90 backdrop-blur-md shadow-sm shadow-purple-deep/5"
      : "bg-transparent";

  return (
    <div className="fixed top-0 right-0 left-0 z-50">
      {/* {announcementVisible && isHome && (
        <div className="bg-purple-deep text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs md:text-sm">
            <div className="flex flex-1 items-center justify-center gap-4 overflow-hidden md:gap-8">
              {workshops.map((w) => (
                <Link
                  key={w.label}
                  href={w.href}
                  className="shrink-0 whitespace-nowrap opacity-90 transition-opacity hover:opacity-100"
                >
                  {w.label}
                </Link>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setAnnouncementVisible(false)}
              className="shrink-0 rounded p-1 opacity-70 hover:opacity-100"
              aria-label="Dismiss announcement"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )} */}

      <header className={`transition-all duration-500 ${headerBg}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
          <Link href="/" className="relative z-10 block shrink-0 bg-transparent">
            <BrandLogo variant="transparent" height={60} priority />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-purple-mid"
                    : "text-charcoal/80 hover:text-purple-deep"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/services"
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                pathname === "/services"
                  ? "text-purple-mid"
                  : "text-charcoal/80 hover:text-purple-deep"
              }`}
            >
              Services
            </Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {/* <Button
              href={getWhatsAppUrl("general")}
              external
              variant="ghost"
              size="sm"
              className="!rounded-full !p-2.5"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </Button> */}
            <Button href={getWhatsAppUrl("general")} size="sm">
              Book a Therapist
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full p-2 text-purple-deep lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-sage/20 bg-cream/95 backdrop-blur-md lg:hidden"
            >
              <div className="flex flex-col gap-1 px-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-4 py-3 text-base font-medium text-charcoal hover:bg-purple-mid/10"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="rounded-xl px-4 py-3 text-base font-medium text-charcoal hover:bg-purple-mid/10"
                >
                  Services
                </Link>
                <div className="mt-4 flex flex-col gap-2 px-4">
                  <Button href={siteConfig.bookingUrl} className="w-full">
                    Book a Therapist
                  </Button>
                  <Button
                    href={getWhatsAppUrl("general")}
                    external
                    variant="outline"
                    className="w-full"
                  >
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
