"use server";
import { revalidateTag } from "next/cache";
import { Article, Post } from "../typings";

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

export const addArticleToDatabase = async (article: FormData) => {
  const title = article.get("title")?.toString();
  const content = article.get("content")?.toString();
  const imageurl = article.get("imageurl")?.toString();
  const tags = article.get("tags")?.toString();

  if (!title || !content || !imageurl || !tags) return;

  const newArticle: Article = {
    title,
    content,
    imageurl,
    tags,
  };

  await fetch("https://64adcecdb470006a5ec66ca9.mockapi.io/articles", {
    method: "POST",
    body: JSON.stringify(newArticle),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidateTag("articles")
};
