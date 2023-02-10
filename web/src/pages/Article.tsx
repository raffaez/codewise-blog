import React from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";

function Article() {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articles.find((article) => article.name === articleId);

  return (
    <>
      <h1>{article?.title}</h1>
      {article?.content.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </>
  );
}

export default Article;
