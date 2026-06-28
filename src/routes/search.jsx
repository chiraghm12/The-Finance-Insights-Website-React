import { createFileRoute } from "@tanstack/react-router";
import { Search } from "@/pages/Search";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
    { title: "Search — The Finance Insights" },
    {
      name: "description",
      content: "Search across every pattern, indicator and finance concept."
    }]

  }),
  component: Search
});