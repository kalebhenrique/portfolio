"use client";
import { motion } from "framer-motion";
import CldImage from "./cldImage";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import ArrowDownAnimate from "./arrowDownAnimate";

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
  const snowflakes = Array.from({ length: 100 });

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
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-[#2C1431] via-[#161732] to-[#042433]"
    >
      <div className="pointer-events-none absolute inset-0">
        {snowflakes.map((_, index) => (
          <Snowflake key={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        className="z-0 flex flex-col items-center"
      >
        <div className="flex flex-row items-end">
          <Popover>
            <PopoverTrigger>
              <CldImage
                width="360"
                height="360"
                src="celeste"
                alt="Montanha Celeste"
                className="z-0"
              />
            </PopoverTrigger>
            <PopoverContent className="mr-2 w-32 bg-violeta-base bg-opacity-90 text-[11px] text-cinza-fundo backdrop-blur-sm">
              <p>
                Montanha do jogo Celeste, que aborda temas de superação e
                perseverança — qualidades essenciais para programadores!
              </p>
            </PopoverContent>
          </Popover>
        </div>

        <div className="py-3 text-center">
          <span className="text-lg">
            Sou apaixonado por criar experiências envolventes, acessíveis e
            centradas no usuário.
          </span>
        </div>
      </motion.div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <ArrowDownAnimate />
      </div>
    </motion.div>
  );
}
