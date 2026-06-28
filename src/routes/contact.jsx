import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/pages/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
    { title: "Contact — The Finance Insights" },
    {
      name: "description",
      content:
      "Get in touch with The Finance Insights for questions, feedback or partnership ideas."
    },
    { property: "og:title", content: "Contact — The Finance Insights" },
    {
      property: "og:description",
      content: "Questions, feedback, or partnership ideas? Let's talk."
    }]

  }),
  component: Contact
});