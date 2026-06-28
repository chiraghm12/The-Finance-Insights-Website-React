

export const blogPosts = [
{
  slug: "how-to-read-candlestick-charts",
  title: "How to Read Candlestick Charts Like a Pro",
  category: "Technical Analysis",
  readingTime: 7,
  date: "2026-06-12",
  author: "Aarav Mehta",
  excerpt:
  "A visual, beginner-friendly walkthrough of the anatomy of a candle and how to read momentum at a glance.",
  tags: ["Candlesticks", "Beginner", "Price Action"]
},
{
  slug: "the-psychology-of-winning-traders",
  title: "The Psychology of Consistently Profitable Traders",
  category: "Psychology",
  readingTime: 9,
  date: "2026-06-05",
  author: "Diya Sharma",
  excerpt:
  "What separates traders who survive from those who blow up — it is rarely the strategy.",
  tags: ["Psychology", "Discipline", "Mindset"]
},
{
  slug: "risk-management-for-beginners",
  title: "Risk Management 101: Protecting Your Capital First",
  category: "Risk",
  readingTime: 6,
  date: "2026-05-28",
  author: "Kabir Verma",
  excerpt:
  "Before you chase returns, learn the survival math that keeps you in the game for decades.",
  tags: ["Risk", "Position Sizing", "Stops"]
},
{
  slug: "rsi-vs-macd-which-to-use",
  title: "RSI vs MACD: Which Momentum Tool Should You Use?",
  category: "Indicators",
  readingTime: 8,
  date: "2026-05-20",
  author: "Aarav Mehta",
  excerpt:
  "Two of the most popular indicators compared — strengths, weaknesses, and how to combine them.",
  tags: ["RSI", "MACD", "Indicators"]
},
{
  slug: "understanding-ipos",
  title: "Understanding IPOs: Should You Apply?",
  category: "Finance Basics",
  readingTime: 5,
  date: "2026-05-11",
  author: "Diya Sharma",
  excerpt:
  "How initial public offerings work, how to evaluate them, and the hype to avoid.",
  tags: ["IPO", "Investing", "Basics"]
},
{
  slug: "chart-patterns-cheat-sheet",
  title: "The Chart Patterns Cheat Sheet Every Trader Needs",
  category: "Technical Analysis",
  readingTime: 10,
  date: "2026-05-02",
  author: "Kabir Verma",
  excerpt:
  "Continuation vs reversal patterns, simplified into one printable reference.",
  tags: ["Chart Patterns", "Reference", "Intermediate"]
},
{
  slug: "building-a-trading-routine",
  title: "Building a Trading Routine That Actually Sticks",
  category: "Psychology",
  readingTime: 6,
  date: "2026-04-24",
  author: "Aarav Mehta",
  excerpt:
  "Pre-market prep, in-trade rules, and post-market journaling habits of professionals.",
  tags: ["Routine", "Discipline", "Habits"]
},
{
  slug: "etfs-vs-mutual-funds",
  title: "ETFs vs Mutual Funds: A Clear Comparison",
  category: "Finance Basics",
  readingTime: 7,
  date: "2026-04-15",
  author: "Diya Sharma",
  excerpt:
  "Costs, liquidity, taxation and control — how to choose the right vehicle for your goals.",
  tags: ["ETF", "Mutual Fund", "Investing"]
},
{
  slug: "support-and-resistance-explained",
  title: "Support and Resistance, Finally Explained Simply",
  category: "Technical Analysis",
  readingTime: 6,
  date: "2026-04-06",
  author: "Kabir Verma",
  excerpt:
  "The foundation of every chart — how to draw levels that actually matter.",
  tags: ["Support", "Resistance", "Beginner"]
}];


export const blogCategories = [
"All",
"Technical Analysis",
"Psychology",
"Risk",
"Indicators",
"Finance Basics"];


export const getBlogPost = (slug) =>
blogPosts.find((p) => p.slug === slug);