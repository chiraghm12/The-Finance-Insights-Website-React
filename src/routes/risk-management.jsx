import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/pages/CategoryPage";

export const Route = createFileRoute("/risk-management")({
  head: () => ({
    meta: [
    { title: "Risk Management — The Finance Insights" },
    {
      name: "description",
      content:
      "Position sizing, stop-losses, risk-reward and the survival math that keeps traders in the game for the long run."
    },
    { property: "og:title", content: "Risk Management" },
    {
      property: "og:description",
      content: "Protect your capital first — the foundation of every strategy."
    }]

  }),
  component: () => <CategoryPage slug="risk-management" />
});