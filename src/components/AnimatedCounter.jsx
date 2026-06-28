import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";









export function AnimatedCounter({ value, suffix = "", prefix = "", label, duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center">
      
      <div className="font-display text-3xl font-extrabold sm:text-4xl">
        {prefix}
        {display.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </motion.div>);

}