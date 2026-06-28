import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/pages/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
    { title: "About — The Finance Insights" },
    {
      name: "description",
      content:
      "Our mission, vision and values — making financial education genuinely accessible through clear, visual lessons."
    },
    { property: "og:title", content: "About — The Finance Insights" },
    {
      property: "og:description",
      content: "We make the markets make sense."
    }]

  }),
  component: About
});