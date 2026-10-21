import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, Maximize2, Tag, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/schoolData.ts';
import { GalleryItem } from '../types.ts';

export const InteractiveGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Campus', 'Academics', 'Early Childhood', 'Sports & Culture', 'Official Poster'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest font-['Outfit'] mb-2">
            <span>Visual Tour</span>
            <span aria-hidden="true">·</span>
            <span>School Life in Umzimkhulu</span>
          </div>
          <h2 className="font-['Outfit'] font-black text-3xl sm:text-4xl text-slate-900 tracking-tight text-balance">
            Interactive Campus & Learner Gallery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Experience the vibrant life at Goodman Primary and Pre School — from our green sports grounds and bright classrooms to our early childhood play centers and official 2027 announcements.
          </p>
        </div>

        {/* Filter Tabs (Interactive Filter Controls as functional buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-red-600 text-white shadow-xs font-bold'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200 flex flex-col"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Hover Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-3 rounded-full bg-white/90 text-slate-900 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>

                {/* Category Tag Badge */}
                <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-bold text-white font-['Outfit'] tracking-wide">
                  {item.tag}
                </div>
              </div>

              {/* Card Footer Caption */}
              <div className="p-5 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-['Outfit'] font-bold text-base text-slate-900 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-red-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View photo</span>
                    <Eye className="w-3.5 h-3.5" />
                  </span>
                  <span>Goodman Primary</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200 select-none">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-red-600 text-white rounded text-xs font-bold font-['Outfit']">
                {currentItem.tag}
              </span>
              <span className="text-sm font-semibold text-slate-200 hidden sm:inline">
                {currentItem.title}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-slate-400">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Central Image Viewer with Navigation Arrows */}
          <div className="relative flex-1 flex items-center justify-center py-4 overflow-hidden">
            
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 z-10 p-3 rounded-full bg-slate-900/80 hover:bg-red-600 text-white border border-slate-700 hover:border-red-500 transition-all cursor-pointer shadow-lg"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="max-w-5xl max-h-[75vh] flex items-center justify-center p-2">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-slate-800"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 z-10 p-3 rounded-full bg-slate-900/80 hover:bg-red-600 text-white border border-slate-700 hover:border-red-500 transition-all cursor-pointer shadow-lg"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Caption and Details */}
          <div className="pt-4 border-t border-slate-800 text-center max-w-2xl mx-auto">
            <h4 className="text-base font-bold text-white font-['Outfit'] sm:hidden">
              {currentItem.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              {currentItem.caption}
            </p>
            <p className="text-[11px] text-slate-500 mt-2">
              Tip: Use Left and Right arrow keys or buttons to browse · Esc to close
            </p>
          </div>

        </div>
      )}
    </section>
  );
};
