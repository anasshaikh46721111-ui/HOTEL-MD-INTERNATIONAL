import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useSendMessage } from "@/hooks/use-hotel";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const mutation = useSendMessage();

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertMessage) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-20">
      <section className="bg-secondary/30 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to make a reservation? We're here to help.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-card border rounded-2xl shadow-sm">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading text-xl mb-2">Our Address</h3>
                <p className="text-muted-foreground text-sm">
                  3621-A, Desh Bandhu Gupta Rd,<br />
                  Dariba Pan, Paharganj,<br />
                  New Delhi, Delhi 110055
                </p>
              </div>
              
              <div className="p-6 bg-card border rounded-2xl shadow-sm">
                <Phone className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading text-xl mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm space-y-1">
                  <a href="tel:+919711022356" className="block hover:text-primary transition-colors">+91 97110 22356</a>
                  <a href="tel:+9101143504770" className="block hover:text-primary transition-colors">+91 011 4350 4770</a>
                </p>
              </div>

              <div className="p-6 bg-card border rounded-2xl shadow-sm">
                <Mail className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading text-xl mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">
                  <a href="mailto:manoharbisht9@gmail.com" className="hover:text-primary transition-colors">
                    manoharbisht9@gmail.com
                  </a>
                </p>
              </div>

              <div className="p-6 bg-card border rounded-2xl shadow-sm">
                <Clock className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading text-xl mb-2">Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Reception: 24/7<br />
                  Check-in: 12:00 PM<br />
                  Check-out: 11:00 AM
                </p>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9566896263433!2d77.2131562!3d28.6483582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd69b3620f5b%3A0xe5f8e5b4b1c8563d!2sHotel%20MD%20International!5e0!3m2!1sen!2sin!4v1709664555812!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 md:p-12 rounded-3xl border shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] -mr-8 -mt-8 pointer-events-none" />
            
            <h2 className="font-heading text-3xl mb-2">Send us a message</h2>
            <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you shortly.</p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" className="h-12 bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" className="h-12 bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          className="min-h-[150px] bg-background resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-12 text-lg shadow-lg shadow-primary/20"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
