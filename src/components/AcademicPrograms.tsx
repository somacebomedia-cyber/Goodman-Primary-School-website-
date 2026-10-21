import React, { useState } from 'react';
import { BookOpen, Brain, Sparkles, Trophy, Users, Check, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { GRADE_OFFERINGS, SCHOOL_INFO } from '../data/schoolData.ts';

interface AcademicProgramsProps {
  onApplyForGrade: (gradeCode: string) => void;
}

export const AcademicPrograms: React.FC<AcademicProgramsProps> = ({ onApplyForGrade }) => {
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState(0);
  const activeOffering = GRADE_OFFERINGS[selectedPhaseIndex];

  return (
    <section id="academics" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest font-['Outfit'] mb-2">
            <span>Holistic Curriculum</span>
            <span aria-hidden="true">·</span>
            <span>CAPS Aligned</span>
          </div>
          <h2 className="font-['Outfit'] font-black text-3xl sm:text-4xl text-slate-900 tracking-tight text-balance">
            Academic Excellence from Grade RR to Grade 7
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every child learns differently. Our structured phases provide a warm, encouraging environment that sparks curiosity, strengthens foundational numeracy and literacy, and prepares young leaders for senior high school.
          </p>
        </div>

        {/* 4 Pillars Strip (from the books on poster: READ · LEARN · GROW · SUCCEED) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-100 hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center font-black font-['Outfit'] text-lg shadow-sm group-hover:scale-105 transition-transform">
              READ
            </div>
            <h3 className="font-['Outfit'] font-bold text-lg text-slate-900 mt-4">
              Literacy Foundation
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Daily guided reading, phonics, rich vocabulary immersion, and library book exploration from Grade RR onwards.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-100 hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center font-black font-['Outfit'] text-lg shadow-sm group-hover:scale-105 transition-transform">
              LEARN
            </div>
            <h3 className="font-['Outfit'] font-bold text-lg text-slate-900 mt-4">
              Academic Discovery
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Conceptual mathematics, scientific experimentation, digital curiosity, and active problem-solving skills.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black font-['Outfit'] text-lg shadow-sm group-hover:scale-105 transition-transform">
              GROW
            </div>
            <h3 className="font-['Outfit'] font-bold text-lg text-slate-900 mt-4">
              Character & Kindness
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Instilling moral values, empathy, emotional intelligence, teamwork, and respect for community and peers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-100 hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black font-['Outfit'] text-lg shadow-sm group-hover:scale-105 transition-transform">
              SUCCEED
            </div>
            <h3 className="font-['Outfit'] font-bold text-lg text-slate-900 mt-4">
              Soar Like An Eagle
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Sportsmanship, creative expression, leadership confidence, and smooth transition into top high schools.
            </p>
          </div>

        </div>

        {/* Interactive Grade Selector Tabs */}
        <div className="bg-slate-100 p-1.5 rounded-xl flex flex-wrap gap-1 max-w-3xl mx-auto mb-10 justify-center">
          {GRADE_OFFERINGS.map((offering, idx) => {
            const isSelected = selectedPhaseIndex === idx;
            return (
              <button
                key={offering.id}
                onClick={() => setSelectedPhaseIndex(idx)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-white text-slate-950 shadow-sm font-bold border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {offering.name}
              </button>
            );
          })}
        </div>

        {/* Phase Detail Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Overview and Age Range */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-bold rounded-md font-['Outfit']">
                  {activeOffering.phase}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Learner Age: {activeOffering.ageRange}
                </span>
              </div>

              <h3 className="font-['Outfit'] font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                {activeOffering.name}
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                {activeOffering.focus}
              </p>

              {/* Action Button */}
              <div className="mt-6">
                <button
                  onClick={() => onApplyForGrade(activeOffering.code)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  <span>Apply for {activeOffering.code} (2027)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Small classes ensuring continuous pastoral and educator attention.</span>
              </div>
            </div>

            {/* Right Column: Subjects & Environment Features */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-6 sm:p-8 rounded-xl border border-slate-200/80 shadow-xs">
              
              {/* Subjects / Key Focus Areas */}
              <div>
                <h4 className="font-['Outfit'] font-bold text-sm text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-red-600" />
                  <span>Curriculum & Learning</span>
                </h4>
                <ul className="space-y-2.5">
                  {activeOffering.subjects.map((sub, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0"></span>
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Classroom Environment & Perks */}
              <div>
                <h4 className="font-['Outfit'] font-bold text-sm text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-amber-500" />
                  <span>Learning Environment</span>
                </h4>
                <ul className="space-y-2.5">
                  {activeOffering.features.map((feat, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
