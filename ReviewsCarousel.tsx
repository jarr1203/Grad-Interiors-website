import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { reviews } from "./reviews";
import { cn } from "@/lib/utils";

export function ReviewsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [snaps, setSnaps] = useState<number[]>([]);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setSnaps(api.scrollSnapList());
      setCurrent(api.selectedScrollSnap());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  useEffect(() => {
    if (!api || paused) return;
    const id = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [api, paused]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="px-0 md:px-12">
      <Carousel setApi={setApi} opts={{ loop: true, align: "start" }}>
        <CarouselContent className="-ml-8">
          {reviews.map((r, i) => (
            <CarouselItem key={i} className="pl-8 md:basis-1/2 lg:basis-1/3">
              <div className="flex h-full flex-col border border-border bg-card p-8">
                <Quote className="h-8 w-8 text-primary" strokeWidth={1.25} />
                <div className="mt-4 flex gap-1 text-primary" aria-label={`${r.rating} out of 5 stars`}>
                  {Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 flex-1 font-display text-lg italic leading-relaxed">"{r.text}"</p>
                <p className="mt-6 text-sm font-medium">{r.name}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{r.location} · {r.project}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden rounded-none md:flex" />
        <CarouselNext className="hidden rounded-none md:flex" />
      </Carousel>
      <div className="mt-8 flex justify-center gap-2">
        {snaps.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to review ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className={cn("h-2 rounded-full transition-all", i === current ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/50")}
          />
        ))}
      </div>
    </div>
  );
}
