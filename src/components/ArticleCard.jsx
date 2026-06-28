import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Bookmark, Clock } from "lucide-react";

import { ChartGlyph } from "./ChartGlyph";
import { difficultyClass } from "@/utils/format";
import { useBookmarks } from "@/context/BookmarkContext";

export function ArticleCard({ article, index = 0 }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const saved = isBookmarked(article.slug);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      
      <Link
        to="/article/$slug"
        params={{ slug: article.slug }}
        className="relative block aspect-[16/9] overflow-hidden bg-gradient-primary">
        
        <ChartGlyph
          sentiment={article.sentiment}
          className="absolute inset-0 h-full w-full p-6 opacity-80 transition-transform duration-500 group-hover:scale-105" />
        
        <span className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-[0.7rem] font-bold text-foreground backdrop-blur">
          {article.category}
        </span>
      </Link>

      <button
        onClick={() => toggleBookmark(article.slug)}
        aria-label={saved ? "Remove bookmark" : "Bookmark"}
        className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/85 text-muted-foreground backdrop-blur transition-colors hover:text-secondary">
        
        <Bookmark className={`h-4 w-4 ${saved ? "fill-secondary text-secondary" : ""}`} />
      </button>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 text-[0.7rem] font-bold ${difficultyClass(article.difficulty)}`}>
            
            {article.difficulty}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {article.readingTime} min read
          </span>
        </div>
        <Link to="/article/$slug" params={{ slug: article.slug }}>
          <h3 className="mt-3 text-lg font-bold leading-snug transition-colors group-hover:text-secondary">
            {article.title}
          </h3>
        </Link>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>
      </div>
    </motion.article>);

}