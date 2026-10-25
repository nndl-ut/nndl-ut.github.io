export const course = {
  title: 'Neural Networks and Deep Learning',
  shortTitle: 'NNDL',
  term: 'Fall 2026',
  termFa: '1405 - 1406',
  university: 'University of Tehran',
  faculty: 'School of Electrical & Computer Engineering',
  intro:
    'Neural Networks and Deep Learning (NNDL) is a core course on the models that power modern artificial intelligence. ' +
    'Starting from the biological and mathematical foundations of neurons, the course builds up through multi-layer perceptrons, ' +
    'convolutional and recurrent networks, attention and Transformers, and deep generative models, and finishes with ' +
    'foundation models such as large language models and vision-language models.',
  content:
    'The course follows eight chapters, from the foundations of natural and artificial neural networks to foundation models. ' +
    'Students put the theory into practice through six graded mini projects (Course Assignments, CAs) that follow chapters 2 to 7, ' +
    'plus a bonus assignment on foundation models, and a final exam covering all chapters.',
};

export const logistics = {
  days: 'Saturdays and Mondays',
  time: '3:00 PM – 4:30 PM',
  timezone: 'Iran Standard Time',
  room: 'Class 7',
  building: 'ECE Old Building, School of Electrical and Computer Engineering, University of Tehran',
  extra: [
    'Course announcements, materials, and class recordings are shared with enrolled students through the course channels.',
    'The detailed course policies document is available to enrolled students.',
  ],
};

// ---------------------------------------------------------------------------
//  Staff
// ---------------------------------------------------------------------------
const emptyLinks = { linkedin: '', github: '', email: '', website: '' };

export const instructor = {
  name: 'Dr. Ahmad Kalhor',
  role: 'Instructor',
  title: 'Associate Professor',
  photo: 'Ahmad Kalhor.jpg',
  links: {
    linkedin: 'https://www.linkedin.com/in/ahmadkalhor',
    github: '',
    email: 'ad.kalhor@gmail.com',
    website: '',
  },
};

export const headTAs = [
  {
    name: 'Farzad Jannati',
    role: 'Head TA',
    photo: 'Farzad Jannati.jpg',
    links: {
      linkedin: 'https://www.linkedin.com/in/farzadjannati',
      github: 'https://github.com/farzadjannati',
      email: 'farzadjannati@ut.ac.ir',
      website: '',
    },
  },
  {
    name: 'Dorsa Khalafi',
    role: 'Head TA',
    photo: 'Dorsa Khalafi.jpg',
    links: {
      linkedin: 'https://www.linkedin.com/in/dorsa-khalafi',
      github: '',
      email: '',
      website: '',
    },
  },
];

// ---------------------------------------------------------------------------
//  Teaching assistants
//  ta(name, tag, { photo, topic, links: { linkedin, github, email, website } })
//  The third argument is optional; missing fields are left empty.
// ---------------------------------------------------------------------------
const ta = (name, tag, extra = {}) => ({
  name,
  tag,
  topic: extra.topic || '',
  photo: extra.photo || '',
  links: { ...emptyLinks, ...(extra.links || {}) },
});

export const assignments = [
  {
    id: 'CA1',
    chapter: 2,
    topic: 'Multi-Layer Perceptron (MLP)',
    concepts: [
      'Linear Perceptron, AdaLine and MadaLine',
      'Multi-Layer Perceptron (MLP)',
      'Auto-encoders and Restricted Boltzmann Machine',
      'Deep belief networks',
    ],
    release: { fa: '27 Mehr 1405', en: 'Oct 19, 2026' },
    deadline: { fa: '10 Aban 1405', en: 'Nov 1, 2026' },
    tas: [
      ta('Fatemee Ghalami', 'CA1', {
        photo: 'Fatemee Ghalami.jpg',
        links: {
          email: 'Fatemeqalami@gmail.com',
          github: 'https://github.com/feta-feta',
        },
      }),
      ta('Paria Pasehvarz', 'CA1', {
        photo: 'Paria Pasehvarz.jpg',
        links: {
          linkedin: 'https://www.linkedin.com/in/paria-pasehvarz/',
          email: 'pasehvarzparia@gmail.com',
          github: 'https://github.com/PariaPasehvarz',
        },
      }),
    ],
  },
  {
    id: 'CA2',
    chapter: 3,
    topic: 'Convolutional Neural Networks (CNN)',
    concepts: [
      'Convolutional Neural Networks (CNNs)',
      'Developments and Techniques in CNNs',
      'Some popular Architectures (AlexNet, VGG, ResNet, Inception, MobileNet, DenseNet, EfficientNet)',
    ],
    release: { fa: '10 Aban 1405', en: 'Nov 1, 2026' },
    deadline: { fa: '24 Aban 1405', en: 'Nov 15, 2026' },
    tas: [
      ta('Artin Tavasoli', 'CA2', {
        photo: 'Artin Tavasoli.jpg',
        links: {
          linkedin: 'https://www.linkedin.com/in/artin-tavasoli',
          email: 'artin.tavassoli2@gmail.com',
          github: 'https://github.com/Artin-Tavasoli',
        },
      }),
      ta('Parmida Ghamari', 'CA2', {
        photo: 'Parmida Ghamari.jpg',
        links: {
          linkedin: 'https://www.linkedin.com/in/parmida-ghamari',
          email: 'parmida.ghamari@gmail.com',
          github: 'https://github.com/ParmidaGh',
        },
      }),
    ],
  },
  {
    id: 'CA3',
    chapter: 4,
    topic: 'Region based CNNs (RCNN)',
    concepts: [
      'CNNs for Object Detection (RCNN, Mask RCNN, YOLO, ...)',
      'CNNs for Object Segmentation (UNet, Mask RCNN, ...)',
    ],
    release: { fa: '24 Aban 1405', en: 'Nov 15, 2026' },
    deadline: { fa: '8 Azar 1405', en: 'Nov 29, 2026' },
    tas: [
      ta('Sina Hashemi', 'CA3', {
        photo: 'Sina Hashemi.jpg',
        links: {
          linkedin: 'https://www.linkedin.com/in/sina-hashemi-125922215',
          email: 'sinahashemi@ut.ac.ir',
          github: 'https://github.com/SinaHicomp',
        },
      }),
      ta('Zahra Jani', 'CA3', {
        photo: 'Zahra Jani.jpg',
        links: {
          linkedin: 'https://www.linkedin.com/in/zahra-jani-313422239',
          email: 'dczahrajn@gmail.com',
        },
      }),
    ],
  },
  {
    id: 'CA4',
    chapter: 5,
    topic: 'Recurrent Neural Networks (RNN)',
    concepts: [
      'Recurrent Neural Network (RNN)',
      'Long Short Term Memory (LSTM)',
      'Gated Recurrent Units (GRU)',
      'Some Extensions',
    ],
    release: { fa: '8 Azar 1405', en: 'Nov 29, 2026' },
    deadline: { fa: '22 Azar 1405', en: 'Dec 13, 2026' },
    tas: [
      ta('Ali Rajabzadeh', 'CA4', {
        photo: 'Ali Rajabzadeh.jpg',
        links: {
          linkedin: 'https://www.linkedin.com/in/ali-rajabzadeh-chenari',
          email: 'alirajabzadeh9@gmail.com',
          github: 'https://github.com/AliRajabzadehCh',
        },
      }),
      ta('Maryam Vali', 'CA4', {
        photo: 'Maryam Vali.jpg',
        links: {
          linkedin: 'https://www.linkedin.com/in/maryam-vali-25a34a325',
          email: 'maryam.vali2004@gmail.com',
          github: 'https://github.com/MarieVli',
        },
      }),
    ],
  },
  {
    id: 'CA5',
    chapter: 6,
    topic: 'Transformers',
    concepts: ['Attention Mechanisms', 'Vanilla Transformer', 'Vision Based Transformers'],
    release: { fa: '22 Azar 1405', en: 'Dec 13, 2026' },
    deadline: { fa: '6 Dey 1405', en: 'Dec 27, 2026' },
    tas: [
      ta('Faezeh Mozzafari', 'CA5', {
        photo: 'Faezeh Mozzafari.jpg',
        links: {
          linkedin: 'https://www.linkedin.com/in/faezeh-mozaffari-7816b6230',
          email: 'faezeh.m7899@gmail.com',
          github: 'https://github.com/faezehmzf',
        },
      }),
      ta('Mohammad Amanlou', 'CA5', {
        photo: 'Mohammad Amanlou.jpg',
        links: {
          linkedin: 'https://www.linkedin.com/in/mohammad-amanlou-220b0121a',
          email: 'MohammadAmanlou2@gmail.com',
        },
      }),
    ],
  },
  {
    id: 'CA6',
    chapter: 7,
    topic: 'Deep Generative Models (DGM)',
    concepts: ['Variational Auto-encoders', 'Generative Adversarial Networks', 'Diffusion Models'],
    release: { fa: '6 Dey 1405', en: 'Dec 27, 2026' },
    deadline: { fa: '20 Dey 1405', en: 'Jan 10, 2027' },
    tas: [
      ta('Zakiye Rostamirad', 'CA6', {
        photo: 'Zakiye Rostamirad.jpg',
        links: {
          linkedin: 'https://www.linkedin.com/in/zakiye-rostamirad',
          email: 'zakiye.rostamirad.2000@gmail.com',
          github: 'https://github.com/rostamirad',
        },
      }),
      ta('Mohammadreza Firoozalizadeh', 'CA6', {
        photo: 'Mohammadreza Firoozalizadeh.jpg',
        links: {
          linkedin: 'https://www.linkedin.com/in/mohammadreza-firoozalizadeh-52269327a',
          email: 'alizadeh.reza7997@gmail.com',
        },
      }),
    ],
  },
  {
    id: 'CA7',
    bonus: true,
    chapter: 8,
    topic: 'Foundation Models (VLMs)',
    concepts: ['Large Language Models (LLMs)', 'Vision-Language-Models (VLMs)'],
    release: { fa: '6 Dey 1405', en: 'Dec 27, 2026' },
    deadline: { fa: '20 Dey 1405', en: 'Jan 10, 2027' },
    tas: [
      ta('Seyed Reza Moslemi', 'CA7 (Bonus)', {
        photo: 'Seyed Reza Moslemi.jpg',
        links: {
          linkedin: 'https://www.linkedin.com/in/seyyedreza-moslemi',
          email: 'seyyed.moslemi.r@ut.ac.ir',
          github: 'https://github.com/seyyedmsl82',
        },
      }),
      ta('Amirhossein Bonakdar', 'CA7 (Bonus)', {
        photo: 'Amirhossein Bonakdar.jpg',
        links: {
          linkedin: 'https://www.linkedin.com/in/amirhossein-bonakdar-a138a7156',
        },
      }),
      ta('Behzad Jannati', 'CA7 (Bonus)', {
        photo: 'Behzad Jannati.jpg',
        links: {
          linkedin: 'https://www.linkedin.com/in/behzadjannati',
          email: 'bhzadjnty7@gmail.com',
          github: 'https://github.com/bhzadjnty7',
        },
      }),
      ta('Arsalan Talaie', 'CA7 (Bonus)', {
        photo: 'Arsalan Talaie.jpg',
        links: {
          linkedin: 'https://www.linkedin.com/in/arsalan-talaei-735622278',
          email: 'arsalan.talaei@ut.ac.ir',
          github: 'https://github.com/ATalaei',
        },
      }),
    ],
  },
];

export const assignmentNote =
  'CA7 is a bonus assignment and does not affect the base grading scheme.';

// Workshop TAs
export const workshopTAs = [
  ta('Shahriar Rahimi Rad', 'Workshop TA', {
    photo: 'Shahriar Rahimi Rad.jpg',
    links: {
      linkedin: 'https://www.linkedin.com/in/shahriar-r-rad',
      email: 'rahimirad@ut.ac.ir',
      github: 'https://github.com/shinraad',
    },
  }),
  ta('Faezeh Khanmohamadi', 'Workshop TA', {
    photo: 'Faezeh Khanmohamadi.jpg',
    links: {
      linkedin: 'https://www.linkedin.com/in/faezeh-khanmohamadi-888599287',
      email: 'fa.khanmohamadi@ut.ac.ir',
      github: 'https://github.com/FKH2103',
    },
  }),
];

// ---------------------------------------------------------------------------
//  Grading  (mini project i  <->  chapter i+1 ; CAx in the schedule above)
// ---------------------------------------------------------------------------
export const grading = {
  miniProjects: [
    { label: 'Mini Project 1', short: 'M. Pr. 1', chapter: 2, weight: 10 },
    { label: 'Mini Project 2', short: 'M. Pr. 2', chapter: 3, weight: 10 },
    { label: 'Mini Project 3', short: 'M. Pr. 3', chapter: 4, weight: 10 },
    { label: 'Mini Project 4', short: 'M. Pr. 4', chapter: 5, weight: 10 },
    { label: 'Mini Project 5', short: 'M. Pr. 5', chapter: 6, weight: 10 },
    { label: 'Mini Project 6', short: 'M. Pr. 6', chapter: 7, weight: 10 },
  ],
  miniProjectsTotal: 60,
  final: { label: 'Final Exam', chapters: 'Chapters 1, 2, ..., 6, 7 and 8', weight: 40 },
  total: 100,
  note: 'A few (optional) mini-projects are usually designed for extra work (bonus points).',
};

// ---------------------------------------------------------------------------
//  Topics (course contents)
// ---------------------------------------------------------------------------
export const topics = [
  {
    n: 1,
    title: 'Introduction',
    items: [
      'Natural Neural Networks',
      'Artificial NNs and Applications',
      'Architectures, Activation Functions and Learning in ANNs',
      'McCulloch & Pitts Neuron',
    ],
  },
  {
    n: 2,
    title: 'Fully Connected Neural Networks',
    items: [
      'Linear Perceptron, AdaLine and MadaLine',
      'Multi-Layer Perceptron (MLP)',
      'Auto-encoders and Restricted Boltzmann Machine',
      'Deep belief networks',
    ],
  },
  {
    n: 3,
    title: 'Convolutional Neural Networks (CNNs)',
    items: [
      'Convolutional Neural Networks (CNNs)',
      'Developments and Techniques in CNNs',
      'Some popular Architectures (AlexNet, VGG, ResNet, Inception, MobileNet, DenseNet, and EfficientNet)',
    ],
  },
  {
    n: 4,
    title: 'Region based CNNs',
    items: [
      'CNNs for Object Detection (RCNN, Mask RCNN, YOLO, ...)',
      'CNNs for Object Segmentation (UNet, Mask RCNN, ...)',
    ],
  },
  {
    n: 5,
    title: 'Recurrent Neural Networks',
    items: [
      'Recurrent Neural Network (RNN)',
      'Long Short Term Memory (LSTM)',
      'Gated Recurrent Units (GRU)',
      'Some Extensions',
    ],
  },
  {
    n: 6,
    title: 'Transformers',
    items: ['Attention Mechanisms', 'Vanilla Transformer', 'Vision Based Transformers'],
  },
  {
    n: 7,
    title: 'Deep Generative Models',
    items: ['Variational Auto-encoders', 'Generative Adversarial Networks', 'Diffusion Models'],
  },
  {
    n: 8,
    title: 'Foundation Models',
    items: ['Large Language Models (LLMs)', 'Vision-Language-Models (VLMs)'],
  },
];
