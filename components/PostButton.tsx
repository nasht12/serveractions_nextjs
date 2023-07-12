"use client";

import { useTransition } from "react";
import { addPostsToDatabase } from "../actions/serveractions";

export default function PostButton() {
  const [isPending, startTransition] = useTransition();
  const formData = new FormData();
  formData.append("title", "ventureX");
  formData.append("content", "abc test");
  return (
    <button
      onClick={() => startTransition(() => addPostsToDatabase(formData))}
      className="fixed border bg-blue-400 p-2 rounded"
    >
      {isPending? "adding..." : "Add Post"}
    </button>
  );
}
