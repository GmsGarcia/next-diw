export default function About() {
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
    <div className="flex items-center justify-center font-sans">
      <ul>
        {caracteristicas.map((c, i) => {
          return <li key={i}>{c}</li>
        })}
      </ul>
    </div>
  );
}
