import { useReadingProgress } from "@/hooks/useReadingProgress";

export function ReadingProgress() {
  const progress = useReadingProgress();
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }} />
      
    </div>);

}