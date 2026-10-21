import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Sparkles, MessageSquare, AlertCircle, FileText } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData.ts';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGrade?: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  initialGrade = 'Grade 1'
}) => {
  const [parentName, setParentName] = useState('');
  const [learnerName, setLearnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState(initialGrade);
  const [year, setYear] = useState('2027');
  const [hasBirthCert, setHasBirthCert] = useState(false);
  const [hasClinicCard, setHasClinicCard] = useState(false);
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim()) {
      setErrorMsg('Please enter parent/guardian name');
      return;
    }
    if (!learnerName.trim()) {
      setErrorMsg('Please enter learner name');
      return;
    }
    if (!phone.trim() || phone.length < 9) {
      setErrorMsg('Please enter a valid telephone or WhatsApp number');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const ref = `GP27-${Math.floor(10000 + Math.random() * 90000)}`;
      setSubmittedRef(ref);
      setIsSubmitting(false);
    }, 600);
  };

  const getWhatsAppLink = () => {
    const msg = encodeURIComponent(
      `Hello Goodman Primary Admissions, I have submitted an online 2027 application inquiry (Ref: ${submittedRef}) for ${learnerName} entering ${grade}. Please advise on the next steps.`
    );
    return `https://wa.me/27725063258?text=${msg}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-red-700 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 bg-red-800 rounded-lg">
              <Sparkles className="w-4 h-4 text-amber-300" />
            </span>
            <div>
              <h3 className="font-['Outfit'] font-bold text-base text-white">
                Apply for 2027 Admissions
              </h3>
              <p className="text-xs text-red-100">
                Goodman Primary and Pre School · Grade RR to Grade 7
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-red-200 hover:text-white hover:bg-red-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {submittedRef ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-['Outfit'] font-black text-xl text-slate-900">
                Application Initiated!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Thank you, <strong className="text-slate-900">{parentName}</strong>. Your preliminary application for <strong className="text-slate-900">{learnerName}</strong> for <span className="font-bold text-red-600">{grade} ({year})</span> has been submitted.
              </p>

              <div className="my-5 p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-sm mx-auto text-xs font-mono space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-500">Ref Number:</span>
                  <span className="font-bold text-slate-900">{submittedRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Admissions Desk:</span>
                  <span className="font-bold text-slate-900">072 506 3258</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Campus Location:</span>
                  <span className="font-bold text-slate-900">Umzimkhulu</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 mb-6">
                Our admissions coordinator will reach out shortly on <strong className="text-slate-800">{phone}</strong>. You may also visit the school in Umzimkhulu to submit physical documents.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send WhatsApp Message</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase font-['Outfit']">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nomvula Sithole"
                    value={parentName}
                    onChange={(e) => {
                      setParentName(e.target.value);
                      setErrorMsg('');
                    }}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase font-['Outfit']">
                    Learner Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Child's full name"
                    value={learnerName}
                    onChange={(e) => {
                      setLearnerName(e.target.value);
                      setErrorMsg('');
                    }}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase font-['Outfit']">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="072 506 3258"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setErrorMsg('');
                    }}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase font-['Outfit']">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="parent@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase font-['Outfit']">
                    Grade Applying For *
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 font-semibold"
                  >
                    <option value="Grade RR">Grade RR (Ages 3-4)</option>
                    <option value="Grade R">Grade R (Reception)</option>
                    <option value="Grade 1">Grade 1 (Foundation)</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4 (Intermediate)</option>
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6">Grade 6</option>
                    <option value="Grade 7">Grade 7 (Senior)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase font-['Outfit']">
                    Enrollment Year *
                  </label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 font-semibold"
                  >
                    <option value="2027">2027 Academic Year</option>
                    <option value="2026">2026 Current Transfer</option>
                  </select>
                </div>
              </div>

              {/* Quick Document Status Checkboxes */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="block text-[11px] font-bold text-slate-700 uppercase font-['Outfit'] mb-2">
                  Documents you currently have:
                </span>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasBirthCert}
                      onChange={(e) => setHasBirthCert(e.target.checked)}
                      className="rounded text-red-600"
                    />
                    <span>Child's Birth Certificate copy ready</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasClinicCard}
                      onChange={(e) => setHasClinicCard(e.target.checked)}
                      className="rounded text-red-600"
                    />
                    <span>Clinic / Immunization card ready</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase font-['Outfit']">
                  Any questions or notes
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Requesting bus transport info, aftercare inquiry..."
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit 2027 Application'}
              </button>

              <div className="text-center text-[11px] text-slate-500 pt-1">
                You can also call <a href="tel:0725063258" className="font-mono text-slate-800 font-bold hover:underline">072 506 3258</a> or visit the school in Umzimkhulu.
              </div>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
