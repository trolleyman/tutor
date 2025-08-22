
export const firstName = `Elizabeth`; // Liz Margaret (?)

export const lastName = `Campbell`;

export const fullName = `${firstName} ${lastName}`;

export const email = "hi@elizabethmcampbell.co.uk";

export const sections = {
  about: { id: 'about', name: 'About' },
  subjects: { id: 'subjects', name: 'Subjects' },
  pricing: { id: 'pricing', name: 'Pricing' },
  contact: { id: 'contact', name: 'Contact' },
} satisfies { [key: string]: { id: string, name: string } }

export const subjects = {
  english: { id: 'english', name: 'English' },
  sociology: { id: 'sociology', name: 'Sociology' },
  oxbridgeApplications: { id: 'oxbridge-applications', name: 'Oxbridge Applications' },
  personalStatements: { id: 'personal-statements', name: 'Personal Statements' },
  internationalBaccalaureate: { id: 'international-baccalaureate', name: 'International Baccalaureate' },
  japanese: { id: 'japanese', name: 'Japanese' },
  history: { id: 'history', name: 'History' },
  filmStudies: { id: 'film-studies', name: 'Film Studies' },
  mediaStudies: { id: 'media-studies', name: 'Media Studies' },
  religiousStudies: { id: 'religious-studies', name: 'Religious Studies' },
  politics: { id: 'politics', name: 'Politics' },
  anthropology: { id: 'anthropology', name: 'Anthropology' },
  psychology: { id: 'psychology', name: 'Psychology' },
  philosophy: { id: 'philosophy', name: 'Philosophy' },
  internationalRelations: { id: 'international-relations', name: 'International Relations' },
} satisfies { [key: string]: { id: string, name: string } }
