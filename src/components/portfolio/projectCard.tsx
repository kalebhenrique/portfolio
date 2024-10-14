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
      className={`mb-10 flex h-80 w-80 flex-col rounded-3xl ${props.bgColor} overflow-hidden`}
    >
      <div className="flex flex-col items-end justify-end space-y-2 pr-4 pt-4 text-cinza-fundo">
        <h1 className="text-lg">{props.tipo}</h1>
        <h2>{props.nome}</h2>
      </div>
      <div className="mt-4 flex items-end justify-end">
        <CldImage
          width="300"
          height="300"
          src={props.src}
          alt={props.alt}
          className="rounded-l-3xl"
        />
      </div>
    </div>
  );
}
