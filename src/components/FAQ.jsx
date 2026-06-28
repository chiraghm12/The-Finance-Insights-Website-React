import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";


export function FAQ({ items, title = "Frequently Asked Questions" }) {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {title && <h2 className="text-2xl font-extrabold">{title}</h2>}
      <div className="mt-6 space-y-3">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                
                <span className="font-semibold">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180 text-secondary" : ""}`} />
                
              </button>
              <AnimatePresence initial={false}>
                {isOpen &&
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                  
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </motion.div>
                }
              </AnimatePresence>
            </div>);

        })}
      </div>
    </div>);

}