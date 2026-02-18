import { Link } from "react-router-dom";
import { ArrowRight, Monitor, FlaskConical, Users, Trees, Trophy } from "lucide-react";
import classroomImg from "@/assets/classroom.jpg";
import labImg from "@/assets/lab-library.jpg";
import meetingHallImg from "@/assets/meeting-hall.jpg";
import playgroundImg from "@/assets/playground.jpg";
import sportsImg from "@/assets/sports.jpg";

const facilities = [
  {
    id: "classroom",
    title: "Bright Classroom",
    icon: Monitor,
    img: classroomImg,
    color: "from-school-orange/20 to-school-yellow/10",
    accent: "text-school-orange",
    badge: "bg-school-orange/15 text-school-orange",
    features: ["Smart interactive whiteboards", "Air-conditioned & well-ventilated", "Colorful stimulating environment", "Individual seating arrangements", "Natural lighting & decor"],
    desc: "Our classrooms are vibrant, modern learning spaces designed to inspire curiosity. Every element — from ergonomic furniture to interactive displays — is thoughtfully chosen to maximize student engagement and comfort.",
  },
  {
    id: "lab",
    title: "Lab & Library",
    icon: FlaskConical,
    img: labImg,
    color: "from-school-blue/20 to-secondary/10",
    accent: "text-school-blue",
    badge: "bg-school-blue/15 text-school-blue",
    features: ["10,000+ book collection", "Digital & science lab combined", "Research & experimentation zones", "Computer workstations", "Quiet reading areas"],
    desc: "A dual-purpose space where imagination meets inquiry. Students can explore scientific concepts hands-on in our lab or immerse themselves in thousands of books spanning every genre and subject.",
  },
  {
    id: "hall",
    title: "Meeting Hall",
    icon: Users,
    img: meetingHallImg,
    color: "from-school-purple/20 to-school-pink/10",
    accent: "text-school-purple",
    badge: "bg-school-purple/15 text-school-purple",
    features: ["500-seat capacity auditorium", "Professional AV system", "Stage with lighting setup", "Acoustic design", "Regular events & assemblies"],
    desc: "Our grand meeting hall serves as the heart of school community life. From annual day performances to parent meetings and cultural events, it's where unforgettable memories are created.",
  },
  {
    id: "playground",
    title: "Play Ground",
    icon: Trees,
    img: playgroundImg,
    color: "from-school-green/20 to-accent/10",
    accent: "text-school-green",
    badge: "bg-school-green/15 text-school-green",
    features: ["Age-appropriate equipment", "Rubber safety flooring", "Shaded rest areas", "Dedicated zones by age group", "Secure & supervised"],
    desc: "Play is fundamental to childhood development. Our expansive playground features safe, exciting equipment carefully selected to develop physical strength, social skills, and creative imagination.",
  },
  {
    id: "sports",
    title: "Sports Club",
    icon: Trophy,
    img: sportsImg,
    color: "from-school-pink/20 to-school-orange/10",
    accent: "text-school-pink",
    badge: "bg-school-pink/15 text-school-pink",
    features: ["Football & basketball courts", "Athletics track", "Swimming pool", "Professional coaching staff", "Inter-school competitions"],
    desc: "Sports build character, teamwork, and resilience. Our Sports Club offers a full range of athletic programs from beginner level to competitive team sports, coached by experienced professionals.",
  },
];

export default function Facilities() {
  return (
    <main>
      {/* Page Hero */}
      <section className="relative py-24 bg-gradient-to-br from-school-blue/10 via-background to-school-green/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-school-blue/15 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="badge-pill bg-school-blue/15 text-school-blue mb-5">Our Facilities</span>
          <h1 className="font-display font-extrabold text-5xl md:text-6xl text-foreground mb-5">
            World-Class <span className="text-secondary">Spaces</span> to Grow
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Every facility at BrightMinds is designed with one purpose: to inspire, support, and empower every student.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
      </section>

      {/* Facilities Detailed Sections */}
      <div className="bg-background">
        {facilities.map((f, idx) => {
          const Icon = f.icon;
          const isEven = idx % 2 === 0;
          return (
            <section key={f.id} id={f.id} className={`py-20 ${idx % 2 === 1 ? "bg-muted" : "bg-background"}`}>
              <div className="container mx-auto px-4">
                <div className={`grid lg:grid-cols-2 gap-14 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <div className="relative">
                      <img
                        src={f.img}
                        alt={f.title}
                        className="rounded-4xl shadow-card-lg w-full object-cover h-80 lg:h-96"
                      />
                      <div className={`absolute -bottom-5 ${isEven ? "-right-5" : "-left-5"} bg-card rounded-2xl p-4 shadow-card-lg border border-border`}>
                        <Icon size={28} className={f.accent} />
                      </div>
                    </div>
                  </div>
                  <div className={!isEven ? "lg:order-1" : ""}>
                    <span className={`badge-pill ${f.badge} mb-4`}>{f.title}</span>
                    <h2 className="section-title mb-4">{f.title}</h2>
                    <p className="font-body text-muted-foreground leading-relaxed mb-6">{f.desc}</p>
                    <ul className="space-y-3 mb-8">
                      {f.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-3 font-body text-foreground/80">
                          <span className={`w-2 h-2 rounded-full ${f.badge.split(" ")[0].replace("/15", "").replace("bg-", "bg-")} shrink-0`} style={{ background: `hsl(var(--${f.accent.replace("text-school-", "school-")}))` }} />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <Link to="/admission" className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-display font-bold shadow-colored hover:opacity-90 hover:scale-105 transition-all duration-200`}>
                      Enroll to Access This <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="py-16 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
            Ready to Experience BrightMinds? 🌟
          </h2>
          <p className="font-body text-white/80 mb-7 max-w-xl mx-auto">
            Come for a campus tour and see our world-class facilities in person.
          </p>
          <Link to="/contact" className="px-8 py-4 rounded-full bg-white text-secondary font-display font-extrabold hover:scale-105 hover:shadow-lg transition-all duration-200 inline-block">
            Book a Campus Tour
          </Link>
        </div>
      </section>
    </main>
  );
}
