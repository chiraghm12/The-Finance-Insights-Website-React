import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/pages/CategoryPage";

export const Route = createFileRoute("/candlestick-patterns")({
  head: () => ({
    meta: [
    { title: "Candlestick Patterns — The Finance Insights" },
    {
      name: "description",
      content:
      "Learn every key candlestick pattern — Hammer, Doji, Engulfing, Morning Star and more — with visual, beginner-friendly guides."
    },
    { property: "og:title", content: "Candlestick Patterns" },
    {
      property: "og:description",
      content: "Read price action through high-probability candlestick signals."
    }]

  }),
  component: () => <CategoryPage slug="candlestick-patterns" />
});