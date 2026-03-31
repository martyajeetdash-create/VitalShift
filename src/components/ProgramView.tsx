import React from 'react';
import { CheckCircle2, ArrowRight, Clock, ShieldCheck, HelpCircle, Star } from 'lucide-react';

export const ProgramView = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="mb-8 text-green-600 font-semibold flex items-center space-x-2 hover:translate-x-1 transition-transform"
        >
          <span>← Back to Home</span>
        </button>

        {/* Header */}
        <div className="mb-16">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
            90-Day Transformation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Vital Shift <span className="text-green-600">Transformation Program</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A comprehensive, step-by-step journey to reclaim your health, energy, and confidence without ever feeling like you're on a "diet".
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Who it's for */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Is this for you?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                  <h3 className="font-bold text-green-800 mb-2">YES, if you are:</h3>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• A busy professional with no time for gym</li>
                    <li>• A homemaker struggling with weight gain</li>
                    <li>• Tired of "yo-yo" dieting results</li>
                    <li>• Ready for a permanent lifestyle shift</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                  <h3 className="font-bold text-red-800 mb-2">NO, if you want:</h3>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li>• A "magic pill" or 7-day shortcut</li>
                    <li>• To continue eating processed junk daily</li>
                    <li>• Intense, 2-hour daily gym workouts</li>
                    <li>• Temporary results for an event</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Journey */}
            <section>
              <h2 className="text-2xl font-bold mb-8">Your 3-Phase Journey</h2>
              <div className="space-y-8">
                {[
                  {
                    phase: "Phase 1: The Foundation (Weeks 1-4)",
                    title: "Metabolic Reset & Mindset",
                    desc: "We fix your sleep, hydration, and morning routines while identifying emotional eating triggers. You'll start feeling lighter and more energetic within 10 days."
                  },
                  {
                    phase: "Phase 2: The Shift (Weeks 5-8)",
                    title: "Smart Nutrition & Movement",
                    desc: "Introduction of the 'Plate Method' for home-cooked meals. No calorie counting. We add 15-min functional movements that boost metabolism."
                  },
                  {
                    phase: "Phase 3: Sustainability (Weeks 9-12)",
                    title: "Lifestyle Integration",
                    desc: "Learning how to handle social events, travel, and 'cheat meals' without guilt. We lock in your habits so you never gain the weight back."
                  }
                ].map((item, i) => (
                  <div key={i} className="relative pl-10 border-l-2 border-green-200">
                    <div className="absolute -left-[11px] top-0 w-5 h-5 bg-green-600 rounded-full border-4 border-white shadow-sm" />
                    <div className="text-sm font-bold text-green-600 uppercase tracking-wider mb-1">{item.phase}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "Do I need to buy expensive supplements?", a: "No. We focus on real, whole foods available in your local market." },
                  { q: "Can I do this if I have thyroid/PCOD?", a: "Yes, our method is specifically designed to help manage lifestyle conditions through nutrition." },
                  { q: "What if I miss a day?", a: "The system is flexible. We teach you how to get back on track without feeling like you failed." }
                ].map((faq, i) => (
                  <div key={i} className="p-6 bg-gray-50 rounded-2xl">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center space-x-2">
                      <HelpCircle size={18} className="text-green-600" />
                      <span>{faq.q}</span>
                    </h4>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Pricing Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-[32px] border-2 border-green-600 p-8 shadow-2xl shadow-green-100">
              <h3 className="text-2xl font-bold mb-4">Transformation Program</h3>
              <div className="flex items-baseline space-x-2 mb-6">
                <span className="text-4xl font-black text-gray-900">₹14,999</span>
                <span className="text-gray-400 line-through">₹24,999</span>
              </div>
              
              <div className="space-y-4 mb-8">
                {[
                  "12 Weeks of Coaching",
                  "Customized Meal Plans",
                  "Weekly Progress Reviews",
                  "Private Community Access",
                  "Lifetime Resource Vault"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all mb-4">
                Enroll Now
              </button>
              
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                <ShieldCheck size={14} />
                <span>100% Satisfaction Guarantee</span>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center mb-4 uppercase tracking-widest font-bold">Trust Indicators</p>
                <div className="flex justify-center space-x-4 grayscale opacity-50">
                  <div className="text-center">
                    <div className="font-black text-lg">5k+</div>
                    <div className="text-[10px]">Students</div>
                  </div>
                  <div className="text-center border-x border-gray-200 px-4">
                    <div className="font-black text-lg">4.9</div>
                    <div className="text-[10px]">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="font-black text-lg">10y</div>
                    <div className="text-[10px]">Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
