import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import BrightClassrooms from "./pages/facilities/BrightClassrooms";
import LabAndLibrary from "./pages/facilities/LabAndLibrary";
import MeetingHall from "./pages/facilities/MeetingHall";
import PlayGround from "./pages/facilities/PlayGround";
import SportsClub from "./pages/facilities/SportsClub";
import Admission from "./pages/Admission";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// ── 1. SCROLL TO TOP COMPONENT ──
// This ensures that whenever you click a link, the new page starts at the top.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// ── 2. NESTED RING LOADER COMPONENT ──
const GlobalLoader = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
    <div className="relative flex items-center justify-center">
      {/* Outer Loader - Orange */}
      <div className="w-20 h-20 border-4 border-t-school-orange border-orange-100 rounded-full animate-spin"></div>
      
      {/* Inner Loader - Pink */}
     </div>
  </div>
);

// ── 3. ROUTE WRAPPER FOR LOADING STATE ──
// This simulates the loading state when moving between pages.
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // 800ms loading feel
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <GlobalLoader />}
      <div className={`transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}>
        {children}
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Helper to reset scroll position on every navigation */}
        <ScrollToTop />
        
        <Navbar />
        
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/facilities/bright-classrooms" element={<BrightClassrooms />} />
            <Route path="/facilities/lab-and-library" element={<LabAndLibrary />} />
            <Route path="/facilities/meeting-hall" element={<MeetingHall />} />
            <Route path="/facilities/play-ground" element={<PlayGround />} />
            <Route path="/facilities/sports-club" element={<SportsClub />} />
            <Route path="/admissions" element={<Admission />} />
            <Route path="/contact" element={<Contact />} />

            {/* CATCH-ALL ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageWrapper>

        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;