export const profile = {
  name: 'Shrey Modi',
  location: 'Toronto, Canada',
  relocation: 'Open to relocation anywhere',
  email: 'shreymodi0711@gmail.com',
  phone: '+1 (905) 783-9118',
  linkedin: 'https://linkedin.com/in/shreymodi786',
  linkedinLabel: 'linkedin.com/in/shreymodi786',
  github: 'https://github.com/shreymodi786',
  githubLabel: 'github.com/shreymodi786',
};

export const experience = [
  {
    role: 'Business Analyst',
    company: 'Brock Canada',
    location: 'Nisku, AB, Canada',
    period: 'Feb 2025 – May 2026',
    bullets: [
      'Built a predictive project analytics application forecasting lump-sum project overruns and identifying early risk indicators, supporting proactive cost-control decisions.',
      'Defined project KPI frameworks and performed budget-variance analysis, forecasting, and CPI/PF productivity analysis, improving forecast reliability.',
      'Designed and maintained Power BI semantic models integrating SAP Business One labor, cost, contract, and progress data, improving reporting accuracy by 30%.',
      'Automated SQL-based reporting and SAP B1 extraction workflows, reducing reporting turnaround by 15% and saving 5-10 hours of manual effort per week.',
      'Gathered requirements from Finance, Operations, and Project Management stakeholders, delivering an executive Power BI reporting ecosystem used by 20+ senior leaders.',
      'Developed Power Apps solutions for timesheet entry and labor tracking, reducing data-entry errors by 20%.',
    ],
  },
  {
    role: 'Data Analyst (Contract)',
    company: 'Red Wireless',
    location: 'Saskatoon, SK, Canada',
    period: 'Nov 2024 – Dec 2024',
    bullets: [
      'Built and automated interactive KPI dashboards for marketing and operations teams, reducing manual reporting effort by 50%.',
      'Performed data cleansing, transformation, and validation in SQL and Python, improving data accuracy by 25%.',
      'Integrated third-party APIs with Google Sheets via JavaScript, reducing reporting turnaround by 80% for near real-time access to business metrics.',
    ],
  },
  {
    role: 'MLOps Engineer Intern',
    company: 'Vosyn',
    location: 'Etobicoke, ON, Canada',
    period: 'May 2024 – Oct 2024',
    bullets: [
      'Enhanced CI/CD pipelines using GitHub Actions and Docker, reducing build times by 40% and deployment failures by 30%.',
      'Provisioned AWS infrastructure (Lambda, EC2, S3, ECR, ECS) to support scalable data-processing and ML workloads against a 99.9% uptime target.',
      'Optimized Python-based data-processing pipelines, increasing throughput by 50% and reducing latency by 25%.',
    ],
  },
];

export const projects = [
  {
    name: 'Mental Health Apprehension Analytics',
    tag: 'AI & Data Analyst Project — Toronto Public Data',
    period: 'Aug 2024',
    bullets: [
      'Built an end-to-end ETL and analytics pipeline on AWS/HDFS to ingest, clean, and analyze Toronto Police public datasets at scale, reducing manual preprocessing effort by ~60%.',
      'Developed a forecasting model to predict apprehension locations and behavior patterns, delivered via a Streamlit web application for stakeholder decision support.',
    ],
  },
  {
    name: 'JupyterHub Sandbox Administration System',
    tag: 'Cloud/Data Platform Project — Georgian College',
    period: 'Aug 2023',
    bullets: [
      'Deployed and administered a multi-user JupyterHub environment with scheduled CPU/GPU access.',
      'Configured secure role-based access and environment isolation.',
    ],
  },
];

export const education = [
  {
    degree: 'Postgraduate Certificate in Big Data Analytics',
    school: 'Georgian College, Barrie, ON',
    period: 'Jan 2024 – Aug 2024',
    detail: '4.00/4.00 GPA · Dean’s List',
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
  'Microsoft Azure Data Fundamentals (DP-900)',
  'Azure Machine Learning',
  'AWS Academy Machine Learning for NLP',
  'AWS Academy Cloud Architecting',
  'Advanced Power BI: DAX Language, Formulas, and Calculations',
  'Stanford Supervised Machine Learning',
];

export const awards = [
  'Most Valuable Team Player Award — Brock Canada',
  "Dean's List x2 — Georgian College",
];

export const languages = [
  'English (Native, C2)',
  'Hindi (C1)',
  'Gujarati (C1)',
];

export const allSkills = {
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
