import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "gradient-brand text-white shadow-lg shadow-purple-mid/25 hover:shadow-purple-mid/40 hover:brightness-105",
  secondary:
    "bg-purple-deep text-white hover:bg-purple-mid",
  outline:
    "border-2 border-purple-mid text-purple-deep hover:bg-purple-mid/10",
  ghost: "text-purple-deep hover:bg-purple-mid/10",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm font-semibold tracking-wide",
  lg: "px-8 py-4 text-base font-semibold",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
