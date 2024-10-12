import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { experiences } from "./experiencesList";
import WorkExperience from "./workExperience";

export default function Stack() {
  return (
    <div
      id="habilidades"
      className="flex flex-col space-y-16 bg-cinza-fundo px-6 py-16"
    >
      <h1 className="text-center text-4xl text-violeta-titulo-contraste">
        Stack & Trajetória
      </h1>
      <div className="ml-3 mt-4 flex flex-row justify-center space-x-4">
        <RiNextjsFill size={40} />
        <FaReact size={40} />
        <SiTypescript size={40} />
        <SiCplusplus size={40} />
        <FaPython size={40} />
      </div>
      <div className="flex flex-col justify-start">
        <h2 className="text-lg text-violeta-titulo-contraste">
          Experiência Profissional
        </h2>
        <div className="space-y-11">
          {experiences.map((item, key) => (
            <WorkExperience key={key} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
