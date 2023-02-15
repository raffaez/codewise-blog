import React from "react";

import { Article } from "../models/Article";
import ArticleCard from "./ArticleCard";

interface Props {
  articles: Article[];
}

function RelatedArticles({ articles }: Props) {
  if (articles.length <= 0) return <div></div>;

  return (
    <div className="bg-blue-600/20 p-5 rounded-lg flex flex-col space-y-3">
      <div className="text-slate-700 dark:text-emerald-400 font-poppins font-semibold text-3xl">
        Related articles
      </div>
      <div className="flex flex-row lg:flex-col overflow-x-scroll lg:overflow-x-hidden w-screen lg:w-[270px] space-x-3 lg:space-x-0">
        {articles.map((article) => (
          <div className="w-screen">
            <ArticleCard key={article.name} article={article} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedArticles;
