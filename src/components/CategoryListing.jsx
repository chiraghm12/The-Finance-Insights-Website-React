import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { SearchBar } from "@/components/SearchBar";
import { PatternCard } from "@/components/PatternCard";


const filters = ["All", "Beginner", "Intermediate", "Advanced", "Bullish", "Bearish"];

/** Reusable searchable + filterable grid used by every category page. */
export function CategoryListing({ articles }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      const matchesQuery =
      !q ||
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q);
      const matchesFilter = filter === "All" || a.difficulty === filter || a.sentiment === filter;
      return matchesQuery && matchesFilter;
    });
  }, [articles, query, filter]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="lg:max-w-md lg:flex-1">
          <SearchBar value={query} onChange={setQuery} placeholder="Search this category…" />
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) =>
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            filter === f ?
            "bg-gradient-accent text-secondary-foreground shadow-soft" :
            "border border-border bg-card text-muted-foreground hover:text-foreground"}`
            }>
            
              {f}
            </button>
          )}
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Showing <span className="font-semibold text-foreground">{results.length}</span>{" "}
        {results.length === 1 ? "topic" : "topics"}
      </p>

      {results.length === 0 ?
      <div className="mt-12 rounded-2xl border border-dashed border-border bg-card p-12 text-center">
          <p className="text-muted-foreground">No topics match your search.</p>
        </div> :

      <motion.div
        layout
        className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        
          {results.map((a, i) =>
        <PatternCard key={a.slug} article={a} index={i} />
        )}
        </motion.div>
      }
    </div>);

}