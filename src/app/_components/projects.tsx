import CldImage from "./cldImage";

export default function Projects() {
  const projects = [
    {
      tipo: "Freelancer",
      nome: "Sistema de Clínica",
      src: "ibd",
      alt: "Página do Sistema",
      bgColor: "bg-azul-kaleb",
    },
    {
      tipo: "Pessoal",
      nome: "E-commerce",
      src: "eu",
      alt: "eu, kaleb",
      bgColor: "bg-orange-300",
    },
  ];

  return (
    <div
      id="projetos"
      className="flex flex-col items-center justify-center px-6"
    >
      <h1 className="pb-10 pt-16 text-center text-4xl text-violeta-titulo">
        Projetos
      </h1>
      {projects.map((item, key) => (
        <div
          key={key}
          className={`mb-10 flex h-72 w-72 flex-col rounded-3xl ${item.bgColor}`}
        >
          <div className="flex flex-col items-end justify-end space-y-2 pr-4 pt-4 text-cinza-fundo">
            <h1 className="text-lg">{item.tipo}</h1>
            <h2>{item.nome}</h2>
          </div>
          <div className="mt-auto flex items-end justify-end">
            <CldImage
              width="200"
              height="200"
              src={item.src}
              alt={item.alt}
              className="rounded-l-3xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
