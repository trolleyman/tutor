
export const firstName = `Elizabeth`; // Liz Margaret (?)

export const lastName = `Campbell`;

export const fullName = `${firstName} ${lastName}`;

export const email = "hi@elizabethmcampbell.co.uk";

export const phoneNumber = "+44 7720 879104";

export const whatsAppText = "Hi, I'm interested in tutoring services."

export const whatsAppLink = `https://api.whatsapp.com/send/?phone=${phoneNumber.replace(/\D/g, '')}&text=${encodeURIComponent(whatsAppText)}&type=phone_number&app_absent=0`;

export const sections = {
  about: { id: 'about', name: 'About' },
  subjects: { id: 'subjects', name: 'Subjects' },
  pricing: { id: 'pricing', name: 'Pricing' },
  contact: { id: 'contact', name: 'Contact' },
} satisfies { [key: string]: { id: string, name: string } }

// Toggle to show/hide emoji icons on subjects
export const showSubjectIcons = false;

type Subject = {
  id: string;
  name: string;
  icon?: string;
}

export const subjects: { [key: string]: Subject } = {
  english: {
    id: 'english',
    name: 'English',
    icon: '📚',
  },
  sociology: {
    id: 'sociology',
    name: 'Sociology',
    icon: '👥',
  },
  oxbridgeApplications: {
    id: 'oxbridge-applications',
    name: 'Oxbridge Applications',
    icon: '🎓',
  },
  personalStatements: {
    id: 'personal-statements',
    name: 'Personal Statements',
    icon: '✍️',
  },
  internationalBaccalaureate: {
    id: 'international-baccalaureate',
    name: 'International Baccalaureate',
    icon: '🌍',
  },
  japanese: {
    id: 'japanese',
    name: 'Japanese',
    icon: '🇯🇵',
  },
  history: {
    id: 'history',
    name: 'History',
    icon: '🏛️',
  },
  filmStudies: {
    id: 'film-studies',
    name: 'Film Studies',
    icon: '🎬',
  },
  mediaStudies: {
    id: 'media-studies',
    name: 'Media Studies',
    icon: '📺',
  },
  religiousStudies: {
    id: 'religious-studies',
    name: 'Religious Studies',
    icon: '⛪',
  },
  politics: {
    id: 'politics',
    name: 'Politics',
    icon: '🏛️',
  },
  anthropology: {
    id: 'anthropology',
    name: 'Anthropology',
    icon: '🌏',
  },
  psychology: {
    id: 'psychology',
    name: 'Psychology',
    icon: '🧠',
  },
  philosophy: {
    id: 'philosophy',
    name: 'Philosophy',
    icon: '💭',
  },
  internationalRelations: {
    id: 'international-relations',
    name: 'International Relations',
    icon: '🤝',
  },
}
