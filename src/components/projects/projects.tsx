import ProjectCard from "./projectCard";

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
        <ProjectCard key={key} {...item} />
      ))}
    </div>
  );
}
