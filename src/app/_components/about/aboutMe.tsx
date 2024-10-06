import CldImage from "../cldImage";

export default function AboutMe() {
  return (
    <div id="sobre" className="bg-roxo-fundo px-6 py-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="pb-10 text-center text-4xl text-violeta-titulo">
          Eu sou um dev web front-end e bla bla.
        </h1>
        <CldImage
          width="242"
          height="242"
          src="eu"
          alt="Eu, Kaleb"
          className="rounded-3xl"
        />
        <span className="my-7 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          blandit interdum magna, non consequat urna tincidunt dictum. Nam
          imperdiet porta enim, nec semper quam commodo non. Vivamus vel enim
          ante.
        </span>
      </div>

      <div className="flex flex-col justify-start">
        <h2 className="text-lg text-violeta-titulo">
          Experiência Profissional
        </h2>
        <span className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          blandit interdum magna, non consequat urna tincidunt dictum.
        </span>
        <span className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          blandit interdum magna, non consequat urna tincidunt dictum.
        </span>
        <span className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          blandit interdum magna, non consequat urna tincidunt dictum.
        </span>

        <h2 className="mt-7 text-lg text-violeta-titulo">Tecnologias</h2>
        <span className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          blandit interdum magna, non consequat urna tincidunt dictum.
        </span>
      </div>
    </div>
  );
}
