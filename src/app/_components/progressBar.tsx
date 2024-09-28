"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0.14, 1], [0, 1]);

  return (
    <motion.div
      className="h-1 bg-gray-400"
      style={{
        scaleX: scaleX,
        backgroundColor: "#545963",
        originX: 0,
      }}
    />
  );
}
