import React from "react";
import { Article } from "../models/Article";
import { Link } from "react-router-dom";

interface Props {
  article: Article;
}

function ArticleCard({ article }: Props) {
  const path = window.location.pathname.split("/")[2];
  console.log(path);

  return (
    <Link
      to={`/articles/${article.name}`}
      className="h-[100px] md:max-w-[340px] md:h-[350px] lg:w-[270px] lg:h-[385px] flex flex-row md:flex-col space-x-3 md:space-x-0 hover:bg-blue-600/20 dark:hover:bg-blue-600/10 rounded-md transition-all duration-200"
    >
      <img
        src={article.image}
        alt={article.title}
        width={350}
        height={180}
        className="max-w-[140px] h-[100px] md:max-w-[300px] md:min-h-[180px] lg:max-w-[270px] object-cover rounded-md mb-2"
      />
      <div className="md:px-2">
        <div
          className={`font-poppins font-semibold text-blue-700 dark:text-emerald-400 ${
            path
              ? "text-base md:text-2xl text-ellipsis overflow-hidden"
              : "text-2xl"
          }`}
        >
          {article.title}
        </div>
        <p
          className={`hidden mt-2 text-gray-700 dark:text-gray-200 text-ellipsis overflow-hidden md:block`}
        >
          {article.content[0]}
        </p>
        <p
          className={`mt-2 text-gray-700 dark:text-gray-200 ${
            path !== "" ? "hidden" : "md:hidden"
          }`}
        >
          {article.content[0].substring(0, 56) + "..."}
        </p>
      </div>
    </Link>
  );
}

export default ArticleCard;
