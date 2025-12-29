import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10" />
        {/* Unsplash: Luxury hotel bedroom warm lighting */}
        <img 
          src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Hotel Room"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium tracking-widest uppercase mb-4">
            Welcome to New Delhi
          </span>
          
          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight drop-shadow-lg">
            Affordable <span className="text-primary italic">Comfort</span> <br />
            in the Heart of the City
          </h1>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Experience the warmth of Indian hospitality at Hotel MD International.
            Perfectly located in Paharganj for leisure and business travelers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="/rooms">
              <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 rounded-full">
                View Our Rooms
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}

