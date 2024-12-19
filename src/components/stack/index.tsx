import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { experiences } from "./experiencesList";
import { DiRuby } from "react-icons/di";
import WorkExperience from "./workExperience";
import FadeInWhenVisible from "../fadeInWhenVisible";

export default function Stack() {
  return (
    <section
      id="habilidades"
      className="flex flex-col space-y-16 bg-cinza-fundo px-6 py-16 md:space-y-20 md:px-40 md:py-24 xl:px-60 xl:py-28"
    >
      <FadeInWhenVisible>
        <h1 className="text-center text-4xl text-violeta-titulo-contraste lg:text-start lg:text-7xl">
          Stack & Trajetória
        </h1>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <div className="flex flex-row justify-center space-x-4 md:space-x-8 lg:justify-start lg:text-start">
          <RiNextjsFill className="text-5xl md:text-7xl" />
          <FaReact className="text-5xl md:text-7xl" />
          <SiRubyonrails className="text-5xl md:text-7xl" />
          <SiTypescript className="text-5xl md:text-7xl" />
          <DiRuby className="text-5xl md:text-7xl" />
          <SiCplusplus className="text-5xl md:text-7xl" />
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <div className="flex flex-col justify-start">
          <h2 className="text-lg text-violeta-titulo-contraste md:text-2xl">
            Experiência Profissional
          </h2>
          <div className="space-y-11">
            {experiences.map((item, key) => (
              <WorkExperience key={key} {...item} />
            ))}
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
