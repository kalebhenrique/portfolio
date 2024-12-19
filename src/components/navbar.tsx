"use client";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { useEffect, useState } from "react";
import { useChat } from "~/contexts/chatContext";

export default function Navbar() {
  const [navbarColor, setNavbarColor] = useState("bg-transparent");
  const { openChat } = useChat();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 140) {
        setNavbarColor("bg-cinza-overlay-navbar bg-opacity-90");
      } else {
        setNavbarColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`${navbarColor} fixed left-0 right-0 top-0 z-20 backdrop-blur-md transition-colors duration-300`}
      >
        <ul className="flex flex-row items-center justify-center gap-4 pb-3 pt-4 lg:gap-12 lg:pb-4 lg:pt-5">
          <li className="hover:text-violeta-base-hover">
            <Link href="#sobre">Sobre</Link>
          </li>
          <li className="hover:text-violeta-base-hover">
            <Link href="#habilidades">Stack</Link>
          </li>
          <li className="hover:text-violeta-base-hover">
            <Link href="#projetos">Portfólio</Link>
          </li>
          <li>
            <Button
              className="rounded-full bg-violeta-base font-semibold text-cinza-fundo hover:bg-violeta-base-hover lg:text-xl"
              onClick={openChat}
            >
              Chat
            </Button>
          </li>
        </ul>
      </nav>
    </>
  );
}
