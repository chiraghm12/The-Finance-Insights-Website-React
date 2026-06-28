

export const categories = [
{
  slug: "candlestick-patterns",
  title: "Candlestick Patterns",
  icon: "CandlestickChart",
  description:
  "Read price action through Hammer, Doji, Engulfing and dozens of high-probability candle signals.",
  to: "/candlestick-patterns",
  accent: "secondary"
},
{
  slug: "chart-patterns",
  title: "Chart Patterns",
  icon: "TrendingUp",
  description:
  "Master Head & Shoulders, Triangles, Cup & Handle and the structures that move markets.",
  to: "/chart-patterns",
  accent: "primary"
},
{
  slug: "indicators",
  title: "Technical Indicators",
  icon: "Activity",
  description:
  "Understand RSI, MACD, Moving Averages, Bollinger Bands and how to combine them well.",
  to: "/indicators",
  accent: "gold"
},
{
  slug: "risk-management",
  title: "Risk Management",
  icon: "ShieldCheck",
  description:
  "Position sizing, stop-losses, and the survival math that keeps traders in the game.",
  to: "/risk-management",
  accent: "secondary"
},
{
  slug: "trading-psychology",
  title: "Trading Psychology",
  icon: "Brain",
  description:
  "Tame fear, greed and bias. Build the discipline that separates pros from gamblers.",
  to: "/trading-psychology",
  accent: "primary"
},
{
  slug: "finance-basics",
  title: "Finance Basics",
  icon: "GraduationCap",
  description:
  "IPOs, dividends, ETFs, demat accounts and the foundations every investor needs.",
  to: "/finance-basics",
  accent: "gold"
}];


export const getCategory = (slug) =>
categories.find((c) => c.slug === slug);