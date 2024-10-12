import CldImage from "../cldImage";
import FadeInWhenVisible from "../fadeInWhenVisible";

export default function AboutMe() {
  return (
    <div id="sobre" className="space-y-16 bg-roxo-fundo px-6 py-16">
      <div className="flex flex-col items-center justify-center">
        <FadeInWhenVisible>
          <h1 className="text-center text-4xl text-violeta-titulo">
            Eu sou um dev web e mobile front-end.
          </h1>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <CldImage
            width="242"
            height="242"
            src="eu"
            alt="Eu, Kaleb"
            className="mx-auto my-10 flex rounded-3xl text-center"
          />
          <div className="space-y-3">
            <p>
              Estudante de graduação no sexto semestre de Engenharia de
              Computação na Universidade de Brasília e técnico de informática
              pela Escola Técnica de Brasília.
            </p>
            <p>
              Tenho experiência em desenvolvimento de software e análise de
              requisitos, com um forte interesse em gerência de projetos e
              engenharia de software.
            </p>
            <div>
              <h2 className="text-lg text-violeta-titulo">
                Motivação e Propósito
              </h2>
              <p>
                Estou continuamente aprimorando minhas habilidades e buscando
                novas oportunidades para contribuir em um ambiente que me
                permita fazer a diferença.
              </p>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}
