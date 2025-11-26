interface CaracterisiticaProps {
  caracteristica: string,
}

export default function Caracterisitica({caracteristica}: CaracterisiticaProps) {
  return (
    <div className="flex-col m-4 p-4 border rounded-lg shadow-lg">
      <p>{caracteristica}</p>
    </div>
  );
}
