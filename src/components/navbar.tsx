import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { toggleChat } from "~/stores/chatStore";

export default function Navbar() {
  const [navbarColor, setNavbarColor] = useState("bg-transparent");

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
    <nav
      className={`${navbarColor} fixed left-0 right-0 top-0 z-20 backdrop-blur-md transition-colors duration-300`}
    >
      <ul className="flex flex-row items-center justify-center gap-4 pb-3 pt-4 lg:gap-12 lg:pb-4 lg:pt-5">
        <li className="hover:text-violeta-base-hover">
          <a href="#sobre">Sobre</a>
        </li>
        <li className="hover:text-violeta-base-hover">
          <a href="#habilidades">Stack</a>
        </li>
        <li className="hover:text-violeta-base-hover">
          <a href="#projetos">Portfólio</a>
        </li>
        <li>
          <Button
            className="rounded-full bg-violeta-base font-semibold text-cinza-fundo hover:bg-violeta-base-hover md:text-xl"
            onClick={toggleChat}
          >
            Chat
          </Button>
        </li>
      </ul>
    </nav>
  );
}
