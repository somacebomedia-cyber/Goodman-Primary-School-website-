import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, AlertCircle, Share2, Sparkles } from 'lucide-react';
import { SCHOOL_INFO, FAQS } from '../data/schoolData.ts';
import { ContactFormData } from '../types.ts';

interface ContactSectionProps {
  preselectedGrade?: string;
  onViewPoster: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedGrade = '', onViewPoster }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    parentName: '',
    learnerName: '',
    phone: '',
    email: '',
    grade: preselectedGrade || 'Grade 1',
    year: '2027',
    visitDate: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [referenceNum, setReferenceNum] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.parentName.trim()) {
      setErrorMsg('Please enter parent or guardian name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      setErrorMsg('Please enter a valid South African phone number.');
      return;
    }
    if (!formData.learnerName.trim()) {
      setErrorMsg('Please enter the learner’s name.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable form submission
    setTimeout(() => {
      const generatedRef = `GP-2027-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceNum(generatedRef);
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 700);
  };

  // WhatsApp direct message generator
  const getWhatsAppUrl = (phoneRaw: string) => {
    const text = encodeURIComponent(
      `Hello Goodman Primary Admissions, I would like to inquire about 2027 admission for ${formData.learnerName || 'my child'} for ${formData.grade}.`
    );
    const intlPhone = phoneRaw.startsWith('0') ? '27' + phoneRaw.slice(1) : phoneRaw;
    return `https://wa.me/${intlPhone}?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest font-['Outfit'] mb-2">
            <span>Get in Touch</span>
            <span aria-hidden="true">·</span>
            <span>Admissions Office</span>
          </div>
          <h2 className="font-['Outfit'] font-black text-3xl sm:text-4xl text-slate-900 tracking-tight text-balance">
            Contact Us & Visit Goodman Primary
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions about 2027 admissions, curriculum, or school fees? Call our office, message us on WhatsApp, or book a visit to our campus in Umzimkhulu.
          </p>
        </div>

        {/* 2-Column Split: Direct Contact Cards + Contact/Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Phone Numbers & School Visit Notice from poster */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* The Main Poster Highlight Box for Phone Numbers */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-widest text-amber-400 uppercase font-['Outfit']">
                  Direct School Contact
                </span>
                <span className="text-[10px] font-mono bg-red-600/30 text-red-300 border border-red-500/30 px-2 py-0.5 rounded">
                  2027 Inquiries
                </span>
              </div>

              <h3 className="font-['Outfit'] font-black text-2xl text-white">
                Call the School Office
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Our admissions officers are available to assist with registration and answers.
              </p>

              {/* Verified Phone Cards from Poster */}
              <div className="mt-6 space-y-3">
                {SCHOOL_INFO.contacts.map((contact, idx) => (
                  <div
                    key={contact.raw}
                    className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between group hover:border-red-500 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-sm">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs text-slate-400 font-medium">Line {idx + 1}</span>
                        <a
                          href={`tel:${contact.raw}`}
                          className="font-mono font-bold text-lg text-white group-hover:text-amber-400 transition-colors"
                        >
                          {contact.display}
                        </a>
                      </div>
                    </div>

                    <a
                      href={getWhatsAppUrl(contact.raw)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                ))}
              </div>

              {/* Poster Location Callout Note */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-['Outfit'] font-bold text-sm text-amber-300 uppercase tracking-wide">
                      Visit the School in Umzimkhulu
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      "You may also visit the school for further information." Parents are warmly welcomed to tour our classrooms and review academic materials in person.
                    </p>
                    <p className="text-xs text-slate-400 mt-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-red-400" />
                      <span>{SCHOOL_INFO.visitingHours}</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick School Map & Address Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left">
              <h4 className="font-['Outfit'] font-bold text-base text-slate-900 mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-600" />
                <span>School Address & Location</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {SCHOOL_INFO.address}
              </p>
              <div className="mt-3 text-xs text-slate-500">
                Easily accessible via main routes in Umzimkhulu with designated learner drop-off and parking areas.
              </div>
              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={onViewPoster}
                  className="text-xs font-bold text-red-600 hover:text-red-700 underline underline-offset-4 cursor-pointer"
                >
                  View Original School Poster
                </button>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left">
              <h4 className="font-['Outfit'] font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                <Share2 className="w-4 h-4 text-red-600" />
                <span>Connect on Social Media</span>
              </h4>
              <p className="text-xs text-slate-600 mb-4">
                Follow Goodman Primary on community channels for school announcements, student achievements, and photo galleries:
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <a
                  href={`https://wa.me/27725063258`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>WhatsApp Community</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>Facebook Page</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-red-50 text-red-800 border border-red-200 hover:bg-red-100 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>YouTube Channel</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 2027 Application & Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            
            {formSubmitted ? (
              <div className="text-center py-12 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-['Outfit'] font-black text-2xl text-slate-900">
                  Application Request Received!
                </h3>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.parentName}</strong>. Our admissions team at Goodman Primary in Umzimkhulu has recorded your 2027 inquiry for <strong className="text-slate-900">{formData.learnerName}</strong> ({formData.grade}).
                </p>

                <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-sm mx-auto text-left text-xs space-y-1.5 font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Reference:</span>
                    <span className="font-bold text-slate-900">{referenceNum}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Contact Number:</span>
                    <span className="font-bold text-slate-900">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Admission Year:</span>
                    <span className="font-bold text-red-600 font-bold">{formData.year}</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppUrl(SCHOOL_INFO.contacts[0].raw)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Follow Up via WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        parentName: '',
                        learnerName: '',
                        phone: '',
                        email: '',
                        grade: 'Grade 1',
                        year: '2027',
                        visitDate: '',
                        message: ''
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-['Outfit'] font-black text-2xl text-slate-900 tracking-tight">
                    2027 Admissions Inquiry Form
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out this form to begin enrollment for Grade RR through Grade 7.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Parent & Learner Names */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase font-['Outfit']">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      placeholder="e.g. Sipho Dlamini"
                      value={formData.parentName}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase font-['Outfit']">
                      Learner Full Name *
                    </label>
                    <input
                      type="text"
                      name="learnerName"
                      required
                      placeholder="e.g. Amahle Dlamini"
                      value={formData.learnerName}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-slate-900"
                    />
                  </div>
                </div>

                {/* Contact Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase font-['Outfit']">
                      Parent Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 072 123 4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-slate-900 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase font-['Outfit']">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="parent@example.co.za"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-slate-900"
                    />
                  </div>
                </div>

                {/* Grade and Year */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase font-['Outfit']">
                      Grade Applying For *
                    </label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-slate-900 font-semibold"
                    >
                      <option value="Grade RR">Grade RR (Age 3-4 Pre-School)</option>
                      <option value="Grade R">Grade R (Age 4-5 Pre-School)</option>
                      <option value="Grade 1">Grade 1 (Foundation Phase)</option>
                      <option value="Grade 2">Grade 2</option>
                      <option value="Grade 3">Grade 3</option>
                      <option value="Grade 4">Grade 4 (Intermediate Phase)</option>
                      <option value="Grade 5">Grade 5</option>
                      <option value="Grade 6">Grade 6</option>
                      <option value="Grade 7">Grade 7 (Senior Phase)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase font-['Outfit']">
                      Admission Year *
                    </label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-slate-900 font-semibold"
                    >
                      <option value="2027">2027 Academic Year (Main Enrollment)</option>
                      <option value="2026">Immediate Transfer (Current Year)</option>
                    </select>
                  </div>
                </div>

                {/* Preferred School Visit Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase font-['Outfit']">
                    Preferred School Visit / Tour Date (Optional)
                  </label>
                  <input
                    type="date"
                    name="visitDate"
                    value={formData.visitDate}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-slate-900"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    Visiting hours: 07:30 – 15:30 Monday through Friday.
                  </p>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase font-['Outfit']">
                    Questions or Special Notes
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about your child's interests, previous schooling, or questions about fees and stationery..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-slate-900"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm rounded-xl shadow-lg shadow-red-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Application Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit 2027 Application Inquiry</span>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-slate-500 pt-2">
                  🔒 Information provided is handled confidentially by the Goodman Primary Admissions Secretariat.
                </p>
              </form>
            )}

          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h3 className="font-['Outfit'] font-black text-2xl text-slate-900">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Common questions from Umzimkhulu parents regarding admission and schooling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {FAQS.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left">
                <h4 className="font-['Outfit'] font-bold text-sm text-slate-900 mb-2">
                  {faq.q}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
