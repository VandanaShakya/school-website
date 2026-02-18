import { Link } from "react-router-dom";
import { CheckCircle, Target, Eye, Heart, Award, ArrowRight } from "lucide-react";
import kidsLearning from "@/assets/kids-learning.jpg";
import staffImg from "@/assets/staff.jpg";
import classroomImg from "@/assets/classroom.jpg";

const missionValues = [
  { icon: Target, title: "Our Mission", desc: "To provide a world-class, child-centered education that ignites curiosity, builds character, and prepares every student to thrive in a diverse world.", color: "bg-school-orange/15 text-school-orange" },
  { icon: Eye, title: "Our Vision", desc: "To be the leading school where every child is empowered to become a confident, compassionate, and creative global citizen.", color: "bg-school-blue/15 text-school-blue" },
  { icon: Heart, title: "Our Values", desc: "Respect, Integrity, Excellence, Creativity, and Community — the five pillars that guide everything we do at BrightMinds.", color: "bg-school-green/15 text-school-green" },
];

const whyUs = [
  "Child-centered teaching philosophy",
  "Highly qualified & experienced faculty",
  "Modern infrastructure & technology",
  "Extracurricular & enrichment programs",
  "Safe, inclusive, and welcoming campus",
  "Strong parent-school partnership",
  "Holistic development approach",
  "Excellent academic track record",
];

const staff = [
  { name: "Dr. Sarah Williams", role: "Principal & Founder", avatar: "SW", color: "bg-school-orange" },
  { name: "Mr. James Carter", role: "Vice Principal", avatar: "JC", color: "bg-school-blue" },
  { name: "Ms. Anita Sharma", role: "Head of Academics", avatar: "AS", color: "bg-school-green" },
  { name: "Mr. David Lee", role: "Sports Director", avatar: "DL", color: "bg-school-pink" },
];

export default function About() {
  return (
    <main>
      {/* Page Hero */}
      <section className="relative py-24 bg-gradient-to-br from-school-blue/10 via-background to-school-orange/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-school-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="badge-pill bg-school-orange/15 text-school-orange mb-5">About Us</span>
          <h1 className="font-display font-extrabold text-5xl md:text-6xl text-foreground mb-5">
            Our <span className="text-primary">Story</span> of Excellence
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            For over 25 years, BrightMinds Kids School has been shaping futures and inspiring generations of young learners.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
      </section>

      {/* School Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <img src={kidsLearning} alt="Kids Learning at BrightMinds" className="rounded-4xl shadow-card-lg w-full object-cover" />
              <div className="absolute -bottom-6 -right-4 bg-primary rounded-3xl p-6 shadow-colored animate-float text-center">
                <Award size={32} className="text-white mx-auto mb-1" />
                <div className="font-display font-extrabold text-2xl text-white">A+</div>
                <div className="font-body text-xs text-white/70">Rated School</div>
              </div>
            </div>
            <div>
              <span className="badge-pill bg-secondary/15 text-secondary mb-4">Who We Are</span>
              <h2 className="section-title mb-5">Dedicated to <span className="text-secondary">Every Child's</span> Success</h2>
              <p className="font-body text-foreground/70 leading-relaxed mb-4">
                BrightMinds Kids School was founded in 1999 with a simple belief: every child deserves an education that is engaging, inspiring, and transformative. Today, we serve over 2,500 students from kindergarten through high school.
              </p>
              <p className="font-body text-foreground/70 leading-relaxed mb-6">
                Our dedicated team of 150+ educators brings passion, expertise, and innovation to the classroom every day. We don't just teach — we mentor, guide, and celebrate each unique learner.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-secondary-foreground font-display font-bold shadow-card hover:opacity-90 hover:scale-105 transition-all duration-200">
                Get In Touch <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="badge-pill bg-school-green/15 text-school-green mb-4">Our Foundation</span>
            <h2 className="section-title mb-3">Mission, Vision & <span className="text-accent">Values</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {missionValues.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="bg-card rounded-3xl p-8 shadow-card border border-border hover:-translate-y-2 transition-transform duration-300">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${color}`}>
                  <Icon size={28} />
                </div>
                <h3 className="font-display font-extrabold text-xl text-foreground mb-3">{title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="badge-pill bg-school-pink/15 text-school-pink mb-4">Why BrightMinds</span>
              <h2 className="section-title mb-6">Why Thousands of Families <span className="text-school-pink">Choose Us</span></h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {whyUs.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-muted rounded-2xl">
                    <CheckCircle size={18} className="text-school-green shrink-0" />
                    <span className="font-body text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={classroomImg} alt="BrightMinds Classroom" className="rounded-4xl shadow-card-lg w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Staff Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="badge-pill bg-school-purple/15 text-school-purple mb-4">Our Team</span>
            <h2 className="section-title mb-3">Meet Our <span className="text-school-purple">Dedicated</span> Staff</h2>
            <p className="section-subtitle max-w-xl mx-auto">Passionate educators who go above and beyond for every student.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {staff.map((member) => (
              <div key={member.name} className="bg-card rounded-3xl p-7 text-center shadow-card border border-border hover:-translate-y-2 transition-transform duration-300 group">
                <div className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center font-display font-extrabold text-2xl text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {member.avatar}
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1">{member.name}</h3>
                <p className="font-body text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl overflow-hidden shadow-card-lg">
            <img src={staffImg} alt="BrightMinds Staff Team" className="w-full h-64 object-cover object-top" />
          </div>
        </div>
      </section>
    </main>
  );
}
