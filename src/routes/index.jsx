import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
    { title: "The Finance Insights — Learn the Stock Market the Smart Way" },
    {
      name: "description",
      content:
      "Master candlestick patterns, chart patterns, technical analysis, and finance basics through simple, visual explanations. Insights that build wealth."
    },
    { property: "og:title", content: "The Finance Insights" },
    {
      property: "og:description",
      content: "Learn the stock market the smart way — visual finance education."
    }]

  }),
  component: Home
});