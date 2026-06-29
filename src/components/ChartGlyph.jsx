

/**
 * Lightweight SVG glyph used as a pattern/article thumbnail placeholder.
 * Renders stylised candles tinted by sentiment — no image assets needed.
 */
export function ChartGlyph({
  sentiment = "Neutral",
  patternId = "",
  className = ""
}) {
  const candles =
    patternId === "hammer" ?
      [
        { x: 35, o: 42, c: 26, h: 22, l: 80, up: true },  // Green Hammer
        { x: 65, o: 26, c: 42, h: 22, l: 80, up: false }  // Red Hammer
      ] :
      sentiment === "Bullish" ?
        [
          { x: 10, o: 70, c: 80, h: 64, l: 86, up: false },
          { x: 30, o: 64, c: 72, h: 58, l: 78, up: false },
          { x: 50, o: 60, c: 44, h: 38, l: 64, up: true },
          { x: 70, o: 46, c: 28, h: 22, l: 50, up: true },
          { x: 90, o: 30, c: 16, h: 10, l: 34, up: true }] :

        sentiment === "Bearish" ?
          [
            { x: 10, o: 30, c: 18, h: 12, l: 34, up: true },
            { x: 30, o: 22, c: 34, h: 16, l: 40, up: false },
            { x: 50, o: 36, c: 52, h: 30, l: 58, up: false },
            { x: 70, o: 54, c: 70, h: 48, l: 76, up: false },
            { x: 90, o: 72, c: 86, h: 66, l: 92, up: false }] :

          [
            { x: 10, o: 52, c: 40, h: 34, l: 58, up: true },
            { x: 30, o: 42, c: 54, h: 36, l: 60, up: false },
            { x: 50, o: 50, c: 40, h: 34, l: 56, up: true },
            { x: 70, o: 44, c: 56, h: 38, l: 62, up: false },
            { x: 90, o: 50, c: 42, h: 36, l: 58, up: true }];

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true">

      {candles.map((cd, i) => {
        const colorClass =
          sentiment === "Neutral"
            ? "text-muted-foreground fill-current stroke-current"
            : cd.up
              ? "text-emerald-600 dark:text-emerald-500 fill-current stroke-current"
              : "text-rose-600 dark:text-rose-500 fill-current stroke-current";
        const top = Math.min(cd.o, cd.c);
        const bodyH = Math.max(Math.abs(cd.c - cd.o), 3);
        return (
          <g key={i} className={colorClass}>
            <line x1={cd.x} y1={cd.h} x2={cd.x} y2={cd.l} strokeWidth={1.5} />
            <rect x={cd.x - 4} y={top} width={8} height={bodyH} rx={0.5} />
          </g>);
      })}
    </svg>);
}