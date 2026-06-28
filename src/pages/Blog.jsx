import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Clock, User } from "lucide-react";
import { PageHeader } from "@/layouts/PageHeader";
import { SearchBar } from "@/components/SearchBar";
import { ChartGlyph } from "@/components/ChartGlyph";
import { blogCategories, blogPosts } from "@/data/blog";
import { formatDate } from "@/utils/format";

const PAGE_SIZE = 6;

export function Blog() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((p) => {
      const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
      const matchesCat = cat === "All" || p.category === cat;
      return matchesQuery && matchesCat;
    });
  }, [query, cat]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const visible = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  const reset = (fn) => {
    fn();
    setPage(1);
  };

  return (
    <>
      <PageHeader
        eyebrow="The Blog"
        title="Insights, guides and market thinking"
        description="Long-form articles to deepen your understanding beyond the lessons."
        crumbs={[{ label: "Blog" }]} />
      

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="lg:max-w-md lg:flex-1">
            <SearchBar
              value={query}
              onChange={(v) => reset(() => setQuery(v))}
              placeholder="Search articles…" />
            
          </div>
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((c) =>
            <button
              key={c}
              onClick={() => reset(() => setCat(c))}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              cat === c ?
              "bg-gradient-accent text-secondary-foreground shadow-soft" :
              "border border-border bg-card text-muted-foreground hover:text-foreground"}`
              }>
              
                {c}
              </button>
            )}
          </div>
        </div>

        {visible.length === 0 ?
        <div className="mt-12 rounded-2xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground">
            No articles match your search.
          </div> :

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) =>
          <motion.article
            key={p.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            
                <div className="relative aspect-[16/9] overflow-hidden bg-gradient-primary">
                  <ChartGlyph
                sentiment="Bullish"
                className="absolute inset-0 h-full w-full p-6 opacity-80 transition-transform duration-500 group-hover:scale-105" />
              
                  <span className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-[0.7rem] font-bold backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <User className="h-3.5 w-3.5" /> {p.author}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {p.readingTime} min
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug transition-colors group-hover:text-secondary">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.excerpt}
                  </p>
                  <span className="mt-4 text-xs font-medium text-muted-foreground">
                    {formatDate(p.date)}
                  </span>
                </div>
              </motion.article>
          )}
          </div>
        }

        {totalPages > 1 &&
        <div className="mt-12 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) =>
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`h-10 w-10 rounded-xl text-sm font-bold transition-colors ${
            current === i + 1 ?
            "bg-gradient-accent text-secondary-foreground shadow-soft" :
            "border border-border bg-card text-muted-foreground hover:text-foreground"}`
            }>
            
                {i + 1}
              </button>
          )}
          </div>
        }
      </section>
    </>);

}