import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function LocationsSection() {
  const offices = [
    {
      city: "Toronto",
      country: "Canada",
      address: "123 Bay Street, Suite 1800",
      phone: "+1 (613) 416-0183",
      email: "toronto@trueclaimassociates.com"
    },
    {
      city: "New York",
      country: "United States",
      address: "450 Park Avenue, 15th Floor",
      phone: "+1 (212) 555-0123",
      email: "newyork@trueclaimassociates.com"
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "25 Old Broad Street",
      phone: "+44 7542 485235",
      email: "london@trueclaimassociates.com"
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "1 Raffles Place, #40-02",
      phone: "+65 6789 0123",
      email: "singapore@trueclaimassociates.com"
    }
  ];

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a3a52] mb-4">Our Global Locations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Offices strategically located around the world to serve you better
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {offices.map((office, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              data-testid={`location-card-${index}`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#1a3a52] to-[#2a4a62] rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a3a52] mb-1">{office.city}</h3>
              <p className="text-gray-500 text-sm mb-4">{office.country}</p>
              <div className="space-y-3 text-sm">
                <p className="text-gray-600">{office.address}</p>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{office.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>{office.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#1a3a52] to-[#2a4a62] rounded-xl p-8 text-white text-center">
          <Clock className="w-12 h-12 mx-auto mb-4 text-[#d4af37]" />
          <h3 className="text-2xl font-bold mb-2">24/7 Global Support</h3>
          <p className="text-white/90">Our team is available around the clock to assist you, no matter where you are in the world</p>
        </div>
      </div>
    </section>
  );
}
