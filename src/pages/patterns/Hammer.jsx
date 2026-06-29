import { ArticleLayout, Section } from "@/components/ArticleLayout";
import { HammerGraphic } from "@/components/HammerGraphic";
import { ChartGlyph } from "@/components/ChartGlyph";
import { FAQ } from "@/components/FAQ";
import { getRelatedArticles } from "@/data/articles";
import { Lightbulb, Layers, Brain, ListChecks, Target, ThumbsUp, ThumbsDown, Check, X, Search, ArrowDown } from "lucide-react";
import { FaYoutube, FaInstagram } from "react-icons/fa6";

const HammerChartIllustration = () => {
  const candles = [
    { x: 40, type: 'bull', high: 110, low: 160, open: 150, close: 120 },
    { x: 65, type: 'bear', high: 115, low: 175, open: 125, close: 165 },
    { x: 90, type: 'bear', high: 150, low: 200, open: 160, close: 190 },
    { x: 115, type: 'bull', high: 180, low: 220, open: 210, close: 190 },
    { x: 140, type: 'bear', high: 190, low: 250, open: 200, close: 240 },
    { x: 165, type: 'bull', high: 220, low: 260, open: 250, close: 230 },
    { x: 190, type: 'bear', high: 230, low: 270, open: 240, close: 260 },
    { x: 215, type: 'bull', high: 245, low: 275, open: 265, close: 255 },

    // The Hammer
    { x: 250, type: 'bull', high: 240, low: 320, open: 260, close: 245 },

    // Uptrend
    { x: 285, type: 'bull', high: 230, low: 260, open: 250, close: 235 },
    { x: 310, type: 'bull', high: 210, low: 250, open: 240, close: 215 },
    { x: 335, type: 'bear', high: 205, low: 235, open: 215, close: 225 },
    { x: 360, type: 'bull', high: 185, low: 230, open: 220, close: 195 },
    { x: 385, type: 'bear', high: 160, low: 210, open: 170, close: 200 },
    { x: 410, type: 'bull', high: 155, low: 195, open: 185, close: 165 },
    { x: 435, type: 'bull', high: 145, low: 175, open: 165, close: 150 },
    { x: 460, type: 'bull', high: 135, low: 155, open: 150, close: 140 },
    { x: 485, type: 'bear', high: 110, low: 160, open: 120, close: 150 },
    { x: 510, type: 'bull', high: 80, low: 140, open: 130, close: 90 },
    { x: 535, type: 'bull', high: 70, low: 100, open: 90, close: 75 },
  ];

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border bg-white dark:bg-slate-900 p-4 md:p-8 my-8 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight">HAMMER CANDLESTICK PATTERN</h3>
      </div>

      <div className="relative w-full aspect-[1.8/1] md:aspect-[2.2/1]">
        <svg viewBox="0 0 600 350" className="w-full h-full overflow-visible">

          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e" />
            </marker>
          </defs>

          {/* Trend arrow */}
          <line x1="270" y1="230" x2="450" y2="70" stroke="#22c55e" strokeWidth="3" strokeDasharray="8,6" markerEnd="url(#arrowhead)" />

          {/* Entry Level Line */}
          <line x1="270" y1="235" x2="400" y2="235" stroke="currentColor" strokeWidth="2" strokeDasharray="6,4" className="text-slate-800 dark:text-slate-300" />
          <text x="410" y="239" fill="currentColor" fontSize="13" fontWeight="bold" className="text-slate-800 dark:text-slate-300">ENTRY LEVEL</text>

          {/* Stop Loss Line */}
          <line x1="220" y1="330" x2="380" y2="330" stroke="#ef4444" strokeWidth="2" strokeDasharray="6,4" />
          <text x="390" y="334" fill="#ef4444" fontSize="13" fontWeight="bold">STOP LOSS</text>

          {/* Blue Circle around Hammer */}
          <ellipse cx="250" cy="275" rx="18" ry="55" stroke="#3b82f6" strokeWidth="2" fill="none" />

          {/* Candles */}
          {candles.map((c, i) => {
            const isBull = c.type === 'bull';
            const color = isBull ? '#22c55e' : '#ef4444';
            const bodyTop = Math.min(c.open, c.close);
            const bodyHeight = Math.max(Math.abs(c.open - c.close), 2);

            return (
              <g key={i}>
                <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} stroke={color} strokeWidth="2.5" />
                <rect x={c.x - 7} y={bodyTop} width="14" height={bodyHeight} fill={color} />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
export function Hammer() {
  const slug = "hammer";

  // Hardcoded article metadata
  const article = {
    slug: "hammer",
    title: "Hammer",
    category: "Candlestick Patterns",
    categorySlug: "candlestick-patterns",
    difficulty: "Beginner",
    readingTime: 4,
    sentiment: "Bullish",
    excerpt: "A single-candle reversal that signals buyers stepping in after a sell-off."
  };

  const related = getRelatedArticles(slug);

  const faqs = [
    {
      'q': 'Is the Hammer reliable for beginners?',
      'a': 'Yes — Hammer is beginner-friendly, but reliability improves dramatically when you combine it with trend context, volume, and strict risk management.'
    },
    {
      'q': 'Which timeframe works best for Hammer?',
      'a': 'Higher timeframes (daily, 4H) generally produce cleaner, more reliable signals, while lower timeframes generate more setups with more noise.'
    },
    {
      'q': 'Do I need indicators to trade the Hammer?',
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
          <HammerGraphic />
        </div>
      </div>

      <div className="mt-12 space-y-12">
        <Section icon={Lightbulb} title="Introduction">
          <p>The Hammer is a bullish single candlestick reversal pattern that typically appears after a downtrend. It signals that although sellers controlled the market initially, buyers regained strength before the candle closed, indicating that the selling pressure may be weakening.</p>
          <p className="mt-3">The Hammer does not guarantee a trend reversal on its own. It becomes more reliable when it forms at a strong support level and is confirmed by the next bullish candle with higher trading volume.</p>
        </Section>

        <Section icon={Layers} title="Pattern Structure">
          <p>A valid Hammer candlestick has the following characteristics:</p>
          <ul className="mt-4 space-y-4">
            <li>
              <strong>Small Real Body</strong>
              <ul className="mt-2 ml-6 list-disc space-y-1 text-muted-foreground">
                <li>Located near the top of the candle's range.</li>
                <li>Can be green (bullish) or red (bearish).</li>
                <li>A green hammer is generally considered slightly stronger.</li>
              </ul>
            </li>
            <li>
              <strong>Long Lower Shadow (Wick)</strong>
              <ul className="mt-2 ml-6 list-disc space-y-1 text-muted-foreground">
                <li>At least 2 times longer than the real body.</li>
                <li>Indicates that price fell significantly during the session before recovering.</li>
              </ul>
            </li>
            <li>
              <strong>Little or No Upper Shadow</strong>
              <ul className="mt-2 ml-6 list-disc space-y-1 text-muted-foreground">
                <li>Ideally absent.</li>
                <li>If present, it should be very small.</li>
              </ul>
            </li>
            <li>
              <strong>Appears After a Downtrend</strong>
              <ul className="mt-2 ml-6 list-disc space-y-1 text-muted-foreground">
                <li>The Hammer is meaningful only after a noticeable price decline.</li>
              </ul>
            </li>
          </ul>

          <h4 className="mt-6 font-bold">Quick Identification Rules</h4>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Small body near the top</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Lower wick at least twice the body size</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Tiny or no upper wick</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Forms after a downtrend</li>
          </ul>
        </Section>

        <Section icon={Brain} title="Market Psychology">
          <p>The Hammer reflects a shift in control between sellers and buyers.</p>

          <div className="mt-6 space-y-6">
            <div>
              <h4 className="font-bold">Step 1 – Sellers Dominate</h4>
              <p className="mt-2 text-muted-foreground">At the beginning of the trading session, sellers continue the existing downtrend and push prices significantly lower.</p>
              <div className="mt-3 rounded-xl bg-secondary/10 p-4">
                <span className="font-semibold text-secondary">Market Sentiment:</span>
                <ul className="mt-2 ml-5 list-disc space-y-1 text-sm text-foreground">
                  <li>Fear increases.</li>
                  <li>Bears appear to have full control.</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-bold">Step 2 – Buyers Enter</h4>
              <p className="mt-2 text-muted-foreground">As prices reach attractive levels, buyers begin purchasing aggressively. Demand increases, absorbing the selling pressure.</p>
              <div className="mt-3 rounded-xl bg-secondary/10 p-4">
                <span className="font-semibold text-secondary">Market Sentiment:</span>
                <ul className="mt-2 ml-5 list-disc space-y-1 text-sm text-foreground">
                  <li>Smart money and value buyers start accumulating.</li>
                  <li>Selling momentum begins to weaken.</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-bold">Step 3 – Buyers Take Control</h4>
              <p className="mt-2 text-muted-foreground">By the end of the session, buyers push the price back near the opening level. Although the market traded much lower during the session, buyers erased most of the losses. This creates the characteristic long lower shadow.</p>
            </div>

            <div>
              <h4 className="font-bold">Step 4 – Potential Trend Reversal</h4>
              <p className="mt-2 text-muted-foreground">The Hammer indicates:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1 text-muted-foreground">
                <li>Sellers failed to maintain lower prices.</li>
                <li>Buyers demonstrated strength.</li>
                <li>Market sentiment may be shifting from bearish to bullish.</li>
              </ul>
              <p className="mt-3 text-sm font-semibold">Confirmation from the next candle is still required before assuming a reversal.</p>
            </div>
          </div>
        </Section>

        <Section icon={Lightbulb} title="Formation Logic">
          <p>The Hammer forms because of a battle between buyers and sellers.</p>

          <div className="mt-6 space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 font-bold text-secondary">1</div>
                <div className="w-px flex-1 bg-border my-2"></div>
              </div>
              <div className="pb-4">
                <h4 className="font-bold">Opening Phase</h4>
                <p className="mt-2 text-muted-foreground">The market opens after a sustained decline. Most traders still expect prices to continue falling.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 font-bold text-secondary">2</div>
                <div className="w-px flex-1 bg-border my-2"></div>
              </div>
              <div className="pb-4">
                <h4 className="font-bold">Selling Phase</h4>
                <p className="mt-2 text-muted-foreground">Heavy selling pushes the market to a new intraday low. This creates the long lower wick.</p>
                <div className="mt-3 rounded-lg border border-border p-3 text-sm">
                  <span className="font-semibold block mb-1">At this stage:</span>
                  <ul className="ml-5 list-disc text-muted-foreground">
                    <li>Sellers appear dominant.</li>
                    <li>Panic selling may occur.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 font-bold text-secondary">3</div>
                <div className="w-px flex-1 bg-border my-2"></div>
              </div>
              <div className="pb-4">
                <h4 className="font-bold">Buying Phase</h4>
                <p className="mt-2 text-muted-foreground">Strong buying interest emerges. Institutional investors, swing traders, or bargain hunters begin purchasing. The increased demand absorbs the remaining selling pressure.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 font-bold text-secondary">4</div>
              </div>
              <div>
                <h4 className="font-bold">Closing Phase</h4>
                <p className="mt-2 text-muted-foreground">Buyers continue buying until the price closes near the opening level.</p>
                <div className="mt-3 rounded-lg border border-border p-3 text-sm">
                  <span className="font-semibold block mb-1">This leaves:</span>
                  <ul className="ml-5 list-disc text-muted-foreground">
                    <li>A small real body</li>
                    <li>A long lower shadow</li>
                    <li>Little or no upper shadow</li>
                  </ul>
                </div>
                <p className="mt-3 text-sm font-semibold text-secondary">The candle visually represents the rejection of lower prices.</p>
              </div>
            </div>
          </div>
        </Section>

        <Section icon={ListChecks} title="Identification Rules">
          <div className="mt-4 flex flex-col items-center">
            {[
              "Formation After Price Decline",
              "Small Real Body at Top",
              "Long Lower Shadow",
              "Little to No Upper Shadow",
              "Increased Trading Volume",
              "Bullish Confirmation Close"
            ].map((rule, i, arr) => (
              <div key={i} className="flex w-full max-w-sm flex-col items-center">
                <div className="flex w-full items-center gap-3 rounded-xl border border-emerald-300 bg-emerald-50 px-5 py-4 text-sm font-semibold text-emerald-900 shadow-sm dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-100">
                  <Check className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span className="leading-snug">{rule}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="py-2">
                    <ArrowDown className="h-5 w-5 shrink-0 text-muted-foreground/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section icon={Target} title="Trading Strategy">
          <p className="mb-6">When trading hammer patterns, consider these strategic approaches:</p>

          <div className="space-y-8">
            {/* Entries */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-foreground">Entries:</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Conservative approach:</h4>
                  <p className="mt-1 text-muted-foreground">
                    Wait for the next candle to close higher (confirmation candle) before entering a long position. This reduces the risk of false signals but may result in a less favorable entry price.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Aggressive approach:</h4>
                  <p className="mt-1 text-muted-foreground">
                    Enter a long position at the close of the hammer candle. This can provide a better entry price but carries a higher risk of false signals.
                  </p>
                </div>
              </div>
            </div>

            {/* Stop Losses */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-foreground">Stop losses:</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-muted-foreground">
                    Place stop-loss orders just below the low of the hammer candle. This protects against further downside if the reversal doesn't materialize.
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">
                    Alternatively, place the stop loss below the low of the previous candle before the hammer. This provides more room for price fluctuation but increases potential loss.
                  </p>
                </div>
              </div>
            </div>

            {/* Profit Targets */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-foreground">Profit targets:</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-muted-foreground">
                    Use a fixed reward-to-risk ratio, such as 2:1 or 3:1. For example, if your stop loss is 20 pips away, set your take profit at 40 or 60 pips.
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">
                    Aim for the next significant resistance level. This could be a previous high, a round number, or a level identified by other technical analysis methods.
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">
                    Always size your position based on your risk tolerance and the specific setup.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <HammerChartIllustration />
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
