import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function LocationsSection() {
  const offices = [
    {
      city: "Toronto",
      country: "Canada",
      address: "123 Bay Street, Suite 1800",
      phone: "+1 (613) 416-0183",
      email: "inquiry@refund-associates.com"
    },
    {
      city: "New York",
      country: "United States",
      address: "450 Park Avenue, 15th Floor",
      phone: "+1 (212) 555-0123",
      email: "inquiry@refund-associates.com"
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "25 Old Broad Street",
      phone: "+44 7542 485235",
      email: "inquiry@refund-associates.com"
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "1 Raffles Place, #40-02",
      phone: "+65 6789 0123",
      email: "inquiry@refund-associates.com"
    }
  ];

  return (
    <section id="locations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs text-[#7B1418] uppercase tracking-widest font-bold mb-4">Locations</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#000000] uppercase leading-none tracking-tight">
            Global Offices
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb-12">
          {offices.map((office, index) => (
            <div
              key={index}
              className="border-l border-black/10 pl-6 py-6 hover:border-[#7B1418]/30 transition-colors"
              data-testid={`location-card-${index}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-[#7B1418]" />
                <h3 className="text-lg font-bold text-[#000000]">{office.city}</h3>
              </div>
              <p className="text-black/40 text-xs uppercase tracking-widest mb-4">{office.country}</p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-500">{office.address}</p>
                <div className="flex items-center gap-2 text-gray-500">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{office.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{office.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-black/10 p-10 flex items-center gap-6 bg-[#000000]">
          <Clock className="w-10 h-10 text-[#FFD700] flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-white mb-1">24/7 Global Support</h3>
            <p className="text-white/50 text-sm">Our team is available around the clock to assist you, no matter where you are in the world.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
