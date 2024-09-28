"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "~/components/ui/button";
import ProgressBar from "./progressBar";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navbarColor, setNavbarColor] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
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
    <nav
      className={`${navbarColor} sticky top-0 z-10 backdrop-blur-sm transition-colors duration-300`}
    >
      <ProgressBar />
      <ul className="flex flex-row items-center justify-center gap-4 pb-3 pt-4">
        <li>
          <Link href="#sobre">Sobre mim</Link>
        </li>
        <li>
          <Link href="/">Habilidades</Link>
        </li>
        <li>
          <Link href="/">Projetos</Link>
        </li>
        <li>
          <Button
            className="rounded-full bg-violeta-base text-[13px] font-semibold text-cinza-fundo"
            onClick={() => redirect("/")}
          >
            Contato
          </Button>
        </li>
      </ul>
    </nav>
  );
}
