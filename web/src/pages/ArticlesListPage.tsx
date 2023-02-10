import React from "react";
import articles from "./article-content";
import ArticlesList from "../components/ArticlesList";
import Title from "../components/Title";

function ArticlesListPage() {
  return (
    <>
      <Title>
        <div className="text-center">Articles</div>
      </Title>
      <ArticlesList articles={articles} />
    </>
  );
}

export default ArticlesListPage;
