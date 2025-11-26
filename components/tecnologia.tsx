interface TecnologiaProps {
  title: string,
  description: string
}

export default function Tecnologia({title, description}: TecnologiaProps) {
  return (
    <div className="p-2 bg-black">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}