import React from 'react';
import { ShieldCheck, Award, Heart, Sparkles, BookOpen, Users, Compass, Eye } from 'lucide-react';
import { GoodmanEmblem } from './Emblem.tsx';
import { SCHOOL_INFO } from '../data/schoolData.ts';

interface AboutSectionProps {
  onViewPoster: () => void;
  onOpenAdmissions: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onViewPoster, onOpenAdmissions }) => {
  return (
    <section id="about" className="py-20 bg-neutral-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest font-['Outfit'] mb-2">
            <span>Our Foundation & Ethos</span>
            <span aria-hidden="true">·</span>
            <span>Umzimkhulu, KZN</span>
          </div>
          <h2 className="font-['Outfit'] font-black text-3xl sm:text-4xl text-slate-900 tracking-tight text-balance">
            Soaring Higher with Goodman Primary
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Founded with an enduring dedication to quality education and character formation, Goodman Primary and Pre School provides a safe, nurturing haven where every young learner is guided to reach their fullest potential.
          </p>
        </div>

        {/* 2-Column Split: The Eagle Philosophy & Campus Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: The Eagle Meaning & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-4">
              <GoodmanEmblem size="md" showText={false} className="shrink-0" />
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest font-['Outfit']">
                  The Goodman Eagle Shield
                </span>
                <h3 className="font-['Outfit'] font-black text-2xl sm:text-3xl text-slate-900">
                  "Soar Like An Eagle"
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              In nature, eagles possess extraordinary vision, courageous strength, and the ability to ride above storms. At Goodman Primary, this coat of arms reminds every learner that no challenge is too great when anchored in faith, diligence, and kindness.
            </p>

            {/* 3 Core Value Cards */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-50 text-red-600 shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Outfit'] font-bold text-sm text-slate-900">
                    Confident, Kind & Capable
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    We nurture emotional intelligence, respectful manners, peer empathy, and social confidence alongside strong academics.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-600 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Outfit'] font-bold text-sm text-slate-900">
                    Quality Education for a Brighter Future
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Rigorous CAPS learning modules, daily reading comprehension, mental mathematics drills, and guided homework support.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Outfit'] font-bold text-sm text-slate-900">
                    Small Classes & Loving Educators
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Teachers who know each child by name, track developmental milestones, and keep parents updated on daily progress.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenAdmissions}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-colors cursor-pointer"
              >
                Apply for 2027 Academic Year
              </button>
              <button
                onClick={onViewPoster}
                className="px-5 py-3 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm rounded-xl border border-slate-300 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-red-600" />
                <span>View Official Poster</span>
              </button>
            </div>
          </div>

          {/* Right: Authentic Classroom Life Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white group">
              <img
                src="/src/assets/images/classroom_learning_1792577914320.jpg"
                alt="Goodman Primary Learners in Classroom"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-104 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <span className="px-2.5 py-1 bg-amber-400 text-slate-950 rounded text-[11px] font-bold font-['Outfit'] uppercase">
                  Classroom Excellence
                </span>
                <h4 className="font-['Outfit'] font-black text-xl text-white mt-2">
                  "Learn, Grow, Achieve"
                </h4>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                  Our learners engaging in collaborative reading and creative discovery at Goodman Primary.
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-slate-900 text-white p-4 rounded-xl shadow-2xl border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center font-bold text-white text-xs">
                GR
              </div>
              <div className="text-left">
                <span className="block font-['Outfit'] font-bold text-sm text-amber-300">
                  Grade RR through Grade 7
                </span>
                <span className="block text-[11px] text-slate-300">
                  Umzimkhulu, KwaZulu-Natal
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Parent & Community Testimonials from Umzimkhulu */}
        <div className="pt-10 border-t border-slate-200">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest font-['Outfit']">
              Parent Testimonials
            </span>
            <h3 className="font-['Outfit'] font-black text-2xl text-slate-900 mt-1">
              Trusted by Families Across Umzimkhulu
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                "Our son joined Grade RR shy and hesitant. Within months at Goodman Pre School, he was reading early words, counting with joy, and excited to go to school every single morning."
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 block font-['Outfit']">Mrs. N. Khumalo</span>
                  <span className="text-slate-500 text-[11px]">Parent of Grade R Learner</span>
                </div>
                <span className="text-amber-500 font-bold">★★★★★</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                "The educators genuinely live up to 'Confident, Kind and Capable'. My daughter has thrived in mathematics and English, and she represented the school with pride on sports day."
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 block font-['Outfit']">Mr. T. Mthembu</span>
                  <span className="text-slate-500 text-[11px]">Parent of Grade 5 Learner</span>
                </div>
                <span className="text-amber-500 font-bold">★★★★★</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                "Visiting the school in person convinced me immediately. The classrooms are clean, the teachers are attentive, and the administration is deeply organized. Applying for 2027 was smooth."
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 block font-['Outfit']">Ms. L. Cele</span>
                  <span className="text-slate-500 text-[11px]">2027 Grade 1 Applicant</span>
                </div>
                <span className="text-amber-500 font-bold">★★★★★</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
