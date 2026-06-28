import { createFileRoute } from "@tanstack/react-router";
import { Blog } from "@/pages/Blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
    { title: "Blog — The Finance Insights" },
    {
      name: "description",
      content:
      "Long-form articles, guides and market thinking to deepen your understanding of trading and investing."
    },
    { property: "og:title", content: "Blog — The Finance Insights" },
    {
      property: "og:description",
      content: "Insights, guides and market thinking from our team."
    }]

  }),
  component: Blog
});