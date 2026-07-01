import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }) {
  return (
    <Link to="/" className="group flex items-center transition-transform duration-300 hover:scale-[1.02]" aria-label="The Finance Insights home">
      <img
        src="/Logo.png"
        alt="The Finance Insights Logo"
        className={compact ? "h-10 w-auto object-contain rounded-full" : "h-14 w-auto object-contain rounded-full"}
      />
    </Link>
  );
}