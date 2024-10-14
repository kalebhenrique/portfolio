"use client";

import { useChat } from "~/context/chatContext";

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
                className="hover:text-violeta-base-hover"
                target="_blank"
                href="https://github.com/kalebhenrique"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="hover:text-violeta-base-hover"
                target="_blank"
                href="https://www.linkedin.com/in/kalebhenrique/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="hover:text-violeta-base-hover"
                target="_blank"
                href="https://drive.google.com/drive/folders/1r4_Hosk6TaU2fzFxwKn5AJSYdhE2Npe9?usp=sharing"
              >
                Baixar CV
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
