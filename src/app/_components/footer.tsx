"use client";
import { redirect } from "next/navigation";

export default function Footer() {
  return (
    <>
      <div className="mx-6 my-7 flex justify-between">
        <div className="flex flex-col space-y-6">
          <h2 className="text-violeta-titulo">Onde estou</h2>
          <a target="_blank" href="https://github.com/kalebhenrique">
            GitHub
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/kalebhenrique/">
            LinkedIn
          </a>
          <a target="_blank" href="/">
            CV
          </a>
        </div>
        <div className="flex flex-col space-y-6">
          <h2 className="text-violeta-titulo">Contato</h2>
          <button onClick={() => redirect("/")}>Mensagem</button>
        </div>
      </div>
      <div className="my-7 flex justify-center">
        <span>2024@Kaleb Henrique</span>
      </div>
    </>
  );
}
