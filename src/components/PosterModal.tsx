import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Phone, Download, Check, Sparkles, ExternalLink } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData.ts';

interface PosterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
}

export const PosterModal: React.FC<PosterModalProps> = ({ isOpen, onClose, onApply }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-red-600/20 text-red-400 rounded-md">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h2 className="text-base font-bold text-white font-['Outfit']">
                Official Goodman Primary Poster · 2027 Admissions
              </h2>
              <p className="text-xs text-slate-400">
                Grade RR – 7 · Goodman Primary and Pre School, Umzimkhulu
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
              <button
                onClick={() => setZoomLevel(Math.max(0.8, zoomLevel - 0.2))}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-slate-300 px-2">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => setZoomLevel(Math.min(2, zoomLevel + 0.2))}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Close poster view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Poster Viewer Container */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-neutral-950 flex justify-center items-center select-none">
          <div
            className="transition-transform duration-200 origin-center max-w-full"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src="/assets/aistudio/Screenshot_20261019-054220_4ed62adf.jpg"
              alt="Goodman Primary and Pre School Applications Open for 2027 Official Poster"
              className="max-h-[65vh] w-auto rounded-lg shadow-2xl border border-slate-800 object-contain mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Footer Bar with Verified Contacts & Call-to-action */}
        <div className="px-5 py-4 border-t border-slate-800 bg-slate-900/95 flex flex-wrap items-center justify-between gap-4">
          
          {/* Quick Click-to-Call Contact Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">Quick Dial:</span>
            {SCHOOL_INFO.contacts.map((contact) => (
              <div key={contact.raw} className="flex items-center gap-1">
                <a
                  href={`tel:${contact.raw}`}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold bg-slate-800 hover:bg-red-600 text-slate-200 hover:text-white rounded-md border border-slate-700 transition-colors"
                >
                  <Phone className="w-3 h-3 text-amber-400" />
                  <span>{contact.display}</span>
                </a>
                <button
                  onClick={() => handleCopy(contact.raw)}
                  className="p-1 text-slate-400 hover:text-white rounded text-[11px]"
                  title="Copy number"
                >
                  {copiedPhone === contact.raw ? <Check className="w-3 h-3 text-emerald-400" /> : 'Copy'}
                </button>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="/assets/aistudio/Screenshot_20261019-054220_4ed62adf.jpg"
              download="Goodman_Primary_2027_Poster.jpg"
              className="px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors inline-flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Poster</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onApply();
              }}
              className="px-4 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-500 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Apply Online Now
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
