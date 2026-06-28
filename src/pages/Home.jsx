import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, Eye, LineChart, Wallet } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { CategoryCard } from "@/components/CategoryCard";
import { ArticleCard } from "@/components/ArticleCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Newsletter } from "@/components/Newsletter";
import { categories } from "@/data/categories";
import { getFeaturedArticles } from "@/data/articles";

const steps = [
{
  icon: BookOpen,
  title: "Learn the concept",
  text: "Every topic is explained visually, from the ground up — no jargon, no prior knowledge needed."
},
{
  icon: Eye,
  title: "See it on a chart",
  text: "Spot the pattern in real market context with annotated illustrations and examples."
},
{
  icon: LineChart,
  title: "Apply with a plan",
  text: "Get clear entries, stops and targets so you can practise with discipline."
},
{
  icon: Wallet,
  title: "Manage your risk",
  text: "Protect your capital with position sizing and risk rules built into every lesson."
}];


export function Home() {
  const featured = getFeaturedArticles();

  return (
    <>
      <Hero />

      {/* Stats */}
      <section className="border-b border-border bg-card/40">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 md:grid-cols-4">
          <AnimatedCounter value={60} suffix="+" label="Visual lessons" />
          <AnimatedCounter value={6} label="Core topics" />
          <AnimatedCounter value={25} suffix="K+" label="Learners" />
          <AnimatedCounter value={100} suffix="%" label="Beginner friendly" />
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Learning Paths"
          title="Everything you need, beautifully organised"
          description="Six focused tracks take you from your first candle to building a complete trading edge." />
        
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) =>
          <CategoryCard key={c.slug} category={c} index={i} />
          )}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="How It Works"
            title="A simple path from confused to confident" />
          
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) =>
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-soft">
              
                <span className="absolute right-5 top-5 font-display text-3xl font-extrabold text-border">
                  0{i + 1}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary/12 text-secondary">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Featured articles */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Featured"
            title="Popular lessons to start with" />
          
          <Link
            to="/learn"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-secondary hover:underline">
            
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((a, i) =>
          <ArticleCard key={a.slug} article={a} index={i} />
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <Newsletter />
      </section>
    </>);

}