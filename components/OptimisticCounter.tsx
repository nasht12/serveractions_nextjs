"use client";
import { updateCounter } from "../actions/updateCounter";
import { Counter } from "../typings";
import { experimental_useOptimistic as useOptimistic } from "react";

export default function OptimisticCounter({ counter }: Counter) {

    const [optimisticCounter, setOptimisticCounter] = useOptimistic(counter, 
        (state, amount) => state + Number(amount));

    const optimisticUpdateCounter = async (amount: number) => {
        setOptimisticCounter(amount);
        await updateCounter(amount);
    }
  return (
    <div className="flex flex-col">
      Optimisitc Count: {optimisticCounter}
      <button
        className="fixed border bg-blue-400 w-12 p-2 rounded"
        onClick={() => optimisticUpdateCounter(1)}
      >
        Increase
      </button>
      <button
        className="fixed border bg-blue-400 w-12 p-2 rounded"
        onClick={() => optimisticUpdateCounter(-1)}
      >
        Decrease
      </button>
    </div>
  );
}
