export const lanes = {
  ba: {
    key: 'ba',
    label: 'BA',
    fullLabel: 'Business Analyst',
    headline: 'Business Analyst',
    tagline: 'Requirements & Process Mapping · Power BI & SQL',
    summary:
      'Business Analyst with nearly 2 years bridging Finance, Operations, and IT — turning complex operational and financial data into clear requirements and delivered solutions. Skilled in stakeholder elicitation, As-Is/To-Be process mapping, BRD/FRD documentation, gap analysis, and UAT planning, with hands-on Power BI and SQL delivery across the full project cycle.',
    metrics: [
      { value: 20, suffix: '+', label: 'Senior leaders served by BI ecosystem' },
      { value: 30, suffix: '%', label: 'Reporting accuracy improvement' },
      { value: 15, suffix: '%', label: 'Faster reporting turnaround' },
    ],
    topSkills: [
      'Requirements Elicitation (JAD, Workshops)', 'BRD/FRD', 'As-Is/To-Be Process Mapping',
      'Gap Analysis', 'RTM', 'BPMN/UML Modeling', 'Power BI', 'SQL', 'C-level Stakeholder Management',
      'Agile/Scrum/SAFe', 'UAT Planning & Execution', 'SAP Business One',
    ],
    cvFile: '/cv/Shrey_Modi_Business_Analyst.pdf',
  },
  da: {
    key: 'da',
    label: 'DA',
    fullLabel: 'Data Analyst',
    headline: 'Data Analyst',
    tagline: 'Power BI (Advanced DAX) & SQL · Python & BI Automation',
    summary:
      'Data Analyst with nearly 2 years delivering executive dashboards, automated SQL reporting, and predictive analytics across finance and operations. Deep hands-on Power BI expertise (advanced DAX, semantic modeling, row-level security) with strong SQL and Python, a track record of improving reporting accuracy by 30%, and a reputation for data storytelling that drives stakeholder adoption.',
    metrics: [
      { value: 50, suffix: '%', label: 'Less manual reporting effort' },
      { value: 30, suffix: '%', label: 'Reporting accuracy improvement' },
      { value: 25, suffix: '%', label: 'Data accuracy improvement' },
    ],
    topSkills: [
      'Power BI (Advanced DAX, RLS)', 'SQL (SQL Server, PostgreSQL)', 'Python (Pandas, NumPy)',
      'Data Visualization', 'Data Modelling', 'Statistical Analysis', 'A/B Testing',
      'Data Governance & Quality', 'Tableau', 'ETL/ELT Pipelines',
    ],
    cvFile: '/cv/Shrey_Modi_Data_Analyst.pdf',
  },
  de: {
    key: 'de',
    label: 'DE',
    fullLabel: 'Data Engineer',
    headline: 'Data Engineer',
    tagline: 'SQL, Python & ETL Pipelines · AWS, Azure, Databricks & CI/CD',
    summary:
      'Data engineering professional with hands-on experience building ETL/ELT pipelines, automating SQL extraction workflows, and provisioning cloud infrastructure. Strengthened CI/CD pipelines with GitHub Actions and Docker (build times down 40%), provisioned AWS services for scalable data workloads, and integrated systems into governed Power BI semantic models used by 20+ senior leaders.',
    metrics: [
      { value: 40, suffix: '%', label: 'Faster CI/CD build times' },
      { value: 50, suffix: '%', label: 'Higher pipeline throughput' },
      { value: 25, suffix: '%', label: 'Lower processing latency' },
    ],
    topSkills: [
      'ETL/ELT Pipelines', 'AWS (Lambda, EC2, S3, ECS)', 'Docker', 'CI/CD (GitHub Actions)',
      'Databricks', 'REST API Integration', 'SQL (SQL Server, PostgreSQL)', 'Python',
      'Azure', 'Git/GitHub',
    ],
    cvFile: '/cv/Shrey_Modi_Data_Engineer.pdf',
  },
  ds: {
    key: 'ds',
    label: 'DS',
    fullLabel: 'Data Scientist',
    headline: 'Data Scientist',
    tagline: 'Python, R & Predictive Modeling · Machine Learning & MLOps',
    summary:
      'Data science professional combining 4.0-GPA postgraduate credentials in Artificial Intelligence and Big Data Analytics with applied delivery: predictive models for project cost overruns, public-safety forecasting deployed via Streamlit on AWS, and production ML workflow support (CI/CD, Docker, AWS). Strong grounding in regression, classification, and model evaluation, fluent in Python, R, and SQL.',
    metrics: [
      { value: 4.0, suffix: '/4.0', label: 'Postgraduate GPA (AI & Big Data)' },
      { value: 60, suffix: '%', label: 'Less manual preprocessing effort' },
      { value: 50, suffix: '%', label: 'Higher forecast/pipeline accuracy' },
    ],
    topSkills: [
      'Python (Scikit-learn, Pandas, NumPy)', 'R', 'Regression & Classification',
      'Predictive & Scenario Modeling', 'Model Evaluation', 'Streamlit', 'Statistical Analysis',
      'Stanford Supervised ML (Certified)', 'AWS', 'Docker',
    ],
    cvFile: '/cv/Shrey_Modi_Data_Scientist.pdf',
  },
  ai: {
    key: 'ai',
    label: 'AI/ML',
    fullLabel: 'AI / ML Engineer',
    headline: 'AI / ML Engineer',
    tagline: 'MLOps, NLP & Model Deployment',
    summary:
      'AI/ML-focused engineer with production MLOps experience: strengthened CI/CD pipelines for ML workflows (GitHub Actions, Docker, build times down 40%), provisioned AWS infrastructure for scalable ML workloads against a 99.9% uptime target, and deployed forecasting models via Streamlit. AWS Academy Machine Learning for NLP certified, with hands-on Scikit-learn and applied ML delivery from data to deployment.',
    metrics: [
      { value: 40, suffix: '%', label: 'Faster ML pipeline CI/CD' },
      { value: 99.9, suffix: '%', label: 'Target infrastructure uptime' },
      { value: 30, suffix: '%', label: 'Fewer deployment failures' },
    ],
    topSkills: [
      'MLOps (CI/CD, Docker)', 'AWS (Lambda, EC2, S3, ECR, ECS)', 'Scikit-learn',
      'AWS ML for NLP (Certified)', 'Streamlit Deployment', 'Model Evaluation',
      'Python', 'Azure Machine Learning', 'Predictive Modeling', 'Data Pipelines',
    ],
    cvFile: '/cv/Shrey_Modi_Data_Scientist.pdf',
  },
};

export const laneOrder = ['ba', 'da', 'de', 'ds', 'ai'];
export const defaultLane = 'ds';
