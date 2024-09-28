import ArrowDownAnimate from "./arrowDownAnimate";
import CldImage from "./cldImage";
import { MdInfoOutline } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export default function Introduction() {
  return (
    <>
      <div className="mx-6 flex flex-col items-center justify-center pb-20 pt-28">
        <div className="flex flex-row items-center">
          <CldImage
            width="360"
            height="360"
            src="celeste"
            alt="Montanha Celeste"
          />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <MdInfoOutline />
              </TooltipTrigger>
              <TooltipContent className="mr-2 w-32 bg-violeta-base bg-opacity-90 text-[11px] text-cinza-fundo backdrop-blur-sm">
                <p>
                  Montanha do jogo Celeste, o qual tem tema de superação e
                  perseverança.
                </p>
                <p>Qualidades essenciais paras programadores!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="py-3 text-center">
          <span>
            Sou apaixonado por criar experiências envolventes, acessíveis e
            centradas no usuário.
          </span>
        </div>
      </div>
    </>
  );
}
