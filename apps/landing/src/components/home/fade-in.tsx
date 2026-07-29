"use client";
import * as m from "motion/react-m";
import type React from "react";

export function FadeIn({
  children,
  className,
  delay = 0,
  amount,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: "some" | "all";
}) {
  return (
    <m.div
      transition={{ delay, duration: 1, type: "spring", bounce: 0.3 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      className={className}
    >
      {children}
    </m.div>
  );
}
