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
    <>
      <div className="flex flex-row flex-wrap">
        {articles.map((article) => (
          <div key={article.name} className="max-w-sm basis-1/3 p-3 ">
            {/* <Link to={`/articles/${article.name}`}> */}
            <ArticleCard article={article} />
            {/* </Link> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default ArticlesList;
