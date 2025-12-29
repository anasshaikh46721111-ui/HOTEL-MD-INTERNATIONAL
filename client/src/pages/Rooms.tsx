import { useRooms } from "@/hooks/use-hotel";
import { RoomCard } from "@/components/RoomCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function Rooms() {
  const { data: rooms, isLoading } = useRooms();

  return (
    <div className="min-h-screen pt-20 pb-20">
      <section className="bg-secondary/30 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl mb-6">Our Rooms & Rates</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comfortable, clean, and spacious rooms designed for your relaxation.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-64 w-full rounded-2xl" />
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms?.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        )}

        <div className="mt-20 p-8 bg-primary/5 rounded-2xl border border-primary/10 text-center">
          <h3 className="font-heading text-2xl mb-4">Need help choosing?</h3>
          <p className="text-muted-foreground mb-6">
            Contact our front desk for recommendations based on your group size and preferences.
          </p>
          <div className="flex justify-center gap-4 text-sm font-semibold text-primary">
            <span>Check-in: 12:00 PM</span>
            <span>•</span>
            <span>Check-out: 11:00 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
 
