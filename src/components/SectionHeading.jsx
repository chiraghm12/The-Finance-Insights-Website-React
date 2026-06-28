import { motion } from "motion/react";








export function SectionHeading({ eyebrow, title, description, align = "center" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      
      {eyebrow &&
      <span className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary">
          {eyebrow}
        </span>
      }
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description &&
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      }
    </motion.div>);

}