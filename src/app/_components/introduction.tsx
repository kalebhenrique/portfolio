import ArrowDownAnimate from "./arrowDownAnimate";
import CldImage from "./cldImage";
import { MdInfoOutline } from "react-icons/md";

export default function Introduction() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-36">
        <div className="flex flex-row items-center">
          <CldImage
            width="300"
            height="300"
            src="celeste"
            alt="Montanha Celeste"
          />
          <MdInfoOutline />
        </div>
        <div className="py-3 text-center">
          <span>
            Sou apaixonado por criar experiências envolventes, acessíveis e
            centradas no usuário.
          </span>
        </div>
        <div>
          <ArrowDownAnimate />
        </div>
      </div>
    </>
  );
}
