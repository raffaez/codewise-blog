import React from "react";
import articles from "./article-content";
import ArticlesList from "../components/ArticlesList";
import Title from "../components/Title";

function ArticlesListPage() {
  return (
    <div className="flex flex-col space-y-5 px-5 md:mx-10">
      <Title title={"articles"} />
      <ArticlesList articles={articles} />
    </div>
  );
}

export default ArticlesListPage;
