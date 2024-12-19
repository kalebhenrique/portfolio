import CldImage from "../cldImage";

interface projectCardProps {
  tipo: string;
  nome: string;
  src: string;
  alt: string;
  bgColor: string;
}

export default function ProjectCard(props: projectCardProps) {
  return (
    <div
      className={`flex h-80 w-full flex-col rounded-3xl ${props.bgColor} transform overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110`}
    >
      <div className="flex flex-1 flex-col items-end justify-end space-y-2 pr-4 pt-4 text-cinza-fundo">
        <h1 className="text-lg md:text-2xl">{props.tipo}</h1>
        <h2>{props.nome}</h2>
      </div>
      <div className="ml-4 mt-auto flex w-full transform items-end justify-end transition-transform duration-300 ease-in-out hover:translate-y-3">
        <CldImage
          width="600"
          height="400"
          src={props.src}
          alt={props.alt}
          className="rounded-l-3xl"
        />
      </div>
    </div>
  );
}
