import React from "react";
import { 
  Trophy, 
  Target, 
  Heart, 
  Dribbble, 
  Wind, 
  Award, 
  Calendar, 
  ArrowRight,
  CheckCircle,
  Activity
} from "lucide-react";
import { Link } from "react-router-dom";

// Assets
import playgroundImg from "@/assets/playground.jpg";
import sportsImg from "@/assets/sports.jpg";
import kidsLearning from "@/assets/kids-learning.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const PlayGround = () => {
  return (
    <main className="">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src={playgroundImg} 
          alt="School Playground" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-school-green/60 backdrop-blur-[2px]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="badge-pill bg-white text-school-green mb-4 inline-block font-bold">
            Active Bodies, Active Minds
          </span>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white mb-6">
            Playground & <span className="text-school-yellow">Sports</span>
          </h1>
          <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
            Our expansive outdoor spaces are designed for safe play, competitive sports, and the development of lifelong physical fitness.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: CURRICULUM & 4-IMAGE GRID ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content Side */}
            <div className="space-y-8">
              <div>
                <span className="badge-pill bg-school-blue/15 text-school-blue mb-4">Physical Education</span>
                <h2 className="font-display font-extrabold text-4xl text-foreground mb-6">
                  Building Strength & <span className="text-school-green">Teamwork</span>
                </h2>
                <p className="font-body text-muted-foreground text-lg leading-relaxed">
                  We believe that the playground is the first classroom for social skills. Our sports curriculum focuses on "Fair Play," resilience, and leadership, ensuring every child finds a sport they love.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Standard Athletics Track", color: "text-school-orange" },
                  { title: "Multi-Sport Courts", color: "text-school-blue" },
                  { title: "Safe Play Equipment", color: "text-school-green" },
                  { title: "Certified Coaches", color: "text-school-pink" },
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
              <div className="space-y-4 pt-12">
                <img src={sportsImg} className="w-full h-64 object-cover rounded-3xl shadow-lg border-l-4 border-school-green/40" alt="Sports Field" />
                <img src={playgroundImg} className="w-full h-48 object-cover rounded-3xl shadow-lg" alt="Play Area" />
              </div>
              <div className="space-y-4">
                <img src={kidsLearning} className="w-full h-48 object-cover rounded-3xl shadow-lg" alt="Physical Activity" />
                <img src={heroBg} className="w-full h-64 object-cover rounded-3xl shadow-lg" alt="Annual Sports" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: ACADEMIC BASES (Athletic Pillars) ── */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-4xl mb-4">The Pillars of Wellness</h2>
            <p className="text-muted-foreground">How we integrate physical health into our daily academic life.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Heart, 
                title: "Physical Health", 
                desc: "Promoting cardiovascular fitness and motor skill development through guided exercises.",
                bg: "bg-school-pink/10", 
                text: "text-school-pink" 
              },
              { 
                icon: Target, 
                title: "Strategic Thinking", 
                desc: "Sports like Football and Basketball teach students to plan, execute, and adapt in real-time.",
                bg: "bg-school-blue/10", 
                text: "text-school-blue" 
              },
              { 
                icon: Activity, 
                title: "Mental Resilience", 
                desc: "Learning to handle victory with humility and defeat with a determination to improve.",
                bg: "bg-school-green/10", 
                text: "text-school-green" 
              },
            ].map((base, i) => (
              <div key={i} className="bg-card p-10 rounded-4xl border border-border hover:-translate-y-2 transition-all shadow-sm">
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

      {/* ── SECTION 4: EVENTS ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="badge-pill bg-school-yellow/20 text-school-yellow mb-4">Competitions</span>
            <h2 className="font-display font-extrabold text-4xl">Sporting <span className="text-school-blue">Calendars</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Annual Sports Meet", desc: "Our biggest track and field event.", icon: Trophy, color: "text-school-orange" },
              { title: "Inter-School League", desc: "Competitive matches with local schools.", icon: Award, color: "text-school-blue" },
              { title: "Morning Yoga", desc: "Daily wellness and mindfulness sessions.", icon: Wind, color: "text-school-green" },
              { title: "Adventure Camp", desc: "Outdoor survival and teamwork skills.", icon: Calendar, color: "text-school-pink" },
            ].map((event, i) => (
              <div key={i} className="p-8 rounded-3xl bg-card border border-border hover:shadow-xl transition-all">
                <event.icon className={`mb-4 ${event.color}`} size={32} />
                <h4 className="font-display font-bold text-xl mb-2">{event.title}</h4>
                <p className="text-sm text-muted-foreground">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CLUBS ── */}
      <section className="py-20 bg-school-green text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display font-extrabold text-4xl mb-12">Sports Clubs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Football Academy", icon: Dribbble, desc: "Professional training in footwork, passing, and teamwork." },
              { name: "Athletics Elite", icon: Activity, desc: "Sprinting, long jump, and relay race specializations." },
              { name: "Indoor Champions", icon: Target, desc: "Focusing on Chess, Table Tennis, and Badminton." },
            ].map((club, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-all">
                <club.icon className="mx-auto mb-4 text-school-yellow" size={40} />
                <h3 className="font-display font-bold text-2xl mb-3">{club.name}</h3>
                <p className="text-white/80">{club.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl mb-8">Want your child to be part of the winning team?</h2>
          <Link to="/admission" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-school-blue text-white font-display font-extrabold text-lg hover:shadow-colored transition-all">
            Join Our School <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PlayGround;