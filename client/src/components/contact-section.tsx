import { PhoneIcon, MailIcon } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="border-t border-white/10 pt-16 mb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="text-xs text-[#FFD700] uppercase tracking-widest font-bold mb-5">Contact</p>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none tracking-tight">
                Speak With a<br />Specialist
              </h2>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs md:text-right">
              Our team is available around the clock.<br />
              All communications are strictly confidential.
            </p>
          </div>
        </div>

        {/* Contact rows */}
        <div className="space-y-0">

          <a
            href="https://wa.me/16134160183"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-t border-white/10 py-10 hover:border-white/30 transition-colors"
            data-testid="contact-phone"
          >
            <div className="flex items-center gap-8">
              <PhoneIcon className="w-4 h-4 text-[#7B1418] flex-shrink-0" />
              <div>
                <p className="text-xs text-white/25 uppercase tracking-widest mb-2">24 / 7 Helpline</p>
                <p className="text-2xl md:text-3xl font-black text-white group-hover:text-[#FFD700] transition-colors tracking-tight">
                  +1 (613) 416-0183
                </p>
              </div>
            </div>
            <p className="hidden md:block text-xs text-white/25 uppercase tracking-widest">
              Phone &amp; WhatsApp
            </p>
          </a>

          <a
            href="mailto:inquiry@refund-associates.com"
            className="group flex items-center justify-between border-t border-white/10 py-10 hover:border-white/30 transition-colors"
            data-testid="contact-email"
          >
            <div className="flex items-center gap-8">
              <MailIcon className="w-4 h-4 text-[#7B1418] flex-shrink-0" />
              <div>
                <p className="text-xs text-white/25 uppercase tracking-widest mb-2">Email</p>
                <p className="text-2xl md:text-3xl font-black text-white group-hover:text-[#FFD700] transition-colors tracking-tight break-all">
                  inquiry@refund-associates.com
                </p>
              </div>
            </div>
            <p className="hidden md:block text-xs text-white/25 uppercase tracking-widest">
              Encrypted &amp; Secure
            </p>
          </a>

          <div className="border-t border-white/10 pt-10 mt-2">
            <p className="text-xs text-white/20 leading-relaxed max-w-2xl">
              FINTRAC Authorized &nbsp;·&nbsp; BN 842594962 &nbsp;·&nbsp; All case information shared with Refund &amp; Associates is protected under strict confidentiality obligations and Canadian federal privacy law (PIPEDA).
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
