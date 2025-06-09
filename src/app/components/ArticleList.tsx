"use client";
import { Article } from "@/data/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type ArticleProps = {
  articles: Article[];
};
const ArticleList = ({ articles }: ArticleProps) => {
  return (
    <div>
      {articles.map((article) => (
        <React.Fragment key={article.id}>
          <article className="shadow my-4 flex flex-col">
            <Link href={`articles/${article.id}`} className="hover:opacity-75">
              <Image
                src="https://picsum.photos/800"
                alt=""
                width={1280}
                height={300}
              />
            </Link>
            <div className="bg-white flex flex-col justify-start p-6">
              <Link
                href={`articles/${article.id}`}
                className="text-blue-700 pb-4 font-bold"
              >
                Technology
              </Link>
              <Link
                href={`articles/${article.id}`}
                className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
              >
                {article.title}
              </Link>
              <p className="text-sm pb-3 text-slate-900">
                published on {article.createdAt}
              </p>
              <Link
                href={`articles/${article.id}`}
                className="text-slate-900 pb-6"
              >
                {article.content}
              </Link>
              <Link
                href={`articles/${article.id}`}
                className="text-pink-800 hover:text-black"
              >
                続きを読む
              </Link>
            </div>
          </article>
          <article
            className="shadow my-4 flex flex-col"
            key={`${article.id}-2`}
          >
            <Link href={`articles/${article.id}`} className="hover:opacity-75">
              <Image
                src="https://picsum.photos/800"
                alt=""
                width={1280}
                height={300}
              />
            </Link>
            <div className="bg-white flex flex-col justify-start p-6">
              <Link
                href={`articles/${article.id}`}
                className="text-blue-700 pb-4 font-bold"
              >
                Technology
              </Link>
              <Link
                href={`articles/${article.id}`}
                className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
              >
                {article.title}
              </Link>
              <p className="text-sm pb-3 text-slate-900">
                published on {article.createdAt}
              </p>
              <Link
                href={`articles/${article.id}`}
                className="text-slate-900 pb-6"
              >
                {article.content}
              </Link>
              <Link
                href={`articles/${article.id}`}
                className="text-pink-800 hover:text-black"
              >
                続きを読む
              </Link>
            </div>
          </article>
        </React.Fragment>
      ))}
    </div>
  );
};
export default ArticleList;
