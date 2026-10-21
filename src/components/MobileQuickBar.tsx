import React from 'react';
import { Phone, MessageSquare, FilePenLine, Eye } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData.ts';

interface MobileQuickBarProps {
  onOpenAdmissions: () => void;
  onViewPoster: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenAdmissions, onViewPoster }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2 sm:hidden flex items-center justify-between gap-1 shadow-2xl">
      <a
        href={`tel:${SCHOOL_INFO.contacts[0].raw}`}
        className="flex-1 py-2 px-1 rounded-lg bg-slate-900 border border-slate-700/80 text-white flex flex-col items-center justify-center text-[10px] font-semibold active:bg-slate-800"
      >
        <Phone className="w-3.5 h-3.5 text-amber-400 mb-0.5" />
        <span>Call</span>
      </a>

      <a
        href="https://wa.me/27725063258?text=Hello%20Goodman%20Primary%20Admissions"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2 px-1 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-200 flex flex-col items-center justify-center text-[10px] font-semibold active:bg-emerald-900"
      >
        <MessageSquare className="w-3.5 h-3.5 text-emerald-400 mb-0.5" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onViewPoster}
        className="flex-1 py-2 px-1 rounded-lg bg-slate-900 border border-slate-700/80 text-slate-200 flex flex-col items-center justify-center text-[10px] font-semibold active:bg-slate-800 cursor-pointer"
      >
        <Eye className="w-3.5 h-3.5 text-red-400 mb-0.5" />
        <span>Poster</span>
      </button>

      <button
        onClick={onOpenAdmissions}
        className="flex-1 py-2 px-1 rounded-lg bg-red-600 text-white flex flex-col items-center justify-center text-[10px] font-bold shadow-md active:bg-red-700 cursor-pointer"
      >
        <FilePenLine className="w-3.5 h-3.5 mb-0.5" />
        <span>Apply 2027</span>
      </button>
    </div>
  );
};
