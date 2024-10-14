"use client";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface FadeInWhenVisibleProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeInWhenVisible({
  children,
  delay = 0,
}: FadeInWhenVisibleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
