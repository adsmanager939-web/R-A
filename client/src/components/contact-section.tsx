import { PhoneIcon, MailIcon, Clock, ShieldCheck } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-20">
          <p className="text-xs text-[#FFD700] uppercase tracking-widest font-bold mb-4">Contact Us</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-none tracking-tight">
            We Are Here<br />
            <span className="text-[#7B1418]">Around The Clock</span>
          </h2>
          <p className="mt-6 text-white/50 max-w-xl leading-relaxed">
            Our team of fraud recovery specialists is available 24 hours a day, 7 days a week.
            Reach out through any channel below — we typically respond within the hour.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">

          {/* Phone */}
          <div className="bg-[#000000] p-10 flex flex-col gap-6 group hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 bg-[#7B1418] flex items-center justify-center flex-shrink-0">
              <PhoneIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-white/30 uppercase tracking-widest mb-2">24 / 7 Helpline</p>
              <a
                href="https://wa.me/16134160183"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-black text-white hover:text-[#FFD700] transition-colors block leading-tight"
                data-testid="contact-phone"
              >
                +1 (613) 416-0183
              </a>
              <p className="mt-3 text-sm text-white/40 leading-relaxed">
                Available at all hours for urgent cases. Also reachable via WhatsApp.
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-[#000000] p-10 flex flex-col gap-6 group hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 bg-[#7B1418] flex items-center justify-center flex-shrink-0">
              <MailIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-white/30 uppercase tracking-widest mb-2">Email Support</p>
              <a
                href="mailto:inquiry@refund-associates.com"
                className="text-xl font-black text-white hover:text-[#FFD700] transition-colors block leading-tight break-all"
                data-testid="contact-email"
              >
                inquiry@refund-associates.com
              </a>
              <p className="mt-3 text-sm text-white/40 leading-relaxed">
                All communications are encrypted and strictly confidential. We reply within the hour.
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-[#000000] p-10 flex flex-col gap-6 group hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 bg-[#7B1418] flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-white/30 uppercase tracking-widest mb-2">Availability</p>
              <p className="text-2xl font-black text-white leading-tight">
                24 hrs — 7 Days
              </p>
              <p className="mt-3 text-sm text-white/40 leading-relaxed">
                No appointments needed. Our specialists are standing by across all time zones.
              </p>
            </div>
          </div>

        </div>

        {/* Trust bar */}
        <div className="mt-px bg-white/10">
          <div className="bg-[#0a0a0a] px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <ShieldCheck className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
            <p className="text-sm text-white/40 leading-relaxed">
              All case information shared with Refund &amp; Associates is protected under strict confidentiality obligations.
              We are FINTRAC-authorized and adhere to Canadian federal privacy law (PIPEDA).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
