import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Clock, Calendar } from "lucide-react";
import kidsLearning from "@/assets/kids-learning.jpg";

const programs = [
  {
    id: "enrollment",
    title: "Enrollment",
    emoji: "📝",
    color: "bg-school-orange",
    border: "border-school-orange",
    badge: "bg-school-orange/15 text-school-orange",
    steps: ["Fill the online application form", "Submit required documents", "Schedule an assessment", "Receive admission decision", "Complete fee payment"],
    desc: "Begin your child's journey at Kids School with our streamlined enrollment process. Our admissions team is here to guide you every step of the way.",
    duration: "Process takes 2–3 weeks",
    deadline: "Applications open year-round",
  },
  {
    id: "highschool",
    title: "High School",
    emoji: "🎓",
    color: "bg-school-blue",
    border: "border-school-blue",
    badge: "bg-school-blue/15 text-school-blue",
    steps: ["Grades 9–12 program", "Advanced Placement courses", "College counseling support", "Research & thesis projects", "Leadership opportunities"],
    desc: "Our High School program prepares students for university admission and life beyond. Rigorous academics, leadership training, and real-world projects define the experience.",
    duration: "4-year program",
    deadline: "Ages 14–18",
  },
  {
    id: "kindergarten",
    title: "Kindergarten",
    emoji: "🌱",
    color: "bg-school-green",
    border: "border-school-green",
    badge: "bg-school-green/15 text-school-green",
    steps: ["Play-based foundational learning", "Social & emotional development", "Language & numeracy basics", "Art, music & movement", "Parent-inclusive activities"],
    desc: "The perfect first step! Our Kindergarten program nurtures little ones through play, exploration, and gentle guidance to build a lifelong love of learning.",
    duration: "2-year program",
    deadline: "Ages 3–5",
  },
  {
    id: "learning",
    title: "Learning Programs",
    emoji: "💡",
    color: "bg-school-purple",
    border: "border-school-purple",
    badge: "bg-school-purple/15 text-school-purple",
    steps: ["After-school enrichment", "Coding & robotics classes", "Music & performing arts", "Sports academies", "Summer learning camps"],
    desc: "Beyond the regular curriculum, our learning programs offer students opportunities to discover new passions, develop hidden talents, and pursue lifelong interests.",
    duration: "Flexible scheduling",
    deadline: "All grade levels",
  },
];

const documents = [
  "Birth certificate (original + copy)",
  "Previous school transfer certificate",
  "Last 2 years' academic report cards",
  "Passport-size photographs (4 copies)",
  "Proof of address (utility bill or ID)",
  "Medical/immunization records",
];

export default function Admission() {
  const [activeTab, setActiveTab] = useState("enrollment");

  return (
    <main>
      {/* Page Hero */}
      <section className="relative py-24 bg-gradient-to-br from-school-orange/10 via-background to-school-green/10 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-school-yellow/20 rounded-full blur-3xl translate-y-1/4 translate-x-1/4" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="badge-pill bg-school-orange/15 text-school-orange mb-5">Admission</span>
          <h1 className="font-display font-extrabold text-5xl md:text-6xl text-foreground mb-5">
            Start Your <span className="text-primary">Journey</span> With Us
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            We welcome students of all backgrounds to join the Kids School family. Find the perfect program below.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
      </section>

      {/* Program Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Tab navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {programs.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-6 py-3 rounded-full font-display font-bold text-sm transition-all duration-200 border-2 ${
                  activeTab === p.id
                    ? `${p.color} text-white border-transparent shadow-card`
                    : `bg-transparent border-border text-muted-foreground hover:border-primary hover:text-primary`
                }`}
              >
                {p.emoji} {p.title}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {programs.map((p) =>
            activeTab === p.id ? (
              <div key={p.id} className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
                <div>
                  <span className={`badge-pill ${p.badge} mb-4`}>{p.title}</span>
                  <h2 className="section-title mb-4">{p.title} Program</h2>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                  <div className="flex gap-4 flex-wrap mb-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-xl">
                      <Clock size={16} className="text-muted-foreground" />
                      <span className="font-body text-sm text-foreground/80">{p.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-xl">
                      <Calendar size={16} className="text-muted-foreground" />
                      <span className="font-body text-sm text-foreground/80">{p.deadline}</span>
                    </div>
                  </div>
                  <h4 className="font-display font-bold text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-2 mb-8">
                    {p.steps.map((step) => (
                      <li key={step} className="flex items-center gap-3 font-body text-foreground/80">
                        <CheckCircle size={18} className="text-school-green shrink-0" />
                        {step}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-display font-bold shadow-colored hover:opacity-90 hover:scale-105 transition-all duration-200">
                    Apply Now <ArrowRight size={18} />
                  </Link>
                </div>
                <div>
                  <img src={kidsLearning} alt={p.title} className="rounded-4xl shadow-card-lg w-full object-cover h-80" />
                </div>
              </div>
            ) : null
          )}
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge-pill bg-school-blue/15 text-school-blue mb-4">Checklist</span>
            <h2 className="section-title mb-3">Documents <span className="text-secondary">Required</span></h2>
            <p className="section-subtitle max-w-xl mx-auto">Please have these documents ready before starting your application.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {documents.map((doc, i) => (
              <div key={doc} className="flex items-center gap-3 p-4 bg-card rounded-2xl shadow-card border border-border">
                <div className="w-8 h-8 rounded-full bg-school-green/15 text-school-green flex items-center justify-center font-display font-extrabold text-sm shrink-0">
                  {i + 1}
                </div>
                <span className="font-body text-sm text-foreground/80">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Secure Your Child's Seat Today! 🎒
          </h2>
          <p className="font-body text-white/80 mb-8 max-w-xl mx-auto">
            Limited spots available. Don't wait — give your child the gift of a Kids School education.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-9 py-4 rounded-full bg-white text-primary font-display font-extrabold hover:scale-105 hover:shadow-lg transition-all duration-200">
              Contact Admissions Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
