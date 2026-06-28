import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/pages/CategoryPage";

export const Route = createFileRoute("/chart-patterns")({
  head: () => ({
    meta: [
    { title: "Chart Patterns — The Finance Insights" },
    {
      name: "description",
      content:
      "Master chart patterns like Head & Shoulders, Triangles, Cup & Handle, Flags and Wedges with clear visual explanations."
    },
    { property: "og:title", content: "Chart Patterns" },
    {
      property: "og:description",
      content: "The structures that move markets, explained simply."
    }]

  }),
  component: () => <CategoryPage slug="chart-patterns" />
});