import React from 'react';

interface EmblemProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const GoodmanEmblem: React.FC<EmblemProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-28 h-28',
    xl: 'w-40 h-40',
  };

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <div className={`relative ${sizeMap[size]} transition-transform duration-300 hover:scale-105 shrink-0 flex items-center justify-center`}>
        <img
          src="/school-logo.png"
          alt="Official Goodman Primary Coat of Arms - Soar Like An Eagle"
          className="w-full h-full object-contain drop-shadow-md"
          referrerPolicy="no-referrer"
        />
      </div>

      {showText && size !== 'sm' && (
        <div className="mt-2 text-center">
          <span className="block font-['Outfit'] font-black text-slate-900 tracking-wider text-xs md:text-sm uppercase">
            Goodman Primary
          </span>
          <span className="block font-semibold text-red-600 text-[10px] tracking-widest uppercase">
            & Pre School · Umzimkhulu
          </span>
        </div>
      )}
    </div>
  );
};
