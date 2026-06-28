import { useMemo, useState } from "react";
import { PageHeader } from "@/layouts/PageHeader";
import { SearchBar } from "@/components/SearchBar";
import { PatternCard } from "@/components/PatternCard";
import { searchArticles } from "@/data/articles";

export function Search() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchArticles(query), [query]);

  return (
    <>
      <PageHeader
        eyebrow="Search"
        title="Find any lesson, fast"
        description="Search across every pattern, indicator and finance concept."
        crumbs={[{ label: "Search" }]} />
      

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <SearchBar value={query} onChange={setQuery} autoFocus />
        </div>

        {query.trim() === "" ?
        <p className="mt-12 text-center text-muted-foreground">
            Start typing to search the entire library.
          </p> :
        results.length === 0 ?
        <div className="mt-12 rounded-2xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground">
            No results for “{query}”. Try a different term.
          </div> :

        <>
            <p className="mt-8 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{results.length}</span> result
              {results.length === 1 ? "" : "s"} for “{query}”
            </p>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((a, i) =>
            <PatternCard key={a.slug} article={a} index={i} />
            )}
            </div>
          </>
        }
      </section>
    </>);

}