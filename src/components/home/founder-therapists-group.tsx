import { FoundersNote } from "@/components/home/founders-note";
import { TherapistsSection } from "@/components/home/therapists-section";

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
    </svg>
  );
}

function FounderWaveBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="founderWaveGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#7b52ab" />
            <stop offset="40%" stopColor="#d6a1c1" />
            <stop offset="75%" stopColor="#ecd4e0" />
            <stop offset="100%" stopColor="#faf8f5" />
          </linearGradient>
          <filter
            id="founderWaveShadow"
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
          >
            <feDropShadow
              dx="0"
              dy="16"
              stdDeviation="24"
              floodColor="#5d3e8c"
              floodOpacity="0.12"
            />
          </filter>
        </defs>
        <path
          className="opacity-20 md:opacity-[0.35]"
          d="M-80 0C120 80 280 40 480 100C680 160 820 80 1000 140C1180 200 1320 280 1380 420C1440 560 1380 720 1200 780C1020 840 780 820 560 760C340 700 160 640 40 520C-40 420 -80 280 -80 140V0Z"
          fill="url(#founderWaveGrad)"
        />
        <path
          className="opacity-40 md:opacity-90"
          d="M-60 20C140 100 300 60 500 120C700 180 840 100 1020 160C1200 220 1340 300 1400 440C1460 580 1400 740 1220 800C1040 860 800 840 580 780C360 720 180 660 60 540C-20 440 -60 300 -60 160V20Z"
          fill="url(#founderWaveGrad)"
          filter="url(#founderWaveShadow)"
        />
      </svg>

      <Sparkle className="absolute top-[12%] left-[8%] hidden h-5 w-5 text-lavender/50 md:block" />
      <Sparkle className="absolute top-[22%] left-[18%] hidden h-3 w-3 text-purple-mid/30 md:block" />
      <Sparkle className="absolute top-[8%] left-[42%] hidden h-3 w-3 text-lavender/35 md:block" />
      <Sparkle className="absolute top-[18%] right-[28%] hidden h-4 w-4 text-lavender/40 md:block" />
      <Sparkle className="absolute top-[35%] right-[12%] hidden h-6 w-6 text-purple-mid/25 md:block" />
      <Sparkle className="absolute bottom-[38%] right-[22%] hidden h-3 w-3 text-lavender/30 md:block" />
      <Sparkle className="absolute bottom-[28%] left-[32%] hidden h-3 w-3 text-purple-mid/20 md:block" />

      <span className="absolute top-[16%] left-[28%] hidden h-2 w-2 rounded-full bg-purple-mid/20 md:block" />
      <span className="absolute top-[30%] left-[6%] hidden h-1.5 w-1.5 rounded-full bg-lavender/40 md:block" />
      <span className="absolute top-[14%] right-[18%] hidden h-2 w-2 rounded-full bg-lavender/35 md:block" />
      <span className="absolute bottom-[32%] right-[8%] hidden h-2.5 w-2.5 rounded-full bg-purple-mid/15 md:block" />
      <span className="absolute bottom-[42%] left-[48%] hidden h-1.5 w-1.5 rounded-full bg-sage/30 md:block" />
    </div>
  );
}

export function FounderTherapistsGroup() {
  return (
    <div className="relative overflow-hidden bg-white">
      <FounderWaveBackground />
      <FoundersNote />
      <TherapistsSection />
    </div>
  );
}
