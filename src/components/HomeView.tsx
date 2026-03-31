import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Star, 
  Clock, 
  MessageCircle, 
  Menu, 
  X,
  Play,
  Heart,
  Zap,
  Target,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Navbar Component ---
const Navbar = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <span className="text-2xl font-bold text-green-700 tracking-tight">Vital<span className="text-gray-900">Shift</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => onNavigate('home')} className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">Home</button>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">About</a>
            <button onClick={() => onNavigate('program')} className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">Programs</button>
            <a href="#stories" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">Success Stories</a>
            <button 
              onClick={() => onNavigate('landing')}
              className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-700 transition-all shadow-lg shadow-green-200"
            >
              Book Consultation
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="block w-full text-left px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50">Home</button>
              <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50">About</a>
              <button onClick={() => { onNavigate('program'); setIsOpen(false); }} className="block w-full text-left px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50">Programs</button>
              <a href="#stories" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50">Success Stories</a>
              <div className="pt-4">
                <button onClick={() => { onNavigate('landing'); setIsOpen(false); }} className="w-full bg-green-600 text-white px-6 py-3 rounded-xl text-base font-semibold">
                  Book Consultation (₹250)
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- HomeView Component ---
export const HomeView = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F9FBF9]">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-green-100/50 rounded-full blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <Users size={16} />
                <span>Trusted by 5,000+ Professionals & Homemakers</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
                Lose Weight Without <span className="text-green-600 italic">Strict Diets</span> or Boring Gyms.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Stop struggling with low energy and failed diets. Join the <span className="font-semibold text-gray-900">Vital Shift Method</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button onClick={() => onNavigate('landing')} className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-700 transition-all shadow-xl shadow-green-200 group">
                  <span>Start Transformation (₹250)</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={() => onNavigate('landing')} className="flex items-center justify-center space-x-2 bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-all">
                  <Play size={18} fill="currentColor" />
                  <span>Watch Free Webinar</span>
                </button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800" alt="Lifestyle" className="w-full h-auto" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Agitation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Weight loss ke liye sab kuch try kiya, par kuch kaam nahi aaya?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[{ title: "No Time?", icon: <Clock className="text-red-500" /> }, { title: "Failed Diets?", icon: <X className="text-red-500" /> }, { title: "Low Energy?", icon: <Zap className="text-red-500" /> }].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm mb-6 mx-auto">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm">Relatable struggles that busy professionals face daily.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Intro */}
      <section id="about" className="py-24 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">The Vital Shift Method</h2>
              <div className="space-y-8">
                {["Mindset Shift", "Smart Nutrition", "Active Living"].map((title, i) => (
                  <div key={i} className="flex space-x-6">
                    <div className="text-4xl font-black text-green-800/50">0{i+1}</div>
                    <div><h3 className="text-xl font-bold mb-2">{title}</h3><p className="text-green-100/80 text-sm">Simple, sustainable framework for busy people.</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-[40px] border border-white/20">
              <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800" alt="Healthy" className="rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="stories" className="py-24 bg-[#F9FBF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real People. Real Results.</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-left">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full" />
                  <div><h4 className="font-bold text-gray-900">Success Story {i+1}</h4><p className="text-xs text-gray-500">Professional</p></div>
                </div>
                <p className="text-gray-600 italic text-sm">"Vital Shift changed my life. I lost weight and gained energy!"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="programs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">Start Your Journey Today</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-[40px] border-2 border-gray-100 hover:border-green-500 transition-all shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Personal Consultation</h3>
              <div className="text-4xl font-black mb-8">₹250</div>
              <button onClick={() => onNavigate('landing')} className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold">Book My Slot</button>
            </div>
            <div className="bg-green-50 p-10 rounded-[40px] border-2 border-green-200">
              <h3 className="text-2xl font-bold mb-4">5-Day Workshop</h3>
              <div className="text-4xl font-black mb-8">FREE</div>
              <button onClick={() => onNavigate('landing')} className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold">Join Free Workshop</button>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Your Guide: Coach Aryan</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">Certified Nutritionist with 10+ years of experience helping busy people reclaim their health.</p>
              <button className="text-green-600 font-bold flex items-center space-x-2"><span>Read Full Story</span><ArrowRight size={20} /></button>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600" alt="Coach" className="rounded-[40px] shadow-2xl w-full h-[400px] object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Don't wait for "Monday".</h2>
        <p className="text-green-50 text-xl mb-12">Only 7 slots left for this week's consultations.</p>
        <button onClick={() => onNavigate('landing')} className="bg-white text-green-700 px-10 py-5 rounded-full text-xl font-black hover:bg-green-50 transition-all">Book Consultation Now</button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 text-center">
        <span className="text-2xl font-bold text-green-500 mb-6 block">VitalShift</span>
        <p className="text-sm">&copy; 2026 Vital Shift Wellness. All rights reserved.</p>
      </footer>
    </>
  );
};
