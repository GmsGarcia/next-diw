import tecnologias from "@/app/data/tecnologias.json";
import TecnologiaCard from "@/components/TecnologiaCard";
import Link from "next/link";

export default function TecnologiasPage() {
  return (
    <div className="flex flex-col text-center">
      <h1 className="text-3xl font-bold">Tecnologias</h1>
      <div className="flex flex-wrap items-center justify-center fl font-sans gap-8 my-10 mx-50">
        {tecnologias.map((t) => (
        <Link key={t.id} href={`/tecnologias/${t.id}`}>
          <TecnologiaCard
            title={t.title}
            image={t.image}
          />
        </Link>
      ))}

      </div>
    </div>
  );
}
