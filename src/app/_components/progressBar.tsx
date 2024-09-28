"use client";
import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="h-1 bg-gray-400"
      style={{
        scaleX: scrollYProgress,
        backgroundColor: "#545963",
        originX: 0,
      }}
    />
  );
}
