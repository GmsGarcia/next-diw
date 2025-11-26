"use client"
import { usePathname } from "next/navigation";

export default function NavBar() {
  const active =
    "flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]";
  const normal =
    "flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]";

  const pathname = usePathname();

  const getActive = () => {
    if (pathname === "/") return "home";
    return pathname.slice(1);
  };

  return (
    <div className="flex flex-col gap-6 justify-center p-5 text-base font-medium sm:flex-row">
      <a
        className={getActive() === "home" ? active : normal}
        href="/"
        target="_self"
        rel="noopener noreferrer"
      >
        Home
      </a>
      
      <a
        className={getActive() === "tecnologias" ? active : normal}
        href="/tecnologias"
        target="_self"
        rel="noopener noreferrer"
      >
        Tecnologias
      </a>

      <a
        className={getActive() === "projetos" ? active : normal}
        href="/projetos"
        target="_self"
        rel="noopener noreferrer"
      >
        Projetos
      </a>
      
      <a
        className={getActive() === "caracteristicas" ? active : normal}
        href="/caracteristicas"
        target="_self"
        rel="noopener noreferrer"
      >
        Caracteristicas
      </a>

      <a
        className={getActive() === "contador" ? active : normal}
        href="/contador"
        target="_self"
        rel="noopener noreferrer"
      >
        Contador
      </a>

      <a
        className={getActive() === "about" ? active : normal}
        href="/about"
        target="_self"
        rel="noopener noreferrer"
      >
        About
      </a>
    </div>
  );
}


