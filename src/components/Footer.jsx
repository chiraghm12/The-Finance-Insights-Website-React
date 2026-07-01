import { Link } from "@tanstack/react-router";
import { FaInstagram, FaXTwitter, FaYoutube, FaFacebook } from "react-icons/fa6";
import { Logo } from "./Logo";
import { Newsletter } from "./Newsletter";
import { categories } from "@/data/categories";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Learn", to: "/learn" },
  { label: "Calculators", to: "/calculators" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" }];


const socials = [
  { icon: FaYoutube, href: import.meta.env.VITE_SOCIAL_YOUTUBE || "https://youtube.com", label: "YouTube" },
  { icon: FaInstagram, href: import.meta.env.VITE_SOCIAL_INSTAGRAM || "https://instagram.com", label: "Instagram" },
  { icon: FaXTwitter, href: import.meta.env.VITE_SOCIAL_X || "https://x.com", label: "X (Twitter)" },
  { icon: FaFacebook, href: import.meta.env.VITE_SOCIAL_FACEBOOK || "https://facebook.com", label: "Facebook" }
];


export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A premium finance education platform helping you master the markets
              through clear, visual explanations.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socials.map((s) =>
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-secondary hover:text-secondary">

                  <s.icon className="h-[1.05rem] w-[1.05rem]" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) =>
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-secondary">

                    {l.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold">Learn</h3>
            <ul className="mt-4 space-y-2.5">
              {categories.map((c) =>
                <li key={c.slug}>
                  <Link
                    to={c.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-secondary">

                    {c.title}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold">Stay in the loop</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Weekly insights, delivered simply.
            </p>
            <div className="mt-4">
              <Newsletter variant="inline" />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} The Finance Insights. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Educational content only — not financial advice.
          </p>
        </div>
      </div>
    </footer>);

}