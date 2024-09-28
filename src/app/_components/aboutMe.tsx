import CldImage from "./cldImage";

export default function AboutMe() {
  return (
    <div
      id="sobre"
      className="flex flex-col items-center justify-center bg-roxo-fundo px-6"
    >
      <h1 className="pb-10 pt-16 text-center text-4xl text-violeta-titulo">
        Eu sou um dev web front-end e bla bla.
      </h1>
      <CldImage
        width="242"
        height="242"
        src="eu"
        alt="Eu, Kaleb"
        className="rounded-3xl"
      />
      <p className="my-7 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit
        interdum magna, non consequat urna tincidunt dictum. Nam imperdiet porta
        enim, nec semper quam commodo non. Vivamus vel enim ante.
      </p>
    </div>
  );
}
