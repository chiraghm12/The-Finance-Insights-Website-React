import { motion } from "motion/react";
import { Info } from "lucide-react";

const LineArrowRight = ({ width = "w-8" }) => (
  <div className={`relative flex items-center ${width}`}>
    <div className="h-[1.5px] w-full bg-muted-foreground/70" />
    <div className="absolute -right-[1px] border-y-[4px] border-y-transparent border-l-[6px] border-l-muted-foreground/70" />
  </div>
);

const LineArrowLeft = ({ width = "w-8" }) => (
  <div className={`relative flex items-center ${width}`}>
    <div className="h-[1.5px] w-full bg-muted-foreground/70" />
    <div className="absolute -left-[1px] border-y-[4px] border-y-transparent border-r-[6px] border-r-muted-foreground/70" />
  </div>
);

export function CandleIntro() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
      <div className="mb-4 overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-elevated">
        <div className="grid lg:grid-cols-2">
          {/* Explanation Side */}
          <div className="p-8 sm:p-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary">
              <Info className="h-4 w-4" />
              Basics
            </span>
            <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
              Anatomy of a Candlestick
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A candlestick is a visual representation of price movement. It packs four key pieces of information (Open, High, Low, Close) into a single, easy-to-read bar. Reading these candles helps traders gauge market sentiment.
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-border bg-surface p-5">
                <h4 className="font-bold">The Body</h4>
                <p className="mt-1 text-sm text-muted-foreground">The thick part of the candlestick is called the real body. It represents the price range between the opening and closing prices of that timeframe.</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <h4 className="font-bold">The Wicks (Shadows)</h4>
                <p className="mt-1 text-sm text-muted-foreground">The thin lines extending from the top and bottom of the body. They show the absolute highest and lowest prices traded during that time.</p>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative flex min-h-[450px] items-center justify-center bg-surface p-4 sm:p-8 lg:min-h-full">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent opacity-50" />

            <div className="relative w-full max-w-md font-sans">

              {/* Diagram Container */}
              <div className="relative mx-auto mt-6 h-[260px] w-[200px] sm:w-[240px]">

                {/* Left Labels (Bullish) */}
                <div className="absolute right-[calc(100%-24px)] top-[-8px] mr-2 flex items-center gap-2 text-sm font-medium text-foreground whitespace-nowrap">
                  High <LineArrowRight width="w-10 sm:w-14" />
                </div>
                <div className="absolute right-[100%] top-[42px] mr-2 flex items-center gap-2 text-sm font-medium text-foreground whitespace-nowrap">
                  Close <LineArrowRight width="w-10 sm:w-14" />
                </div>
                <div className="absolute right-[100%] top-[202px] mr-2 flex items-center gap-2 text-sm font-medium text-foreground whitespace-nowrap">
                  Open <LineArrowRight width="w-10 sm:w-14" />
                </div>
                <div className="absolute right-[calc(100%-24px)] top-[252px] mr-2 flex items-center gap-2 text-sm font-medium text-foreground whitespace-nowrap">
                  Low <LineArrowRight width="w-10 sm:w-14" />
                </div>

                {/* Bullish Candle */}
                <div className="absolute left-0 top-0 flex w-12 flex-col items-center">
                  <div className="h-[50px] w-1 bg-emerald-600 dark:bg-emerald-500" />
                  <div className="h-[160px] w-full rounded-sm bg-emerald-600 dark:bg-emerald-500" />
                  <div className="h-[50px] w-1 bg-emerald-600 dark:bg-emerald-500" />
                </div>

                {/* Middle Labels */}
                <div className="absolute left-[24px] right-[24px] top-[17px] flex items-center justify-between text-center text-sm font-medium text-foreground mx-1">
                  <LineArrowLeft width="w-8 sm:w-12" />
                  <span className="leading-tight">Upper<br />Shadow</span>
                  <LineArrowRight width="w-8 sm:w-12" />
                </div>
                <div className="absolute left-0 right-0 top-[120px] mx-auto text-center text-sm font-medium leading-tight text-foreground">
                  Real<br />Body
                </div>
                <div className="absolute left-[24px] right-[24px] top-[227px] flex items-center justify-between text-center text-sm font-medium text-foreground mx-1">
                  <LineArrowLeft width="w-8 sm:w-12" />
                  <span className="leading-tight">Lower<br />Shadow</span>
                  <LineArrowRight width="w-8 sm:w-12" />
                </div>

                {/* Bearish Candle */}
                <div className="absolute right-0 top-0 flex w-12 flex-col items-center">
                  <div className="h-[50px] w-1 bg-rose-600 dark:bg-rose-500" />
                  <div className="h-[160px] w-full rounded-sm bg-rose-600 dark:bg-rose-500" />
                  <div className="h-[50px] w-1 bg-rose-600 dark:bg-rose-500" />
                </div>

                {/* Right Labels (Bearish) */}
                <div className="absolute left-[calc(100%-24px)] top-[-8px] ml-2 flex items-center gap-2 text-sm font-medium text-foreground whitespace-nowrap">
                  <LineArrowLeft width="w-10 sm:w-14" /> High
                </div>
                <div className="absolute left-[100%] top-[42px] ml-2 flex items-center gap-2 text-sm font-medium text-foreground whitespace-nowrap">
                  <LineArrowLeft width="w-10 sm:w-14" /> Open
                </div>
                <div className="absolute left-[100%] top-[202px] ml-2 flex items-center gap-2 text-sm font-medium text-foreground whitespace-nowrap">
                  <LineArrowLeft width="w-10 sm:w-14" /> Close
                </div>
                <div className="absolute left-[calc(100%-24px)] top-[252px] ml-2 flex items-center gap-2 text-sm font-medium text-foreground whitespace-nowrap">
                  <LineArrowLeft width="w-10 sm:w-14" /> Low
                </div>
              </div>

              {/* Legend */}
              <div className="mt-16 flex flex-col items-center gap-3 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-full bg-emerald-600 dark:bg-emerald-500" />
                  <span>Bullish Candle (Price Closed Higher)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-full bg-rose-600 dark:bg-rose-500" />
                  <span>Bearish Candle (Price Closed Lower)</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
