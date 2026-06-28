













const slugify = (s) =>
s.
toLowerCase().
replace(/&/g, "and").
replace(/[^a-z0-9]+/g, "-").
replace(/(^-|-$)/g, "");

/**
 * Builds a fully-populated Article from a compact seed so every detail page
 * renders the complete section set (intro, structure, psychology, strategy…).
 */
function build(
categorySlug,
category,
seed)
{
  const name = seed.title;
  return {
    slug: slugify(name),
    title: name,
    category,
    categorySlug,
    difficulty: seed.difficulty ?? "Beginner",
    readingTime: 4 + name.length % 6,
    sentiment: seed.sentiment,
    excerpt: seed.excerpt,
    tags: seed.tags ?? [category, name],
    introduction:
    seed.introduction ??
    `${name} is one of the most referenced concepts in ${category.toLowerCase()}. In this guide we break it down visually, explain why it forms, and show you how disciplined traders turn it into a repeatable edge — without the jargon.`,
    structure:
    seed.structure ??
    `The ${name} setup is defined by a clear, recognisable shape on the chart. We map out each component step by step, so you can spot a valid formation versus a look-alike that traps impatient traders.`,
    psychology:
    seed.psychology ??
    `Every ${name} is a snapshot of the battle between buyers and sellers. Understanding the emotional shift it captures — from euphoria to doubt, or fear to conviction — is what turns a shape into a signal you can trust.`,
    formation: `${name} forms when a measurable imbalance between supply and demand resolves at a key level. Volume, prior trend, and location relative to support/resistance all determine whether the formation is high quality or low quality.`,
    identification: [
    `Confirm the prevailing trend before the ${name} appears.`,
    `Validate the shape against the textbook proportions.`,
    `Check that volume supports the move, not contradicts it.`,
    `Wait for a confirmation candle or close beyond the trigger level.`,
    `Note the nearest support and resistance for context.`],

    strategy: [
    `Define your entry once the ${name} is confirmed — never anticipate it blindly.`,
    `Place a logical stop-loss beyond the invalidation point of the pattern.`,
    `Set a first target at the nearest structure and trail the rest.`,
    `Size the position so a loss is only 1–2% of your capital.`,
    `Journal the trade and review the outcome regardless of result.`],

    advantages: [
    "Visually intuitive and quick to spot once learned.",
    "Works across all timeframes and most liquid markets.",
    "Pairs well with indicators and volume for confirmation.",
    "Provides clear, objective invalidation levels."],

    disadvantages: [
    "Produces false signals in choppy, low-volume conditions.",
    "Subjective sizing can lead to inconsistent results.",
    "Requires patience for confirmation, testing discipline.",
    "Less reliable when used in isolation."],

    faqs: [
    {
      q: `Is the ${name} reliable for beginners?`,
      a: `Yes — ${name} is beginner-friendly, but reliability improves dramatically when you combine it with trend context, volume, and strict risk management.`
    },
    {
      q: `Which timeframe works best for ${name}?`,
      a: `Higher timeframes (daily, 4H) generally produce cleaner, more reliable signals, while lower timeframes generate more setups with more noise.`
    },
    {
      q: `Do I need indicators to trade the ${name}?`,
      a: `Not strictly, but a confirmation tool like RSI, MACD, or volume meaningfully filters out weaker setups.`
    }]

  };
}

const candlesticks = [
{ title: "Hammer", sentiment: "Bullish", excerpt: "A single-candle reversal that signals buyers stepping in after a sell-off." },
{ title: "Doji", sentiment: "Neutral", excerpt: "Indecision in one candle — the market pauses to choose a direction." },
{ title: "Morning Star", sentiment: "Bullish", difficulty: "Intermediate", excerpt: "A three-candle dawn that flips bearish momentum into a bullish trend." },
{ title: "Evening Star", sentiment: "Bearish", difficulty: "Intermediate", excerpt: "The bearish mirror of the Morning Star, capping a rally." },
{ title: "Bullish Engulfing", sentiment: "Bullish", excerpt: "A large green candle swallows the prior red one — buyers take control." },
{ title: "Bearish Engulfing", sentiment: "Bearish", excerpt: "A decisive red candle engulfs the prior green — sellers dominate." },
{ title: "Shooting Star", sentiment: "Bearish", excerpt: "A long upper wick at the top of a move warns of a reversal." },
{ title: "Hanging Man", sentiment: "Bearish", excerpt: "A Hammer at the top of an uptrend — a quiet warning sign." },
{ title: "Inverted Hammer", sentiment: "Bullish", excerpt: "A bottom-of-trend candle hinting buyers are testing the waters." },
{ title: "Three White Soldiers", sentiment: "Bullish", difficulty: "Intermediate", excerpt: "Three strong green candles confirm a powerful trend shift up." },
{ title: "Three Black Crows", sentiment: "Bearish", difficulty: "Intermediate", excerpt: "Three heavy red candles signal a confident move lower." },
{ title: "Piercing Line", sentiment: "Bullish", excerpt: "A two-candle bottoming pattern where buyers reclaim lost ground." },
{ title: "Dark Cloud Cover", sentiment: "Bearish", excerpt: "A bearish counter to the Piercing Line at the top of a trend." },
{ title: "Spinning Top", sentiment: "Neutral", excerpt: "Small body, long wicks — a candle of hesitation and balance." },
{ title: "Marubozu", sentiment: "Bullish", excerpt: "A full-bodied candle with no wicks — pure, one-sided conviction." }];


const chartPatterns = [
{ title: "Head and Shoulders", sentiment: "Bearish", difficulty: "Intermediate", excerpt: "The classic topping pattern that telegraphs a major trend reversal." },
{ title: "Inverse Head and Shoulders", sentiment: "Bullish", difficulty: "Intermediate", excerpt: "A bottoming structure that often launches new uptrends." },
{ title: "Double Top", sentiment: "Bearish", excerpt: "Two failed attempts at a high reveal exhausted buyers." },
{ title: "Double Bottom", sentiment: "Bullish", excerpt: "Two defended lows confirm sellers are losing their grip." },
{ title: "Cup and Handle", sentiment: "Bullish", difficulty: "Intermediate", excerpt: "A rounded base and short pullback that fuels breakout runs." },
{ title: "Ascending Triangle", sentiment: "Bullish", difficulty: "Intermediate", excerpt: "Rising lows pressing into resistance — a coil ready to pop." },
{ title: "Descending Triangle", sentiment: "Bearish", difficulty: "Intermediate", excerpt: "Falling highs squeezing support before a breakdown." },
{ title: "Symmetrical Triangle", sentiment: "Neutral", difficulty: "Intermediate", excerpt: "A tightening range that breaks decisively either way." },
{ title: "Bull Flag", sentiment: "Bullish", excerpt: "A brief, orderly pullback inside a strong uptrend." },
{ title: "Bear Flag", sentiment: "Bearish", excerpt: "A short consolidation that continues a downtrend." },
{ title: "Pennant", sentiment: "Neutral", excerpt: "A small symmetrical pause after a sharp move — continuation likely." },
{ title: "Rectangle", sentiment: "Neutral", excerpt: "A clean trading range between horizontal support and resistance." },
{ title: "Price Channel", sentiment: "Neutral", excerpt: "Parallel trendlines that frame a trending market's rhythm." },
{ title: "Rising Wedge", sentiment: "Bearish", difficulty: "Advanced", excerpt: "A narrowing climb that often resolves to the downside." },
{ title: "Falling Wedge", sentiment: "Bullish", difficulty: "Advanced", excerpt: "A narrowing decline that frequently breaks upward." }];


const indicators = [
{ title: "RSI", difficulty: "Beginner", excerpt: "The Relative Strength Index measures momentum and overbought/oversold zones." },
{ title: "MACD", difficulty: "Intermediate", excerpt: "Moving Average Convergence Divergence tracks momentum shifts and crossovers." },
{ title: "Moving Average", difficulty: "Beginner", excerpt: "The simplest way to smooth price and define a trend's direction." },
{ title: "EMA", difficulty: "Beginner", excerpt: "An Exponential Moving Average reacts faster to recent price changes." },
{ title: "VWAP", difficulty: "Intermediate", excerpt: "Volume Weighted Average Price — the institutional fair-value benchmark." },
{ title: "ATR", difficulty: "Intermediate", excerpt: "Average True Range quantifies volatility for smarter stop placement." },
{ title: "ADX", difficulty: "Advanced", excerpt: "The Average Directional Index measures how strong a trend really is." },
{ title: "Supertrend", difficulty: "Intermediate", excerpt: "A volatility-based trend follower with clean buy/sell flips." },
{ title: "Bollinger Bands", difficulty: "Intermediate", excerpt: "Volatility bands that expand and contract around price." }];


const financeBasics = [
{ title: "IPO", excerpt: "How companies go public and what it means for retail investors." },
{ title: "Buyback", excerpt: "Why companies repurchase their own shares — and the signal it sends." },
{ title: "Dividend", excerpt: "How profit is shared with shareholders and how yields work." },
{ title: "Bonus Share", excerpt: "Free additional shares and what they really do to your holding." },
{ title: "Stock Split", excerpt: "Splitting shares to improve liquidity without changing value." },
{ title: "Rights Issue", excerpt: "How companies raise capital from existing shareholders." },
{ title: "Demat Account", excerpt: "The digital locker that holds your securities electronically." },
{ title: "Trading Account", excerpt: "The gateway used to place buy and sell orders in the market." },
{ title: "ETF", excerpt: "Exchange Traded Funds — diversified baskets that trade like stocks." },
{ title: "Mutual Fund", excerpt: "Pooled, professionally managed investing for every goal." },
{ title: "NSE", excerpt: "Inside the National Stock Exchange and how it works." },
{ title: "BSE", excerpt: "Asia's oldest exchange and its role in the markets." },
{ title: "SEBI", excerpt: "The regulator that keeps the market fair and transparent." }];


const psychology = [
{ title: "Fear and Greed", difficulty: "Beginner", excerpt: "The two emotions that drive nearly every poor trading decision." },
{ title: "Trading Discipline", difficulty: "Beginner", excerpt: "Building the routines that make good behaviour automatic." },
{ title: "FOMO in Trading", difficulty: "Beginner", excerpt: "Why chasing moves wrecks accounts — and how to stop." },
{ title: "Revenge Trading", difficulty: "Intermediate", excerpt: "The destructive urge to win back losses immediately." },
{ title: "Cognitive Biases", difficulty: "Intermediate", excerpt: "Confirmation, recency, and anchoring biases that distort decisions." },
{ title: "Building a Trading Routine", difficulty: "Beginner", excerpt: "Pre-market, in-trade, and post-market habits of professionals." }];


const risk = [
{ title: "Position Sizing", difficulty: "Beginner", excerpt: "The single most important skill: deciding how much to risk." },
{ title: "Stop Loss Strategy", difficulty: "Beginner", excerpt: "Where to place stops so you survive to trade another day." },
{ title: "Risk Reward Ratio", difficulty: "Beginner", excerpt: "Why a 1:2 or better payoff changes everything over time." },
{ title: "Diversification", difficulty: "Beginner", excerpt: "Spreading risk without diluting your edge into mush." },
{ title: "Capital Preservation", difficulty: "Intermediate", excerpt: "The survival math that keeps compounding alive." },
{ title: "Drawdown Management", difficulty: "Advanced", excerpt: "Recovering from losing streaks without blowing up." }];


export const articles = [
...candlesticks.map((s) => build("candlestick-patterns", "Candlestick Patterns", s)),
...chartPatterns.map((s) => build("chart-patterns", "Chart Patterns", s)),
...indicators.map((s) => build("indicators", "Technical Indicators", s)),
...financeBasics.map((s) => build("finance-basics", "Finance Basics", s)),
...psychology.map((s) => build("trading-psychology", "Trading Psychology", s)),
...risk.map((s) => build("risk-management", "Risk Management", s))];


export const getArticle = (slug) =>
articles.find((a) => a.slug === slug);

export const getArticlesByCategory = (categorySlug) =>
articles.filter((a) => a.categorySlug === categorySlug);

export const featuredSlugs = [
"hammer",
"doji",
"morning-star",
"bullish-engulfing",
"head-and-shoulders",
"cup-and-handle"];


export const getFeaturedArticles = () =>
featuredSlugs.
map((s) => getArticle(s)).
filter((a) => Boolean(a));

export const getRelatedArticles = (slug, limit = 3) => {
  const current = getArticle(slug);
  if (!current) return [];
  return articles.
  filter((a) => a.categorySlug === current.categorySlug && a.slug !== slug).
  slice(0, limit);
};

export const searchArticles = (query) => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return articles.filter(
    (a) =>
    a.title.toLowerCase().includes(q) ||
    a.category.toLowerCase().includes(q) ||
    a.excerpt.toLowerCase().includes(q) ||
    a.tags.some((t) => t.toLowerCase().includes(q))
  );
};