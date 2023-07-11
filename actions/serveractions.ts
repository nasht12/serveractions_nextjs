("use server");
import { revalidateTag } from "next/cache";
import { Post } from "../typings";

export const addPostsToDatabase = async (data: FormData) => {
  const title = data.get("title")?.toString();
  const content = data.get("content")?.toString();

  if (!title || !content) return;

  const newPost: Post = {
    title: title,
    content: content,
  };

  await fetch("https://64adcecdb470006a5ec66ca9.mockapi.io/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidateTag("posts");
};
