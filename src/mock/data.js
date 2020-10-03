import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Thor Jensen | Computer Scientist', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi my name is',
  name: 'Thor Jensen',
  subtitle: 'Computer Scientist',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne:
    'Newly graduate Candidate (Cand.Scient) in Computer Science at Aalborg University specializing in programming technologies',
  paragraphTwo:
    'My interest is in functional programming and programming language design, but I just have a interest in programming in general and love to work in teams and overcome problems together.' +
    ' ' +
    'I also love working on designing and building full platforms being a full stack developer working on both backend and frontend',
  paragraphThree:
    'When I am not working with developing platforms and overcoming programming problems I like to play guitar and work with video editing',
  resume:
    'https://raw.githubusercontent.com/GingerV1k1ng/GingerV1k1ng.github.io/main/src/resources/CV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'nordiumProject.png',
    title: 'Nordium',
    info: 'Nordium is a health platform I co-founded with two friends. It helps private people with finding the correct health professional that can help them solve their issue and book a time at them.',
    info2:
      ' Two others and me designed the full platform and developed it from the ground up. We are especially proud of a Machine Learning algorithm that helps private people find the correct health professional' +
      ' ' +
      'The platform was made with C# as the backend, React as frontend and PostgresSQL for our database',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  /*
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  */
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me?',
  btn: 'Contact me',
  email: 'contact@thorjensen.io',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/thor-jensen-00108210b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/GingerV1k1ng',
    },
  ],
};
