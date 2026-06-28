import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/pages/CategoryPage";

export const Route = createFileRoute("/finance-basics")({
  head: () => ({
    meta: [
    { title: "Finance Basics — The Finance Insights" },
    {
      name: "description",
      content:
      "IPOs, dividends, buybacks, ETFs, mutual funds, demat accounts and the foundations every investor needs."
    },
    { property: "og:title", content: "Finance Basics" },
    {
      property: "og:description",
      content: "The foundations every investor needs, made simple."
    }]

  }),
  component: () => <CategoryPage slug="finance-basics" />
});