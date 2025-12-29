import { Room } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wifi, Tv, Coffee, Wind, Check } from "lucide-react";
import { Link } from "wouter";

const amenityIcons: Record<string, React.ReactNode> = {
  "Free WiFi": <Wifi className="w-4 h-4" />,
  "AC": <Wind className="w-4 h-4" />,
  "TV": <Tv className="w-4 h-4" />,
  "Room Service": <Coffee className="w-4 h-4" />,
};

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden h-64">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
        <img 
          src={room.imageUrl} 
          alt={room.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 z-20">
          <Badge variant="secondary" className="font-bold text-primary bg-white/90 backdrop-blur shadow-sm">
            {room.price} / night
          </Badge>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading text-2xl mb-2 text-foreground group-hover:text-primary transition-colors">
          {room.title}
        </h3>
        <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
          {room.description}
        </p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 mb-6">
            {room.amenities.slice(0, 4).map((amenity) => (
              <span 
                key={amenity} 
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
              >
                {amenityIcons[amenity] || <Check className="w-3 h-3" />}
                {amenity}
              </span>
            ))}
          </div>
          
          <Link href="/contact">
            <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              Book This Room
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
