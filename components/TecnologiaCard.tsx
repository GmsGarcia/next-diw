interface TecnologiaCardProps {
  title: string,
  image: string
}

export default function TecnologiaCard({title, image}: TecnologiaCardProps) {
  return (
    <div className="flex flex-col p-2 bg-white text-black gap-2 rounded-md">
      <h2 className="font-bold">{title}</h2>
      <img src={image} alt={title} />
    </div>
  );
}
