import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { ChartGlyph } from "./ChartGlyph";
import { sentimentClass } from "@/utils/format";

/** Compact card for pattern/indicator grids that link to the details page. */
export function PatternCard({ article, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index % 8 * 0.04 }}>
      
      <Link
        to="/article/$slug"
        params={{ slug: article.slug }}
        className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
        
        <div className="relative aspect-[5/3] overflow-hidden bg-surface">
          <ChartGlyph
            sentiment={article.sentiment}
            className="absolute inset-0 h-full w-full p-5 transition-transform duration-500 group-hover:scale-110" />
          
          {article.sentiment &&
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[0.7rem] font-bold ${sentimentClass(article.sentiment)}`}>
            
              {article.sentiment}
            </span>
          }
        </div>
        <div className="flex flex-1 flex-col p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold leading-snug transition-colors group-hover:text-secondary">
              {article.title}
            </h3>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-secondary" />
          </div>
          <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
            {article.excerpt}
          </p>
        </div>
      </Link>
    </motion.div>);

}