import { createFileRoute } from "@tanstack/react-router";
import { Calculators } from "@/pages/Calculators";

export const Route = createFileRoute("/calculators")({
  head: () => ({
    meta: [
    { title: "Calculators — The Finance Insights" },
    {
      name: "description",
      content:
      "Free trading and investing calculators: position size, risk-reward, SIP compounding and profit/loss."
    },
    { property: "og:title", content: "Calculators — The Finance Insights" },
    {
      property: "og:description",
      content: "Plan trades and investments with free, instant calculators."
    }]

  }),
  component: Calculators
});