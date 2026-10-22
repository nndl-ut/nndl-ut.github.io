// ============================================================================
//  NNDL Fall 2026 — ALL COURSE CONTENT LIVES HERE
//  Edit this file to update the website. No HTML changes are needed.
//
//  Photos:  drop an image into /public (e.g. public/rahimi-rad.jpg) and set
//           photo: 'rahimi-rad.jpg'. Leave photo: '' to show a placeholder.
//  Links:   fill linkedin / github / email / website. Empty ('') icons are
//           shown greyed-out until you fill them in.
// ============================================================================

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
  // NOTE: please double-check the time (it was given as "3 P.M. to 4:30 P.M."; PM is assumed here).
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
  links: { https:/www.linkedin.com/in/ahmadkalhor, ad.kalhor@gmail.com, url=https%3A%2F%2Fmodelfarm%2Flogin&urlhash=e0yM&mt=UTHiNO53JZWOyr2Q0rS-zXQAf4kewmH7RLVFF2Inajidy9n1RQRIJyoEvayd_UPaQH6789klyc-hdvXZ93O-7MkAJscL&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bikxhg6fvQRKCVTxDzZYzUg%3D%3D},
};

export const headTAs = [
  {
    name: 'Farzad Jannati',
    role: 'Head TA',
    photo: '',
    links: { https:/www.linkedin.com/in/farzadjannati, https:/github.com/farzadjannati, farzadjannati@ut.ac.ir },
  },
  {
    name: 'Dorsa Khalafi',
    role: 'Head TA',
    photo: '',
    links: { https:/www.linkedin.com/in/faezeh-khanmohamadi-888599287, https:/github.com/FKH2103?tab=repositories, fa.khanmohamadi@ut.ac.ir },
  },
];

// ---------------------------------------------------------------------------
//  Teaching assistants (names come from the assignment schedule).
//  `tag` is shown on the card (which assignment / workshop they run).
// ---------------------------------------------------------------------------
const ta = (name, tag, topic) => ({ name, tag, topic, photo: '', links: { ...emptyLinks } });

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
    tas: [ta('Fatemee Ghalami', 'CA1'), ta('Paria Pasehvarz', 'CA1')],
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
    tas: [ta('Artin Tavasoli', 'CA2'), ta('Parmida Ghamari', 'CA2')],
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
    tas: [ta('Sina Hashemi', 'CA3'), ta('Zahra Jani', 'CA3')],
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
    tas: [ta('Ali Rajabzadeh', 'CA4'), ta('Maryam Vali', 'CA4')],
  },
  {
    id: 'CA5',
    chapter: 6,
    topic: 'Transformers',
    concepts: ['Attention Mechanisms', 'Vanilla Transformer', 'Vision Based Transformers'],
    release: { fa: '22 Azar 1405', en: 'Dec 13, 2026' },
    deadline: { fa: '6 Dey 1405', en: 'Dec 27, 2026' },
    tas: [ta('Faezeh Mozzafari', 'CA5'), ta('Mohammad Amanlou', 'CA5')],
  },
  {
    id: 'CA6',
    chapter: 7,
    topic: 'Deep Generative Models (DGM)',
    concepts: ['Variational Auto-encoders', 'Generative Adversarial Networks', 'Diffusion Models'],
    release: { fa: '6 Dey 1405', en: 'Dec 27, 2026' },
    deadline: { fa: '20 Dey 1405', en: 'Jan 10, 2027' },
    tas: [ta('Zakiye Rostamirad', 'CA6'), ta('Mohammadreza Firoozalizadeh', 'CA6')],
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
      ta('Seyed Reza Moslemi', 'CA7 (Bonus)'),
      ta('Amirhossein Bonakdar', 'CA7 (Bonus)'),
      ta('Behzad Jannati', 'CA7 (Bonus)'),
      ta('Arsalan Talaie', 'CA7 (Bonus)'),
    ],
  },
];

export const assignmentNote =
  'CA7 is a bonus assignment and does not affect the base grading scheme.';

// Workshop TAs — 2 slots. Replace the placeholder names when they are decided.
export const workshopTAs = [
  {
    name: 'Shahriar Rahimi Rad',
    tag: 'Workshop TA',
    topic: '',
    photo: '', // e.g. 'shahriar-rahimi-rad.jpg' (put the file in /public)
    links: { linkedin: '', github: '', email: '', website: '' },
  },
  {
    name: 'Faezeh Khanmohamadi',
    tag: 'Workshop TA',
    topic: '',
    photo: '', // e.g. 'faezeh-khanmohamadi.jpg'
    links: { linkedin: '', github: '', email: '', website: '' },
  },
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
