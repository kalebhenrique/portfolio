import CldImage from "../cldImage";

export default function AboutMe() {
  return (
    <div id="sobre" className="space-y-16 bg-roxo-fundo px-6 py-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl text-violeta-titulo">
          Eu sou um dev web e mobile front-end.
        </h1>
        <div className="flex flex-row"></div>
        <CldImage
          width="242"
          height="242"
          src="eu"
          alt="Eu, Kaleb"
          className="z-10 my-10 rounded-3xl"
        />
        <CldImage
          width="120"
          height="120"
          src="seta"
          alt="Eu, Kaleb"
          className="absolute -right-3 top-[882px] my-10 rounded-3xl"
        />
        <div className="space-y-3">
          <p>
            Estudante de graduação no sexto semestre de Engenharia de Computação
            na Universidade de Brasília e técnico de informática pela Escola
            Técnica de Brasília.
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
              novas oportunidades para contribuir em um ambiente que me permita
              fazer a diferença.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
