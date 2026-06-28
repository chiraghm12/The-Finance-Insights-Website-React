import {
  createContext,
  useContext,
  useEffect,
  useState } from

"react";








const ThemeContext = createContext(undefined);

const STORAGE_KEY = "tfi-theme";

function applyTheme(theme) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Read persisted / system preference on mount (client-only).
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const prefersDark =
    window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>);

}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}