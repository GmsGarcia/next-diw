"use client"
import tecnologias from "@/app/data/tecnologias.json";
import TecnologiaDescriptionCard from "@/components/TecnologiaDetailsCard";
import { useParams } from "next/navigation";

export default function TecnologiaPage() {
  const params = useParams();
  const id = String(params.tecnologia);

  var tec = tecnologias.find(o => o.id === id);

  if (!tec) {
    return <div className="flex m-5 justify-center">Tecnologia não encontrada</div>;
  }

  return (
    <div className="flex m-5 justify-center">
      <TecnologiaDescriptionCard 
        id={id}
        title={tec.title} 
        description={tec.description}
        rating={tec.rating}
      />
    </div>
  );
}
