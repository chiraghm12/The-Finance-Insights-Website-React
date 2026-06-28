import {
  createContext,
  useContext,
  useEffect,
  useState } from

"react";







const BookmarkContext = createContext(
  undefined
);

const STORAGE_KEY = "tfi-bookmarks";

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setBookmarks(JSON.parse(stored));
      } catch {

        /* ignore corrupt storage */}
    }
  }, []);

  const persist = (next) => {
    setBookmarks(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const isBookmarked = (slug) => bookmarks.includes(slug);

  const toggleBookmark = (slug) => {
    persist(
      bookmarks.includes(slug) ?
      bookmarks.filter((s) => s !== slug) :
      [...bookmarks, slug]
    );
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, isBookmarked, toggleBookmark }}>
      
      {children}
    </BookmarkContext.Provider>);

}

export function useBookmarks() {
  const ctx = useContext(BookmarkContext);
  if (!ctx) throw new Error("useBookmarks must be used within BookmarkProvider");
  return ctx;
}