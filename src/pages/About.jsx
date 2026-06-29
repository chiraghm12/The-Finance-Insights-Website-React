import { motion } from "motion/react";
import { Compass, Eye, Heart, ShieldCheck, Sparkles, Users } from "lucide-react";
import { PageHeader } from "@/layouts/PageHeader";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Newsletter } from "@/components/Newsletter";

const pillars = [
{
  icon: Compass,
  title: "Our Mission",
  text: "To make financial education genuinely accessible — turning intimidating market concepts into clear, visual lessons anyone can learn."
},
{
  icon: Eye,
  title: "Our Vision",
  text: "A world where every individual can read a chart, manage risk, and invest with confidence instead of guesswork or hype."
},
{
  icon: Heart,
  title: "Our Values",
  text: "Clarity over jargon, education over advice, and discipline over hype. We teach principles that last, not get-rich shortcuts."
}];


const reasons = [
{ icon: Sparkles, title: "Visual-first learning", text: "Every concept is illustrated so it sticks." },
{ icon: ShieldCheck, title: "Risk-aware by default", text: "We build capital protection into every lesson." },
{ icon: Users, title: "Built for beginners", text: "No prior knowledge needed — we start at zero." }];


export function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="We make the markets make sense"
        description="The Finance Insights is a premium education platform built on one belief: anyone can learn to navigate the markets when it's taught clearly."
        crumbs={[{ label: "About" }]} />
      

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 lg:grid-cols-3">
          {pillars.map((p, i) =>
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary/12 text-secondary">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
            </motion.div>
          )}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 md:grid-cols-4">
          <AnimatedCounter value={25} suffix="K+" label="Learners" />
          <AnimatedCounter value={60} suffix="+" label="Lessons" />
          <AnimatedCounter value={6} label="Tracks" />
          <AnimatedCounter value={4.9} suffix="/5" label="Avg rating" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-extrabold">Why The Finance Insights</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {reasons.map((r, i) =>
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
            
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                <r.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-bold">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <Newsletter />
      </section>
    </>);

}