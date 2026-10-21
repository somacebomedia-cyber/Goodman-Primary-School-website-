import { SchoolEvent, GalleryItem, GradeOffering } from '../types.ts';

export const SCHOOL_INFO = {
  name: 'Goodman Primary and Pre School',
  shortName: 'Goodman Primary',
  motto: 'Soar Like An Eagle',
  corePromise: 'Quality Education for a Brighter Future',
  vision: 'Together we build CONFIDENT, KIND AND CAPABLE LEARNERS',
  pillars: [
    { key: 'READ', title: 'Strong Literacy', desc: 'Phonics, vocabulary immersion, and early reading fluency from Grade RR onwards.' },
    { key: 'LEARN', title: 'Academic Rigor', desc: 'CAPS-aligned foundational mathematics, science exploration, and critical thinking.' },
    { key: 'GROW', title: 'Character & Kindness', desc: 'Moral integrity, emotional resilience, social empathy, and teamwork.' },
    { key: 'SUCCEED', title: 'Holistic Excellence', desc: 'Equipping learners for senior schooling, leadership, and bright future careers.' }
  ],
  contacts: [
    { display: '072 506 3258', raw: '0725063258', intl: '+27725063258' },
    { display: '066 063 0766', raw: '0660630766', intl: '+27660630766' }
  ],
  email: 'admissions@goodmanschool.co.za',
  address: 'Umzimkhulu Central, Harry Gwala District, KwaZulu-Natal, South Africa',
  visitingHours: 'Monday – Friday: 07:30 – 15:30 | Saturday: By Appointment',
  gradesOffered: 'Grade RR – Grade 7',
  admissionsYear: '2027',
  admissionNotice: 'Applications are now officially OPEN for 2027 academic admissions across all grades (Grade RR to Grade 7). Spaces are limited to preserve low student-teacher ratios.'
};

export const GRADE_OFFERINGS: GradeOffering[] = [
  {
    id: 'grade-rr',
    name: 'Grade RR (Early Childhood)',
    code: 'Gr RR',
    phase: 'Pre-Primary',
    ageRange: '3 – 4 Years',
    focus: 'Sensory discovery, early language socialization, fine-motor coordination, and creative playful learning.',
    subjects: ['Play-Based Early Literacy', 'Sensory & Motor Development', 'Expressive Arts & Music', 'Social & Emotional Wellbeing'],
    features: ['Dedicated child-safe playground', 'Nurturing caregiver team', 'Small developmental playgroups', 'Nutritious snack routine'],
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'grade-r',
    name: 'Grade R (Reception Year)',
    code: 'Gr R',
    phase: 'Pre-Primary',
    ageRange: '4 – 5 Years',
    focus: 'School-readiness transition, phonemic awareness, pre-math concepts, independence and active problem solving.',
    subjects: ['Home Language / English Phonics', 'Emergent Mathematics', 'Life Skills & Creative Play', 'Physical Coordination'],
    features: ['Structured transition to big school', 'Storybook reading circles', 'Interactive learning manipulative toys', 'Guided group collaboration'],
    color: 'from-amber-600 to-red-600'
  },
  {
    id: 'foundation-phase',
    name: 'Foundation Phase (Grades 1 – 3)',
    code: 'Gr 1 – 3',
    phase: 'Foundation Phase',
    ageRange: '6 – 9 Years',
    focus: 'Fluent reading and writing, foundational arithmetic, digital curiosity, and good learning habits.',
    subjects: ['English Home / First Additional Language', 'Mathematics & Mental Math', 'Life Skills (Beginning Knowledge & Arts)', 'Physical Education'],
    features: ['Low student-to-teacher ratio', 'Personalized reading coaches', 'Classroom library access', 'Positive affirmation culture'],
    color: 'from-red-600 to-rose-700'
  },
  {
    id: 'intermediate-phase',
    name: 'Intermediate Phase (Grades 4 – 6)',
    code: 'Gr 4 – 6',
    phase: 'Intermediate Phase',
    ageRange: '9 – 12 Years',
    focus: 'Deep conceptual mastery, scientific inquiry, independent study skills, and athletic participation.',
    subjects: ['English & Additional Language', 'Mathematics', 'Natural Sciences & Technology', 'Social Sciences (History & Geography)', 'Life Skills'],
    features: ['Science experiments and projects', 'Public speaking and debates', 'Inter-house sports teams', 'Digital literacy introduction'],
    color: 'from-red-700 to-slate-900'
  },
  {
    id: 'senior-phase',
    name: 'Senior Phase (Grade 7)',
    code: 'Gr 7',
    phase: 'Senior Phase',
    ageRange: '12 – 13 Years',
    focus: 'Graduation preparation, high-school readiness, leadership roles, and economic literacy.',
    subjects: ['English & Additional Language', 'Mathematics', 'Natural Sciences', 'Social Sciences', 'Technology', 'Economic & Management Sciences', 'Life Orientation', 'Creative Arts'],
    features: ['Prefect & student leadership council', 'High school placement mentorship', 'Advanced research assignments', 'Valedictory & farewell celebration'],
    color: 'from-slate-900 to-zinc-950'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-hero-campus',
    title: 'Goodman Primary Campus & Grounds',
    category: 'Campus',
    image: '/src/assets/images/goodman_campus_grounds_1792581246234.jpg',
    caption: 'Our welcoming, modern red-brick classrooms and landscaped pathways at Goodman Primary & Pre School in Umzimkhulu.',
    tag: 'Campus Grounds'
  },
  {
    id: 'gal-classroom-learning',
    title: 'Engaged Learners in the Classroom',
    category: 'Academics',
    image: '/src/assets/images/classroom_learning_1792577914320.jpg',
    caption: 'Learners actively participating in collaborative reading and mathematics sessions.',
    tag: 'Academic Excellence'
  },
  {
    id: 'gal-preschool-play',
    title: 'Grade RR & R Early Childhood Center',
    category: 'Early Childhood',
    image: '/src/assets/images/preschool_activities_1792577915213.jpg',
    caption: 'Safe, stimulating environment where our youngest eagles play, explore, and build solid foundations.',
    tag: 'Grade RR - R'
  },
  {
    id: 'gal-sports-day',
    title: 'Athletics & Team Spirit',
    category: 'Sports & Culture',
    image: '/src/assets/images/sports_and_culture_1792577915837.jpg',
    caption: 'Celebrating sportsmanship, vitality, and camaraderie on our open sports field.',
    tag: 'School Spirit'
  },
  {
    id: 'gal-official-crest',
    title: 'Official School Emblem & Crest',
    category: 'Official Poster',
    image: '/school-logo.png',
    caption: 'The heraldic Goodman Primary and Pre School eagle coat of arms and laurel wreath bearing the motto "Soar Like An Eagle".',
    tag: 'School Crest'
  },
  {
    id: 'gal-poster-official',
    title: 'Official 2027 Admissions Announcement',
    category: 'Official Poster',
    image: '/assets/aistudio/Screenshot_20261019-054220_4ed62adf.jpg',
    caption: 'The official Goodman Primary and Pre School poster: Applications Open For 2027 (Grade RR - 7).',
    tag: 'Official Notice'
  }
];

export const UPCOMING_EVENTS: SchoolEvent[] = [
  {
    id: 'evt-1',
    title: '2027 Admissions Open Day & Campus Walkthrough',
    date: '2026-11-07',
    displayDate: 'Saturday, 07 November 2026',
    time: '09:00 – 12:30',
    location: 'Main School Hall & Pre-School Pavilion',
    category: 'Admissions',
    description: 'Prospective parents and learners are invited to tour classrooms, meet our passionate educators, inspect facilities, and complete early registration for 2027.',
    isUpcoming: true,
    targetGrades: 'Grade RR – Grade 7'
  },
  {
    id: 'evt-2',
    title: 'Inter-House Athletics & Summer Sports Day',
    date: '2026-11-21',
    displayDate: 'Saturday, 21 November 2026',
    time: '08:30 – 14:00',
    location: 'Goodman School Sports Grounds',
    category: 'Sports',
    description: 'An exciting day of track races, field challenges, sack races for Grade RR, and friendly parent-teacher relays. Refreshments and community braai available.',
    isUpcoming: true,
    targetGrades: 'All Grades'
  },
  {
    id: 'evt-3',
    title: 'Literacy Celebration & Read-A-Thon Showcase',
    date: '2026-12-01',
    displayDate: 'Tuesday, 01 December 2026',
    time: '10:00 – 13:00',
    location: 'Goodman Learning Resource Center',
    category: 'Academics',
    description: 'Showcasing our learners’ reading milestones, spelling bees, book costume parade, and poetry recitals upholding our motto: READ, LEARN, GROW, SUCCEED.',
    isUpcoming: true,
    targetGrades: 'Grade 1 – Grade 7'
  },
  {
    id: 'evt-4',
    title: 'Grade RR & R Graduation & Year-End Concert',
    date: '2026-12-08',
    displayDate: 'Tuesday, 08 December 2026',
    time: '09:30 – 12:00',
    location: 'Goodman School Assembly Amphitheatre',
    category: 'Cultural',
    description: 'A heartwarming celebration honoring our Grade R graduates moving to Grade 1 in 2027, featuring musical performances, drama skits, and diploma awards.',
    isUpcoming: true,
    targetGrades: 'Grade RR & Grade R'
  },
  {
    id: 'evt-5',
    title: 'Annual Academic Prize Giving & Grade 7 Farewell',
    date: '2026-12-11',
    displayDate: 'Friday, 11 December 2026',
    time: '10:00 – 13:30',
    location: 'Goodman Assembly Hall',
    category: 'Academics',
    description: 'Commending exceptional academic achievement, character awards, leadership trophies, and wishing our valedictorian Grade 7 class soaring success in high school.',
    isUpcoming: true,
    targetGrades: 'Grade 4 – Grade 7'
  },
  {
    id: 'evt-6',
    title: '2027 New Families Welcome & Orientation Morning',
    date: '2027-01-13',
    displayDate: 'Wednesday, 13 January 2027',
    time: '08:00 – 11:00',
    location: 'Classrooms & Administrative Courtyard',
    category: 'Admissions',
    description: 'Welcoming all newly enrolled learners for 2027. Textbook collection, uniform fittings, stationery handovers, and teacher meet-and-greets before term starts.',
    isUpcoming: false,
    targetGrades: 'New 2027 Learners'
  }
];

export const REQUIRED_DOCUMENTS = [
  { id: 'doc-birth', title: 'Certified Copy of Child’s Birth Certificate', required: true, note: 'Must clearly show full names and ID/date of birth.' },
  { id: 'doc-clinic', title: 'Immunization / Clinic Road-to-Health Card', required: true, note: 'Crucial for Pre-School and Foundation Phase health records.' },
  { id: 'doc-parents', title: 'Certified Copies of Both Parents’ / Guardians’ IDs', required: true, note: 'Or legal guardianship / court documentation if applicable.' },
  { id: 'doc-report', title: 'Latest School Report Card', required: true, note: 'Required for applicants entering Grade 1 through Grade 7.' },
  { id: 'doc-transfer', title: 'Official Transfer Card from Previous School', required: true, note: 'Submitted once admission is approved before term commencement.' },
  { id: 'doc-residence', title: 'Proof of Residential Address in Umzimkhulu', required: false, note: 'Utility bill, lease agreement, or traditional authority letter.' }
];

export const FAQS = [
  {
    q: 'When do 2027 applications close?',
    a: 'Admissions are handled on a rolling first-come, first-evaluated basis. Due to strict classroom capacity limits to ensure individual attention, parents are strongly advised to apply as early as possible.'
  },
  {
    q: 'Can parents visit the school in Umzimkhulu in person?',
    a: 'Yes, absolutely! As indicated on our official notice, parents are warmly invited to visit Goodman Primary during school office hours (07:30 to 15:30 on weekdays) to tour our facilities and collect admission packs.'
  },
  {
    q: 'What age does a child need to be for Grade RR and Grade R?',
    a: 'For Grade RR, children should turn 4 during the school year. For Grade R, children should turn 5 by 30 June of the admission year.'
  },
  {
    q: 'How do I submit an application?',
    a: 'You can submit the online enquiry form below, call our admissions office at 072 506 3258 or 066 063 0766, or visit the school campus in Umzimkhulu directly.'
  }
];
