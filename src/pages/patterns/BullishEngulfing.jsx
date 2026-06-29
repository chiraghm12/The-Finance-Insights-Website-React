import { ArticleLayout, Section } from "@/components/ArticleLayout";
import { ChartGlyph } from "@/components/ChartGlyph";
import { FAQ } from "@/components/FAQ";
import { getRelatedArticles } from "@/data/articles";
import { Lightbulb, Layers, Brain, ListChecks, Target, ThumbsUp, ThumbsDown, Check, X } from "lucide-react";
import { FaYoutube, FaInstagram } from "react-icons/fa6";

export function BullishEngulfing() {
  const slug = "bullish-engulfing";
  
  // Hardcoded article metadata
  const article = {
    slug: "bullish-engulfing",
    title: "Bullish Engulfing",
    category: "Candlestick Patterns",
    categorySlug: "candlestick-patterns",
    difficulty: "Beginner",
    readingTime: 9,
    sentiment: "Bullish",
    excerpt: "A large green candle swallows the prior red one — buyers take control."
  };

  const related = getRelatedArticles(slug);
  
  const faqs = [
  {
    'q': 'Is the Bullish Engulfing reliable for beginners?',
    'a': 'Yes — Bullish Engulfing is beginner-friendly, but reliability improves dramatically when you combine it with trend context, volume, and strict risk management.'
  },
  {
    'q': 'Which timeframe works best for Bullish Engulfing?',
    'a': 'Higher timeframes (daily, 4H) generally produce cleaner, more reliable signals, while lower timeframes generate more setups with more noise.'
  },
  {
    'q': 'Do I need indicators to trade the Bullish Engulfing?',
    'a': 'Not strictly, but a confirmation tool like RSI, MACD, or volume meaningfully filters out weaker setups.'
  }
];

  return (
    <ArticleLayout article={article} related={related}>
      
      {/* Pattern illustration */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-card">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent opacity-50" />
        <span className="relative z-10 text-sm font-bold uppercase tracking-wider text-secondary">
          Pattern Illustration
        </span>
        <div className="mt-6 flex w-full justify-center py-6 sm:py-8">
          <div className="aspect-[16/7] w-full">
            <ChartGlyph sentiment="Bullish" patternId="bullish-engulfing" className="h-full w-full" />
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-12">
        <Section icon={Lightbulb} title="Introduction">
          <p> Candlestick charts originated in 18th century Japan, developed by rice trader Munehisa Homma. </p>
          <p>Bullish Engulfing is one of the most referenced concepts in candlestick patterns. In this guide we break it down visually, explain why it forms, and show you how disciplined traders turn it into a repeatable edge — without the jargon.</p>
        </Section>

        <Section icon={Layers} title="Pattern Structure">
          <p>The Bullish Engulfing setup is defined by a clear, recognisable shape on the chart. We map out each component step by step, so you can spot a valid formation versus a look-alike that traps impatient traders.</p>
        </Section>

        <Section icon={Brain} title="Market Psychology">
          <p>Every Bullish Engulfing is a snapshot of the battle between buyers and sellers. Understanding the emotional shift it captures — from euphoria to doubt, or fear to conviction — is what turns a shape into a signal you can trust.</p>
        </Section>

        <Section icon={Lightbulb} title="Formation Logic">
          <p>Bullish Engulfing forms when a measurable imbalance between supply and demand resolves at a key level. Volume, prior trend, and location relative to support/resistance all determine whether the formation is high quality or low quality.</p>
        </Section>

        <Section icon={ListChecks} title="Identification Rules">
          <ul className="space-y-2.5">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary/15 text-secondary">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-foreground">Confirm the prevailing trend before the Bullish Engulfing appears.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary/15 text-secondary">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-foreground">Validate the shape against the textbook proportions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary/15 text-secondary">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-foreground">Check that volume supports the move, not contradicts it.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary/15 text-secondary">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-foreground">Wait for a confirmation candle or close beyond the trigger level.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary/15 text-secondary">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-foreground">Note the nearest support and resistance for context.</span>
              </li>
          </ul>
        </Section>

        <Section icon={Target} title="Trading Strategy">
          <ol className="space-y-3">
              <li className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-accent text-sm font-bold text-secondary-foreground">
                  1
                </span>
                <span className="pt-0.5 text-foreground">Define your entry once the Bullish Engulfing is confirmed — never anticipate it blindly.</span>
              </li>
              <li className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-accent text-sm font-bold text-secondary-foreground">
                  2
                </span>
                <span className="pt-0.5 text-foreground">Place a logical stop-loss beyond the invalidation point of the pattern.</span>
              </li>
              <li className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-accent text-sm font-bold text-secondary-foreground">
                  3
                </span>
                <span className="pt-0.5 text-foreground">Set a first target at the nearest structure and trail the rest.</span>
              </li>
              <li className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-accent text-sm font-bold text-secondary-foreground">
                  4
                </span>
                <span className="pt-0.5 text-foreground">Size the position so a loss is only 1–2% of your capital.</span>
              </li>
              <li className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-accent text-sm font-bold text-secondary-foreground">
                  5
                </span>
                <span className="pt-0.5 text-foreground">Journal the trade and review the outcome regardless of result.</span>
              </li>
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
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  Visually intuitive and quick to spot once learned.
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  Works across all timeframes and most liquid markets.
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  Pairs well with indicators and volume for confirmation.
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  Provides clear, objective invalidation levels.
                </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
            <div className="flex items-center gap-2 text-destructive">
              <ThumbsDown className="h-5 w-5" />
              <h3 className="text-lg font-bold">Disadvantages</h3>
            </div>
            <ul className="mt-4 space-y-2.5">
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  Produces false signals in choppy, low-volume conditions.
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  Subjective sizing can lead to inconsistent results.
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  Requires patience for confirmation, testing discipline.
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  Less reliable when used in isolation.
                </li>
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
        <FAQ items={faqs} />
      </div>
    </ArticleLayout>
  );
}
