import { motion } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import ArrowDownAnimate from "./arrowDownAnimate";
import { useTranslations, type Lang } from "~/i18n/ui";

interface BackgroundContentProps {
  lang?: Lang;
}

export default function BackgroundContent({ lang = "pt" }: BackgroundContentProps) {
  const t = useTranslations(lang);
  const isEn = lang === "en";

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
            <PopoverTrigger className="relative h-[274px] w-[360px] lg:h-[457px] lg:w-[600px] cursor-pointer">
              <img
                src={isEn ? "/celeste-en.webp" : "/celeste.webp"}
                alt={isEn ? "Celeste Mountain - Hey, I'm Kaleb" : "Montanha do jogo Celeste - Olá, sou Kaleb"}
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover z-0"
              />
            </PopoverTrigger>
            <PopoverContent className="mr-2 w-52 bg-violeta-base bg-opacity-90 text-sm text-cinza-fundo backdrop-blur-sm md:w-80 md:text-base">
              <p>{t("hero.popover")}</p>
            </PopoverContent>
          </Popover>
        </div>

        <div className="py-3 text-center md:w-[500px] lg:w-[600px]">
          <span className="text-lg font-semibold md:text-2xl md:leading-relaxed">
            {t("hero.subtitle")}
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
