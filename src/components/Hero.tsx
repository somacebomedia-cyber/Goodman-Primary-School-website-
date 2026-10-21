import React from 'react';
import { Phone, MapPin, CheckCircle2, ChevronRight, Sparkles, Eye } from 'lucide-react';
import { GoodmanEmblem } from './Emblem.tsx';
import { SCHOOL_INFO } from '../data/schoolData.ts';

interface HeroProps {
  onOpenAdmissions: () => void;
  onViewPoster: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdmissions, onViewPoster }) => {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex flex-col justify-between pt-8 pb-16 lg:pt-12 lg:pb-20">
      
      {/* Daylight School Campus & Sky Background (matches official poster) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_school_daylight_1792580722869.jpg"
          alt="Goodman Primary and Pre School campus under a bright blue sky with light clouds and school building signage in Umzimkhulu"
          className="w-full h-full object-cover object-[center_30%]"
          referrerPolicy="no-referrer"
        />
        {/* Soft daylight scrim gradient ensuring optimal contrast while letting the blue sky and campus shine through */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/20 via-sky-900/10 to-slate-950/45 pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main 2-Column Split with High-Contrast Frosted Card Backing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* Left Column: Headlines, Mottos, and Actions in Crisp Frosted Card */}
          <div className="lg:col-span-7 bg-white/94 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/70 text-slate-900 text-left">
            
            {/* Lead-in Badge & School Emblem */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <div className="bg-red-50 p-1 rounded-lg border border-red-100 shadow-xs shrink-0 flex items-center justify-center">
                <GoodmanEmblem size="sm" showText={false} />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white shadow-xs uppercase tracking-wide font-['Outfit']">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Applications Open For 2027
              </span>
              <span className="text-slate-600 text-xs font-medium">
                Grade RR – Grade 7 · Umzimkhulu
              </span>
            </div>

            {/* Dominant Headline */}
            <h1 className="font-['Outfit'] font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.12] text-slate-950 max-w-2xl text-balance">
              Quality Education for a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-amber-600">
                Brighter Future
              </span>
              .
            </h1>

            {/* School Motto from Poster */}
            <p className="mt-3.5 text-base sm:text-lg font-semibold text-red-700 font-['Outfit'] italic tracking-wide">
              "Together we build confident, kind and capable learners."
            </p>

            {/* Introductory Summary */}
            <p className="mt-3 text-sm sm:text-base text-slate-700 max-w-xl leading-relaxed">
              At <strong className="text-slate-950 font-bold">Goodman Primary and Pre School</strong> in Umzimkhulu, we empower learners to{' '}
              <em className="text-red-700 not-italic font-semibold">Learn, Grow, Achieve</em> and soar like eagles through compassionate teaching and academic excellence.
            </p>

            {/* 4 Books Pillars from Poster: READ, LEARN, GROW, SUCCEED */}
            <div className="mt-5 flex flex-wrap gap-2 sm:gap-2.5 text-xs font-bold font-mono">
              <div className="px-3 py-1.5 bg-red-50 border border-red-200 rounded-lg text-red-700 flex items-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                <span>READ</span>
              </div>
              <div className="px-3 py-1.5 bg-sky-50 border border-sky-200 rounded-lg text-sky-800 flex items-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                <span>LEARN</span>
              </div>
              <div className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 flex items-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>GROW</span>
              </div>
              <div className="px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 flex items-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>SUCCEED</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenAdmissions}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-xl shadow-lg shadow-red-600/25 transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Enroll Learner for 2027</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={onViewPoster}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all duration-200 cursor-pointer shadow-xs"
              >
                <Eye className="w-4 h-4 text-red-600" />
                <span>View School Poster</span>
              </button>
            </div>

            {/* Quick Contact & Visit Notice from poster */}
            <div className="mt-6 pt-5 border-t border-slate-200/90 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-sm text-slate-700">
              <div className="flex items-center gap-2 flex-wrap">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                <span className="font-bold text-slate-900">Call Admissions:</span>
                <a href="tel:0725063258" className="hover:text-red-600 font-mono font-semibold transition-colors">
                  072 506 3258
                </a>
                <span className="text-slate-400">or</span>
                <a href="tel:0660630766" className="hover:text-red-600 font-mono font-semibold transition-colors">
                  066 063 0766
                </a>
              </div>
              <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <span>You may also visit the school in Umzimkhulu for further information.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Anchor with Official Poster & Campus Highlights */}
          <div className="lg:col-span-5 relative flex flex-col gap-4">
            
            {/* Campus & Poster Preview Card */}
            <div className="bg-white/94 backdrop-blur-md rounded-2xl overflow-hidden border border-white/70 shadow-2xl p-6 text-left">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-xl shadow-xs border border-slate-100">
                    <GoodmanEmblem size="sm" showText={false} />
                  </div>
                  <div>
                    <h3 className="font-['Outfit'] font-bold text-lg text-slate-950">
                      Goodman Primary & Pre School
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-red-600" />
                      Umzimkhulu, KwaZulu-Natal
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-red-700 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md">
                  GR RR – 7
                </span>
              </div>

              {/* Official Admissions Poster Preview */}
              <div className="relative mt-4 rounded-xl overflow-hidden border border-slate-200 shadow-inner group">
                <img
                  src="/assets/aistudio/Screenshot_20261019-054220_4ed62adf.jpg"
                  alt="Goodman Primary and Pre School Official Admissions Poster"
                  className="w-full h-48 sm:h-52 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end justify-between p-4">
                  <span className="text-xs font-bold text-amber-300 font-['Outfit'] tracking-wide">
                    🦅 SOAR LIKE AN EAGLE
                  </span>
                  <button
                    onClick={onViewPoster}
                    className="bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 transition-transform hover:scale-105 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Poster</span>
                  </button>
                </div>
              </div>

              {/* Bullet Highlights from Poster */}
              <div className="mt-4 space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated Grade RR & R early childhood development center</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Qualified, loving educators & modern brick classrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Safe transport-accessible campus located in Umzimkhulu</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 4-Column Metric Strip Below Hero Split */}
        <div className="mt-8 bg-white/92 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/70 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          
          <div className="flex flex-col">
            <span className="font-['Outfit'] font-black text-2xl sm:text-3xl text-red-600 tabular-nums">
              Grade RR – 7
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
              Comprehensive Growth
            </span>
            <span className="text-xs text-slate-600 mt-0.5">
              From early preschool years through Grade 7 transition.
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-['Outfit'] font-black text-2xl sm:text-3xl text-amber-600 tabular-nums">
              2027
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
              Applications Now Open
            </span>
            <span className="text-xs text-slate-600 mt-0.5">
              Secure placement early for low educator-to-learner ratios.
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-['Outfit'] font-black text-2xl sm:text-3xl text-sky-700">
              Umzimkhulu
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
              Campus Visits Welcome
            </span>
            <span className="text-xs text-slate-600 mt-0.5">
              Open 07:30 – 15:30 weekdays for parents and inquiries.
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-['Outfit'] font-black text-2xl sm:text-3xl text-emerald-600">
              100%
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
              Holistic Learner Focus
            </span>
            <span className="text-xs text-slate-600 mt-0.5">
              Upholding character, reading fluency, and sport excellence.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
