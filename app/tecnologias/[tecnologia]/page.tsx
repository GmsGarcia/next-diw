"use client"
import TecnologiaCard from "@/components/TecnologiaCard";
import tecnologias from "@/app/data/tecnologias.json";
import { useParams } from "next/navigation";

export default function TecnologiasPage() {
  const params = useParams();
  const id = Number(String(params.tecnologia).replace("tecno-",""));

  return (
    <TecnologiaCard 
      key={`tecno-${id}`} 
      title={tecnologias[id].title} 
      description={tecnologias[id].description}
    />
  );
}