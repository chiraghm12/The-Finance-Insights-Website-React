import { createFileRoute } from "@tanstack/react-router";
import { Learn } from "@/pages/Learn";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [
    { title: "Learn — The Finance Insights" },
    {
      name: "description",
      content:
      "Explore every learning track: candlestick patterns, chart patterns, indicators, risk management, psychology and finance basics."
    },
    { property: "og:title", content: "Learn — The Finance Insights" },
    {
      property: "og:description",
      content: "Browse all topics and master the markets one lesson at a time."
    }]

  }),
  component: Learn
});