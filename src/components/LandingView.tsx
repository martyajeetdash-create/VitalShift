import React from 'react';
import { CheckCircle2, ArrowRight, Clock, Star, ShieldCheck, Zap, MessageCircle } from 'lucide-react';

export const LandingView = ({ type = 'consultation' }: { type?: 'webinar' | 'consultation' }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <nav className="py-6 border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-2xl font-bold text-green-700">Vital<span className="text-gray-900">Shift</span></span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Hook Headline */}
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Limited Time Opportunity
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            {type === 'consultation' 
              ? "Stop Guessing. Start Shifting. Get Your Personalized Weight Loss Roadmap."
              : "Free Masterclass: The 3 Secrets to Losing 10kg Without Giving Up Your Favorite Foods."}
          </h1>
          <p className="text-xl text-gray-600">
            {type === 'consultation'
              ? "Book a 30-minute Lifestyle Audit with our senior coaches and discover exactly what's holding you back."
              : "Join 1,000+ others this Sunday and learn the sustainable way to reclaim your health."}
          </p>
        </div>

        {/* Video / Image Placeholder */}
        <div className="aspect-video bg-gray-100 rounded-[40px] mb-16 relative overflow-hidden group cursor-pointer shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            alt="Workshop Preview"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <div className="ml-1 border-y-[12px] border-y-transparent border-l-[20px] border-l-white" />
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">What you'll get:</h2>
            <ul className="space-y-4">
              {[
                "Personalized Metabolic Assessment",
                "Identification of 'Hidden' Weight Gainers",
                "Custom 7-Day Kickstart Action Plan",
                "Live Q&A with Coach Aryan"
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-green-500 mt-1 shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <div className="flex items-center space-x-2 text-orange-600 font-bold mb-4">
              <Zap size={20} />
              <span>Hurry! Only 4 Slots Left</span>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              We only take a limited number of consultations each week to ensure high-quality personal attention.
            </p>
            <div className="flex -space-x-2 mb-4">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
              ))}
              <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-green-700">+12</div>
            </div>
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Recently booked by people in Mumbai, Delhi & Bangalore</p>
          </div>
        </div>

        {/* CTA Form Placeholder */}
        <div className="bg-white rounded-[40px] border-4 border-green-600 p-8 md:p-12 shadow-2xl text-center">
          <h3 className="text-3xl font-black mb-8">Claim Your Spot Now</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-green-500 outline-none" />
            <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-green-500 outline-none" />
          </div>
          <input type="tel" placeholder="WhatsApp Number" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-green-500 outline-none mb-8" />
          
          <button className="w-full bg-green-600 text-white py-5 rounded-2xl text-xl font-black hover:bg-green-700 transition-all shadow-xl shadow-green-200 mb-6">
            {type === 'consultation' ? "Book Consultation (₹250)" : "Register for Free Masterclass"}
          </button>
          
          <div className="flex items-center justify-center space-x-4 text-gray-400 text-sm">
            <div className="flex items-center space-x-1">
              <ShieldCheck size={16} />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={16} />
              <span>Takes 2 mins</span>
            </div>
          </div>
        </div>

        {/* Minimal Trust */}
        <div className="mt-20 text-center">
          <div className="flex justify-center space-x-1 text-orange-400 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <p className="text-gray-500 italic">"The best ₹250 I've ever spent on my health. The clarity I got in 30 mins was life-changing."</p>
          <p className="font-bold text-gray-900 mt-2">— Meera K., Homemaker</p>
        </div>
      </main>

      <footer className="py-12 border-t border-gray-50 text-center text-gray-400 text-xs">
        <p>&copy; 2026 Vital Shift. All rights reserved. | Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  );
};
