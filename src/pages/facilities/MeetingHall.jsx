import React from "react";
import { 
  Mic2, 
  Music, 
  Users, 
  Monitor, 
  Volume2, 
  Theater, 
  Calendar, 
  ArrowRight,
  CheckCircle,
  Video
} from "lucide-react";
import { Link } from "react-router-dom";

// Assets
import heroBg from "@/assets/hero-bg.jpg"; // Using heroBg as placeholder for the Hall
import kidsLearning from "@/assets/kids-learning.jpg";
import classroomImg from "@/assets/classroom.jpg";
import labImg from "@/assets/lab-library.jpg";

const MeetingHall = () => {
  return (
    <main className="">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative min-h-screen md:h-[110vh] flex items-center justify-center overflow-hidden">
        <img 
          src={heroBg} 
          alt="School Meeting Hall" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60 " />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="badge-pill bg-white text-school-orange mb-4 inline-block font-bold">
            Grand Assembly & Events
          </span>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white mb-6">
            The Meeting <span className="text-school-yellow">Hall</span>
          </h1>
          <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
            A state-of-the-art auditorium designed for student performances, parent-teacher meets, and inspiring guest lectures.
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
                <span className="badge-pill bg-school-pink/15 text-school-pink mb-4">Event Framework</span>
                <h2 className="font-display font-extrabold text-4xl text-foreground mb-6">
                  Where Voices are <span className="text-school-orange">Heard</span>
                </h2>
                <p className="font-body text-muted-foreground text-lg leading-relaxed">
                  The Meeting Hall serves as the heart of our school community. Our curriculum integrates public speaking and performing arts, ensuring every student gets the opportunity to build confidence on this grand stage.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Acoustic Excellence", color: "text-school-orange" },
                  { title: "Digital Presentation", color: "text-school-blue" },
                  { title: "Capacity of 500+", color: "text-school-green" },
                  { title: "Performing Arts Stage", color: "text-school-pink" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-muted/50 border border-border">
                    <CheckCircle className={item.color} size={20} />
                    <span className="font-display font-bold text-sm text-foreground">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 4 Image Block (Dynamic Grid) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={heroBg} className="w-full h-48 object-cover rounded-3xl shadow-lg border-b-4 border-school-orange/30" alt="Hall View" />
                <img src={labImg} className="w-full h-64 object-cover rounded-3xl shadow-lg" alt="Seminar" />
              </div>
              <div className="space-y-4 pt-10">
                <img src={kidsLearning} className="w-full h-64 object-cover rounded-3xl shadow-lg" alt="Performance" />
                <img src={classroomImg} className="w-full h-48 object-cover rounded-3xl shadow-lg" alt="Gathering" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: ACADEMIC BASES ── */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-4xl mb-4">Facility Features</h2>
            <p className="text-muted-foreground">The technical foundations of our modern assembly hall.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Volume2, 
                title: "Surround Sound", 
                desc: "High-fidelity audio systems ensuring crystal clear sound for every seat in the house.",
                bg: "bg-school-pink/10", 
                text: "text-school-pink" 
              },
              { 
                icon: Video, 
                title: "Visual Tech", 
                desc: "Equipped with 4K projection screens and live-streaming capabilities for remote viewing.",
                bg: "bg-school-blue/10", 
                text: "text-school-blue" 
              },
              { 
                icon: Theater, 
                title: "Backstage Suites", 
                desc: "Dedicated green rooms and practice areas for students preparing for performances.",
                bg: "bg-school-orange/10", 
                text: "text-school-orange" 
              },
            ].map((base, i) => (
              <div key={i} className="bg-card p-10 rounded-4xl border border-border hover:scale-105 transition-all shadow-sm">
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
            <span className="badge-pill bg-school-green/15 text-school-green mb-4">Hall Schedule</span>
            <h2 className="font-display font-extrabold text-4xl">Hall <span className="text-school-green">Events</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Annual Day", desc: "Our biggest cultural celebration.", icon: Music, color: "text-school-pink" },
              { title: "Guest Lectures", desc: "Learning from industry experts.", icon: Mic2, color: "text-school-blue" },
              { title: "Awards Ceremony", desc: "Recognizing student achievements.", icon: Users, color: "text-school-green" },
              { title: "Movie Screenings", desc: "Educational and fun film days.", icon: Monitor, color: "text-school-orange" },
            ].map((event, i) => (
              <div key={i} className="p-8 rounded-3xl bg-card border border-border hover:border-school-green transition-all">
                <event.icon className={`mb-4 ${event.color}`} size={32} />
                <h4 className="font-display font-bold text-xl mb-2">{event.title}</h4>
                <p className="text-sm text-muted-foreground">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CLUBS ── */}
      <section className="py-20 bg-school-pink text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
          <div className="absolute bottom-20 right-20 w-64 h-64 border-8 border-white rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display font-extrabold text-4xl mb-12">Performance Clubs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Drama Troupe", icon: Theater, desc: "Mastering the art of acting, scriptwriting, and stagecraft." },
              { name: "Debate Society", icon: Mic2, desc: "Developing persuasive speaking and logical reasoning skills." },
              { name: "Musical Ensemble", icon: Music, desc: "A community for singers and instrumentalists to perform together." },
            ].map((club, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/15 backdrop-blur-md border border-white/30 group hover:bg-white/25 transition-all">
                <club.icon className="mx-auto mb-4 text-school-yellow group-hover:scale-110 transition-transform" size={40} />
                <h3 className="font-display font-bold text-2xl mb-3">{club.name}</h3>
                <p className="text-white/80">{club.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-muted rounded-4xl p-10 border border-border">
            <h2 className="font-display font-bold text-3xl mb-4">Planning an Event?</h2>
            <p className="text-muted-foreground mb-8">Our Meeting Hall is available for school community bookings and parent workshops.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-school-pink text-white font-bold hover:scale-105 transition-transform">
              Contact Event Coordinator <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MeetingHall;