import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import {
  Award, Wallet, Clock, Workflow, Gem, Sparkles, Home, Building2, ChefHat, LayoutGrid, Armchair, Hammer,
  MapPin, Menu, X, Phone, Mail, MessageCircle, Instagram, Facebook, Info,
} from "lucide-react";
import logo from "@/assets/grad-logo.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { Reveal, Counter, Eyebrow } from "@/components/site/Reveal";
import { Gallery } from "@/components/site/Gallery";
import { ReviewsCarousel } from "@/components/site/ReviewsCarousel";
import { heroImage } from "@/components/site/portfolio";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grad Interiors — Redefining Your Space | Bangalore & Tamil Nadu" },
      { name: "description", content: "Elegant, personalised interior design across Bangalore and Tamil Nadu. 200+ projects completed across South India." },
      { property: "og:title", content: "Grad Interiors — Redefining Your Space" },
      { property: "og:description", content: "Premium residential and commercial interiors across Bangalore and Tamil Nadu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "Grad Interiors",
          slogan: "Redefining Your Space",
          telephone: "+919243130900",
          email: "gradinteriors.in@gmail.com",
          areaServed: ["Bangalore", "Tamil Nadu"],
          sameAs: ["https://instagram.com/grad.interior"],
        }),
      },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Choose Me", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled || open ? "bg-background shadow-sm" : "bg-background")}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6">
        <a href="#home" className="shrink-0">
          <img src={logo.url} alt="Grad Interiors" className="h-14 w-auto mix-blend-multiply" />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary">
              {n.label}
            </a>
          ))}
        </nav>
        <Button asChild className="hidden rounded-none px-6 lg:inline-flex">
          <a href="#contact">Book a Consultation</a>
        </Button>
        <button className="lg:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-6 pb-6 lg:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 font-display text-xl">
              {n.label}
            </a>
          ))}
          <Button asChild className="mt-3 rounded-none">
            <a href="#contact" onClick={() => setOpen(false)}>Book a Consultation</a>
          </Button>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img src={heroImage} alt="Teal modular kitchen by Grad Interiors" className="absolute inset-0 h-full w-full animate-[heroZoom_20s_ease-out_forwards] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-foreground/20" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pt-20 text-background">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-background/80">Grad Interiors · Bangalore & Tamil Nadu</p>
          <h1 className="max-w-3xl text-5xl leading-[1.05] md:text-7xl">
            Redefining <em className="font-normal">Your</em> Space
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light text-background/85">
            Thoughtful, warm and timeless interiors — crafted around the way you live, from first sketch to final handover.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-none px-8">
              <a href="#portfolio">View Portfolio</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-none border-background bg-transparent px-8 text-background hover:bg-background hover:text-foreground">
              <a href="#contact">Book a Free Consultation</a>
            </Button>
          </div>
          <p className="mt-14 flex items-center gap-3 text-sm tracking-wide text-background/85">
            <span className="h-px w-10 bg-primary" />
            200+ Projects Completed Across South India
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Section({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={cn("scroll-mt-20 px-6 py-24 md:py-32", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function About() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <Eyebrow>About the Designer</Eyebrow>
          <h2 className="text-4xl leading-tight md:text-5xl">Spaces that feel like you, only better.</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            I'm the designer behind Grad Interiors. For over 12 years I've helped families and businesses across Bangalore and Tamil Nadu turn ordinary rooms into calm, functional and beautiful places to live and work.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            My philosophy is simple: design should begin with how you live. I balance warm materials, considered lighting and clever storage so every square foot works hard — and still feels effortless.
          </p>
          <blockquote className="mx-auto mt-10 max-w-xl border-t border-primary pt-8 font-display text-xl italic">
            "Good design is quiet. It simply makes life easier and more beautiful."
          </blockquote>
        </Reveal>
      </div>
    </Section>
  );
}

const why = [
  { Icon: Award, title: "200+ Projects Delivered", text: "A proven track record of homes and workspaces completed with care." },
  { Icon: Sparkles, title: "Personalised Designs", text: "Every plan is shaped around your lifestyle and your budget." },
  { Icon: Wallet, title: "Transparent Pricing", text: "Clear, itemised quotes with no hidden costs — ever." },
  { Icon: Clock, title: "On-Time Delivery", text: "Realistic timelines, honest updates and handovers you can plan around." },
  { Icon: Workflow, title: "End-to-End Service", text: "From concept and 3D visuals to execution and final handover." },
  { Icon: Gem, title: "Quality Materials", text: "Durable finishes sourced from trusted, long-standing vendors." },
];

const services = [
  { Icon: Home, title: "Residential Interiors", text: "Complete home interiors designed for comfort and character." },
  { Icon: Building2, title: "Commercial Interiors", text: "Offices and retail spaces that reflect your brand." },
  { Icon: ChefHat, title: "Modular Kitchens", text: "Ergonomic, easy-care kitchens built to last." },
  { Icon: LayoutGrid, title: "Space Planning", text: "Smart layouts that make every square foot count." },
  { Icon: Armchair, title: "Custom Furniture", text: "Bespoke wardrobes, units and pieces made to measure." },
  { Icon: Hammer, title: "Renovation", text: "Breathe new life into existing spaces, start to finish." },
];


function ConsultForm() {
  const schema = z.object({
    name: z.string().trim().min(1, "Please enter your name").max(100),
    phone: z.string().trim().regex(/^[0-9+\-\s]{8,15}$/, "Please enter a valid phone number"),
    email: z.string().trim().email("Please enter a valid email").max(255),
    type: z.string().min(1, "Please choose a project type"),
    message: z.string().trim().max(1000).optional(),
  });
  const [type, setType] = useState("");
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const r = schema.safeParse({ ...Object.fromEntries(fd), type });
    if (!r.success) {
      toast.error(r.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    toast.success("Thank you! We'll call you shortly to confirm the details.");
    e.currentTarget.reset();
    setType("");
  };
  return (
    <form onSubmit={submit} className="space-y-5 bg-card p-8 shadow-sm md:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2"><Label htmlFor="name">Name</Label><Input id="name" name="name" maxLength={100} className="rounded-none" /></div>
        <div className="space-y-2"><Label htmlFor="phone">Phone</Label><Input id="phone" name="phone" type="tel" maxLength={15} className="rounded-none" /></div>
      </div>
      <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" maxLength={255} className="rounded-none" /></div>
      <div className="space-y-2">
        <Label>Project Type</Label>
        <Select value={type} onValueChange={setType}>
          <SelectTrigger className="rounded-none"><SelectValue placeholder="Select a project type" /></SelectTrigger>
          <SelectContent>
            {["Full Home", "Living Room", "Bedroom", "Modular Kitchen", "Office / Commercial", "Renovation", "Other"].map((t) => (
              <SelectItem key={t} value={t}>{t}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2"><Label htmlFor="message">Message</Label><Textarea id="message" name="message" rows={4} maxLength={1000} className="rounded-none" placeholder="Tell us about your space…" /></div>
      <p className="flex items-start gap-2 bg-accent p-4 text-sm text-accent-foreground">
        <Info className="mt-0.5 h-4 w-4 shrink-0" />
        Your consultation details will be confirmed with you over a call.
      </p>
      <Button type="submit" size="lg" className="w-full rounded-none">Book My Consultation</Button>
    </form>
  );
}

const WHATSAPP_URL = `https://wa.me/919243130900?text=${encodeURIComponent("Hi, I'd like to discuss an interior design project.")}`;

const contacts = [
  { Icon: Phone, label: "Phone", value: "9243130900", href: "tel:+919243130900", external: false },
  { Icon: Mail, label: "Email", value: "gradinteriors.in@gmail.com", href: "mailto:gradinteriors.in@gmail.com", external: false },
  { Icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: WHATSAPP_URL, external: true },
  { Icon: Instagram, label: "Instagram", value: "@grad.interior", href: "https://instagram.com/grad.interior", external: true },
];

function Index() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />

      <Section id="portfolio" className="bg-secondary">
        <Reveal className="mb-12 text-center">
          <Eyebrow>Portfolio</Eyebrow>
          <h2 className="text-4xl md:text-5xl">Selected Work</h2>
        </Reveal>
        <Gallery />
      </Section>

      <Section id="why">
        <Reveal className="mb-16 max-w-2xl">
          <Eyebrow>Why Choose Me</Eyebrow>
          <h2 className="text-4xl md:text-5xl">Design you can trust, from start to finish.</h2>
        </Reveal>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {why.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80} className="h-full">
              <div className="group h-full bg-background p-10 transition-colors duration-500 hover:bg-accent">
                <Icon className="h-8 w-8 text-primary transition-transform duration-500 group-hover:-translate-y-1" strokeWidth={1.5} />
                <h3 className="mt-6 text-2xl">{title}</h3>
                <p className="mt-3 text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="services" className="bg-accent-deep text-primary-foreground">
        <Reveal className="mb-16 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/70">Services</p>
          <h2 className="text-4xl md:text-5xl">What I Do</h2>
        </Reveal>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="border-t border-primary-foreground/20 pt-8">
                <span className="font-display text-sm text-primary-foreground/50">0{i + 1}</span>
                <Icon className="mt-4 h-7 w-7" strokeWidth={1.5} />
                <h3 className="mt-4 text-2xl">{title}</h3>
                <p className="mt-2 text-primary-foreground/70">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="areas">
        <Reveal className="text-center">
          <Eyebrow>Service Areas</Eyebrow>
          <h2 className="mx-auto max-w-3xl text-4xl md:text-5xl">Serving Bangalore & Tamil Nadu — covering all of South India.</h2>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {["Bangalore", "Tamil Nadu"].map((l) => (
              <span key={l} className="flex items-center gap-2 border border-primary px-8 py-4 font-display text-xl text-primary">
                <MapPin className="h-5 w-5" /> {l}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      <section className="border-y border-border bg-secondary px-6 py-20">
        <div className="mx-auto grid max-w-4xl gap-12 text-center sm:grid-cols-2">
          {[{ to: 200, label: "Projects Completed" }, { to: 12, label: "Years of Experience" }].map((s) => (
            <div key={s.label}>
              <p className="font-display text-6xl text-primary md:text-7xl"><Counter to={s.to} suffix="+" /></p>
              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Section id="reviews">
        <Reveal className="mb-16 text-center">
          <Eyebrow>Reviews</Eyebrow>
          <h2 className="text-4xl md:text-5xl">Kind Words</h2>
        </Reveal>
        <Reveal>
          <ReviewsCarousel />
        </Reveal>
      </Section>

      <Section id="contact" className="bg-secondary">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h2 className="text-4xl md:text-5xl">Book a Consultation</h2>
            <p className="mt-6 max-w-md text-muted-foreground">Share a few details about your space and we'll get in touch to plan your free consultation.</p>
            <ul className="mt-10 space-y-5">
              {contacts.map(({ Icon, label, value, href, external }) => (
                <li key={label}>
                  <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center border border-primary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="h-5 w-5" /></span>
                    <span>
                      <span className="block text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
                      <span>{value}</span>
                    </span>
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-primary text-primary"><MapPin className="h-5 w-5" /></span>
                <span>Serving Bangalore &amp; Tamil Nadu</span>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={150}><ConsultForm /></Reveal>
        </div>
      </Section>

      <footer className="bg-background px-6 pb-10 pt-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div>
            <img src={logo.url} alt="Grad Interiors" className="h-24 w-auto mix-blend-multiply" />
          </div>
          <div>
            <h4 className="mb-4 text-lg">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-primary">{n.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg">Locations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />Bangalore</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />Tamil Nadu</li>
            </ul>
            <div className="mt-6 flex gap-3">
              {contacts.map(({ Icon, label, href, external }) => (
                <a key={label} href={href} aria-label={label} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="grid h-10 w-10 place-items-center border border-border transition-colors hover:border-primary hover:text-primary"><Icon className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
        </div>
        <p className="mx-auto mt-16 max-w-7xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Grad Interiors · Redefining Your Space
        </p>
      </footer>
      <Toaster />
    </div>
  );
}
