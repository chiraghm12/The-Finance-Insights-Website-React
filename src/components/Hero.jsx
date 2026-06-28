import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { FaChartLine, FaCoins, FaRegLightbulb } from "react-icons/fa6";

const heroImg = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800";

const tickerItems = [
"NIFTY 50  +1.24%",
"SENSEX  +0.98%",
"RELIANCE  +2.1%",
"TCS  +0.76%",
"HDFC BANK  +1.45%",
"INFY  +1.02%",
"S&P 500  +0.84%",
"NASDAQ  +1.12%"];


export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-32 sm:pt-40">
      {/* floating finance elements */}
      <div className="pointer-events-none absolute inset-0">
        <FaChartLine className="animate-float-slow absolute left-[6%] top-[22%] h-10 w-10 text-secondary/30" />
        <FaCoins className="animate-float-slower absolute right-[8%] top-[16%] h-9 w-9 text-gold/40" />
        <FaRegLightbulb className="animate-float-slow absolute bottom-[18%] left-[12%] h-8 w-8 text-gold/30" />
        <div className="absolute right-[18%] top-[60%] h-24 w-24 animate-float-slower rounded-2xl bg-secondary/10 blur-2xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:pb-28">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs font-bold text-secondary backdrop-blur">
            
            <Sparkles className="h-3.5 w-3.5" />
            Insights That Build Wealth
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            
            Learn the Stock Market{" "}
            <span className="text-gradient">The Smart Way</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            
            Master candlestick patterns, chart patterns, technical analysis and
            finance concepts through simple, visual explanations — built for
            beginners and sharpened for pros.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-wrap items-center gap-3">
            
            <Link
              to="/learn"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3.5 text-sm font-bold text-secondary-foreground shadow-glow transition-transform hover:scale-[1.03]">
              
              Start Learning
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/learn"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold shadow-soft transition-colors hover:border-secondary hover:text-secondary">
              
              Browse Topics
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex items-center gap-6 text-sm text-muted-foreground">
            
            <span className="inline-flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-secondary" /> 60+ visual lessons
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span className="hidden sm:inline">100% beginner friendly</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative">
          
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-accent opacity-20 blur-2xl" />
          <img
            src={heroImg}
            alt="Premium trading dashboard with candlestick charts and market data"
            width={1280}
            height={1024}
            className="relative w-full rounded-[1.6rem] border border-border shadow-elevated" />
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-strong absolute -left-4 bottom-8 hidden items-center gap-3 rounded-2xl px-4 py-3 shadow-card sm:flex">
            
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-secondary/15 text-secondary">
              <TrendingUp className="h-4 w-4" />
            </span>
            <div>
              <div className="text-sm font-bold">Bullish Engulfing</div>
              <div className="text-xs text-muted-foreground">Reversal confirmed</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* market ticker */}
      <div className="relative border-y border-border bg-card/50 py-3 backdrop-blur">
        <div className="flex w-max animate-ticker gap-10 whitespace-nowrap px-4 text-sm font-semibold">
          {[...tickerItems, ...tickerItems].map((t, i) =>
          <span key={i} className="text-muted-foreground">
              <span className="text-secondary">▲</span> {t}
            </span>
          )}
        </div>
      </div>
    </section>);

}