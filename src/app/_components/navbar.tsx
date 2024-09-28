"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "~/components/ui/button";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center gap-5 py-5">
      <Link href="/">Sobre mim</Link>
      <Link href="/">Habilidades</Link>
      <Link href="/">Projetos</Link>
      <Button
        className="rounded-full bg-violeta-base text-[13px] font-semibold text-cinza-fundo"
        onClick={() => redirect("/")}
      >
        Contatos
      </Button>
    </div>
  );
}
