import { createFileRoute } from "@tanstack/react-router";
import { ArticleDetails } from "@/pages/ArticleDetails";
import { getArticle } from "@/data/articles";

export const Route = createFileRoute("/article/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    const title = a ? `${a.title} — The Finance Insights` : "Article — The Finance Insights";
    const description = a?.excerpt ?? "In-depth finance lesson on The Finance Insights.";
    return {
      meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" }]

    };
  },
  component: ArticleRoute
});

function ArticleRoute() {
  const { slug } = Route.useParams();
  return <ArticleDetails slug={slug} />;
}