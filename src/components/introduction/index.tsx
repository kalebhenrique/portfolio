"use client";

import { motion } from "framer-motion";
import BackgroundContent from "./backgroundContent";
import React from "react";

interface SnowflakeProps {
  size: number;
  startX: number;
  speed: number;
}

const Snowflake: React.FC<SnowflakeProps> = ({ size, startX, speed }) => {
  const zPrior = size > 12 ? "z-10" : "z-0";
  const opacity = size > 12 ? "0.4" : "1";

  return (
    <motion.div
      initial={{ x: startX, y: -100, opacity: 0 }}
      animate={{ x: [0, 950, 1900], y: [0, 200, 400], opacity: 1 }}
      transition={{
        duration: speed,
        ease: "linear",
        repeat: Infinity,
      }}
      className={`relative ${zPrior}`}
    >
      <div
        className={`rounded-full bg-white opacity-70 ${zPrior}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          opacity: opacity,
        }}
      />
    </motion.div>
  );
};

export default function Introduction() {
  const snowflakes = React.useMemo(
    () =>
      Array.from({ length: 80 }).map(() => ({
        size: Math.random() * 12 + 6,
        startX: Math.random() * 100 - 50,
        speed: Math.random() * 10 + 2,
      })),
    [],
  );

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
      className="relative flex h-[770px] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-[#2C1431] via-[#161732] to-[#042433] md:h-[1200px] md:h-screen"
    >
      <div className="pointer-events-none absolute inset-0 hidden md:inline">
        {snowflakes.map((flake, index) => (
          <Snowflake
            key={index}
            size={flake.size}
            startX={flake.startX}
            speed={flake.speed}
          />
        ))}
      </div>
      <BackgroundContent />
    </motion.div>
  );
}
