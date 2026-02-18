import React from "react";
import { CheckCircle, Calendar, Trophy, Puzzle, Users, Rocket, Palette, Leaf, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

// Assets (Assuming these are exported from your assets file)
import classroomImg from "@/assets/classroom.jpg";
import kidsLearning from "@/assets/kids-learning.jpg";
import labImg from "@/assets/lab-library.jpg";
import playgroundImg from "@/assets/playground.jpg";

const BrightClassrooms = () => {
  return (
    <main className="">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src={classroomImg} 
          alt="Modern Classroom" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60 backdrop-blur-[2px]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="badge-pill bg-school-yellow text-foreground mb-4 inline-block">
            Our Learning Spaces
          </span>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white mb-6">
            The Bright <span className="text-school-yellow">Classroom</span>
          </h1>
          <p className="font-body text-lg text-white/80 max-w-2xl mx-auto">
            Where every corner is designed to inspire curiosity, foster collaboration, and spark innovation.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: CURRICULUM & 4-IMAGE GRID ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Curriculum Content */}
            <div className="space-y-8">
              <div>
                <span className="badge-pill bg-school-blue/15 text-school-blue mb-4">Our Methodology</span>
                <h2 className="font-display font-extrabold text-4xl text-foreground mb-6">
                  A Holistic <span className="text-primary">Curriculum</span> Framework
                </h2>
                <p className="font-body text-muted-foreground text-lg leading-relaxed">
                  Our educational approach goes beyond textbooks. We implement a multi-dimensional framework that balances academic rigor with emotional intelligence.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  { title: "Inquiry-Based Learning", color: "text-school-orange" },
                  { title: "Global Competency Standards", color: "text-school-blue" },
                  { title: "Integrated STEAM Projects", color: "text-school-green" },
                  { title: "Individual Growth Tracking", color: "text-school-pink" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-muted/50 border border-border">
                    <CheckCircle className={item.color} size={24} />
                    <span className="font-display font-bold text-foreground">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 4 Image Block (Two upper, two below) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={classroomImg} className="w-full h-64 object-cover rounded-3xl shadow-lg transform hover:-rotate-2 transition-transform" alt="Classroom" />
                <img src={kidsLearning} className="w-full h-48 object-cover rounded-3xl shadow-lg" alt="Learning" />
              </div>
              <div className="space-y-4 pt-12">
                <img src={labImg} className="w-full h-48 object-cover rounded-3xl shadow-lg" alt="Lab" />
                <img src={playgroundImg} className="w-full h-64 object-cover rounded-3xl shadow-lg transform hover:rotate-2 transition-transform" alt="Playground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: ACADEMIC BASES ── */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-4xl mb-4">Bases of Academics</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">The core pillars that form the foundation of our students' success.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Rocket, title: "Cognitive Skills", desc: "Focusing on logic, critical thinking, and advanced problem-solving techniques.", bg: "bg-school-orange/10", text: "text-school-orange" },
              { icon: Puzzle, title: "Foundational Literacy", desc: "Building strong communication skills in multiple languages from an early age.", bg: "bg-school-blue/10", text: "text-school-blue" },
              { icon: Users, title: "Social Excellence", desc: "Learning through collaboration, community service, and emotional regulation.", bg: "bg-school-green/10", text: "text-school-green" },
            ].map((base, i) => (
              <div key={i} className="bg-card p-10 rounded-4xl border border-border shadow-card hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 ${base.bg} ${base.text} rounded-2xl flex items-center justify-center mb-6`}>
                  <base.icon size={32} />
                </div>
                <h3 className="font-display font-extrabold text-2xl mb-4">{base.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{base.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SCHOOL EVENTS ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="badge-pill bg-school-pink/15 text-school-pink mb-4">Campus Life</span>
              <h2 className="font-display font-extrabold text-4xl">Annual Events & <span className="text-school-pink">Festivals</span></h2>
            </div>
            <Link to="/gallery" className="text-primary font-bold flex items-center gap-2 hover:underline">
              View Event Gallery <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Science Expo", date: "October 15", icon: Calendar, color: "bg-school-blue" },
              { title: "Sports Carnival", date: "November 20", icon: Trophy, color: "bg-school-orange" },
              { title: "Cultural Night", date: "December 05", icon: Palette, color: "bg-school-pink" },
              { title: "Literary Week", date: "January 12", icon: BookOpen, color: "bg-school-green" },
            ].map((event, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl p-8 bg-card border border-border hover:border-primary transition-colors">
                <div className={`w-12 h-12 ${event.color} text-white rounded-xl flex items-center justify-center mb-6`}>
                  <event.icon size={24} />
                </div>
                <h4 className="font-display font-bold text-xl mb-2">{event.title}</h4>
                <p className="text-sm text-muted-foreground">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: STUDENT CLUBS ── */}
      <section className="py-20 bg-foreground text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-4xl mb-4">Student Clubs</h2>
            <p className="text-white/60 max-w-xl mx-auto">Nurturing passions and discovering hidden talents through specialized communities.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Robotics & AI", icon: Rocket, desc: "Building robots and learning the basics of automation and logic.", accent: "border-school-blue" },
              { name: "Eco-Warriors", icon: Leaf, desc: "Leading sustainability initiatives and maintaining our school garden.", accent: "border-school-green" },
              { name: "Artistic Souls", icon: Palette, desc: "From pottery to digital art, exploring the limits of creativity.", accent: "border-school-pink" },
            ].map((club, i) => (
              <div key={i} className={`p-8 rounded-3xl bg-white/5 border-l-4 ${club.accent} backdrop-blur-sm hover:bg-white/10 transition-all`}>
                <club.icon className="mb-4 text-white/80" size={32} />
                <h3 className="font-display font-bold text-2xl mb-3">{club.name}</h3>
                <p className="text-white/60 leading-relaxed">{club.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

// Simple Arrow Component for local use
const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

export default BrightClassrooms;