import React from "react";
import { Article } from "../models/Article";

interface ArticleCardProps {
  article: Article;
}

function ArticleCard(props: ArticleCardProps) {
  const { article } = props;

  return (
    <>
      <div className="p-6 w-full h-48 mt-1 mb-2 bg-purple-50 rounded-tr-xl rounded-bl-xl shadow-lg flex items-center space-x-4 hover:border-purple-100 border-transparent border-2 transition-all ease-in">
        <div className="shrink-1">
          <div className="text-xl font-medium text-black">{article.title}</div>
          <p className="mt-2 text-gray-600 text-ellipsis overflow-hidden">
            {article.content[0].substring(0, 150) + ["..."]}
          </p>
        </div>
      </div>
    </>
  );
}

export default ArticleCard;
