import React from "react";
import { useParams } from "react-router-dom";
import articles from "../pages/article-content";
import NotFound from "../pages/NotFound";
import Title from "./Title";

function Article() {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articles.find((article) => article.name === articleId);

  if (!article) return <NotFound />;

  return (
    <div className="flex flex-col space-y-5">
      <Title
        title={article.title}
        size="text-5xl md:text-6xl"
        color="text-slate-700 dark:text-emerald-400"
      />
      <img
        src={article.image}
        alt={article.title}
        className="rounded-lg w-[640px] lg:h-96 object-cover"
      />
      {article?.content.map((paragraph) => (
        <p key={paragraph} className="text-gray-700 dark:text-gray-200">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default Article;
