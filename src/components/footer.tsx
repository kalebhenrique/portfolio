"use client";
import Contact from "./contact/contact";
import { useState } from "react";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-cinza-fundo">
        <div className="mx-6 flex justify-between py-7">
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
              <button onClick={() => setIsModalOpen(true)}>Mensagem</button>
            </li>
          </ul>
        </div>
        <div className="flex justify-center py-7">
          <span>Kaleb Henrique@2024</span>
        </div>
      </footer>

      <Contact isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
