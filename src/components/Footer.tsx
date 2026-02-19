import React from 'react';
import { Facebook, Globe, Twitter, Mail, MapPin, Phone, ChevronRight } from 'lucide-react';
import patternBg from '../assets/footer/footer-bg.png';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    // Changed overflow-hidden to allow natural height growth
    <footer className="relative w-full text-white font-sans">
      
      {/* 1. Background Layer: Optimized for dynamic height */}
      <div className="absolute inset-0 z-0">
        <img 
          src={patternBg}
          alt="background pattern"
          className="w-full h-full object-cover"
        />
        {/* Added an overlay to ensure text readability across all devices */}
        <div className="absolute inset-0 bg-indigo-900/80 backdrop-blur-[2px]"></div>
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-10">
        {/* Top Wave Divider: Responsive height */}
        <div 
          className="w-full h-8 md:h-16 bg-white mb-8 md:mb-12" 
          style={{ clipPath: 'ellipse(70% 100% at 50% 0%)' }}
        ></div>

        <div className="container mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg text-xl md:text-2xl">🏫</div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Pallikoodam</h2>
            </div>
            <p className="text-sm leading-relaxed text-indigo-100 max-w-sm">
              Empowering students through innovative learning and global perspectives. 
              Nurturing the leaders of tomorrow.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Facebook size={18} />, bg: 'bg-blue-800' },
                { icon: <Globe size={18} />, bg: 'bg-pink-500' },
                { icon: <Twitter size={18} />, bg: 'bg-sky-400' },
                { icon: <span className="text-xs font-bold">G+</span>, bg: 'bg-orange-600' }
              ].map((social, i) => (
                <div key={i} className={`${social.bg} w-9 h-9 flex items-center justify-center rounded cursor-pointer hover:scale-110 transition-all`}>
                  {social.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6 md:mb-8 border-b border-white/10 pb-2 w-fit">About School</h3>
            <ul className="space-y-4 text-sm font-medium">
            {['Bright Classrooms', 'Lab and Library', 'Meeting Hall', 'Play Ground', 'Sports Club']
  .map((item) => {
    const slug = item.toLowerCase().replace(/\s+/g, '-');

    return (
      <li key={item} className="w-fit">
        <Link
          to={`/facilities/${slug}`}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <ChevronRight
            size={14}
            className="group-hover:translate-x-1 transition-transform text-indigo-300"
          />
          <span className="opacity-90 group-hover:opacity-100">
            {item}
          </span>
        </Link>
      </li>
    );
  })}
            </ul>
          </div>

          {/* Column 3: Posts */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6 md:mb-8 border-b border-white/10 pb-2 w-fit">Recent Posts</h3>
            <div className="space-y-6">
              {[
                { title: "Reading practice for the students", date: "Nov 19, 2019", img: "https://placehold.co/80x80" },
                { title: "A team dedicated to football matches", date: "Nov 19, 2019", img: "https://placehold.co/80x80" }
              ].map((post, i) => (
                <div key={i} className="flex gap-4 items-center group cursor-pointer">
                  <img src={post.img} alt="post" className="w-14 h-14 md:w-16 md:h-16 rounded-md object-cover border border-white/20 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold leading-snug group-hover:text-indigo-200 transition-colors">{post.title}</h4>
                    <p className="text-xs opacity-60 mt-1">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6 md:mb-8 border-b border-white/10 pb-2 w-fit">Keep In Touch</h3>
            <p className="text-sm mb-6 opacity-90 italic">Our school is the perfect environment for studies.</p>
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-indigo-300 shrink-0" />
                <span className="leading-snug">79200 Iskandar Puteri, Malaysia</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-indigo-300 shrink-0" />
                <span>+607 5602200</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-indigo-300 shrink-0" />
                <span className="break-all">support@pallikoodam.edu.my</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="container mx-auto px-6 text-center text-xs opacity-50">
            © {new Date().getFullYear()} Pallikoodam Academy. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;