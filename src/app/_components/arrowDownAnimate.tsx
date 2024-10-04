"use client";
import { IoChevronDown } from "react-icons/io5";
import { motion } from "framer-motion";

export default function ArrowDownAnimate() {
  return (
    <motion.div
      className="z-0 flex w-10 justify-center rounded-full bg-[#2C1431] bg-opacity-30"
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.4,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      <IoChevronDown size="30" />
    </motion.div>
  );
}
