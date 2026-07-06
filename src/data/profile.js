export const profile = {
  name: 'Shrey Modi',
  location: 'Toronto, Canada',
  relocation: 'Open to relocation anywhere',
  email: 'shreymodi0711@gmail.com',
  phone: '+1 (905) 783-9118',
  linkedin: 'https://www.linkedin.com/in/shreymodi786/',
  linkedinLabel: 'linkedin.com/in/shreymodi786',
  github: 'https://github.com/shreymodi0711',
  githubLabel: 'github.com/shreymodi0711',
};

export const experience = [
  {
    role: 'Business Analyst',
    company: 'Brock Canada',
    logo: '/logos/brock.png',
    logoScale: 0.7,
    location: 'Nisku, AB, Canada',
    period: 'Feb 2025 – May 2026',
    skills: ['Power BI', 'DAX', 'SQL', 'SAP Business One', 'Power Apps', 'Forecasting'],
    bullets: [
      'Built a predictive project analytics application forecasting lump-sum project overruns and identifying early risk indicators, supporting proactive cost-control decisions.',
      'Defined project KPI frameworks and performed budget-variance analysis, forecasting, and CPI/PF productivity analysis, improving forecast reliability.',
      'Designed and maintained Power BI semantic models integrating SAP Business One labor, cost, contract, and progress data, improving reporting accuracy by 30%.',
      'Automated SQL-based reporting and SAP B1 extraction workflows, reducing reporting turnaround by 15% and saving 5-10 hours of manual effort per week.',
      'Gathered requirements from Finance, Operations, and Project Management stakeholders, delivering an executive Power BI reporting ecosystem used by 20+ senior leaders.',
      'Developed Power Apps solutions for timesheet entry and labor tracking, reducing data-entry errors by 20%.',
    ],
    highlights: {
      badge: 'Source of Truth',
      title: 'Executive Power BI Reporting Ecosystem',
      description:
        'A semantic model unifying SAP Business One labor, cost, contract, and progress data into one executive-facing reporting layer.',
      features: [
        'Predictive project analytics app forecasting lump-sum overruns and flagging early risk indicators',
        'Power BI semantic models integrating SAP B1 labor, cost, contract, and progress data',
        'Automated SQL-based reporting and SAP B1 extraction workflows',
        'Power Apps timesheet entry and labor tracking, replacing manual data entry',
      ],
      metrics: [
        { value: '20+', label: 'Senior leaders served' },
        { value: '30%', label: 'Reporting accuracy' },
        { value: '15%', label: 'Faster turnaround' },
      ],
    },
  },
  {
    role: 'Data Analyst (Contract)',
    company: 'Red Wireless',
    logo: '/logos/redwireless.png',
    location: 'Saskatoon, SK, Canada',
    period: 'Nov 2024 – Dec 2024',
    skills: ['SQL', 'Python', 'KPI Dashboards', 'JavaScript', 'REST APIs', 'Google Sheets'],
    bullets: [
      'Built and automated interactive KPI dashboards for marketing and operations teams, reducing manual reporting effort by 50%.',
      'Performed data cleansing, transformation, and validation in SQL and Python, improving data accuracy by 25%.',
      'Integrated third-party APIs with Google Sheets via JavaScript, reducing reporting turnaround by 80% for near real-time access to business metrics.',
    ],
  },
  {
    role: 'MLOps Engineer Intern',
    company: 'Vosyn',
    logo: '/logos/vosyn.png',
    location: 'Etobicoke, ON, Canada',
    period: 'May 2024 – Oct 2024',
    skills: ['GitHub Actions', 'Docker', 'AWS (Lambda, EC2, ECR, ECS)', 'Python', 'CI/CD'],
    bullets: [
      'Enhanced CI/CD pipelines using GitHub Actions and Docker, reducing build times by 40% and deployment failures by 30%.',
      'Provisioned AWS infrastructure (Lambda, EC2, S3, ECR, ECS) to support scalable data-processing and ML workloads against a 99.9% uptime target.',
      'Optimized Python-based data-processing pipelines, increasing throughput by 50% and reducing latency by 25%.',
    ],
    testimonial: {
      quote:
        "I had the pleasure of working with Shrey on an ML project using Python and its AWS integration. Shrey's expertise in these areas was outstanding, consistently delivering high-quality, efficient code and demonstrating exceptional problem-solving skills. His positive attitude and collaborative spirit made him an invaluable member of our team. I highly recommend Shrey for any role requiring AWS, advanced Python, and machine learning skills.",
      author: 'Sreelakshmi Mohan',
      role: 'AI Cloud Engineer Intern @ Vosyn · Worked with Shrey on the same team',
      photo: '/testimonials/sreelakshmi-mohan.png',
    },
  },
  {
    role: 'AI Engineer Intern',
    company: 'Radical AI',
    logo: '/logos/radicalai.png',
    location: 'Remote',
    period: 'Nov 2023 – Feb 2024',
    skills: ['Vertex AI', 'Firebase', 'TensorFlow', 'NLP', 'Large Language Models'],
    bullets: [
      'Worked on technologies like Vertex AI, Firebase, and TensorFlow to improve Rex, an AI coach, resulting in a 30% increase in performance and user engagement.',
      'Quickly adapted to emerging technologies, including Large Language Models, enhancing the team\'s innovation in AI solutions.',
      'Evaluated and stress-tested AI model performance against large-scale input datasets, validating accuracy thresholds prior to deployment.',
      'Implemented and refined NLP and ML algorithms, boosting the platform\'s understanding and interaction with users.',
    ],
  },
  {
    role: 'Data Science & Business Analytics',
    company: 'The Sparks Foundation',
    logo: '/logos/sparksfoundation.png',
    location: 'Gujarat, India',
    period: 'Jan 2022 – Feb 2022',
    skills: ['Python', 'Machine Learning', 'Data Cleaning', 'Predictive Modeling'],
    bullets: [
      'Extracted and processed large educational datasets to build a student performance prediction model, achieving 89% accuracy after iterative model optimization.',
      'Implemented data management practices including cleaning, merging, and quality control to ensure data integrity and analytical reliability.',
    ],
  },
];

export const projects = [
  {
    name: 'Mental Health Apprehension Analytics',
    tag: 'AI & Data Analyst Project — Toronto Public Data',
    period: 'Aug 2024',
    status: 'Public dataset',
    stack: ['AWS', 'HDFS', 'Python', 'Streamlit'],
    problem: 'Toronto Police apprehension data was public but too large and unstructured for stakeholders to act on.',
    bullets: [
      'Built an end-to-end ETL and analytics pipeline on AWS/HDFS to ingest, clean, and analyze Toronto Police public datasets at scale, reducing manual preprocessing effort by ~60%.',
      'Developed a forecasting model to predict apprehension locations and behavior patterns, delivered via a Streamlit web application for stakeholder decision support.',
    ],
    impact: '~60% less manual preprocessing effort, with predictions delivered through a self-serve Streamlit app.',
  },
  {
    name: 'JupyterHub Sandbox Administration System',
    tag: 'Cloud/Data Platform Project — Georgian College',
    period: 'Aug 2023',
    status: 'Academic',
    stack: ['JupyterHub', 'Linux', 'RBAC'],
    problem: 'A cohort of students needed isolated, scheduled compute access without stepping on each other or the shared GPU.',
    bullets: [
      'Deployed and administered a multi-user JupyterHub environment with scheduled CPU/GPU access.',
      'Configured secure role-based access and environment isolation.',
    ],
    impact: 'Secure, self-service compute access for the cohort with no cross-user interference.',
  },
];

export const education = [
  {
    degree: 'Postgraduate Certificate in Big Data Analytics',
    school: 'Georgian College, Barrie, ON',
    period: 'Jan 2024 – Aug 2024',
    detail: '4.00/4.00 GPA · Dean’s List',
    testimonial: {
      quote:
        "Shrey stands out for his intelligence, dedication, and creativity. In my classes, he consistently impressed me with his insightful questions, innovative ideas, and strong ethic. His assignments were particularly impressive and showed his ability to tackle complex problems with ease. Besides his academic strengths, Shrey is a great team player. He is always willing to help others and contribute to group efforts. His positive attitude and determination make them a pleasure to work with. I believe Shrey will excel in any positions and bring a lot of value to your project and company.",
      author: 'Caio Gasparine, MBA, PMP, TOGAF',
      role: 'IT & Data Executive · Was Shrey\'s teacher',
      photo: '/testimonials/caio-gasparine.png',
    },
  },
  {
    degree: 'Postgraduate Certificate in Artificial Intelligence',
    school: 'Georgian College, Barrie, ON',
    period: 'Jan 2023 – Aug 2023',
    detail: '4.00/4.00 GPA · Dean’s List',
  },
  {
    degree: 'BEng in Computer Engineering',
    school: 'KSV University, Gandhinagar, India',
    period: 'Jun 2018 – Jun 2022',
    detail: '3.7/4.00 GPA',
  },
];

export const certifications = [
  {
    title: 'Microsoft Azure Data Fundamentals (DP-900)',
    org: 'Microsoft',
    logo: 'microsoft',
    url: 'https://learn.microsoft.com/en-us/users/shreymodi-9579/credentials/35a14cb878145d',
  },
  {
    title: 'Supervised Machine Learning: Regression and Classification',
    org: 'Stanford (Coursera)',
    logo: 'stanford',
    url: 'https://www.coursera.org/account/accomplishments/verify/AQLEEFHLRX8P',
  },
  {
    title: 'SAS Programming 1: Essentials',
    org: 'SAS',
    logo: 'sas',
    url: 'https://www.credly.com/badges/7894eb2e-2a3f-49b0-923c-75e08e174174/linked_in_profile',
  },
  {
    title: 'AI Skills Challenge: Azure Machine Learning',
    org: 'Microsoft',
    logo: 'microsoft',
    url: 'https://learn.microsoft.com/en-us/users/shreymodi-9579/?tab=tab-modules',
  },
  {
    title: 'AWS Academy Graduate — Machine Learning Foundations',
    org: 'AWS Academy',
    logo: 'aws',
    url: 'https://www.credly.com/badges/bc530991-f3fa-4552-9d1a-e3517984d79b/print',
  },
  {
    title: 'Advanced NoSQL for Data Science',
    org: 'Coursera',
    logo: 'coursera',
    url: 'https://www.linkedin.com/learning/certificates/0d48902ba912e81e1b0b2a73abb723396e971c42206b61f09be7b0fd6608d955',
  },
];

export const awards = [
  'Most Valuable Team Player Award — Brock Canada',
  "Dean's List x4 — Georgian College",
];

export const languages = [
  'English (Native, C2)',
  'Hindi (C1)',
  'Gujarati (C1)',
];

export const softSkills = [
  'Communication',
  'Stakeholder Management',
  'Systems Thinking',
  'Ownership E2E',
  'Bias for Action',
  'Ambiguity Management',
];

export const allSkills = {
  'AI & ML': [
    'Supervised Machine Learning (Regression & Classification)', 'Scikit-learn', 'TensorFlow',
    'NLP & Large Language Models', 'Vertex AI', 'Azure Machine Learning', 'MLOps & Model Deployment',
    'Model Evaluation & Stress-Testing',
  ],
  'BI & Technical': [
    'Power BI (Advanced DAX, Semantic Modeling, RLS)', 'Tableau', 'SQL (SQL Server, PostgreSQL)',
    'Python (Pandas, NumPy, Scikit-learn)', 'R', 'ETL/ELT Pipelines', 'Databricks',
    'REST API Integration', 'CI/CD (GitHub Actions)', 'Docker',
  ],
  'Data & Analytics': [
    'Data Governance & Mining', 'Master Data Management', 'KPI Definition & Frameworks',
    'Budget Variance Analysis', 'Scenario & Predictive Modeling', 'Statistical Analysis',
    'Google Analytics', 'A/B Testing', 'Redshift', 'Oracle', 'Data Visualization', 'Data Modelling',
  ],
  'Tools & Platforms': [
    'SAP Business One', 'Jira', 'Confluence', 'MS Visio', 'Advanced Excel (Power Query, Pivot Tables)',
    'Azure', 'AWS (Lambda, EC2, S3, ECS)', 'Power Apps', 'Power Automate', 'SharePoint', 'Git/GitHub',
  ],
  'Business Analysis & Requirements': [
    'Requirements Elicitation (JAD, Workshops)', 'As-Is/To-Be Process Mapping', 'Gap Analysis',
    'BRD/FRD', 'User Stories & Acceptance Criteria', 'RTM', 'BPMN/UML Modeling',
  ],
  'Stakeholder & Delivery': [
    'C-level Stakeholder Management', 'Business Case & Cost-Benefit Analysis',
    'Target Operating Model Design', 'Change Management', 'Agile/Scrum/SAFe',
    'Backlog Management', 'UAT Planning & Execution',
  ],
};
