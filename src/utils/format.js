

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

/** Tailwind classes for a difficulty badge. */
export function difficultyClass(d) {
  switch (d) {
    case "Beginner":
      return "bg-secondary/12 text-secondary";
    case "Intermediate":
      return "bg-gold/15 text-gold-foreground";
    case "Advanced":
      return "bg-destructive/12 text-destructive";
  }
}

/** Tailwind classes for a sentiment badge. */
export function sentimentClass(s) {
  switch (s) {
    case "Bullish":
      return "bg-secondary/12 text-secondary";
    case "Bearish":
      return "bg-destructive/12 text-destructive";
    case "Neutral":
      return "bg-muted text-muted-foreground";
  }
}