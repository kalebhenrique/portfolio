"use client";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Contact from "./contact/";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0.06, 1], [0, 1]);
  const [navbarColor, setNavbarColor] = useState("bg-transparent");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scaleX.get() >= 0.003) {
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
        <motion.div
          className="h-1 bg-gray-400"
          style={{
            scaleX: scaleX,
            backgroundColor: "#545963",
            originX: 0,
          }}
        />
        <ul className="flex flex-row items-center justify-center gap-4 pb-3 pt-4">
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
              className="rounded-full bg-violeta-base font-semibold text-cinza-fundo hover:bg-violeta-base-hover"
              onClick={() => setIsModalOpen(true)}
            >
              Contato
            </Button>
          </li>
        </ul>
      </nav>

      <Contact isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
