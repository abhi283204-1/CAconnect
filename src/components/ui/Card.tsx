"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export function Card({
  children,
  className = "",
  hover = true,
  glass = false,
}: CardProps) {
  return (
    <motion.div
      className={`rounded-2xl border border-border p-6 ${
        glass
          ? "glass"
          : "bg-white shadow-sm"
      } ${className}`}
      whileHover={
        hover
          ? { y: -8, boxShadow: "0 20px 40px rgba(11, 31, 58, 0.1)" }
          : undefined
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
