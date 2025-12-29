import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navigation() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/rooms", label: "Rooms & Rates" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2 text-sm font-medium">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919711022356" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Phone className="h-4 w-4" />
              <span>+91 97110 22356</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Paharganj, New Delhi</span>
            </span>
          </div>
          <div className="text-primary-foreground/90">
            Affordable Comfort in the Heart of New Delhi
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="cursor-pointer flex flex-col items-start group">
            <span className="font-heading font-bold text-2xl text-primary leading-none group-hover:text-primary/80 transition-colors">
              Hotel MD
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold group-hover:text-primary/60 transition-colors">
              International
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span 
                className={`
                  cursor-pointer text-sm font-semibold tracking-wide transition-colors hover:text-primary
                  ${isActive(link.href) ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}
                `}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/contact">
            <Button className="shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
              Book Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-8 mt-12">
              <Link href="/">
                <div className="flex flex-col items-start mb-4" onClick={() => setOpen(false)}>
                  <span className="font-heading font-bold text-2xl text-primary">Hotel MD</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">International</span>
                </div>
              </Link>
              <nav className="flex flex-col gap-6">
                {links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span 
                      onClick={() => setOpen(false)}
                      className={`
                        text-xl font-medium cursor-pointer transition-colors
                        ${isActive(link.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"}
                      `}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
                <Link href="/contact">
                  <Button className="w-full mt-4" size="lg" onClick={() => setOpen(false)}>
                    Book Your Stay
                  </Button>
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
              
