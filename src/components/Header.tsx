import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { GoodmanEmblem } from './Emblem.tsx';
import { SCHOOL_INFO } from '../data/schoolData.ts';

interface HeaderProps {
  onOpenAdmissions: () => void;
  onViewPoster: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAdmissions, onViewPoster }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Main Top Bar - Strict 3-zone contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark with brand crest */}
          <a
            href="#"
            className="flex items-center gap-3 group text-slate-900 whitespace-nowrap shrink-0"
          >
            <GoodmanEmblem size="sm" showText={false} className="shrink-0" />
            <div>
              <span className="block font-['Outfit'] font-black text-lg md:text-xl tracking-tight text-slate-900 group-hover:text-red-600 transition-colors">
                GOODMAN PRIMARY
              </span>
              <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-widest -mt-1">
                & Pre School · Umzimkhulu
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 single-line clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a
              href="#about"
              className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              About
            </a>
            <a
              href="#academics"
              className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Grades RR – 7
            </a>
            <a
              href="#admissions"
              className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Admissions 2027
            </a>
            <a
              href="#gallery"
              className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Campus Gallery
            </a>
            <a
              href="#events"
              className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Events Calendar
            </a>
            <a
              href="#contact"
              className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAdmissions}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-lg shadow-sm transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer hover:shadow-md"
            >
              <span>Apply for 2027</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-5 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-4 text-base font-semibold text-slate-800">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-red-600 transition-colors border-b border-slate-100"
              >
                About Goodman Primary
              </a>
              <a
                href="#academics"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-red-600 transition-colors border-b border-slate-100"
              >
                Academic Programs (Grade RR – 7)
              </a>
              <a
                href="#admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-red-600 transition-colors border-b border-slate-100 text-red-600 font-bold"
              >
                Admissions 2027
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-red-600 transition-colors border-b border-slate-100"
              >
                Interactive Gallery
              </a>
              <a
                href="#events"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-red-600 transition-colors border-b border-slate-100"
              >
                Events & School Calendar
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-red-600 transition-colors border-b border-slate-100"
              >
                Contact & School Visit
              </a>

              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmissions();
                  }}
                  className="w-full text-center py-3 px-4 font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm"
                >
                  Start 2027 Application
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onViewPoster();
                  }}
                  className="w-full text-center py-2.5 px-4 font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm"
                >
                  View Original School Poster
                </button>
              </div>

              {/* Direct call numbers on mobile */}
              <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-center text-slate-600">
                <a href={`tel:${SCHOOL_INFO.contacts[0].raw}`} className="p-2 bg-slate-50 rounded border border-slate-200 font-mono">
                  📞 {SCHOOL_INFO.contacts[0].display}
                </a>
                <a href={`tel:${SCHOOL_INFO.contacts[1].raw}`} className="p-2 bg-slate-50 rounded border border-slate-200 font-mono">
                  📞 {SCHOOL_INFO.contacts[1].display}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
