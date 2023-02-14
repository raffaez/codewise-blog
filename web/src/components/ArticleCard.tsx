import React from "react";
import { Article } from "../models/Article";

interface Props {
  article: Article;
}

function ArticleCard({ article }: Props) {
  return (
    <div className="max-w-[400px] lg:h-96 mx-auto p-2 hover:bg-blue-600/20 dark:hover:bg-blue-600/10 rounded-md transition-all duration-200">
      <img
        src={article.image}
        alt={article.title}
        width={350}
        height={180}
        className="w-[350px] h-[180px] xl:h-[150px] object-cover rounded-md mb-2"
      />
      <div className="text-2xl font-poppins font-semibold text-blue-700 dark:text-emerald-400">
        {article.title}
      </div>
      <p className="mt-2 text-gray-700 dark:text-gray-200 text-ellipsis overflow-hidden">
        {article.content[0]}
      </p>
    </div>
  );
}

export default ArticleCard;
