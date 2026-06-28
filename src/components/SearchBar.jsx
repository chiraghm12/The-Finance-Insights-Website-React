import { Search, X } from "lucide-react";








export function SearchBar({ value, onChange, placeholder = "Search patterns, indicators, topics…", autoFocus }) {
  return (
    <div className="relative w-full">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
      <input
        type="text"
        value={value}
        autoFocus={autoFocus}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search"
        className="h-14 w-full rounded-2xl border border-border bg-card pl-12 pr-12 text-base shadow-soft outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/30" />
      
      {value &&
      <button
        onClick={() => onChange("")}
        aria-label="Clear search"
        className="absolute right-4 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
        
          <X className="h-4 w-4" />
        </button>
      }
    </div>);

}