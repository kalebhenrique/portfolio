"use client";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import React from "react";
import BackgroundContent from "./backgroundContent";

const Snowflake = () => {
  return (
    <motion.div
      initial={{ x: Math.random() * 100 - 50, y: -100, opacity: 0 }}
      animate={{ x: [0, 400, 600], y: [0, 300, 600], opacity: 1 }}
      transition={{
        duration: Math.random() * 3 + 2,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      <div className={`h-1.5 w-1.5 rounded-full bg-white opacity-70`}></div>
    </motion.div>
  );
};

export default function Introduction() {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const snowflakes = React.useMemo(() => Array.from({ length: 100 }), []);

  if (!isDesktop) {
    return (
      <div className="relative flex h-[770px] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-[#2C1431] via-[#161732] to-[#042433]">
        <BackgroundContent />
      </div>
    );
  }

  return (
    <motion.div
      animate={{
        background: [
          "linear-gradient(90deg, rgba(44, 20, 49, 1) 0%, rgba(22, 23, 50, 1) 50%, rgba(4, 36, 51, 1) 100%)",
          "linear-gradient(90deg, rgba(4, 36, 51, 1) 0%, rgba(22, 23, 50, 1) 50%, rgba(44, 20, 49, 1) 100%)",
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="relative flex h-[770px] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-[#2C1431] via-[#161732] to-[#042433]"
    >
      <div className="pointer-events-none absolute inset-0">
        {snowflakes.map((_, index) => (
          <Snowflake key={index} />
        ))}
      </div>
      <BackgroundContent />
    </motion.div>
  );
}
