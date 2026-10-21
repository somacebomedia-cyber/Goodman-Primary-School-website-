import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Users, Download, Search, Check, ExternalLink, Filter } from 'lucide-react';
import { UPCOMING_EVENTS } from '../data/schoolData.ts';
import { SchoolEvent } from '../types.ts';

export const EventsCalendar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedEventId, setCopiedEventId] = useState<string | null>(null);

  const categories = ['All', 'Admissions', 'Sports', 'Academics', 'Cultural'];

  const filteredEvents = UPCOMING_EVENTS.filter((evt) => {
    const matchesCat = selectedCategory === 'All' || evt.category === selectedCategory;
    const matchesQuery = searchQuery.trim() === '' ||
      evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  // Generates and triggers download of .ics iCalendar file
  const downloadICS = (event: SchoolEvent) => {
    // Format date string to YYYYMMDD
    const cleanDate = event.date.replace(/-/g, '');
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Goodman Primary and Pre School//Events Calendar//EN',
      'BEGIN:VEVENT',
      `UID:${event.id}@goodmanprimary.co.za`,
      `DTSTAMP:${cleanDate}T000000Z`,
      `DTSTART:${cleanDate}T080000Z`,
      `DTEND:${cleanDate}T130000Z`,
      `SUMMARY:${event.title} - Goodman Primary`,
      `DESCRIPTION:${event.description.replace(/\n/g, ' ')}`,
      `LOCATION:${event.location}, Goodman Primary and Pre School, Umzimkhulu`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.id}_goodman_event.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCopiedEventId(event.id);
    setTimeout(() => setCopiedEventId(null), 2500);
  };

  return (
    <section id="events" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest font-['Outfit'] mb-2">
            <span>Official Schedule</span>
            <span aria-hidden="true">·</span>
            <span>Upcoming School Functions</span>
          </div>
          <h2 className="font-['Outfit'] font-black text-3xl sm:text-4xl text-slate-900 tracking-tight text-balance">
            Goodman Primary Events Calendar
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Stay connected with our school community. Keep track of 2027 Admissions Open Days, sports competitions, literacy showcases, and celebratory graduation ceremonies in Umzimkhulu.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-red-600 text-white font-bold shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search school events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-slate-800"
            />
          </div>

        </div>

        {/* Events List Grid */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <CalendarIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="font-['Outfit'] font-bold text-lg text-slate-800">
              No matching school events found
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Try adjusting your search criteria or selecting another category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((evt) => {
              const eventDateObj = new Date(evt.date);
              const dayOfMonth = eventDateObj.getDate();
              const monthName = eventDateObj.toLocaleString('en-US', { month: 'short' }).toUpperCase();
              const yearNum = eventDateObj.getFullYear();

              return (
                <div
                  key={evt.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Date Header & Category Tag */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      {/* Calendar Badge */}
                      <div className="flex flex-col items-center justify-center w-14 h-16 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 group-hover:border-red-500 transition-colors">
                        <span className="text-[10px] font-bold text-red-600 uppercase font-['Outfit'] tracking-wider">
                          {monthName}
                        </span>
                        <span className="text-xl font-black font-['Outfit'] text-slate-900 tabular-nums leading-none mt-0.5">
                          {dayOfMonth}
                        </span>
                        <span className="text-[9px] text-slate-400 font-mono mt-0.5">
                          {yearNum}
                        </span>
                      </div>

                      {/* Category & Grade Level Tag */}
                      <div className="text-right">
                        <span className="inline-block px-2.5 py-1 text-[11px] font-bold rounded-md bg-slate-100 text-slate-700 font-['Outfit']">
                          {evt.category}
                        </span>
                        <span className="block text-[11px] text-slate-400 mt-1 font-mono">
                          {evt.targetGrades}
                        </span>
                      </div>
                    </div>

                    {/* Event Title */}
                    <h3 className="font-['Outfit'] font-bold text-lg text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                      {evt.title}
                    </h3>

                    {/* Event Description */}
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {evt.description}
                    </p>

                    {/* Location and Time metadata */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-red-600 shrink-0" />
                        <span className="font-mono">{evt.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
                        <span className="truncate">{evt.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA: Add to Calendar */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-medium">
                      Umzimkhulu Campus
                    </span>
                    <button
                      onClick={() => downloadICS(evt)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-red-600 text-slate-700 hover:text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                      title="Save to iPhone, Google, or Outlook Calendar"
                    >
                      {copiedEventId === evt.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Saved (.ics)</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span>Add to Calendar</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Notice on Term Dates */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-100 text-red-700 rounded-xl">
              <CalendarIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-['Outfit'] font-bold text-sm text-slate-900">
                School Terms & Holiday Academic Calendars
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Goodman Primary follows the official KwaZulu-Natal / Department of Basic Education four-term annual school calendar.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap"
          >
            Request Term Timetable
          </a>
        </div>

      </div>
    </section>
  );
};
