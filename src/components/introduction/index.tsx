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
  return (
    <motion.div
      initial={{ x: startX, y: -100, opacity: 0 }}
      animate={{ x: [0, 950, 1900], y: [0, 300, 600], opacity: 1 }}
      transition={{
        duration: speed,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      <div
        className="rounded-full bg-white opacity-70"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
    </motion.div>
  );
};

export default function Introduction() {
  const snowflakes = React.useMemo(
    () =>
      Array.from({ length: 100 }).map(() => ({
        size: Math.random() * (8 - 3) + 3, // Tamanhos entre 3px e 8px
        startX: Math.random() * 100 - 50,
        speed: Math.random() * 10 + 2, // Velocidades entre 2s e 12s
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
      className="relative flex h-[770px] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-[#2C1431] via-[#161732] to-[#042433] lg:h-screen"
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
