"use client"
import { useEffect, useState } from "react";

export default function Contador() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<number[]>([0]);

  const style = "flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px] cursor-pointer";
  var countColor = handleColor();

  function incrementar() {
    if (count >= 10) return;
    setCount(count + 1);
    setHistory([...history, count + 1]);
    handleColor();
  }

  function decrementar() {
    if (count <= 0) return;
    setCount(count - 1);
    setHistory([...history, count - 1]);
    handleColor();
  }

  function resetar() {
    setCount(0);
    setHistory([...history, 0]);
    handleColor();
  }

  function handleColor() {
    if (count >= 8) return "text-green-500";
    if (count >= 4) return "text-yellow-300";
    return "text-red-500";
  } 

  // load from localStorage
  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    const savedHistory = localStorage.getItem("history");

    if (savedCount) setCount(JSON.parse(savedCount));
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
    localStorage.setItem("history", JSON.stringify(history));
  }, [count, history]);

  return (
    <div className="flex flex-col gap-3 text-center">
      <p className={`text-xl font-bold my-5 ${countColor}`}>{count}</p>
      <div id="controls" className="flex gap-3 justify-center">
        <button onClick={incrementar} className={style}>Incrementar</button>
        <button onClick={decrementar} className={style}>Decrementar</button>
        <button onClick={resetar} className={style}>Resetar</button>
      </div>
      <div>
        <ul>
          {history.map((v, i) => (
            <ul key={i}>
              {v}
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
}
