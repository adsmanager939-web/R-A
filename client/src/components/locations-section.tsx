import { MapPin } from "lucide-react";

export default function LocationsSection() {
  const offices = [
    { city: "Toronto", country: "Canada", address: "123 Bay Street, Suite 1800" },
    { city: "New York", country: "United States", address: "450 Park Avenue, 15th Floor" },
    { city: "London", country: "United Kingdom", address: "25 Old Broad Street" },
    { city: "Singapore", country: "Singapore", address: "1 Raffles Place, #40-02" },
  ];

  return (
    <section id="locations" className="py-24 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs text-[#FFD700] uppercase tracking-widest font-bold mb-4">Locations</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none tracking-tight">
            Global Offices
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {offices.map((office, index) => (
            <div
              key={index}
              className="border-t border-white/10 pt-8 pb-10 pr-8"
              data-testid={`location-card-${index}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-3.5 h-3.5 text-[#7B1418] flex-shrink-0" />
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">{office.city}</h3>
              </div>
              <p className="text-white/25 text-xs uppercase tracking-widest mb-4">{office.country}</p>
              <p className="text-white/40 text-sm leading-relaxed">{office.address}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-2 pt-8">
          <p className="text-xs text-white/20 uppercase tracking-widest">
            Available 24 hours · All time zones · inquiry@refund-associates.com
          </p>
        </div>
      </div>
    </section>
  );
}
