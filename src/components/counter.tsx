"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect, HTMLAttributes } from "react";

interface CounterProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
}

export default function Counter({ name, className, ...props }: CounterProps) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const savedCount = localStorage.getItem(`counter_${name}`);

    console.log(savedCount);
    if (savedCount) {
      setCount(parseInt(savedCount, 10));
    }
  }, [name]);

  useEffect(() => {
    localStorage.setItem(`counter_${name}`, count.toString());
  }, [name, count]);

  const decrement = () => setCount(prevCount => prevCount - 1);
  const increment = () => setCount(prevCount => prevCount + 1);

  return (
    <div className={cn("flex items-center justify-start gap-2", className)} {...props}>
      <div className="flex size-32 items-center justify-center gap-2 rounded-full bg-blue-600 font-black">
        <button
          onClick={decrement}
          className="translate-y-5 select-none text-4xl text-yellow-400 transition-all duration-200 hover:-translate-x-1 hover:translate-y-6 hover:scale-150 hover:text-yellow-500"
        >
          -
        </button>
        <span className="text-3xl italic text-slate-50">{count}</span>
        <button
          onClick={increment}
          className="-translate-y-5 select-none text-3xl text-yellow-400 transition-all duration-200 hover:-translate-y-6 hover:translate-x-1 hover:scale-150 hover:text-yellow-500"
        >
          +
        </button>
      </div>
      <h3 className="text-2xl font-black uppercase italic text-slate-50">{name}</h3>
    </div>
  );
}
