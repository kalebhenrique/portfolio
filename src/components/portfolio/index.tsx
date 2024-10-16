import FadeInWhenVisible from "../fadeInWhenVisible";
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
      nome: "ToDo App",
      src: "eu",
      alt: "eu, kaleb",
      bgColor: "bg-orange-300",
    },
  ];

  return (
    <section
      id="projetos"
      className="flex flex-col items-center justify-center space-y-16 bg-cinza-fundo px-6 pb-16"
    >
      <FadeInWhenVisible>
        <h1 className="text-center text-4xl text-violeta-titulo-contraste">
          Portfólio
        </h1>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        {projects.map((item, key) => (
          <ProjectCard key={key} {...item} />
        ))}
      </FadeInWhenVisible>
    </section>
  );
}
