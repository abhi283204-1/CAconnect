"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "gold";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const variants = {
  primary:
    "bg-primary text-white hover:bg-secondary focus-visible:ring-primary",
  secondary:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary",
  gold: "bg-accent text-primary hover:bg-accent-light focus-visible:ring-accent",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      className={baseClasses}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </MotionComponent>
  );
}
