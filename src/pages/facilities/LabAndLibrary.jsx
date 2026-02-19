import React from "react";
import { 
  Book, 
  Beaker, 
  Microscope, 
  Search, 
  Lightbulb, 
  Globe, 
  Cpu, 
  Library,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

// Assets
import labImg from "@/assets/lab-library.jpg";
import kidsLearning from "@/assets/kids-learning.jpg";
import classroomImg from "@/assets/classroom.jpg";
import playgroundImg from "@/assets/playground.jpg";

const LabAndLibrary = () => {
  return (
    <main className="">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative min-h-screen md:h-[110vh] flex items-center justify-center overflow-hidden">
        <img 
          src={labImg} 
          alt="School Library and Lab" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60 " />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="badge-pill bg-white text-school-blue mb-4 inline-block font-bold">
            Hub of Innovation
          </span>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white mb-6">
            Lab & <span className="text-school-yellow">Library</span>
          </h1>
          <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
            Where scientific discovery meets the world of literature. Our resources are the gateways to endless possibilities.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: CURRICULUM & 4-IMAGE GRID ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Framework Content */}
            <div className="space-y-8">
              <div>
                <span className="badge-pill bg-school-green/15 text-school-green mb-4">Research Framework</span>
                <h2 className="font-display font-extrabold text-4xl text-foreground mb-6">
                  Empowering <span className="text-school-blue">Self-Led</span> Discovery
                </h2>
                <p className="font-body text-muted-foreground text-lg leading-relaxed">
                  Our Lab and Library are not just rooms; they are active learning environments. We follow a "Research-First" curriculum that encourages students to verify facts through experiments and deepen knowledge through literature.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Hands-on Experiments", color: "text-school-orange" },
                  { title: "Digital Archive Access", color: "text-school-blue" },
                  { title: "Scientific Inquiry", color: "text-school-green" },
                  { title: "Information Literacy", color: "text-school-pink" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-muted/50 border border-border">
                    <CheckCircle className={item.color} size={20} />
                    <span className="font-display font-bold text-sm text-foreground">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 4 Image Block (Asymmetric Grid) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <img src={labImg} className="w-full h-48 object-cover rounded-3xl shadow-lg border-4 border-school-blue/10" alt="Laboratory" />
                <img src={classroomImg} className="w-full h-64 object-cover rounded-3xl shadow-lg" alt="Reading Corner" />
              </div>
              <div className="space-y-4">
                <img src={kidsLearning} className="w-full h-64 object-cover rounded-3xl shadow-lg" alt="Kids Researching" />
                <img src={playgroundImg} className="w-full h-48 object-cover rounded-3xl shadow-lg" alt="Activity" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: ACADEMIC BASES ── */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-4xl mb-4">The Learning Pillars</h2>
            <p className="text-muted-foreground">The foundation of our resource-based education.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Microscope, 
                title: "Practical Science", 
                desc: "Moving beyond theory with safety-first laboratories equipped for chemistry, physics, and biology.",
                bg: "bg-school-blue/10", 
                text: "text-school-blue" 
              },
              { 
                icon: Library, 
                title: "Literary Wealth", 
                desc: "Over 10,000+ books ranging from classic literature to modern scientific journals and digital e-books.",
                bg: "bg-school-orange/10", 
                text: "text-school-orange" 
              },
              { 
                icon: Cpu, 
                title: "Tech Integration", 
                desc: "High-speed computer labs and digital tablets to help students master 21st-century digital tools.",
                bg: "bg-school-green/10", 
                text: "text-school-green" 
              },
            ].map((base, i) => (
              <div key={i} className="bg-card p-10 rounded-4xl border border-border hover:border-primary transition-all group">
                <div className={`w-16 h-16 ${base.bg} ${base.text} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <base.icon size={32} />
                </div>
                <h3 className="font-display font-extrabold text-2xl mb-4">{base.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{base.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: EVENTS ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="badge-pill bg-school-orange/15 text-school-orange mb-4">Engagement</span>
            <h2 className="font-display font-extrabold text-4xl">Knowledge <span className="text-school-orange">Events</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Young Scientist Fair", desc: "Annual project exhibition.", icon: Lightbulb, color: "text-school-blue" },
              { title: "The Book Buffet", desc: "Weekly reading and review sessions.", icon: Book, color: "text-school-orange" },
              { title: "Quiz Masters", desc: "Inter-school knowledge competition.", icon: Search, color: "text-school-green" },
              { title: "Global Web-Link", desc: "Virtual tours of world museums.", icon: Globe, color: "text-school-pink" },
            ].map((event, i) => (
              <div key={i} className="p-8 rounded-3xl bg-card border border-border hover:shadow-lg transition-shadow">
                <event.icon className={`mb-4 ${event.color}`} size={32} />
                <h4 className="font-display font-bold text-xl mb-2">{event.title}</h4>
                <p className="text-sm text-muted-foreground">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CLUBS ── */}
      <section className="py-20 bg-school-blue text-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-school-yellow/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display font-extrabold text-4xl mb-12">Innovation Clubs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Code & Logic", icon: Cpu, desc: "Exploring Python, Scratch, and basic web development." },
              { name: "The Bookworms", icon: Book, desc: "A creative writing and storytelling community." },
              { name: "Bio-Explorer", icon: Beaker, desc: "Observing nature and understanding local ecosystems." },
            ].map((club, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
                <club.icon className="mx-auto mb-4 text-school-yellow" size={40} />
                <h3 className="font-display font-bold text-2xl mb-3">{club.name}</h3>
                <p className="text-white/70">{club.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-white border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-6 text-foreground">Want to explore our resources?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-school-blue text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-school-blue/20">
            Schedule a Visit <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LabAndLibrary;