import { motion } from "motion/react";
import { Breadcrumb } from "@/components/Breadcrumb";








/** Shared inner-page header with breadcrumb, sits below the fixed navbar. */
export function PageHeader({ eyebrow, title, description, crumbs }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-hero pt-28 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6">
        <Breadcrumb items={crumbs} />
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 max-w-3xl">
          
          {eyebrow &&
          <span className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary">
              {eyebrow}
            </span>
          }
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description &&
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          }
        </motion.div>
      </div>
    </section>);

}