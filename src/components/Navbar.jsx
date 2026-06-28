import { useEffect, useState } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { Logo } from "./Logo";
import { useTheme } from "@/context/ThemeContext";

const navItems = [
{ label: "Home", to: "/" },
{ label: "Learn", to: "/learn" },
{ label: "Calculators", to: "/calculators" },
{ label: "Blog", to: "/blog" },
{ label: "About", to: "/about" },
{ label: "Contact", to: "/contact" }];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change.
  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-card" : "border border-transparent"}`
        }>
        
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
          <Link
            key={item.to}
            to={item.to}
            activeOptions={{ exact: item.to === "/" }}
            className="relative rounded-full px-3.5 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground">
            
              {item.label}
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => navigate({ to: "/search" })}
            aria-label="Search"
            className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            
            <Search className="h-[1.05rem] w-[1.05rem]" />
          </button>
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            
            {theme === "dark" ?
            <Sun className="h-[1.05rem] w-[1.05rem]" /> :

            <Moon className="h-[1.05rem] w-[1.05rem]" />
            }
          </button>
          <Link
            to="/learn"
            className="ml-1 hidden rounded-full bg-gradient-accent px-4 py-2 text-sm font-bold text-secondary-foreground shadow-soft transition-transform hover:scale-[1.03] sm:inline-flex">
            
            Start Learning
          </Link>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-full text-foreground lg:hidden">
            
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen &&
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="glass-strong mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl p-2 shadow-card lg:hidden">
          
            {navItems.map((item) =>
          <Link
            key={item.to}
            to={item.to}
            activeOptions={{ exact: item.to === "/" }}
            className="block rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground data-[status=active]:bg-muted data-[status=active]:text-foreground">
            
                {item.label}
              </Link>
          )}
          </motion.nav>
        }
      </AnimatePresence>
    </motion.header>);

}