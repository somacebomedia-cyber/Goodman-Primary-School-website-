import React, { useState } from 'react';
import { FileText, CheckCircle2, AlertCircle, Calculator, MapPin, Clock, Phone, Download, ArrowRight } from 'lucide-react';
import { REQUIRED_DOCUMENTS, SCHOOL_INFO } from '../data/schoolData.ts';

interface AdmissionsGuideProps {
  onOpenForm: () => void;
  onViewPoster: () => void;
}

export const AdmissionsGuide: React.FC<AdmissionsGuideProps> = ({ onOpenForm, onViewPoster }) => {
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [selectedGradePhase, setSelectedGradePhase] = useState<'preschool' | 'foundation' | 'senior'>('foundation');
  const [paymentPlan, setPaymentPlan] = useState<'monthly' | 'termly' | 'annual'>('monthly');

  const toggleDoc = (id: string) => {
    setCheckedDocs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Realistic estimates for Umzimkhulu community primary schools
  const feeStructure = {
    preschool: { monthly: 850, termly: 2450, annual: 9500, reg: 450, desc: 'Grade RR & Grade R (Includes play materials & morning snack)' },
    foundation: { monthly: 980, termly: 2800, annual: 10800, reg: 500, desc: 'Grade 1 – Grade 3 (Includes basic stationery pack & workbooks)' },
    senior: { monthly: 1100, termly: 3150, annual: 12200, reg: 550, desc: 'Grade 4 – Grade 7 (Includes science lab supplies & sports levies)' }
  };

  const currentFee = feeStructure[selectedGradePhase];

  return (
    <section id="admissions" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest font-['Outfit'] mb-2">
            <span>2027 Academic Year</span>
            <span aria-hidden="true">·</span>
            <span>Admissions Portal</span>
          </div>
          <h2 className="font-['Outfit'] font-black text-3xl sm:text-4xl text-slate-900 tracking-tight text-balance">
            Simple 4-Step Application for 2027
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We welcome learners from Grade RR to Grade 7. Spaces are allocated systematically to protect our low educator-to-learner ratios. Apply early to guarantee admission.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs relative">
            <div className="w-10 h-10 rounded-xl bg-red-600 text-white font-['Outfit'] font-black text-lg flex items-center justify-center mb-4">
              01
            </div>
            <h3 className="font-['Outfit'] font-bold text-base text-slate-900">
              Submit Application
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Complete the digital inquiry form online or pick up a printed admission packet at our school office in Umzimkhulu.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs relative">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white font-['Outfit'] font-black text-lg flex items-center justify-center mb-4">
              02
            </div>
            <h3 className="font-['Outfit'] font-bold text-base text-slate-900">
              Document Verification
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Provide certified copies of birth certificate, clinic card, parent IDs, and latest report card for review.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs relative">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white font-['Outfit'] font-black text-lg flex items-center justify-center mb-4">
              03
            </div>
            <h3 className="font-['Outfit'] font-bold text-base text-slate-900">
              Learner Consultation
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              A warm, informal readiness meeting with our educators to understand your child’s academic and developmental needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs relative">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-['Outfit'] font-black text-lg flex items-center justify-center mb-4">
              04
            </div>
            <h3 className="font-['Outfit'] font-bold text-base text-slate-900">
              Placement & Welcome
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Receive your official letter of acceptance, secure uniform fittings, and receive the 2027 stationery checklist.
            </p>
          </div>

        </div>

        {/* 2-Column Split: Document Checklist & Fee Estimator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Document Checklist */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-['Outfit'] font-bold text-xl text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-red-600" />
                  <span>Required Documents Checklist</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Check off what you have ready to speed up your 2027 registration.
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded">
                {Object.values(checkedDocs).filter(Boolean).length} of {REQUIRED_DOCUMENTS.length} Ready
              </span>
            </div>

            <div className="space-y-3 mt-6">
              {REQUIRED_DOCUMENTS.map((doc) => {
                const isChecked = !!checkedDocs[doc.id];
                return (
                  <div
                    key={doc.id}
                    onClick={() => toggleDoc(doc.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                      isChecked
                        ? 'bg-emerald-50/70 border-emerald-300 text-slate-900'
                        : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-slate-100/60'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isChecked ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <div className="w-5 h-5 rounded-md border-2 border-slate-300 bg-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-semibold ${isChecked ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                          {doc.title}
                        </span>
                        {doc.required && (
                          <span className="text-[10px] font-bold text-red-600 uppercase bg-red-50 px-1.5 py-0.5 rounded">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {doc.note}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Documents can be uploaded via the form or brought directly to the school office.</span>
              </div>
              <button
                onClick={onOpenForm}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
              >
                Proceed with Application
              </button>
            </div>
          </div>

          {/* Fee Estimator / Tuition Guide */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <Calculator className="w-5 h-5 text-amber-400" />
              <h3 className="font-['Outfit'] font-bold text-xl text-white">
                2027 Fee Estimator
              </h3>
            </div>
            <p className="text-xs text-slate-400">
              Affordable, transparent school fee plans tailored for Umzimkhulu families.
            </p>

            {/* Phase Selector */}
            <div className="mt-6">
              <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider font-['Outfit']">
                Select Phase
              </label>
              <div className="grid grid-cols-3 gap-1 bg-slate-800/80 p-1 rounded-lg border border-slate-700">
                <button
                  type="button"
                  onClick={() => setSelectedGradePhase('preschool')}
                  className={`py-1.5 text-xs font-semibold rounded transition-colors ${
                    selectedGradePhase === 'preschool' ? 'bg-red-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Grade RR & R
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedGradePhase('foundation')}
                  className={`py-1.5 text-xs font-semibold rounded transition-colors ${
                    selectedGradePhase === 'foundation' ? 'bg-red-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Grades 1 – 3
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedGradePhase('senior')}
                  className={`py-1.5 text-xs font-semibold rounded transition-colors ${
                    selectedGradePhase === 'senior' ? 'bg-red-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Grades 4 – 7
                </button>
              </div>
            </div>

            {/* Payment Interval Selector */}
            <div className="mt-4">
              <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider font-['Outfit']">
                Payment Option
              </label>
              <div className="grid grid-cols-3 gap-1 bg-slate-800/80 p-1 rounded-lg border border-slate-700">
                <button
                  type="button"
                  onClick={() => setPaymentPlan('monthly')}
                  className={`py-1.5 text-xs font-semibold rounded transition-colors ${
                    paymentPlan === 'monthly' ? 'bg-white text-slate-900 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Monthly (x10)
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentPlan('termly')}
                  className={`py-1.5 text-xs font-semibold rounded transition-colors ${
                    paymentPlan === 'termly' ? 'bg-white text-slate-900 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Per Term (x4)
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentPlan('annual')}
                  className={`py-1.5 text-xs font-semibold rounded transition-colors ${
                    paymentPlan === 'annual' ? 'bg-white text-slate-900 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Annual (Discount)
                </button>
              </div>
            </div>

            {/* Estimated Price Display */}
            <div className="mt-6 p-5 rounded-xl bg-slate-800/50 border border-slate-700/60 text-center">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-['Outfit']">
                Estimated Tuition Fee
              </span>
              <div className="mt-1 font-['Outfit'] font-black text-3xl sm:text-4xl text-amber-400 tabular-nums">
                R {currentFee[paymentPlan].toLocaleString()}
                <span className="text-xs text-slate-400 font-normal ml-1">
                  {paymentPlan === 'monthly' ? '/ month' : paymentPlan === 'termly' ? '/ term' : '/ year'}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-300">
                {currentFee.desc}
              </p>
              <div className="mt-3 text-[11px] text-slate-400 pt-2 border-t border-slate-700">
                Registration / Placement Fee: <span className="font-mono text-white font-bold">R {currentFee.reg}</span> (once-off for new learners)
              </div>
            </div>

            {/* In-Person Visit Reminder from poster */}
            <div className="mt-6 bg-red-950/60 border border-red-800/60 p-4 rounded-xl text-left">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-amber-300 font-['Outfit'] uppercase tracking-wider">
                    Visit Goodman School In Person
                  </h4>
                  <p className="text-xs text-red-200 mt-1 leading-relaxed">
                    You may also visit the school in Umzimkhulu for further information, hardcopy forms, and personalized consultations.
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1.5 flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-red-400" />
                    <span>07:30 – 15:30 (Monday – Friday)</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
