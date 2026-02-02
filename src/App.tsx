import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { fullName, email, sections, subjects, whatsAppLink, phoneNumber } from './data/tutoring';
import { Header, handleNavClick } from './components/Header';
import React from 'react';

import './App.css'

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 pt-32 pb-24 px-4 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          <div className="text-center lg:text-left lg:pr-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-3 text-gray-900 tracking-tight">{fullName}</h1>
            <p className="text-xl text-blue-800 font-medium mb-4">
              Private Tutor | University of Cambridge MA (Hons)
            </p>
            <p className="text-lg text-gray-700 max-w-lg leading-relaxed">
              Specialising in English, Social Sciences, and University Admissions
            </p>
          </div>
          <div className="mt-10 lg:mt-0 relative group">
            {/* Animated gradient ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full blur-sm opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full blur-md opacity-30 animate-pulse"></div>
            <img
              src="/headshot.jpg"
              alt={fullName}
              className="relative w-40 lg:w-52 h-40 lg:h-52 rounded-full shadow-xl object-cover flex-shrink-0 ring-4 ring-white"
            />
          </div>
        </div>
      </section>
      <Section id={sections.about.id}>
        <Paragraph>
          Hi, my name is Elizabeth Campbell. I graduated from the University of Cambridge in 2017 with a degree in Human, Social and Political Sciences (HSPS) and have been a full-time private tutor for almost eight years, specialising in the arts and humanities. I mostly work remotely using video conferencing and smart whiteboards, though offer some in-person tuition in London.
        </Paragraph>
        <Paragraph>
          I believe strongly in the value that tuition can provide to students of all levels, abilities and ages. The style and content of each of my sessions is highly adaptable, and I pride myself on tailoring each to the individual student, focusing on their personal strengths, weaknesses, learning style, personality and goals, both achievable and aspirational. My students not only improve their grades, but also their confidence, self-knowledge, communication skills and proactivity which they then go on to apply to their wider studies outside of sessions.
        </Paragraph>
        <Paragraph>
          Each session begins with a discussion of the student's goals and progress, making sure they are on track to successfully achieve their grade or school/university place. I have seen well over 200 students numerically improve their results through my support, in internal assessments, real GCSE/A Level results, as well as securing their spots at top UK private schools and Oxbridge/Russell Group universities.
        </Paragraph>
        <Paragraph>
          An initial consultation is free, so please reach out using the contact details <ContactLink>below</ContactLink> to discuss your or your child's needs and I can give you a specific layout of how your sessions would look.
        </Paragraph>
      </Section>

      <Section id={sections.subjects.id} title={sections.subjects.name} className="bg-gray-50">
        <CollapsibleSubject id={subjects.english.id} name="English">
          <SubjectParagraph>
            English is by far my most popular subject and, therefore, the area in which I have the most experience. Below is a breakdown of all the English qualifications that I currently tutor.
          </SubjectParagraph>
          <SubjectParagraph>
            As ever, an initial tutoring consultation is free, so please do not hesitate to contact me <ContactLink>here</ContactLink>.
          </SubjectParagraph>
          <SubjectSubHeading>KS2 English/SATs</SubjectSubHeading>
          <SubjectParagraph>
            I have supported many KS2 English students, often with a goal of 11+ exams, SATs support, or simply to make sure that they are up to national curriculum standard before beginning Year 7. I am adept at making sure that sessions are engaging for younger students, incorporating online tools such as interactive whiteboards and games. I also tailor sessions to their own interests where possible.
          </SubjectParagraph>
          <SubjectSubHeading>KS3 English</SubjectSubHeading>
          <SubjectParagraph>
            Before beginning their GCSEs, many students benefit from tuition, increasing their abilities and confidence in English at the start of secondary school. The transition from KS2 can be overwhelming and the expectations sharply increase, often without much guidance. I have helped tens of students to improve their reading comprehension and writing technique, guiding them towards full essay writing before the start of their all-important GCSE qualification.
          </SubjectParagraph>
          <SubjectSubHeading>GCSE English Language (AQA, Edexcel, OCR, CIE, iGCSE)</SubjectSubHeading>
          <SubjectParagraph>
            GCSE English Language is overwhelmingly my most requested subject, having supported over 50 different students in the area. I am an expert in supporting students with content understanding and revision, reading and writing improvement, and targeted exam technique. This is particularly crucial in the Language papers, as they have specific requirements for each question, splitting the Assessment Objectives throughout. I have seen significant improvements in the marks and grades of all my students, ranging across all abilities - from students in college taking resits in order to gain a university place, to high-achieving KS3 students looking to secure a grade 9 as early as possible.
          </SubjectParagraph>
          <SubjectSubHeading>GCSE English Literature (AQA, Edexcel, OCR, CIE, iGCSE)</SubjectSubHeading>
          <SubjectParagraph>
            GCSE English Literature is my second most requested subject, having supported over 40 different students in the area. I am familiar with the vast majority of set-texts, and an expert in the popular set texts, such as A Christmas Carol, An Inspector Calls, Romeo and Juliet, Macbeth, Lord of the Flies, and the ‘Power and Conflict’ poetry anthology. Mark schemes for these essay-length responses can be subjective and difficult to navigate, so I make sure to break down my feedback with clarity. Students leave sessions feeling empowered to write in a way that will get them marks and increase their grade.
          </SubjectParagraph>
          <SubjectSubHeading>A Level English Literature (AQA, Edexcel, OCR, CIE)</SubjectSubHeading>
          <SubjectParagraph>
            There is a steep learning curve as students transition from GCSE to A Level English. I see many passionate students disheartened as they struggle to grasp the high jump in comprehension. Through sessions, they are able to feel more equipped to tackle the dense content and read around their areas of interest for their NEAs.
          </SubjectParagraph>
          <SubjectSubHeading>IB English Literature (HL, SL)</SubjectSubHeading>
          <SubjectParagraph>
            As an IB expert (please see <TextLink href={`#${subjects.internationalBaccalaureate.id}`}>International Baccalaureate</TextLink> for more information), I have also supported many students with their IB English, at both Standard and Higher Level. The IB has very specific and often obscure mark scheme requirements, and I combine my holistic IB knowledge and expert English knowledge to make sure that students feel more able to break down the expectations and phrasing of exam questions.
          </SubjectParagraph>
          <SubjectSubHeading>Entrance Examinations (7+/11+/13+/14+/16+, VR/NVR, English Comprehension)</SubjectSubHeading>
          <SubjectParagraph>
            I have coached over 20 students to gain positions at top competitive UK schools, seeing them develop from uncertain and hesitant to curious, fast thinkers. I am highly familiar with all styles of entrance examinations and understand exactly what these schools are looking for in their ideal pupil.
          </SubjectParagraph>
          <SubjectSubHeading>EFL (TOEFL, IELTs, Conversational, Business)</SubjectSubHeading>
          <SubjectParagraph>
            Additionally, I have supported many international students in various, tailored, EFL-related areas. Some have needed specific qualification for their overseas studies, such as TOEFL and IELTS scores, in which I have become highly familiar with the grading systems and expectations. However, I have also supported adults with improving their English more broadly, particularly supporting first-generation immigrants and focusing on workplace-related issues.
          </SubjectParagraph>
        </CollapsibleSubject>

        <CollapsibleSubject id={subjects.sociology.id} name={subjects.sociology.name}>
          <SubjectParagraph>
            Sociology was my area of specialisation during my time studying Human Social and Political Sciences (<TextLink href="https://www.hsps.cam.ac.uk">HSPS</TextLink>) at the University of Cambridge. As such, it is the area in which I have the most in-depth, expert-level knowledge, allowing me to both support students with their GCSEs and A Levels, but also coach passionate students looking to study the subject at Oxford and Cambridge. Beyond this, I have also supported undergraduate students looking to improve their research skills and essay-writing technique.
          </SubjectParagraph>
          <SubjectParagraph>
            As ever, an initial tutoring consultation is free, so please do not hesitate to contact me directly <ContactLink>here</ContactLink>.
          </SubjectParagraph>
          <SubjectSubHeading>GCSE Sociology (AQA, Eduqas, CIE, iGCSE)</SubjectSubHeading>
          <SubjectParagraph>
            GCSE Sociology is growing in popularity both in the UK and internationally. I have supported several students to achieve their goal grade and above, focusing on content knowledge, revision and, especially, exam technique.
          </SubjectParagraph>
          <SubjectSubHeading>A Level Sociology (AQA, CIE, OCR)</SubjectSubHeading>
          <SubjectParagraph>
            Many students interested in Sociology now choose this popular A Level option. Over 20 students have seen their grades improve through my support, and I am an expert in the AQA board specifically. Often, it is the 10, 20 and 30 markers that can pose a challenge to students, as Sociology tends to require highly specific phrasing in exams and students often understand the content (AO1), but can struggle to put it into words (AO2), let alone critically evaluate differing theories and methodologies (AO3).
          </SubjectParagraph>
        </CollapsibleSubject>

        <CollapsibleSubject id={subjects.oxbridgeApplications.id} name={subjects.oxbridgeApplications.name}>
          <SubjectParagraph>
            The application process and entry requirements needed to achieve an offer at Oxford or Cambridge are famously opaque. Through my own experience of navigating the system, and seeing many of my students go through the process themselves, I have become highly knowledgeable of each stage of the application process and the variations that individual students can experience.
          </SubjectParagraph>
          <SubjectSubHeading>Knowledge Building</SubjectSubHeading>
          <SubjectParagraph>
            Oxbridge requires students to have undertaken wider reading outside of the curriculum. This should include academic level books and journal articles, which are often new and unfamiliar to students in 6th form. I support students to find appropriate readings and get to grips with their layout and language, as well as encourage them to think critically about all readings and come to their own opinions.
          </SubjectParagraph>
          <SubjectSubHeading>Personal Statements</SubjectSubHeading>
          <SubjectParagraph>
            Oxbridge personal statements are highly specific. They do not usually take UCAS points into account, so this stage of the application is critical. I help students to understand how an admissions officer would read their personal statement and what type of student Oxbridge are looking for. Additionally, I support them with the planning, structuring and perfecting of the personal statement itself (for more see <TextLink href={`#${subjects.personalStatements.id}`}>Personal Statements</TextLink>).
          </SubjectParagraph>
          <SubjectSubHeading>College Choice</SubjectSubHeading>
          <SubjectParagraph>
            The Oxbridge system requires students to choose a college to apply to, rather than the university itself. These colleges all have many unique and specific differences between them, so I often go through these with students, whilst helping them to reflect on what they would like out of their college experience, in order to choose which option is best for them.
          </SubjectParagraph>
          <SubjectSubHeading>Admissions Tests</SubjectSubHeading>
          <SubjectParagraph>
            Subjects such as HSPS (Human, Social and Political Sciences, Cambridge) and Human Sciences (Oxford) often require students to undertake admissions tests. There are few past papers available and even less guidance on marking criteria, so I always make sure to discuss the tests in detail with students and, if the college requires the test to be taken, go through rounds of mock testing and feedback.
          </SubjectParagraph>
          <SubjectSubHeading>Interviews</SubjectSubHeading>
          <SubjectParagraph>
            The Oxbridge interview is the final stage in the application process. As most universities in the UK do not interview applicants, specialist advice and practice is essential to feel confident and prepared. It is more of a practice 'supervision' or 'tutorial', and students must learn to think out loud, and have thinking processes ready for the types of questions that are commonly asked. I see a huge demand for mock interviews with feedback in November/December, so have become highly experienced in this area.
          </SubjectParagraph>
        </CollapsibleSubject>

        <CollapsibleSubject id={subjects.personalStatements.id} name={subjects.personalStatements.name}>
          <SubjectParagraph>
            Recently, UCAS have drastically changed their application process, introducing a range of questions to replace the traditional personal statement. Using my years of experience supporting students to plan, draft and refine their personal statements, I have now begun to support students for 2026 entry and this new system. This involves taking their experiences and academic insights and concisely selecting the most relevant to include, in a way that flows well as a piece of writing. I take academic integrity very seriously so always make sure this is student-led, whilst I help by providing feedback to nudge them in the direction needed for a successful application.
          </SubjectParagraph>
        </CollapsibleSubject>

        <CollapsibleSubject id={subjects.internationalBaccalaureate.id} name={subjects.internationalBaccalaureate.name}>
          <SubjectParagraph>
            The International Baccalaureate (IB) is a challenging and rewarding programme that requires students to develop strong analytical and writing skills across multiple subjects. Having tutored IB students in various subjects including History, Theory of Knowledge (TOK), and Extended Essays, I understand the unique requirements and assessment criteria of the IB system.
          </SubjectParagraph>
        </CollapsibleSubject>

        <CollapsibleSubject id={subjects.japanese.id} name={subjects.japanese.name}>
          <SubjectParagraph>
            I offer comprehensive Japanese language tutoring for students at all levels, from beginners to advanced learners. My approach combines traditional language learning with cultural understanding, making sessions both educational and engaging.
          </SubjectParagraph>
          <SubjectSubHeading>Beginner Japanese</SubjectSubHeading>
          <SubjectParagraph>
            I often work with students who are just starting out with Japanese. We begin with basic sentence structuring, pronunciation and the written kana systems of hiragana and katakana. Sessions are culturally connected with a contemporary focus, always linking in with the students' personal interest in Japan.
          </SubjectParagraph>
          <SubjectSubHeading>Conversational Japanese</SubjectSubHeading>
          <SubjectParagraph>
            Many students are looking to improve their spoken Japanese, in order to make the most of a trip, communicate with friends and family, or apply for Japanese-speaking jobs. I tailor vocabulary and grammar to each situation, giving usuable phrases for all scenarios.
          </SubjectParagraph>
          <SubjectSubHeading>GCSE Japanese (Edexcel)</SubjectSubHeading>
          <SubjectParagraph>
            GCSE Japanese is a well-rounded course, including writing, reading, speaking and listening. I prepare students for all elements of examination, and often run the speaking exams myself.
          </SubjectParagraph>
          <SubjectSubHeading>JLPT Exams</SubjectSubHeading>
          <SubjectParagraph>
            The Japanese Language Proficiency Tests are run by the Japanese government, but can be taken all around the world, including in the UK. They are recognised in Japan and are often a requirement for working or living in the country. I support students with the exam technique and vocabulary needed for each level, from N5 to N1.
          </SubjectParagraph>
        </CollapsibleSubject>

        <CollapsibleSubject id={subjects.history.id} name={subjects.history.name}>
          <SubjectParagraph>
            History is a subject that requires both analytical thinking and strong essay-writing skills. I help students develop the ability to construct coherent arguments, evaluate evidence, and present their ideas clearly and persuasively.
          </SubjectParagraph>
          <SubjectSubHeading>GCSE History (AQA, Edexcel, OCR, CIE, iGCSE)</SubjectSubHeading>
          <SubjectParagraph>
            GCSE History covers a range of periods and topics, requiring students to master both content knowledge and source analysis skills. I help students understand the key events, develop their ability to evaluate historical sources, and perfect their essay-writing technique for the various question types.
          </SubjectParagraph>
          <SubjectSubHeading>A Level History (AQA, Edexcel, OCR, CIE)</SubjectSubHeading>
          <SubjectParagraph>
            A Level History demands sophisticated analytical skills and the ability to construct complex arguments. I support students in developing their understanding of historiography, improving their source evaluation skills, and mastering the art of writing compelling historical essays that demonstrate both knowledge and critical thinking.
          </SubjectParagraph>
          <SubjectSubHeading>IB History (HL, SL)</SubjectSubHeading>
          <SubjectParagraph>
            IB History has very specific requirements, including the Internal Assessment and Extended Essay components. I help students navigate the IB curriculum, develop their research skills, and understand the unique marking criteria that distinguish IB from other qualifications.
          </SubjectParagraph>
        </CollapsibleSubject>

        <CollapsibleSubject id={subjects.filmStudies.id} name={subjects.filmStudies.name}>
          <SubjectParagraph>
            Film Studies combines creative analysis with theoretical understanding, requiring students to develop both visual literacy and critical thinking skills. I help students understand film language, analyze cinematic techniques, and develop sophisticated arguments about film texts.
          </SubjectParagraph>
          <SubjectSubHeading>A Level Film Studies (Eduqas)</SubjectSubHeading>
          <SubjectParagraph>
            A Level Film Studies explores complex theoretical frameworks, including auteur theory, feminist film theory, and postmodernism. I support students in developing analytical skills, understanding film history and movements, and creating detailed film analyses and practical projects.
          </SubjectParagraph>
        </CollapsibleSubject>

        <CollapsibleSubject id={subjects.mediaStudies.id} name={subjects.mediaStudies.name}>
          <SubjectParagraph>
            Media Studies examines the role of media in society, requiring students to analyze media texts, understand media industries, and explore audience responses. I help students develop critical thinking skills and understand the complex relationship between media and society.
         </SubjectParagraph>
         <SubjectSubHeading>A Level Media Studies</SubjectSubHeading>
         <SubjectParagraph>
            A Level Media Studies explores explores key theoretical frameworks such as representation theory, audience theory, and media ethics. I guide students in analyzing various media forms, including print, digital, and broadcast, helping them develop critical thinking skills, understanding the evolution of media industries, and producing their own creative media projects.
          </SubjectParagraph>
        </CollapsibleSubject>

        <CollapsibleSubject id={subjects.religiousStudies.id} name={subjects.religiousStudies.name}>
          <SubjectParagraph>
            Religious Studies encourages students to explore religious beliefs, practices, and their impact on society. I help students develop critical thinking skills, understand different religious perspectives, and construct balanced arguments about complex ethical and philosophical issues.
          </SubjectParagraph>
        </CollapsibleSubject>

        <CollapsibleSubject id={subjects.politics.id} name={subjects.politics.name}>
          <SubjectParagraph>
            Politics requires students to understand political systems, ideologies, and current affairs. I help students develop analytical skills, understand political concepts, and construct well-reasoned arguments about political issues.
          </SubjectParagraph>
        </CollapsibleSubject>

        <CollapsibleSubject id={subjects.anthropology.id} name={subjects.anthropology.name}>
          <SubjectParagraph>
            Anthropology explores human societies and cultures, requiring students to understand different cultural perspectives and develop cross-cultural analytical skills. I help students understand anthropological concepts, research methods, and theoretical frameworks.
          </SubjectParagraph>
        </CollapsibleSubject>

        <CollapsibleSubject id={subjects.psychology.id} name={subjects.psychology.name}>
          <SubjectParagraph>
            Psychology combines scientific methodology with the study of human behavior and mental processes. I help students understand psychological theories, research methods, and develop critical thinking skills for analyzing psychological research and arguments.
          </SubjectParagraph>
          <SubjectSubHeading>A Level Psychology (AQA)</SubjectSubHeading>
          <SubjectParagraph>
            A Level Psychology explores complex psychological theories, research methods, and applications. I support students in developing analytical skills, understanding psychological research methodology, and constructing well-reasoned arguments about psychological issues and research findings.
          </SubjectParagraph>
          <SubjectSubHeading>IB Psychology (HL, SL)</SubjectSubHeading>
          <SubjectParagraph>
            IB Psychology has specific requirements including the Internal Assessment and research methodology components. I help students understand the IB curriculum, develop their research skills, and master the unique marking criteria that distinguish IB Psychology from other qualifications.
          </SubjectParagraph>
        </CollapsibleSubject>

        <CollapsibleSubject id={subjects.philosophy.id} name={subjects.philosophy.name}>
          <SubjectParagraph>
            Philosophy develops critical thinking and logical reasoning skills, requiring students to analyze complex arguments and construct well-reasoned responses. I help students understand philosophical concepts, develop logical thinking, and perfect their argumentative writing skills.
          </SubjectParagraph>
        </CollapsibleSubject>

        <CollapsibleSubject id={subjects.internationalRelations.id} name={subjects.internationalRelations.name}>
          <SubjectParagraph>
            International Relations examines the relationships between states, international organizations, and global issues. I help students understand international political theory, current global affairs, and develop analytical skills for understanding complex international dynamics.
          </SubjectParagraph>
        </CollapsibleSubject>
      </Section>

      <Section id={sections.pricing.id} title={sections.pricing.name}>
        <Paragraph>
          On average, I charge £40 hourly. However, this can vary depending on level of subject, demand, location, and other factors. You can request more information by contacting me <ContactLink>below</ContactLink>.
        </Paragraph>
      </Section>

      <Section id={sections.contact.id} title={sections.contact.name} className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <Paragraph>
          Please don't hesitate to contact me via email, phone, text, or WhatsApp. I am more than happy to talk through my tuition services with you and discuss next steps!
        </Paragraph>
        <div className="flex flex-col sm:flex-row gap-3 text-gray-700 mt-2">
          <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-500" />{email}
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a href={whatsAppLink} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <FontAwesomeIcon icon={faPhone} className="text-blue-500" />{phoneNumber}
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-6">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:-translate-y-0.5"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Send an Email
          </a>
          <a className="inline-flex items-center justify-center" aria-label="Chat on WhatsApp" href={whatsAppLink}>
            <img alt="Chat on WhatsApp" src="/WhatsApp/WhatsAppButtonGreenLarge.svg" className="h-14" />
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {fullName}. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm">
            <a href={`#${sections.about.id}`} className="hover:text-white transition-colors" onClick={handleNavClick}>About</a>
            <a href={`#${sections.subjects.id}`} className="hover:text-white transition-colors" onClick={handleNavClick}>Subjects</a>
            <a href={`#${sections.contact.id}`} className="hover:text-white transition-colors" onClick={handleNavClick}>Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export function ContactLink({ children }: React.PropsWithChildren<{}>) {
  return <TextLink href={`#${sections.contact.id}`}>
    {children}
  </TextLink>
}

export function SubjectSubHeading({ children }: React.PropsWithChildren<{}>) {
  return <h4 className="text-lg font-semibold text-blue-900 mt-5 mb-2">{children}</h4>
}

export function SubjectParagraph({ children }: React.PropsWithChildren<{}>) {
  return <p className="text-gray-700 leading-relaxed">{children}</p>
}

export function SectionHeader({ children }: React.PropsWithChildren<{}>) {
  return <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight">{children}</h2>
}

export function Paragraph({ children }: React.PropsWithChildren<{}>) {
  return <p className="text-gray-700 leading-relaxed text-lg">{children}</p>
}

export function TextLink({ href, children }: React.PropsWithChildren<{ href: string }>) {
  return (
    <a href={href} className="text-blue-600 hover:text-blue-800 underline underline-offset-2 decoration-blue-300 hover:decoration-blue-500 transition-colors" onClick={handleNavClick}>
      {children}
    </a>
  );
}

export type SectionProps = React.PropsWithChildren<{
  id: string
  title?: string
  className?: string
}>

export function Section({ id, title: name, className = '', children }: SectionProps) {
  return <section className={`py-16 lg:py-20 px-4 ${className}`} id={id}>
    <div className="max-w-4xl mx-auto">
      {name && <SectionHeader>{name}</SectionHeader>}
      <div className="space-y-5">
        {children}
      </div>
    </div>
  </section>
}

export type CollapsibleSubjectProps = React.PropsWithChildren<{
  id?: string
  name: string
  defaultOpen?: boolean
}>

function CollapsibleSubject({ id, name, defaultOpen = false, children }: CollapsibleSubjectProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [maxHeight, setMaxHeight] = React.useState<number | undefined>(undefined);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let observer: ResizeObserver | undefined;
    function updateMaxHeight() {
      if (open && contentRef.current) {
        setMaxHeight(contentRef.current.scrollHeight);
      }
    }
    if (contentRef.current) {
      observer = new window.ResizeObserver(() => {
        if (open) {
          setMaxHeight(contentRef.current!.scrollHeight);
        }
      });
      observer.observe(contentRef.current);
    }
    updateMaxHeight();
    return () => {
      if (observer && contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, [open, children]);

  React.useEffect(() => {
    if (open && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [open, children]);

  return (
    <div
      id={id}
      className={`border rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden ${open ? 'border-l-4 border-l-blue-500 border-blue-200' : 'hover:border-blue-200'}`}
    >
      <button
        className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-inset cursor-pointer group"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">{name}</h3>
        <svg
          className={`w-5 h-5 ml-2 text-gray-400 group-hover:text-blue-500 transition-all duration-300 ${open ? 'rotate-90 text-blue-500' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: open ? maxHeight : 0,
          opacity: open ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s',
        }}
        aria-hidden={!open}
      >
        <div className="flex flex-col px-6 pb-6 pt-2 border-t border-gray-100">
          {children}
        </div>
      </div>
    </div>
  )
}

export default App
