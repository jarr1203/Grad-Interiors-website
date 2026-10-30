import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon, MapPin, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { categories, projects } from "./portfolio";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const list = projects.filter((p) => cat === "All" || p.category === cat);
  const viewable = list.filter((p) => p.src);
  const current = open !== null ? viewable[open] : null;

  const step = (d: number) => setOpen((i) => (i === null ? i : (i + d + viewable.length) % viewable.length));
  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  });

  return (
    <>
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm transition-colors",
              cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary hover:text-primary",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {list.map((p) => {
          const vi = viewable.indexOf(p);
          return (
            <figure key={p.caption} className="group mb-6 break-inside-avoid">
              {p.src ? (
                <button onClick={() => setOpen(vi)} className="block w-full overflow-hidden" aria-label={`Open ${p.caption}`}>
                  <img
                    src={p.src}
                    alt={p.caption}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </button>
              ) : (
                <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 border-2 border-dashed border-border bg-muted text-muted-foreground">
                  <ImageIcon className="h-8 w-8" />
                  <span className="text-xs uppercase tracking-widest">Image placeholder</span>
                </div>
              )}
              <figcaption className="mt-3 flex items-start justify-between gap-4">
                <span className="font-display text-lg leading-snug">{p.caption}</span>
                <span className="mt-1 flex shrink-0 items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground">
                  <MapPin className="h-3 w-3 text-primary" />
                  {p.location}
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-5xl border-none bg-transparent p-0 shadow-none [&>button]:hidden">
          <DialogTitle className="sr-only">{current?.caption}</DialogTitle>
          {current && (
            <div className="relative">
              <img src={current.src!} alt={current.caption} className="mx-auto max-h-[80vh] w-auto object-contain" />
              <div className="mt-3 flex items-center justify-between bg-background px-4 py-3">
                <span className="font-display">{current.caption}</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{current.location}</span>
              </div>
              {[
                { d: -1, Icon: ChevronLeft, pos: "left-2", label: "Previous" },
                { d: 1, Icon: ChevronRight, pos: "right-2", label: "Next" },
              ].map(({ d, Icon, pos, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  onClick={() => step(d)}
                  className={cn("absolute top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-3 text-foreground transition hover:bg-background", pos)}
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
              <button aria-label="Close" onClick={() => setOpen(null)} className="absolute right-2 top-2 rounded-full bg-background/90 p-2 text-foreground">
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
