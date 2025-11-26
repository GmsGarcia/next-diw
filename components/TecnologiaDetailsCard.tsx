interface TecnologiaDescriptionCardProps {
  id: string,
  title: string,
  description: string
  rating: number
}

export default function TecnologiaDescriptionCard({id, title, description, rating}: TecnologiaDescriptionCardProps) {
  return (
    <div className="flex flex-col p-2 bg-white text-black gap-2 rounded-md">
      <h2 className="font-bold">{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}
