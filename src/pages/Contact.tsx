import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Address",
    lines: ["123 Education Lane,", "Learning City, State 45678"],
    color: "bg-school-orange/15 text-school-orange",
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    lines: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
    color: "bg-school-blue/15 text-school-blue",
  },
  {
    icon: Mail,
    title: "Email Addresses",
    lines: ["info@brightminds.edu", "admissions@brightminds.edu"],
    color: "bg-school-green/15 text-school-green",
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Mon – Fri: 7:30 AM – 5:00 PM", "Sat: 9:00 AM – 1:00 PM"],
    color: "bg-school-pink/15 text-school-pink",
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", bg: "bg-blue-600 hover:bg-blue-700" },
  { icon: Twitter, href: "#", label: "Twitter", bg: "bg-sky-500 hover:bg-sky-600" },
  { icon: Instagram, href: "#", label: "Instagram", bg: "bg-pink-500 hover:bg-pink-600" },
  { icon: Youtube, href: "#", label: "YouTube", bg: "bg-red-600 hover:bg-red-700" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Page Hero */}
      <section className="relative py-24 bg-gradient-to-br from-school-pink/10 via-background to-school-orange/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-school-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="badge-pill bg-school-pink/15 text-school-pink mb-5">Contact Us</span>
          <h1 className="font-display font-extrabold text-5xl md:text-6xl text-foreground mb-5">
            We'd Love to <span className="text-primary">Hear</span> From You
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question, want a tour, or ready to enroll? Our friendly team is here to help.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map(({ icon: Icon, title, lines, color }) => (
              <div key={title} className="bg-card rounded-3xl p-6 shadow-card border border-border hover:-translate-y-1 transition-transform duration-300 text-center">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${color}`}>
                  <Icon size={26} />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{title}</h3>
                {lines.map((line) => (
                  <p key={line} className="font-body text-sm text-muted-foreground">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-12 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <div className="bg-card rounded-4xl p-8 shadow-card border border-border">
              <h2 className="font-display font-extrabold text-2xl text-foreground mb-2">Send Us a Message</h2>
              <p className="font-body text-muted-foreground mb-7">We'll get back to you within 24 hours.</p>
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-school-green/15 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Send size={36} className="text-school-green" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-foreground mb-2">Message Sent! 🎉</h3>
                  <p className="font-body text-muted-foreground">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-display font-bold text-sm text-foreground/80 mb-1.5 block">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-border bg-muted font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="font-display font-bold text-sm text-foreground/80 mb-1.5 block">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-border bg-muted font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-display font-bold text-sm text-foreground/80 mb-1.5 block">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-border bg-muted font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="font-display font-bold text-sm text-foreground/80 mb-1.5 block">Subject *</label>
                      <select
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-border bg-muted font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                      >
                        <option value="">Select subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="tour">Campus Tour</option>
                        <option value="facilities">Facilities Info</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="font-display font-bold text-sm text-foreground/80 mb-1.5 block">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-border bg-muted font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-display font-extrabold text-base shadow-colored hover:opacity-90 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map + Social */}
            <div className="flex flex-col gap-6">
              {/* Map */}
              <div className="flex-1 rounded-4xl overflow-hidden shadow-card border border-border min-h-72">
                <iframe
                  title="BrightMinds School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2sFinancial+District%2C+New+York%2C+NY!5e0!3m2!1sen!2sus!4v1477580389969"
                  className="w-full h-full min-h-72"
                  allowFullScreen
                  loading="lazy"
                  style={{ border: 0 }}
                />
              </div>

              {/* Social Media */}
              <div className="bg-card rounded-3xl p-6 shadow-card border border-border">
                <h3 className="font-display font-bold text-lg text-foreground mb-4">Follow Us on Social Media</h3>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, href, label, bg }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className={`flex-1 py-3 rounded-2xl ${bg} text-white flex items-center justify-center gap-2 font-display font-bold text-sm transition-all duration-200 hover:scale-105`}
                    >
                      <Icon size={18} />
                      <span className="hidden sm:inline">{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
