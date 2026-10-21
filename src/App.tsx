/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { AcademicPrograms } from './components/AcademicPrograms.tsx';
import { AdmissionsGuide } from './components/AdmissionsGuide.tsx';
import { InteractiveGallery } from './components/InteractiveGallery.tsx';
import { EventsCalendar } from './components/EventsCalendar.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { PosterModal } from './components/PosterModal.tsx';
import { ApplicationModal } from './components/ApplicationModal.tsx';
import { MobileQuickBar } from './components/MobileQuickBar.tsx';

export default function App() {
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [selectedGradeForApplication, setSelectedGradeForApplication] = useState('Grade 1');

  const handleOpenAdmissions = (grade = 'Grade 1') => {
    setSelectedGradeForApplication(grade);
    setIsApplicationModalOpen(true);
  };

  const handleScrollToForm = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsApplicationModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 pb-16 sm:pb-0">
      {/* Top Header Navigation */}
      <Header
        onOpenAdmissions={() => handleOpenAdmissions('Grade 1')}
        onViewPoster={() => setIsPosterModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenAdmissions={() => handleOpenAdmissions('Grade 1')}
          onViewPoster={() => setIsPosterModalOpen(true)}
        />

        {/* About School & Core Values */}
        <AboutSection
          onViewPoster={() => setIsPosterModalOpen(true)}
          onOpenAdmissions={() => handleOpenAdmissions('Grade 1')}
        />

        {/* Academic Programs (Grade RR to 7) */}
        <AcademicPrograms
          onApplyForGrade={(gradeCode) => handleOpenAdmissions(gradeCode)}
        />

        {/* 2027 Admissions Guide, Checklist & Fee Estimator */}
        <AdmissionsGuide
          onOpenForm={handleScrollToForm}
          onViewPoster={() => setIsPosterModalOpen(true)}
        />

        {/* Interactive Campus Gallery with Lightbox */}
        <InteractiveGallery />

        {/* Dedicated Upcoming Events Calendar with .ics Export */}
        <EventsCalendar />

        {/* Contact Form, Verified Phone Numbers & Map Info */}
        <ContactSection
          preselectedGrade={selectedGradeForApplication}
          onViewPoster={() => setIsPosterModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onViewPoster={() => setIsPosterModalOpen(true)}
        onOpenAdmissions={() => handleOpenAdmissions('Grade 1')}
      />

      {/* Full-Resolution School Poster Inspection Modal */}
      <PosterModal
        isOpen={isPosterModalOpen}
        onClose={() => setIsPosterModalOpen(false)}
        onApply={() => handleOpenAdmissions('Grade 1')}
      />

      {/* Quick 2027 Application Modal */}
      <ApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
        initialGrade={selectedGradeForApplication}
      />

      {/* Mobile Bottom Quick-Access Thumb Bar */}
      <MobileQuickBar
        onOpenAdmissions={() => handleOpenAdmissions('Grade 1')}
        onViewPoster={() => setIsPosterModalOpen(true)}
      />
    </div>
  );
}
