import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { subscribeNewsletter } from "@/services/api";

export function Newsletter({ variant = "panel" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    await subscribeNewsletter({ email });
    setStatus("done");
    setEmail("");
  };

  const form = (
    <form onSubmit={handleSubmit} className={`flex w-full flex-col ${variant === "panel" ? "sm:flex-row gap-2 sm:gap-0 sm:rounded-full sm:bg-white/10 sm:p-1.5 sm:backdrop-blur-md sm:border sm:border-white/20" : "gap-2.5"}`}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        aria-label="Email address"
        className={`h-12 w-full px-4 text-sm outline-none transition-colors ${
          variant === "panel" 
            ? "sm:flex-1 rounded-xl sm:rounded-l-full sm:rounded-r-none border sm:border-none bg-background sm:bg-transparent border-border text-foreground sm:text-white placeholder:text-muted-foreground sm:placeholder:text-white/70 focus:border-white focus:ring-0" 
            : "rounded-xl border border-border bg-background placeholder:text-muted-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/30"
        }`} 
      />
    
      <button
        type="submit"
        disabled={status === "loading"}
        className={`inline-flex h-12 w-full items-center justify-center gap-2 px-6 text-sm font-bold shadow-soft transition-transform disabled:opacity-70 ${
          variant === "panel"
            ? "sm:w-auto rounded-xl sm:rounded-full bg-white text-secondary hover:scale-[1.02] hover:bg-white/90"
            : "rounded-xl bg-gradient-accent text-secondary-foreground hover:scale-[1.02]"
        }`}
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        Subscribe
      </button>
    </form>
  );

  if (variant === "inline") {
    return (
      <div className="w-full">
        {status === "done" ? (
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-secondary">
            <CheckCircle2 className="h-4 w-4" /> You're subscribed. Welcome aboard!
          </p>
        ) : (
          form
        )}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 text-primary-foreground shadow-elevated sm:p-12"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      
      <div className="relative mx-auto max-w-2xl text-center">
        <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-white/10">
          Weekly Insights
        </span>
        <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl text-white">
          Get market insights in your inbox
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/80">
          Join thousands of learners. One concise email a week — patterns, lessons,
          and finance basics explained simply. No spam, ever.
        </p>
        <div className="mx-auto mt-8 max-w-md">
          {status === "done" ? (
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
              <CheckCircle2 className="h-5 w-5" /> You're subscribed. Welcome aboard!
            </p>
          ) : (
            form
          )}
        </div>
      </div>
    </motion.div>
  );
}