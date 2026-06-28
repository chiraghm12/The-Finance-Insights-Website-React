import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  Brain,
  CandlestickChart,
  GraduationCap,
  ShieldCheck,
  TrendingUp } from

"lucide-react";


const iconMap = {
  CandlestickChart,
  TrendingUp,
  Activity,
  ShieldCheck,
  Brain,
  GraduationCap
};

const accentMap = {
  secondary: "from-secondary/15 to-secondary/0 text-secondary",
  gold: "from-gold/20 to-gold/0 text-gold-foreground",
  primary: "from-primary/15 to-primary/0 text-primary"
};

export function CategoryCard({ category, index = 0 }) {
  const Icon = iconMap[category.icon] ?? Activity;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}>
      
      <Link
        to={category.to}
        className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft">
        
        <div
          className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${accentMap[category.accent]} opacity-60 blur-2xl transition-opacity group-hover:opacity-100`} />
        
        <div
          className={`relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${accentMap[category.accent]}`}>
          
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <h3 className="relative mt-5 text-lg font-bold">{category.title}</h3>
        <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {category.description}
        </p>
        <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
          Explore
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>);

}