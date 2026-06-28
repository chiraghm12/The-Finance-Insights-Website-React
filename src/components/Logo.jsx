import { Link } from "@tanstack/react-router";
import { TrendingUp } from "lucide-react";

export function Logo({ compact = false }) {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="The Finance Insights home">
      <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary shadow-soft transition-transform duration-300 group-hover:scale-105">
        <TrendingUp className="h-5 w-5 text-secondary" strokeWidth={2.5} />
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-gold ring-2 ring-background" />
      </span>
      {!compact &&
      <span className="flex flex-col leading-none">
          <span className="font-display text-[0.95rem] font-extrabold tracking-tight">
            The Finance Insights
          </span>
          <span className="text-[0.65rem] font-medium tracking-wide text-muted-foreground">
            Insights That Build Wealth
          </span>
        </span>
      }
    </Link>);

}