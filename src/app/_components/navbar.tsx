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
      if (window.scrollY > 150) {
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
    <div
      className={`${navbarColor} sticky top-0 z-10 backdrop-blur-sm transition-colors duration-300`}
    >
      <ProgressBar />
      <div className="flex items-center justify-center gap-4 pb-3 pt-4">
        <Link href="/">Sobre mim</Link>
        <Link href="/">Habilidades</Link>
        <Link href="/">Projetos</Link>
        <Button
          className="rounded-full bg-violeta-base text-[13px] font-semibold text-cinza-fundo"
          onClick={() => redirect("/")}
        >
          Contato
        </Button>
      </div>
    </div>
  );
}
