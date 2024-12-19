"use client";

import { useChat } from "~/contexts/chatContext";
import { GoArrowUpRight } from "react-icons/go";

export default function Footer() {
  const { openChat } = useChat();

  return (
    <>
      <footer className="bg-cinza-fundo">
        <div className="mx-6 flex justify-between py-7">
          <ul className="flex flex-col space-y-6">
            <li>
              <h2 className="text-violeta-titulo-contraste">Onde estou</h2>
            </li>
            <li>
              <a
                className="inline-flex items-center hover:text-violeta-base-hover"
                target="_blank"
                href="https://github.com/kalebhenrique"
              >
                GitHub{" "}
                <span className="flex items-start">
                  <GoArrowUpRight size={15} />{" "}
                </span>
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center hover:text-violeta-base-hover"
                target="_blank"
                href="https://www.linkedin.com/in/kalebhenrique/"
              >
                LinkedIn
                <span className="flex items-start">
                  <GoArrowUpRight size={15} />{" "}
                </span>
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center hover:text-violeta-base-hover"
                target="_blank"
                href="https://drive.google.com/drive/folders/1r4_Hosk6TaU2fzFxwKn5AJSYdhE2Npe9?usp=sharing"
              >
                Baixar CV
                <span className="flex items-start">
                  <GoArrowUpRight size={15} />{" "}
                </span>
              </a>
            </li>
          </ul>
          <ul className="flex flex-col space-y-6">
            <li>
              <h2 className="text-violeta-titulo-contraste">Contato</h2>
            </li>
            <li>
              <button
                className="hover:text-violeta-base-hover"
                onClick={openChat}
              >
                Chat
              </button>
            </li>
          </ul>
        </div>
        <div className="flex justify-center py-7">
          <span>Kaleb Henrique@2024</span>
        </div>
      </footer>
    </>
  );
}
