import Contador from "@/components/Contador";

export default function ContadorPage() {
  return (
    <div className="flex flex-col items-center justify-center font-sans">
      <h1 className="text-3xl font-bold">Contador</h1>
      <Contador />
    </div>
  );
}
