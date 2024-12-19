"use client";
import { motion } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import CldImage from "../cldImage";
import ArrowDownAnimate from "./arrowDownAnimate";

export default function BackgroundContent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        className="z-0 flex flex-col items-center lg:space-y-6"
      >
        <div className="flex flex-row items-end">
          <Popover>
            <PopoverTrigger className="relative h-[274px] w-[360px] lg:h-[457px] lg:w-[600px]">
              <CldImage
                fill
                src="celeste2"
                alt="Montanha Celeste"
                className="z-0"
              />
            </PopoverTrigger>
            <PopoverContent className="mr-2 w-52 bg-violeta-base bg-opacity-90 text-sm text-cinza-fundo backdrop-blur-sm md:w-80 md:text-base">
              <p>
                Montanha do jogo eletrônico Celeste, obra que aborda temas de
                superação e perseverança — qualidades essenciais para
                programadores!
              </p>
            </PopoverContent>
          </Popover>
        </div>

        <div className="py-3 text-center lg:w-[600px]">
          <span className="text-lg lg:text-2xl lg:leading-relaxed">
            Sou apaixonado por criar experiências envolventes, acessíveis e
            centradas no usuário.
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        className="absolute bottom-4 left-0 right-0 flex justify-center"
      >
        <ArrowDownAnimate />
      </motion.div>
    </>
  );
}
