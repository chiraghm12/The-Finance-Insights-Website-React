import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Bookmark, Clock, Share2 } from "lucide-react";
import { FaInstagram, FaXTwitter, FaYoutube, FaFacebook } from "react-icons/fa6";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ReadingProgress } from "@/components/ReadingProgress";
import { PatternCard } from "@/components/PatternCard";
import { getCategory } from "@/data/categories";
import { difficultyClass, sentimentClass } from "@/utils/format";
import { useBookmarks } from "@/context/BookmarkContext";

export function Section({
  icon: Icon,
  title,
  children
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="scroll-mt-28">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary/12 text-secondary">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="text-2xl font-extrabold">{title}</h2>
      </div>
      <div className="mt-4 text-[0.975rem] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </motion.section>
  );
}

export function ArticleLayout({ article, related = [], children }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-40 text-center">
        <h1 className="text-3xl font-extrabold">Article not found</h1>
        <Link to="/learn" className="mt-4 inline-block font-semibold text-secondary hover:underline">
          Back to Learn
        </Link>
      </div>
    );
  }

  const category = getCategory(article.categorySlug);
  const saved = isBookmarked(article.slug);

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: article.title, url: window.location.href });
      } catch {
        /* cancelled */
      }
    }
  };

  return (
    <article>
      <ReadingProgress />

      {/* Banner */}
      <header className="relative overflow-hidden border-b border-border bg-gradient-hero pt-28 sm:pt-32">
        <div className="mx-auto max-w-4xl px-4 pb-12 pt-6 sm:px-6">
          <Breadcrumb
            items={[
              { label: "Learn", to: "/learn" },
              ...(category ? [{ label: category.title, to: category.to }] : []),
              { label: article.title }
            ]} />

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-3 py-1 text-xs font-bold ${difficultyClass(article.difficulty)}`}>
              {article.difficulty}
            </span>
            {article.sentiment &&
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${sentimentClass(article.sentiment)}`}>
                {article.sentiment}
              </span>
            }
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" /> {article.readingTime} min read
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{article.excerpt}</p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => toggleBookmark(article.slug)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold shadow-soft transition-colors hover:border-secondary hover:text-secondary">
              <Bookmark className={`h-4 w-4 ${saved ? "fill-secondary text-secondary" : ""}`} />
              {saved ? "Saved" : "Save"}
            </button>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold shadow-soft transition-colors hover:border-secondary hover:text-secondary">
              <Share2 className="h-4 w-4" /> Share
            </button>
            <div className="flex items-center gap-1.5">
              {[FaInstagram, FaXTwitter, FaYoutube, FaFacebook].map((I, i) =>
                <a
                  key={i}
                  href="#"
                  aria-label="Share"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-secondary">
                  <I className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        {children}
      </div>

      {/* Related */}
      {related.length > 0 &&
        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-extrabold">Related lessons</h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a, i) =>
                <PatternCard key={a.slug} article={a} index={i} />
              )}
            </div>
          </div>
        </section>
      }
    </article>
  );
}
