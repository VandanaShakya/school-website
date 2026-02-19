import React from "react";
import { 
  Trophy, 
  Users, 
  Medal, 
  Target, 
  Zap, 
  ShieldCheck, 
  Timer, 
  ArrowRight,
  CheckCircle,
  Dribbble
} from "lucide-react";
import { Link } from "react-router-dom";

// Assets
import sportsImg from "@/assets/sports.jpg";
import playgroundImg from "@/assets/playground.jpg";
import kidsLearning from "@/assets/kids-learning.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const SportsClub = () => {
  return (
    <main className="">
      {/* ── SECTION 1: HERO ── */}
      {/* ── SECTION 1: HERO (Height & Image Optimized) ── */}
      <section className="relative min-h-screen md:h-[110vh] flex items-center justify-center overflow-hidden">
       
        <img 
          src={sportsImg} 
          alt="BrightMinds Sports Academy" 
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 animate-slow-zoom"
        />
        
        {/* Darker, high-contrast overlay */}
        <div className="absolute inset-0 bg-foreground/60" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="badge-pill bg-school-yellow text-foreground mb-6 inline-block font-display font-black text-sm md:text-base tracking-tighter animate-bounce shadow-lg">
              HOME OF THE CHAMPIONS 🏆
            </span>
            
            <h1 className="font-display font-extrabold text-6xl md:text-8xl lg:text-9xl text-white mb-8 leading-[0.9] tracking-tight">
              ELITE <br />
              <span className="text-school-yellow drop-shadow-2xl">SPORTS</span> CLUB
            </h1>
            
            <p className="font-body text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
              Beyond play. We focus on technique, discipline, and the spirit of sportsmanship to create the leaders of tomorrow.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
            <button className="px-4 py-2 text-sm
                     sm:px-8 sm:py-3 sm:text-base
                     bg-school-yellow text-foreground 
                     font-display font-black 
                     rounded-full hover:scale-105 
                     transition-all shadow-xl whitespace-nowrap">
    JOIN THE SQUAD
  </button>

  <button className="px-4 py-2 text-sm
                     sm:px-8 sm:py-3 sm:text-base
                     border-2 border-white text-white 
                     font-display font-bold 
                     rounded-full hover:bg-white/10 
                     transition-all whitespace-nowrap">
    VIEW FIXTURES
  </button>

            </div>
          </div>
        </div>

        {/* Decorative Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-1 h-12 bg-gradient-to-b from-school-yellow to-transparent rounded-full" />
        </div>
      </section>

      {/* ── SECTION 2: CURRICULUM & 4-IMAGE GRID ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Coaching Framework */}
            <div className="space-y-8">
              <div>
                <span className="badge-pill bg-school-orange/15 text-school-orange mb-4">Training Framework</span>
                <h2 className="font-display font-extrabold text-4xl text-foreground mb-6">
                  Professional <span className="text-school-blue">Coaching</span> & Mentorship
                </h2>
                <p className="font-body text-muted-foreground text-lg leading-relaxed">
                  Our Sports Club isn't just about after-school games. We follow a structured athletic curriculum that tracks student progress in agility, strength, and tactical understanding.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Specialized Skill Clinics", color: "text-school-orange" },
                  { title: "Fitness Assessment Labs", color: "text-school-blue" },
                  { title: "Nutrition Counseling", color: "text-school-green" },
                  { title: "Tournament Exposure", color: "text-school-pink" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-muted/50 border border-border">
                    <CheckCircle className={item.color} size={20} />
                    <span className="font-display font-bold text-sm text-foreground">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 4 Image Block (Symmetric Grid for a "Stronger" look) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={sportsImg} className="w-full h-56 object-cover rounded-3xl shadow-md" alt="Training" />
                <img src={playgroundImg} className="w-full h-56 object-cover rounded-3xl shadow-md" alt="Equipment" />
              </div>
              <div className="space-y-4 pt-8">
                <img src={kidsLearning} className="w-full h-56 object-cover rounded-3xl shadow-md" alt="Team Meeting" />
                <img src={heroBg} className="w-full h-56 object-cover rounded-3xl shadow-md" alt="Victory" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CLUB PILLARS ── */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-4xl mb-4">The Athlete's Path</h2>
            <p className="text-muted-foreground">Three core values that define our sports club members.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: "Discipline First", 
                desc: "Punctuality, practice, and respect for the rules are the foundations of our club.",
                bg: "bg-school-blue/10", 
                text: "text-school-blue" 
              },
              { 
                icon: Zap, 
                title: "Physical Agility", 
                desc: "Advanced drills designed to improve reaction time, balance, and explosive power.",
                bg: "bg-school-yellow/10", 
                text: "text-school-yellow" 
              },
              { 
                icon: Users, 
                title: "Team Synergy", 
                desc: "Understanding individual roles to achieve a common goal on the court or field.",
                bg: "bg-school-pink/10", 
                text: "text-school-pink" 
              },
            ].map((base, i) => (
              <div key={i} className="bg-card p-10 rounded-4xl border border-border hover:border-school-blue transition-all group shadow-sm">
                <div className={`w-16 h-16 ${base.bg} ${base.text} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform`}>
                  <base.icon size={32} />
                </div>
                <h3 className="font-display font-extrabold text-2xl mb-4">{base.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{base.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CLUB EVENTS ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
            <div>
              <span className="badge-pill bg-school-blue/15 text-school-blue mb-4">Competitive Edge</span>
              <h2 className="font-display font-extrabold text-4xl">Club <span className="text-school-blue">Fixtures</span></h2>
            </div>
            <button className="px-6 py-3 rounded-full border-2 border-school-blue text-school-blue font-bold hover:bg-school-blue hover:text-white transition-all">
              Download Schedule
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Intra-School Cup", type: "Tournament", time: "Every Quarter", icon: Trophy, color: "bg-school-orange" },
              { title: "Selection Trials", type: "Talent Hunt", time: "August 10-15", icon: Target, color: "bg-school-blue" },
              { title: "Athletic Meet", type: "Track & Field", time: "Annual Event", icon: Timer, color: "text-white bg-school-pink" },
              { title: "Parent-Child Match", type: "Social Event", time: "December Weekend", icon: Users, color: "bg-school-green" },
            ].map((event, i) => (
              <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-card border border-border shadow-sm group">
                <div className={`w-16 h-16 ${event.color} text-white rounded-2xl flex items-center justify-center shrink-0`}>
                  <event.icon size={30} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl">{event.title}</h4>
                  <div className="flex gap-3 text-sm text-muted-foreground mt-1">
                    <span className="font-bold text-school-blue">{event.type}</span>
                    <span>•</span>
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SPECIALIZED SPORTS ── */}
      <section className="py-20 bg-foreground text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-4xl mb-4">Featured Academies</h2>
            <p className="text-white/60">Professional training available for the following sports.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Basketball Elite", icon: Dribbble, coach: "Coach Miller", accent: "text-school-orange" },
              { name: "Football Titans", icon: Zap, coach: "Coach Davis", accent: "text-school-green" },
              { name: "Tennis Stars", icon: Medal, coach: "Coach Sarah", accent: "text-school-pink" },
            ].map((club, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all group">
                <club.icon className={`mx-auto mb-4 ${club.accent} group-hover:scale-125 transition-transform`} size={48} />
                <h3 className="font-display font-bold text-2xl mb-2">{club.name}</h3>
                <p className="text-school-yellow text-sm font-bold uppercase tracking-widest">{club.coach}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-school-yellow text-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-extrabold text-4xl mb-6">Ready to Join the Academy?</h2>
          <p className="font-body text-lg mb-8 max-w-xl mx-auto">Trials for the new season are now open. Enroll your child in the Sports Club today!</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-foreground text-white font-display font-extrabold text-lg hover:scale-105 transition-all shadow-xl">
            Register for Trials <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SportsClub;