import Tecnologia from "@/components/tecnologia";
import tecnologias from "@/app/data/tecnologias.json";

export default function TecnologiaPage() {
  return (
    <>
      {tecnologias.map((t, i) => (
        <Tecnologia 
          key={`tecno-${i}`} 
          title={t.title} 
          description={t.description}
        />
      ))}
    </>
  );
}