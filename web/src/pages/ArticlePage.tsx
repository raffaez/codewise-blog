import React from "react";
import { useParams } from "react-router-dom";
import articles from "../pages/article-content";
import Article from "../components/Article";
import ArticlesList from "../components/ArticlesList";
import { Article as ArticleT } from "../models/Article";
import NotFound from "./NotFound";
import RelatedArticles from "../components/RelatedArticles";

function ArticlePage() {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articles.find((article) => article.name === articleId);

  if (!article) return <NotFound />;

  let relatedArticles: ArticleT[] = [];

  articles.map((articleFromList) => {
    if (
      relatedArticles.length < 2 &&
      articleFromList.name !== article?.name &&
      articleFromList.category === article?.category
    ) {
      relatedArticles.push(articleFromList);
    }
  });

  return (
    <div className="flex flex-col lg:flex-row lg:px-5 space-y-5 lg:space-x-5">
      <div className="lg:w-9/12 px-5 w-screen">
        <Article />
      </div>
      <div className="">
        <RelatedArticles articles={relatedArticles} />
      </div>
    </div>
  );
}

export default ArticlePage;
