"use client";
import { redirect } from "next/navigation";

export default function Footer() {
  return (
    <footer>
      <div className="mx-6 my-7 flex justify-between">
        <ul className="flex flex-col space-y-6">
          <li>
            <h2 className="text-violeta-titulo">Onde estou</h2>
          </li>
          <li>
            <a target="_blank" href="https://github.com/kalebhenrique">
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/kalebhenrique/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://read.cv/kalebhenrique">
              CV
            </a>
          </li>
        </ul>
        <ul className="flex flex-col space-y-6">
          <li>
            <h2 className="text-violeta-titulo">Contato</h2>
          </li>
          <li>
            <button onClick={() => redirect("/")}>Mensagem</button>
          </li>
        </ul>
      </div>
      <div className="my-7 flex justify-center">
        <span>Kaleb Henrique@2024</span>
      </div>
    </footer>
  );
}
