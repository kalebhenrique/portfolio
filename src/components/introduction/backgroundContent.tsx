"use client";
import { motion } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import ArrowDownAnimate from "./arrowDownAnimate";
import CldImage from "../cldImage";

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
      <div className="absolute bottom-5 left-0 right-0 flex justify-center">
        <ArrowDownAnimate />
      </div>
    </>
  );
}
