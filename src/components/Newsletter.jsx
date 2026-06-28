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

  const form =
  <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2.5 sm:flex-row">
      <input
      type="email"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="you@email.com"
      aria-label="Email address"
      className="h-12 flex-1 rounded-xl border border-border bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/30" />
    
      <button
      type="submit"
      disabled={status === "loading"}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-accent px-5 text-sm font-bold text-secondary-foreground shadow-soft transition-transform hover:scale-[1.02] disabled:opacity-70">
      
        {status === "loading" ?
      <Loader2 className="h-4 w-4 animate-spin" /> :

      <Send className="h-4 w-4" />
      }
        Subscribe
      </button>
    </form>;


  if (variant === "inline") {
    return (
      <div className="w-full">
        {status === "done" ?
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-secondary">
            <CheckCircle2 className="h-4 w-4" /> You're subscribed. Welcome aboard!
          </p> :

        form
        }
      </div>);

  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 text-primary-foreground shadow-elevated sm:p-12">
      
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />
      <div className="relative mx-auto max-w-2xl text-center">
        <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary">
          Weekly Insights
        </span>
        <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
          Get market insights in your inbox
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-primary-foreground/70">
          Join thousands of learners. One concise email a week — patterns, lessons,
          and finance basics explained simply. No spam, ever.
        </p>
        <div className="mx-auto mt-6 max-w-md">
          {status === "done" ?
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-secondary">
              <CheckCircle2 className="h-5 w-5" /> You're subscribed. Welcome aboard!
            </p> :

          form
          }
        </div>
      </div>
    </motion.div>);

}