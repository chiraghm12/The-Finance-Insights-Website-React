import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/pages/CategoryPage";

export const Route = createFileRoute("/trading-psychology")({
  head: () => ({
    meta: [
    { title: "Trading Psychology — The Finance Insights" },
    {
      name: "description",
      content:
      "Tame fear, greed and bias. Build the discipline and mindset that separate consistent traders from gamblers."
    },
    { property: "og:title", content: "Trading Psychology" },
    {
      property: "og:description",
      content: "Master the mental game behind every trading decision."
    }]

  }),
  component: () => <CategoryPage slug="trading-psychology" />
});