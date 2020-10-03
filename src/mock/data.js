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
  paragraphOne: 'para1',
  paragraphTwo: 'para2',
  paragraphThree: 'para3',
  resume: 'src/resources/CV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'nordiumProject.png',
    title: 'Nordium',
    info: '',
    info2: '',
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
