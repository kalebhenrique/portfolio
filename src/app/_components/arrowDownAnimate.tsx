"use client";
import { IoChevronDown } from "react-icons/io5";
import { motion } from "framer-motion";

export default function ArrowDownAnimate() {
  return (
    <motion.div
      className="z-0"
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      <IoChevronDown size="50" />
    </motion.div>
  );
}
