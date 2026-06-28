import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/pages/CategoryPage";

export const Route = createFileRoute("/indicators")({
  head: () => ({
    meta: [
    { title: "Technical Indicators — The Finance Insights" },
    {
      name: "description",
      content:
      "Understand RSI, MACD, Moving Averages, Bollinger Bands, VWAP, ATR and more — and how to combine them effectively."
    },
    { property: "og:title", content: "Technical Indicators" },
    {
      property: "og:description",
      content: "The most useful indicators, explained without the jargon."
    }]

  }),
  component: () => <CategoryPage slug="indicators" />
});