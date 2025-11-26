import Caracterisitica from "@/components/Caracteristica";

export default function CaracteristicasPage() {
  const caracteristicas = [
    'JSX, sintaxe que mistura HTML e JS.',
    'Componentes, funções que retornam JSX.',
    'Componentes Reutilizáveis e Modulares.',
    'Roteamento Automático e APIs.',
    'Hooks: useState, useEffect e useSWR.',
    'Renderização Rápida e SEO Friendly.',
    'TypeScript Seguro e Escalável.',
    'Comunidade Ativa e Popularidade.'
  ]

  return (
    <div className="flex flex-col text-center">
      <h1 className="text-3xl font-bold">Caracteristicas</h1>
      <div className="flex flex-wrap items-center justify-center font-sans">
        {caracteristicas.map((c, i) => {
          return <Caracterisitica key={i} caracteristica={c} />
          })}
      </div>
    </div>
  );
}
