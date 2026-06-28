import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";






export function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-secondary">
        
        <Home className="h-3.5 w-3.5" />
        Home
      </Link>
      {items.map((item, i) =>
      <span key={i} className="inline-flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
          {item.to && i < items.length - 1 ?
        <Link
          to={item.to}
          className="text-muted-foreground transition-colors hover:text-secondary">
          
              {item.label}
            </Link> :

        <span className="font-semibold text-foreground">{item.label}</span>
        }
        </span>
      )}
    </nav>);

}