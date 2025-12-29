import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col items-start">
              <span className="font-heading font-bold text-3xl text-primary-foreground">Hotel MD</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/60">International</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Experience authentic Indian hospitality in the heart of New Delhi. 
              Comfortable, clean, and conveniently located for travelers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-heading text-xl text-primary-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/rooms"><span className="text-white/70 hover:text-white cursor-pointer transition-colors">Our Rooms</span></Link>
              <Link href="/about"><span className="text-white/70 hover:text-white cursor-pointer transition-colors">About Us</span></Link>
              <Link href="/gallery"><span className="text-white/70 hover:text-white cursor-pointer transition-colors">Photo Gallery</span></Link>
              <Link href="/contact"><span className="text-white/70 hover:text-white cursor-pointer transition-colors">Contact Us</span></Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-heading text-xl text-primary-foreground">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 mt-1 shrink-0 text-primary" />
                <span>3621-A, Desh Bandhu Gupta Rd, Paharganj, New Delhi, 110055</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 shrink-0 text-primary" />
                <a href="tel:+919711022356" className="hover:text-white">+91 97110 22356</a>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 shrink-0 text-primary" />
                <a href="mailto:manoharbisht9@gmail.com" className="hover:text-white">manoharbisht9@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Location Note */}
          <div className="space-y-6">
            <h4 className="font-heading text-xl text-primary-foreground">Location</h4>
            <p className="text-white/70">
              We are situated just minutes away from the New Delhi Railway Station, 
              making us an ideal choice for transit travelers and tourists alike.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Hotel MD International. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/40 hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-white/40 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-white/40 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

