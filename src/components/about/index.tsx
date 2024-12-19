"use client";
import { useChat } from "~/contexts/chatContext";
import CldImage from "../cldImage";
import FadeInWhenVisible from "../fadeInWhenVisible";
import { Button } from "../ui/button";

export default function AboutMe() {
  const { openChat } = useChat();

  return (
    <>
      <section
        id="sobre"
        className="bg-roxo-fundo px-6 py-16 md:px-40 md:py-24 xl:px-60 xl:py-28"
      >
        <div className="flex flex-col md:flex-row md:space-x-28 xl:space-x-40">
          <div className="space-y-6 md:space-y-20">
            <FadeInWhenVisible>
              <div className="flex flex-col items-center justify-center">
                <h1 className="md:w-[80 0px] text-center text-4xl text-violeta-titulo md:text-start md:text-7xl">
                  Eu sou um dev web e mobile front-end.
                </h1>
                <div className="md:hidden">
                  <div className="w-full max-w-[242px] md:max-w-[600px]">
                    <CldImage
                      width="600"
                      height="600"
                      src="eu"
                      alt="Eu, Kaleb"
                      className="mx-auto my-10 w-full rounded-3xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <div className="space-y-3">
                <p>
                  Estudante de graduação no sexto semestre de Engenharia de
                  Computação na Universidade de Brasília e técnico de
                  informática pela Escola Técnica de Brasília.
                </p>
                <p>
                  Tenho experiência em desenvolvimento de software e análise de
                  requisitos, com um forte interesse em gerência de projetos e
                  engenharia de software.
                </p>
                <div className="flex items-center justify-between md:justify-start md:space-x-5">
                  <p>Se te interessou, entre em contato:</p>
                  <Button
                    className="rounded-full bg-[#7FC8E3] font-semibold text-roxo-fundo hover:bg-[#A4E3FA] md:text-xl"
                    onClick={openChat}
                  >
                    Chat
                  </Button>
                </div>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <div>
                <h2 className="text-2xl text-violeta-titulo">
                  Motivação e Propósito
                </h2>
                <p>
                  Estou continuamente aprimorando minhas habilidades e buscando
                  novas oportunidades para contribuir em um ambiente que me
                  permita fazer a diferença.
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
          <div className="hidden md:inline">
            <FadeInWhenVisible>
              <div className="w-full">
                <CldImage
                  width="800"
                  height="800"
                  src="eu"
                  alt="Eu, Kaleb"
                  className="mx-auto my-10 w-full rounded-3xl object-cover"
                />
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>
    </>
  );
}
