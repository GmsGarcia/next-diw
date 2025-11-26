interface TecnologiaCardProps {
  title: string,
  description: string
}

export default function TecnologiaCard({title, description}: TecnologiaCardProps) {
  return (
    <div className="flex flex-col p-2 bg-black p-2 gap-2">
      <h2 className="font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
}