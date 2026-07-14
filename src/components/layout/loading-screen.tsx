"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrandLogo, getLogoDimensions } from "@/components/ui/brand-logo";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const logoHeight = 160;
  const { width: logoWidth } = getLogoDimensions("full", logoHeight);

  useEffect(() => {
    if (prefersReducedMotion) {
      const id = requestAnimationFrame(() => setIsLoading(false));
      return () => cancelAnimationFrame(id);
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 3;
      });
    }, 45);

    const timer = setTimeout(() => {
      setProgress(100);
      setIsLoading(false);
    }, 2400);

    const handleLoad = () => setProgress(100);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          <div
            className="relative shrink-0"
            style={{ width: logoWidth, height: logoHeight }}
          >
            <div className="absolute top-0 left-0 opacity-[0.2]">
              <BrandLogo variant="full" height={logoHeight} priority />
            </div>

            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{
                width: logoWidth,
                height: logoHeight,
                clipPath: `inset(${100 - progress}% 0 0 0)`,
              }}
            >
              <BrandLogo variant="full" height={logoHeight} priority />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-xs font-medium tracking-[0.25em] text-sage uppercase"
          >
            Loading {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
