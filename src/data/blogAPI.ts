// export const getAllArticles = async (): Promise<Article[]> => {
//   try {
//     const res = await fetch("http://localhost:3001/posts", {
//       cache: "no-store",
// }); // SSR
// if (!res.ok) {
// throw new Error(`Failed to fetch articles: ${res.statusText}`);
// }

//     await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate delay

//     const articles = await res.json();
//     return articles;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// "use client";
import { notFound } from "next/navigation";
import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch("http://localhost:3001/posts", { cache: "no-store" });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate delay

  const articles = await res.json();
  return articles;
};

export const getDetailArticle = async (id: string): Promise<Article> => {
  const res = await fetch("http://localhost:3001/posts/${id}", {
    next: { revalidate: 60 },
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay

  const article = await res.json();
  return article;
};
