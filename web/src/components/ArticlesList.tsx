import React from "react";

import { Article } from "../models/Article";
import ArticleCard from "./ArticleCard";

interface ArticlesProps {
  articles: Article[];
}

function ArticlesList(props: ArticlesProps) {
  const { articles } = props;

  return (
    <div className="flex flex-col md:flex-row flex-wrap space-y-6 md:space-y-0">
      {articles.map((article) => (
        <div
          key={article.name}
          className="md:w-1/2 lg:w-1/3 xl:w-1/4 md:pb-10 lg:pb-6"
        >
          <ArticleCard article={article} />
        </div>
      ))}
    </div>
  );
}

export default ArticlesList;
