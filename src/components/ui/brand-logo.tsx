import Image from "next/image";

const LOGO_CONFIG = {
  transparent: {
    src: "/logo-transparent.png",
    width: 4500,
    height: 1879,
  },
  full: {
    src: "/logo-full.png",
    width: 1024,
    height: 1024,
  },
} as const;

export type LogoVariant = keyof typeof LOGO_CONFIG;

export const LOGO_WIDTH = LOGO_CONFIG.transparent.width;
export const LOGO_HEIGHT = LOGO_CONFIG.transparent.height;
export const LOGO_ASPECT = LOGO_WIDTH / LOGO_HEIGHT;

interface BrandLogoProps {
  variant?: LogoVariant;
  height?: number;
  className?: string;
  priority?: boolean;
}

export function BrandLogo({
  variant = "transparent",
  height = 44,
  className = "",
  priority = false,
}: BrandLogoProps) {
  const config = LOGO_CONFIG[variant];
  const aspect = config.width / config.height;
  const width = Math.round(height * aspect);
  const imgClass = `block h-full w-full object-contain object-left ${className}`;

  return (
    <span
      className="inline-block shrink-0 leading-none"
      style={{ width, height }}
    >
      {variant === "transparent" ? (
        // Native img preserves PNG transparency (no optimizer flattening)
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={config.src}
          alt="Eunoira Wellness"
          width={width}
          height={height}
          className={imgClass}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
      ) : (
        <Image
          src={config.src}
          alt="Eunoira Wellness"
          width={width}
          height={height}
          priority={priority}
          className={imgClass}
        />
      )}
    </span>
  );
}

export function getLogoDimensions(variant: LogoVariant, height: number) {
  const config = LOGO_CONFIG[variant];
  const aspect = config.width / config.height;
  return {
    width: Math.round(height * aspect),
    height,
  };
}
