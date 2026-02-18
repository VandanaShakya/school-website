import React from 'react';
import { Facebook, Globe, Twitter, Mail, MapPin, Phone, ChevronRight } from 'lucide-react';
import patternBg from '../assets/footer/footer-bg.png';



const Footer = () => {
  return (
    <footer className="relative w-full text-white font-sans overflow-hidden">
      {/* 1. Background Layer: Image with Blue Overlay */}
      <div className="w-full h-full absolute inset-0 z-0">
        
        <img src={patternBg}
        alt="background pattern"
         className="w-full h-full object-cover">

         </img>
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-10">
        {/* Top Wave Divider (Optional styling to match image top) */}
        <div className="w-full h-16 bg-white mb-12" style={{ clipPath: 'ellipse(70% 100% at 50% 0%)' }}></div>

        <div className="container mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">🏫</div>
              <h2 className="text-3xl font-bold tracking-tight">Pallikoodam</h2>
            </div>
            <p className="text-sm leading-relaxed text-indigo-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Facebook size={18} />, bg: 'bg-blue-800' },
                { icon: <Globe size={18} />, bg: 'bg-pink-500' },
                { icon: <Twitter size={18} />, bg: 'bg-sky-400' },
                { icon: <span className="text-xs font-bold">G+</span>, bg: 'bg-orange-600' }
              ].map((social, i) => (
                <div key={i} className={`${social.bg} w-9 h-9 flex items-center justify-center rounded cursor-pointer hover:brightness-110 transition-all`}>
                  {social.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-xl font-bold mb-8">About School</h3>
            <ul className="space-y-4 text-sm font-medium">
              {['General Information', 'Who We Are', 'Our Teachers', 'School History', 'Specialized Programme', 'Language Training'].map((item) => (
                <li key={item} className="flex items-center gap-2 group cursor-pointer">
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  <span className="opacity-90 group-hover:opacity-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Posts */}
          <div>
            <h3 className="text-xl font-bold mb-8">Recent Posts</h3>
            <div className="space-y-6">
              {[
                { title: "Reading practice for the students", date: "Nov 19, 2019", img: "https://placehold.co/60x60" },
                { title: "A team dedicated to football matches", date: "Nov 19, 2019", img: "https://placehold.co/60x60" }
              ].map((post, i) => (
                <div key={i} className="flex gap-4 items-center group cursor-pointer">
                  <img src={post.img} alt="post" className="w-16 h-16 rounded-md object-cover border border-white/20" />
                  <div>
                    <h4 className="text-sm font-semibold leading-snug group-hover:underline">{post.title}</h4>
                    <p className="text-xs opacity-60 mt-1">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-8">Keep In Touch</h3>
            <p className="text-sm mb-6 opacity-90 italic">Our school is the perfect environment for language studies.</p>
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-indigo-200" />
                <span>79200 Iskandar Puteri Malaysia mattis</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-indigo-200" />
                <span>+607 5602200</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-indigo-200" />
                <span>support@domain.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

// --- Helper Components ---

const SocialBtn = ({ icon, color }: { icon: React.ReactNode, color: string }) => (
  <button className={`${color} w-9 h-9 flex items-center justify-center rounded-md hover:opacity-80 transition-opacity`}>
    {icon}
  </button>
);

const PostItem = ({ title, date, img }: { title: string, date: string, img: string }) => (
  <div className="flex gap-4 items-center">
    <img src={img} alt="" className="w-16 h-14 rounded-lg object-cover" />
    <div>
      <h4 className="text-sm font-medium leading-snug hover:text-blue-200 cursor-pointer">{title}</h4>
      <p className="text-xs text-blue-200 mt-1">{date}</p>
    </div>
  </div>
);

export default Footer;