import { MapPin, CheckCircle } from "lucide-react";

export default function About() {
  const facilities = [
    "24-Hour Front Desk",
    "Daily Housekeeping",
    "Private Bathroom",
    "Air Conditioning",
    "Flat-screen TV",
    "Free Wi-Fi",
    "Laundry Service",
    "Travel Desk",
    "Doctor on Call",
    "Luggage Storage",
  ];

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Header */}
      <section className="bg-secondary/30 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the story behind Hotel MD International and our commitment
            to hospitality.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              Welcome to{" "}
              <span className="text-primary">Hotel MD International</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hotel MD International offers a sophisticated blend of traditional
              hospitality and modern amenities. Located in the vibrant heart of
              New Delhi, we are a sanctuary for travelers seeking comfort,
              convenience, and affordability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our prime location in Paharganj places you moments away from the
              New Delhi Railway Station and the Metro, giving you effortless
              access to the city's most famous landmarks like Connaught Place,
              Red Fort, and India Gate.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that luxury doesn't have to come at a high price. Our
              rooms are designed with attention to detail, ensuring a restful
              sleep after a day of exploring the capital.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform rotate-3" />
            {/* Unsplash: Hotel Exterior or Lobby */}
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
              alt="Hotel Exterior"
              className="relative rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Location Advantage */}
        <div className="bg-card border rounded-2xl p-8 md:p-12 shadow-sm mb-24">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
              <MapPin className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading text-2xl mb-4">Strategic Location</h3>
              <p className="text-muted-foreground mb-6">
                Our address at 3621-A, Desh Bandhu Gupta Rd, Dariba Pan, Ratan
                Lal Market, Aram Bagh, Paharganj makes us one of the most
                accessible hotels in the city.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "500m from New Delhi Railway Station",
                  "1.5km from Connaught Place",
                  "3km from Red Fort",
                  "15km from Indira Gandhi International Airport",
                  "Walking distance to RK Ashram Marg Metro Station",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-12">Our Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {facilities.map((facility, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl hover:bg-secondary transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium text-sm">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
