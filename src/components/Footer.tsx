import React from 'react';
import { Phone, MapPin, Mail, ArrowUp, Heart } from 'lucide-react';
import { GoodmanEmblem } from './Emblem.tsx';
import { SCHOOL_INFO } from '../data/schoolData.ts';

interface FooterProps {
  onViewPoster: () => void;
  onOpenAdmissions: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onViewPoster, onOpenAdmissions }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Motto */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-xl shadow-xs shrink-0 flex items-center justify-center">
                <GoodmanEmblem size="sm" showText={false} />
              </div>
              <div>
                <span className="block font-['Outfit'] font-black text-xl text-white tracking-wide">
                  GOODMAN PRIMARY
                </span>
                <span className="block text-xs font-semibold text-red-500 uppercase tracking-widest -mt-0.5">
                  & Pre School · Umzimkhulu
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {SCHOOL_INFO.corePromise}. Together we build confident, kind, and capable learners from Grade RR to Grade 7 in KwaZulu-Natal.
            </p>

            <div className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 font-['Outfit'] font-bold text-xs tracking-wider">
              🦅 MOTTO: SOAR LIKE AN EAGLE
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-['Outfit'] font-bold text-sm text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-red-400 transition-colors">
                  About the School
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-red-400 transition-colors">
                  Grade RR – Grade 7
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-red-400 transition-colors">
                  Admissions 2027
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-red-400 transition-colors">
                  Campus Gallery
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-red-400 transition-colors">
                  Events Calendar
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-400 transition-colors">
                  Contact & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Admissions Information */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-['Outfit'] font-bold text-sm text-white uppercase tracking-wider">
              Admissions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={onOpenAdmissions}
                  className="hover:text-white text-left transition-colors font-semibold text-red-400"
                >
                  Apply for 2027
                </button>
              </li>
              <li>
                <button
                  onClick={onViewPoster}
                  className="hover:text-white text-left transition-colors"
                >
                  View Official Poster
                </button>
              </li>
              <li>Pre-School (Grade RR - R)</li>
              <li>Foundation Phase (Gr 1 - 3)</li>
              <li>Intermediate (Gr 4 - 6)</li>
              <li>Senior Phase (Grade 7)</li>
            </ul>
          </div>

          {/* Direct Contact from Poster */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-['Outfit'] font-bold text-sm text-white uppercase tracking-wider">
              School Contact
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <a href="tel:0725063258" className="font-mono text-slate-200 hover:text-amber-400 transition-colors">
                  072 506 3258
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <a href="tel:0660630766" className="font-mono text-slate-200 hover:text-amber-400 transition-colors">
                  066 063 0766
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>Umzimkhulu Central, Harry Gwala District, KwaZulu-Natal</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-amber-300 block italic">
                "You may also visit the school for further information."
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Goodman Primary and Pre School · Umzimkhulu. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              Learn · Grow · Achieve
            </span>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
