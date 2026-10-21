export interface SchoolEvent {
  id: string;
  title: string;
  date: string; // ISO date string e.g. "2026-11-15"
  displayDate: string;
  time: string;
  location: string;
  category: 'Admissions' | 'Academics' | 'Sports' | 'Cultural' | 'Parent Forum';
  description: string;
  isUpcoming: boolean;
  targetGrades: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Academics' | 'Early Childhood' | 'Sports & Culture' | 'Official Poster';
  image: string;
  caption: string;
  tag: string;
}

export interface GradeOffering {
  id: string;
  name: string;
  code: string;
  phase: 'Pre-Primary' | 'Foundation Phase' | 'Intermediate Phase' | 'Senior Phase';
  ageRange: string;
  focus: string;
  subjects: string[];
  features: string[];
  color: string;
}

export interface ContactFormData {
  parentName: string;
  learnerName: string;
  phone: string;
  email: string;
  grade: string;
  year: '2027' | '2026';
  visitDate: string;
  message: string;
}
