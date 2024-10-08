import CldImage from "../cldImage";
import WorkExperience from "./workExperience";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";

export default function AboutMe() {
  const experiences = [
    {
      startDate: "2024",
      endDate: "Presente",
      position: "Diretor Comercial",
      enterprise: "Empresa Júnior Struct",
      summary:
        "Promovido a diretor, liderando a estratégia comercial e alcançando crescimento de 233% nas vendas.",
      enterpriseUrl: "https://www.struct.unb.br/",
    },
    {
      startDate: "2023",
      endDate: "2024",
      position: "Desenvolvedor Web",
      enterprise: "Empresa Júnior Struct",
      summary:
        "Desenvolvi diversos projetos, melhorando a funcionalidade e a experiência do usuário.",
      enterpriseUrl: "https://www.struct.unb.br/",
    },
    {
      startDate: "2022",
      endDate: "2023",
      position: "Trainee",
      enterprise: "Empresa Júnior Struct",
      summary:
        "Participei de aulas e realizei um projeto final fullstack, adquirindo experiência fundamental em desenvolvimento web.",
      enterpriseUrl: "https://www.struct.unb.br/",
    },
    {
      startDate: "2023",
      endDate: "2023",
      position: "Suporte Técnico de TI",
      enterprise: "Escola Técnica de Brasília",
      summary:
        "Estágio obrigatório do curso Técnico de informática, onde aprendi suporte técnico em computadores e servidores.",
      enterpriseUrl: "http://etb.com.br/",
    },
  ];

  return (
    <div id="sobre" className="space-y-14 bg-roxo-fundo px-6 py-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl text-violeta-titulo">
          Eu sou um dev web front-end e bla bla.
        </h1>
        <CldImage
          width="242"
          height="242"
          src="eu"
          alt="Eu, Kaleb"
          className="my-10 rounded-3xl"
        />
        <div className="space-y-3">
          <p>
            Estudante de graduação no quinto semestre de Engenharia de
            Computação na{" "}
            {
              <a
                target="_blank"
                href="https://www.unb.br/"
                className="underline decoration-violeta-titulo underline-offset-2"
              >
                Universidade de Brasília
              </a>
            }{" "}
            e técnico de informática pela{" "}
            {
              <a
                target="_blank"
                href="http://etb.com.br/"
                className="underline decoration-violeta-titulo underline-offset-2"
              >
                Escola Técnica de Brasília
              </a>
            }
            .
          </p>
          <p>
            Tenho experiência em desenvolvimento de software e análise de
            requisitos, com um forte interesse em gerência de projetos e
            engenharia de software.
          </p>
          <p>
            Estou continuamente aprimorando minhas habilidades e buscando novas
            oportunidades para contribuir em um ambiente que me permita fazer a
            diferença.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-start">
        <h2 className="text-lg text-violeta-titulo">
          Experiência Profissional
        </h2>
        {experiences.map((item, key) => (
          <WorkExperience key={key} {...item} />
        ))}
      </div>

      <div>
        <h2 className="mt-7 text-lg text-violeta-titulo">Tecnologias</h2>
        <div className="mt-4 flex flex-row items-center justify-center space-x-4">
          <RiNextjsFill size={40} />
          <FaReact size={40} />
          <SiTypescript size={40} />
          <SiCplusplus size={40} />
          <FaPython size={40} />
        </div>
      </div>
    </div>
  );
}
