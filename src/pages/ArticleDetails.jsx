import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Bookmark,
  Check,
  Clock,
  Layers,
  Lightbulb,
  ListChecks,
  Share2,
  Target,
  ThumbsDown,
  ThumbsUp,
  Brain,
  X } from
"lucide-react";
import { FaInstagram, FaXTwitter, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ChartGlyph } from "@/components/ChartGlyph";
import { FAQ } from "@/components/FAQ";
import { PatternCard } from "@/components/PatternCard";
import { getArticle, getRelatedArticles } from "@/data/articles";
import { getCategory } from "@/data/categories";
import { difficultyClass, sentimentClass } from "@/utils/format";
import { useBookmarks } from "@/context/BookmarkContext";

function Section({
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
    </motion.section>);

}

export function ArticleDetails({ slug }) {
  const article = getArticle(slug);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-40 text-center">
        <h1 className="text-3xl font-extrabold">Article not found</h1>
        <Link to="/learn" className="mt-4 inline-block font-semibold text-secondary hover:underline">
          Back to Learn
        </Link>
      </div>);

  }

  const category = getCategory(article.categorySlug);
  const related = getRelatedArticles(slug);
  const saved = isBookmarked(article.slug);

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: article.title, url: window.location.href });
      } catch {

        /* cancelled */}
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
            { label: article.title }]
            } />
          
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
              {[FaXTwitter, FaWhatsapp, FaLinkedin].map((I, i) =>
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
        {/* Pattern illustration placeholder */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-primary p-8 shadow-card">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Pattern Illustration
          </span>
          <div className="mt-4 aspect-[16/7] w-full rounded-2xl bg-background/10 p-6">
            <ChartGlyph sentiment={article.sentiment} className="h-full w-full" />
          </div>
        </div>

        <div className="mt-12 space-y-12">
          <Section icon={Lightbulb} title="Introduction">
            <p>{article.introduction}</p>
          </Section>

          <Section icon={Layers} title="Pattern Structure">
            <p>{article.structure}</p>
          </Section>

          <Section icon={Brain} title="Market Psychology">
            <p>{article.psychology}</p>
          </Section>

          <Section icon={Lightbulb} title="Formation Logic">
            <p>{article.formation}</p>
          </Section>

          <Section icon={ListChecks} title="Identification Rules">
            <ul className="space-y-2.5">
              {article.identification.map((rule, i) =>
              <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary/15 text-secondary">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-foreground">{rule}</span>
                </li>
              )}
            </ul>
          </Section>

          <Section icon={Target} title="Trading Strategy">
            <ol className="space-y-3">
              {article.strategy.map((step, i) =>
              <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-accent text-sm font-bold text-secondary-foreground">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-foreground">{step}</span>
                </li>
              )}
            </ol>
          </Section>

          {/* Pros / cons */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-6">
              <div className="flex items-center gap-2 text-secondary">
                <ThumbsUp className="h-5 w-5" />
                <h3 className="text-lg font-bold">Advantages</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {article.advantages.map((a, i) =>
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    {a}
                  </li>
                )}
              </ul>
            </div>
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
              <div className="flex items-center gap-2 text-destructive">
                <ThumbsDown className="h-5 w-5" />
                <h3 className="text-lg font-bold">Disadvantages</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {article.disadvantages.map((d, i) =>
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    {d}
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Real chart placeholder */}
          <Section icon={Layers} title="On a Real Chart">
            <div className="mt-1 grid place-items-center rounded-2xl border border-dashed border-border bg-card p-12 text-center">
              <Layers className="h-8 w-8 text-muted-foreground/50" />
              <p className="mt-3 text-sm text-muted-foreground">
                Real chart example placeholder — annotated screenshot coming soon.
              </p>
            </div>
          </Section>

          {/* Media placeholders */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card p-10 text-center">
              <FaYoutube className="h-9 w-9 text-destructive/70" />
              <p className="mt-3 text-sm font-semibold">Video walkthrough</p>
              <p className="text-xs text-muted-foreground">YouTube embed placeholder</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card p-10 text-center">
              <FaInstagram className="h-9 w-9 text-secondary" />
              <p className="mt-3 text-sm font-semibold">Quick visual</p>
              <p className="text-xs text-muted-foreground">Instagram embed placeholder</p>
            </div>
          </div>

          {/* FAQ */}
          <FAQ items={article.faqs} />
        </div>
      </div>

      {/* Related */}
      {related.length > 0 &&
      <section className="border-t border-border bg-surface">
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
    </article>);

}