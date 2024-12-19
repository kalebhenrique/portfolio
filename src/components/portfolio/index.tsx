import FadeInWhenVisible from "../fadeInWhenVisible";
import ProjectCard from "./projectCard";

export default function Projects() {
  const projects = [
    {
      tipo: "Trainee Struct",
      nome: "API Ruby on Rails",
      src: "api-ruby",
      alt: "Tela de Controllers Ruby On Rails",
      bgColor: "bg-red-300 ",
    },
    {
      tipo: "Freelancer",
      nome: "Sistema de Clínica",
      src: "ibd",
      alt: "Página do Sistema",
      bgColor: "bg-azul-kaleb md:col-span-2",
    },
  ];

  return (
    <section
      id="projetos"
      className="flex flex-col items-center justify-center space-y-16 bg-cinza-fundo px-6 pb-16 md:items-start md:justify-start md:px-40 md:py-24 xl:px-60 xl:py-28"
    >
      <FadeInWhenVisible>
        <h1 className="text-4xl text-violeta-titulo-contraste md:text-7xl">
          Portfólio
        </h1>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <div className="grid-col-1 grid gap-8 md:grid-cols-3 xl:gap-14">
          {projects.map((item, key) => (
            <ProjectCard key={key} {...item} />
          ))}
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
