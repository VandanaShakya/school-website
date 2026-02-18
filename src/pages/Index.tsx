import { Link } from "react-router-dom";
import { Star, Users, BookOpen, Award, ArrowRight, Play, CheckCircle, Quote } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import kidsLearning from "@/assets/kids-learning.jpg";
import classroomImg from "@/assets/classroom.jpg";
import labImg from "@/assets/lab-library.jpg";
import playgroundImg from "@/assets/playground.jpg";
import sportsImg from "@/assets/sports.jpg";

const stats = [
  { icon: Users, value: "2,500+", label: "Happy Students", color: "text-school-orange" },
  { icon: BookOpen, value: "150+", label: "Expert Teachers", color: "text-school-blue" },
  { icon: Award, value: "25+", label: "Years of Excellence", color: "text-school-green" },
  { icon: Star, value: "99%", label: "Parent Satisfaction", color: "text-school-yellow" },
];

const facilities = [
  { title: "Bright Classroom", img: classroomImg, color: "from-school-orange/20 to-school-yellow/10", dot: "bg-school-orange", href: "/facilities#classroom" },
  { title: "Lab & Library", img: labImg, color: "from-school-blue/20 to-secondary/10", dot: "bg-school-blue", href: "/facilities#lab" },
  { title: "Play Ground", img: playgroundImg, color: "from-school-green/20 to-accent/10", dot: "bg-school-green", href: "/facilities#playground" },
  { title: "Sports Club", img: sportsImg, color: "from-school-pink/20 to-school-purple/10", dot: "bg-school-pink", href: "/facilities#sports" },
];

const programs = [
  { title: "Kindergarten", age: "Ages 3–5", desc: "Foundation learning through play, creativity, and exploration.", color: "bg-school-yellow", icon: "🎨" },
  { title: "Primary School", age: "Ages 6–10", desc: "Core academics combined with arts, sports, and life skills.", color: "bg-school-blue", icon: "📚" },
  { title: "High School", age: "Ages 11–18", desc: "Advanced curriculum preparing students for higher education.", color: "bg-school-orange", icon: "🎓" },
  { title: "Learning Programs", age: "All Ages", desc: "Specialised programs for music, dance, art, and coding.", color: "bg-school-green", icon: "🌟" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Parent of Grade 3 Student",
    text: "BrightMinds has transformed my daughter's love for learning. The teachers are exceptional and the environment is so nurturing!",
    avatar: "SJ",
    color: "bg-school-orange",
  },
  {
    name: "Michael Chen",
    role: "Parent of Kindergartner",
    text: "The best decision we ever made! My son wakes up excited to go to school every day. The facilities are world-class.",
    avatar: "MC",
    color: "bg-school-blue",
  },
  {
    name: "Priya Patel",
    role: "Parent of Grade 6 Student",
    text: "Incredible school with a perfect balance of academics and extracurriculars. The staff truly cares about each child.",
    avatar: "PP",
    color: "bg-school-green",
  },
];

export default function Index() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/50 to-transparent" />

        {/* Decorative blobs */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-school-yellow/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/2 w-56 h-56 bg-school-blue/25 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="badge-pill bg-school-yellow text-foreground mb-5 inline-block animate-fade-in">
              🌟 Welcome to BrightMinds School
            </span>
            <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Where Every Child{" "}
              <span className="text-school-yellow">Shines</span>{" "}
              Bright!
            </h1>
            <p className="font-body text-lg text-white/85 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              A nurturing, joyful learning environment where curiosity is celebrated, creativity is sparked, and every child reaches their full potential.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-extrabold text-base shadow-colored hover:opacity-90 hover:scale-105 transition-all duration-200"
              >
                <BookOpen size={18} />
                Enroll Now
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/15 backdrop-blur text-white font-display font-bold text-base border border-white/30 hover:bg-white/25 transition-all duration-200"
              >
                <Play size={18} />
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
      </section>

      {/* ── STATS ── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="text-center p-6 rounded-3xl bg-card shadow-card border border-border hover:-translate-y-1 transition-transform duration-300">
                <Icon size={36} className={`${color} mx-auto mb-3`} />
                <div className={`font-display font-extrabold text-3xl ${color} mb-1`}>{value}</div>
                <div className="font-body text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <img
                src={kidsLearning}
                alt="Kids Learning"
                className="rounded-4xl shadow-card-lg w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-school-yellow rounded-3xl p-5 shadow-card animate-float">
                <div className="font-display font-extrabold text-2xl text-foreground">25+</div>
                <div className="font-body text-xs text-foreground/70">Years of Trust</div>
              </div>
              <div className="absolute -top-5 -left-5 bg-school-pink rounded-2xl p-4 shadow-card animate-float" style={{ animationDelay: "1.5s" }}>
                <Star size={28} className="text-white" fill="white" />
              </div>
            </div>
            <div>
              <span className="badge-pill bg-school-blue/15 text-school-blue mb-4">About BrightMinds</span>
              <h2 className="section-title mb-5">A Place Where Learning Meets <span className="text-primary">Fun</span></h2>
              <p className="section-subtitle mb-6">
                Founded in 1999, BrightMinds Kids School has been a beacon of excellence in education. We combine rigorous academics with creative exploration to develop well-rounded, confident young learners.
              </p>
              <ul className="space-y-3 mb-8">
                {["Child-centered learning approach", "Experienced & passionate educators", "State-of-the-art facilities", "Inclusive and safe environment"].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-body text-foreground/80">
                    <CheckCircle size={20} className="text-school-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-display font-bold shadow-colored hover:opacity-90 hover:scale-105 transition-all duration-200"
              >
                Discover Our Story <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FACILITIES ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="badge-pill bg-school-orange/15 text-school-orange mb-4">Our Facilities</span>
            <h2 className="section-title mb-3">World-Class Learning <span className="text-secondary">Spaces</span></h2>
            <p className="section-subtitle max-w-2xl mx-auto">Every corner of BrightMinds is designed to inspire, engage, and empower our students to grow.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((f) => (
              <Link to={f.href} key={f.title} className={`group rounded-3xl overflow-hidden bg-gradient-to-b ${f.color} border border-border shadow-card card-hover`}>
                <div className="overflow-hidden h-48">
                  <img src={f.img} alt={f.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5 flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${f.dot}`} />
                  <span className="font-display font-bold text-foreground">{f.title}</span>
                  <ArrowRight size={16} className="ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/facilities" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-secondary text-secondary font-display font-bold hover:bg-secondary hover:text-secondary-foreground transition-all duration-200">
              View All Facilities <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ADMISSION PROGRAMS ── */}
      <section className="py-20 bg-gradient-to-br from-foreground to-foreground/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-school-yellow rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-school-blue rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span className="badge-pill bg-school-yellow/20 text-school-yellow mb-4">Admission</span>
            <h2 className="font-display font-extrabold text-4xl text-white mb-3">Programs for <span className="text-school-yellow">Every</span> Child</h2>
            <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">From playful kindergarten to rigorous high school, we have the perfect program for your child's journey.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p) => (
              <div key={p.title} className="bg-white/10 backdrop-blur rounded-3xl p-7 border border-white/10 hover:bg-white/15 hover:-translate-y-2 transition-all duration-300 group">
                <div className={`w-14 h-14 ${p.color} rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {p.icon}
                </div>
                <div className="font-body text-xs text-white/50 mb-2 tracking-widest uppercase">{p.age}</div>
                <h3 className="font-display font-extrabold text-xl text-white mb-3">{p.title}</h3>
                <p className="font-body text-sm text-white/65 leading-relaxed mb-5">{p.desc}</p>
                <Link to="/admission" className="inline-flex items-center gap-1 font-display font-bold text-sm text-school-yellow hover:gap-2 transition-all duration-200">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="badge-pill bg-school-pink/15 text-school-pink mb-4">Testimonials</span>
            <h2 className="section-title mb-3">What <span className="text-school-pink">Parents</span> Say</h2>
            <p className="section-subtitle max-w-xl mx-auto">Hear from the families who trust BrightMinds with their most precious ones.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-3xl p-7 shadow-card border border-border hover:-translate-y-1 transition-transform duration-300 relative">
                <Quote size={36} className="text-primary/15 absolute top-5 right-5" />
                <p className="font-body text-foreground/75 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center font-display font-extrabold text-white text-sm`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground">{t.name}</div>
                    <div className="font-body text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} size={14} className="text-school-yellow fill-school-yellow" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white rounded-full" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Ready to Start Your Child's Journey? 🚀
          </h2>
          <p className="font-body text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Join the BrightMinds family today. Limited seats available for the upcoming academic year.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admission"
              className="px-9 py-4 rounded-full bg-white text-primary font-display font-extrabold text-base hover:scale-105 hover:shadow-lg transition-all duration-200"
            >
              Apply for Admission
            </Link>
            <Link
              to="/contact"
              className="px-9 py-4 rounded-full border-2 border-white text-white font-display font-bold text-base hover:bg-white/15 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
