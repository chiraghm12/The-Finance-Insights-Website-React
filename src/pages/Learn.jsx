import { useMemo, useState } from "react";
import { PageHeader } from "@/layouts/PageHeader";
import { SearchBar } from "@/components/SearchBar";
import { CategoryCard } from "@/components/CategoryCard";
import { PatternCard } from "@/components/PatternCard";
import { categories } from "@/data/categories";
import { articles } from "@/data/articles";

export function Learn() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      const matchesQuery =
      !q ||
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q);
      const matchesCat = activeCat === "all" || a.categorySlug === activeCat;
      return matchesQuery && matchesCat;
    });
  }, [query, activeCat]);

  return (
    <>
      <PageHeader
        eyebrow="Learning Hub"
        title="Learn the markets, one clear lesson at a time"
        description="Explore every track and find the exact topic you want to master next."
        crumbs={[{ label: "Learn" }]} />
      

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-extrabold">Learning categories</h2>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) =>
          <CategoryCard key={c.slug} category={c} index={i} />
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="text-2xl font-extrabold">All topics</h2>
        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="lg:max-w-md lg:flex-1">
            <SearchBar value={query} onChange={setQuery} />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCat("all")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              activeCat === "all" ?
              "bg-gradient-accent text-secondary-foreground shadow-soft" :
              "border border-border bg-card text-muted-foreground hover:text-foreground"}`
              }>
              
              All
            </button>
            {categories.map((c) =>
            <button
              key={c.slug}
              onClick={() => setActiveCat(c.slug)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              activeCat === c.slug ?
              "bg-gradient-accent text-secondary-foreground shadow-soft" :
              "border border-border bg-card text-muted-foreground hover:text-foreground"}`
              }>
              
                {c.title}
              </button>
            )}
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span> topics
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a, i) =>
          <PatternCard key={a.slug} article={a} index={i} />
          )}
        </div>
      </section>
    </>);

}