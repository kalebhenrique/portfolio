"use client";
import { useChat } from "~/contexts/chatContext";
import CldImage from "../cldImage";
import FadeInWhenVisible from "../fadeInWhenVisible";
import { Button } from "../ui/button";

export default function AboutMe() {
  const { openChat } = useChat();

  return (
    <>
      <section id="sobre" className="bg-roxo-fundo px-6 py-16">
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

                <div className="flex items-center justify-between py-5">
                  <p>Se te interessou, entre em contato:</p>
                  <Button
                    className="rounded-full bg-[#7FC8E3] font-semibold text-roxo-fundo hover:bg-[#A4E3FA]"
                    onClick={openChat}
                  >
                    Chat
                  </Button>
                </div>
              </div>
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
      </section>
    </>
  );
}
