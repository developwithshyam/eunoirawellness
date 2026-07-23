"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { serviceTabs } from "@/lib/content";
import { getServiceWhatsAppUrl } from "@/lib/site-config";

function getTabIndex(serviceId?: string | null) {
  if (!serviceId) return 0;
  const index = serviceTabs.findIndex((tab) => tab.id === serviceId);
  return index >= 0 ? index : 0;
}

type ServicesPricingProps = {
  initialServiceId?: string;
  showHeading?: boolean;
  onTabChange?: (serviceId: string) => void;
};

export function ServicesPricing({
  initialServiceId,
  showHeading = true,
  onTabChange,
}: ServicesPricingProps) {
  const [activeTab, setActiveTab] = useState(() => getTabIndex(initialServiceId));
  const active = serviceTabs[activeTab];

  useEffect(() => {
    setActiveTab(getTabIndex(initialServiceId));
  }, [initialServiceId]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    onTabChange?.(serviceTabs[index].id);
  };

  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {showHeading && (
          <Reveal>
            <h2 className="text-center text-3xl font-semibold text-purple-deep md:text-4xl">
              Choose Your Path to Wellness
            </h2>
          </Reveal>
        )}

        <Reveal delay={showHeading ? 0.1 : 0}>
          <div
            className={`flex flex-wrap justify-center gap-2 ${showHeading ? "mt-10" : ""}`}
          >
            {serviceTabs.map((tab, index) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(index)}
                className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
                  activeTab === index
                    ? "text-white"
                    : "text-charcoal/70 hover:text-purple-deep"
                }`}
              >
                {activeTab === index && (
                  <motion.span
                    layoutId="service-tab"
                    className="absolute inset-0 rounded-full gradient-brand"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={showHeading ? 0.2 : 0.1}>
          <div className="mx-auto mt-12 max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl border border-sage/20 bg-cream p-8 md:p-10"
              >
                <h3 className="text-2xl font-semibold text-purple-deep">
                  {active.title}
                </h3>
                <p className="mt-4 leading-relaxed text-charcoal/80">
                  {active.description}
                </p>
                <Button
                  href={getServiceWhatsAppUrl(active.id)}
                  external
                  className="mt-8"
                >
                  Book a Session
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
