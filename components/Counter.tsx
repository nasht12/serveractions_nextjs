"use client";
import { updateCounter } from "../actions/updateCounter";
import { Counter } from "../typings";

export default function UpdateCounter({ counter }: Counter) {
  return (
    <div className="flex flex-col">
      Regular Count: {counter}
      <button
        className="fixed border bg-blue-400 w-12 p-2 rounded"
        onClick={() => updateCounter(1)}
      >
        Increase
      </button>
      <button
        className="fixed border bg-blue-400 w-12 p-2 rounded"
        onClick={() => updateCounter(-1)}
      >
        Decrease
      </button>
    </div>
  );
}
