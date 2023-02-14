import React from "react";
import { Link } from "react-router-dom";
import { Article } from "../models/Article";
import ArticleCard from "./ArticleCard";

interface ArticlesProps {
  articles: Article[];
}

function ArticlesList(props: ArticlesProps) {
  const { articles } = props;

  return (
    <div className="flex flex-col md:flex-row flex-wrap mx-5">
      {articles.map((article) => (
        <div key={article.name} className="md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <Link to={`/articles/${article.name}`}>
            <ArticleCard article={article} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ArticlesList;
