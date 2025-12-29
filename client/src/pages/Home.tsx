import { Hero } from "@/components/Hero";
import { useRooms, useReviews } from "@/hooks/use-hotel";
import { RoomCard } from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Star, MapPin, Coffee, Wifi, Train, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { data: rooms } = useRooms();
  const { data: reviews } = useReviews();

  const features = [
    { icon: <Train className="w-6 h-6" />, title: "Near Railway Station", desc: "Walking distance from New Delhi Railway Station." },
    { icon: <Wifi className="w-6 h-6" />, title: "Free High-Speed WiFi", desc: "Stay connected with complimentary internet access." },
    { icon: <Coffee className="w-6 h-6" />, title: "24/7 Room Service", desc: "Enjoy delicious meals in the comfort of your room." },
    { icon: <ShoppingBag className="w-6 h-6" />, title: "Central Location", desc: "Close to Connaught Place and Karol Bagh markets." },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 text-primary/5 pattern-grid pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-4xl mb-4 text-foreground">Why Choose Us</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground">
              We offer the perfect blend of traditional hospitality and modern amenities for a comfortable stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-2xl shadow-sm border hover:shadow-lg hover:border-primary/20 transition-all text-center group"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-heading text-4xl mb-4">Our Accommodations</h2>
              <div className="w-20 h-1 bg-primary mb-6 rounded-full" />
              <p className="text-lg text-muted-foreground">
                Choose from our range of well-appointed rooms designed for your comfort.
              </p>
            </div>
            <Link href="/rooms">
              <Button variant="outline" size="lg">View All Rooms</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms?.slice(0, 3).map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-2xl z-0" />
              {/* Unsplash: Hotel Reception / Lobby */}
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
                alt="Hotel Lobby" 
                className="relative z-10 rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">About Hotel MD International</span>
              <h2 className="font-heading text-4xl md:text-5xl leading-tight">
                A Stay That Feels <br /><span className="text-primary">Like Home</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Situated in the bustling heart of Paharganj, Hotel MD International offers a peaceful retreat from the city's energy. We pride ourselves on providing exceptional service, clean and comfortable rooms, and all the modern amenities you need for a memorable stay.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're visiting for business, a family vacation, or exploring the rich history of Delhi, our dedicated staff is here to ensure your comfort around the clock.
              </p>
              <Link href="/about">
                <Button size="lg" className="mt-4">Read More About Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      {reviews && reviews.length > 0 && (
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-heading text-4xl mb-4">Guest Experiences</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.slice(0, 3).map((review) => (
                <div key={review.id} className="bg-card p-8 rounded-2xl shadow-sm border relative">
                  <div className="flex gap-1 mb-4 text-orange-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6">"{review.comment}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-primary">
                      {review.name[0]}
                    </div>
                    <div>
                      <h5 className="font-bold text-sm">{review.name}</h5>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-foreground text-white text-center relative overflow-hidden">
        {/* Unsplash: Abstract warm light texture */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">Ready for an Unforgettable Stay?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Book your room directly with us for the best rates and exclusive offers.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 rounded-full shadow-lg shadow-primary/30">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
                }
