import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import ContactForm from '../../components/contact/ContactForm';
import { Phone, Mail, Clock, MessageSquare, Headphones, Truck, Handshake } from 'lucide-react';

export default function Contact() {
  const supportReasons = [
    { icon: Headphones, title: 'ORDER HELP', desc: 'Questions about an existing order or delivery status.' },
    { icon: Truck, title: 'DELIVERY', desc: 'Inquiries regarding delivery areas or dispatch fees.' },
    { icon: MessageSquare, title: 'FEEDBACK', desc: 'Share your dining experience or suggest improvements.' },
    { icon: Handshake, title: 'PARTNERSHIPS', desc: 'Business and franchise partnership inquiries.' },
  ];

  return (
    <div className="min-h-screen bg-[#09090C] text-white flex flex-col selection:bg-orange-500 selection:text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 space-y-12">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3 select-none">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            LET&apos;S TALK. WE&apos;RE HERE TO HELP.
          </h1>
          <p className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed">
            Questions, feedback or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>

        {/* 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start select-none">
          
          {/* LEFT: CUSTOMER SUPPORT INFO & REASONS (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* SUPPORT CONTACT INFO */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#14141C]/80 border border-white/10 space-y-6 shadow-xl">
              <h3 className="font-heading font-black text-xl text-white border-b border-white/10 pb-3">
                CUSTOMER SUPPORT
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[11px] uppercase font-bold block">Phone Number</span>
                    <span className="font-heading font-bold text-white text-base">+92 300 1234567</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[11px] uppercase font-bold block">Email Address</span>
                    <span className="font-heading font-bold text-white text-base">support@cravex.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[11px] uppercase font-bold block">Working Hours</span>
                    <span className="font-heading font-bold text-white text-base">Daily · 11:00 AM – 2:00 AM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTACT REASONS CARDS */}
            <div className="grid grid-cols-2 gap-3">
              {supportReasons.map((reason, idx) => {
                const Icon = reason.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-[#14141C]/80 border border-white/10 space-y-1.5">
                    <Icon className="w-5 h-5 text-orange-400" />
                    <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider">{reason.title}</h4>
                    <p className="text-[11px] text-gray-400 leading-snug">{reason.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT: CONTACT FORM (7 cols on desktop) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
