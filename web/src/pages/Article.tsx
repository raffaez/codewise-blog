import React from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFound from "./NotFound";

function Article() {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articles.find((article) => article.name === articleId);

  if (!article) return <NotFound />;

  return (
    <>
      <h1>{article?.title}</h1>
      {article?.content.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </>
  );
}

export default Article;
