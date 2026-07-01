export function HammerGraphic() {
  return (
    <div className="relative mx-auto flex h-[360px] w-full max-w-[340px] items-center justify-center font-sans text-foreground">
      {/* Container matching our coordinate system */}
      <div className="relative h-[320px] w-[320px]">

        {/* Top Label */}
        <div className="absolute left-1/2 top-0 w-[200px] -translate-x-1/2 text-center text-sm font-extrabold tracking-wide text-foreground">
          LITTLE TO NO<br />UPPER SHADOW
        </div>

        {/* Bottom Middle Label */}
        <div className="absolute left-1/2 top-[220px] z-10 w-[140px] -translate-x-1/2 text-center text-sm font-extrabold tracking-wide text-foreground">
          LONG LOWER<br />SHADOW
        </div>

        {/* SVG Arrows Layer */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" className="fill-foreground" />
            </marker>
          </defs>

          {/* Top Left Diagonal */}
          <line x1="120" y1="40" x2="50" y2="52" stroke="currentColor" strokeWidth="1.5" className="text-foreground" markerEnd="url(#arrowhead)" />

          {/* Top Right Diagonal */}
          <line x1="200" y1="40" x2="270" y2="52" stroke="currentColor" strokeWidth="1.5" className="text-foreground" markerEnd="url(#arrowhead)" />

          {/* Bottom Left Horizontal */}
          <line x1="110" y1="230" x2="45" y2="230" stroke="currentColor" strokeWidth="1.5" className="text-foreground" markerEnd="url(#arrowhead)" />

          {/* Bottom Right Horizontal */}
          <line x1="210" y1="230" x2="275" y2="230" stroke="currentColor" strokeWidth="1.5" className="text-foreground" markerEnd="url(#arrowhead)" />
        </svg>

        {/* Green Candle (Left) */}
        <div className="absolute left-2 top-1/2 flex w-[56px] -translate-y-1/2 flex-col items-center">
          <span className="absolute -top-7 text-xs font-bold uppercase tracking-wider">High</span>
          <span className="absolute right-[100%] top-[8px] mr-2 text-xs font-bold uppercase tracking-wider">Close</span>
          <span className="absolute right-[100%] top-[68px] mr-2 text-xs font-bold uppercase tracking-wider">Open</span>
          <span className="absolute -bottom-7 text-xs font-bold uppercase tracking-wider">Low</span>

          <div className="h-[8px] w-1.5 bg-emerald-600 dark:bg-emerald-500" />
          <div className="h-[60px] w-full bg-emerald-600 dark:bg-emerald-500" />
          <div className="h-[160px] w-1.5 bg-emerald-600 dark:bg-emerald-500" />
        </div>

        {/* Red Candle (Right) */}
        <div className="absolute right-2 top-1/2 flex w-[56px] -translate-y-1/2 flex-col items-center">
          <span className="absolute -top-7 text-xs font-bold uppercase tracking-wider">High</span>
          <span className="absolute left-[100%] top-[8px] ml-2 text-xs font-bold uppercase tracking-wider">Open</span>
          <span className="absolute left-[100%] top-[68px] ml-2 text-xs font-bold uppercase tracking-wider">Close</span>
          <span className="absolute -bottom-7 text-xs font-bold uppercase tracking-wider">Low</span>

          <div className="h-[8px] w-1.5 bg-rose-600 dark:bg-rose-500" />
          <div className="h-[60px] w-full bg-rose-600 dark:bg-rose-500" />
          <div className="h-[160px] w-1.5 bg-rose-600 dark:bg-rose-500" />
        </div>
      </div>
    </div>
  );
}
