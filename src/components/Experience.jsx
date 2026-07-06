import { Briefcase, Zap, ArrowRight, Linkedin } from 'lucide-react';
import { profile, experience } from '../data/profile';
import { useInView } from '../hooks/useCountUp';
import './Experience.css';

const coreCompetencies = [
  {
    title: 'BI & Reporting',
    desc: 'Power BI semantic models, advanced DAX, RLS, executive dashboards',
  },
  {
    title: 'Requirements & Process',
    desc: 'Stakeholder elicitation, BRD/FRD, gap analysis, As-Is/To-Be mapping',
  },
  {
    title: 'Data Engineering',
    desc: 'ETL/ELT pipelines, SQL automation, AWS infrastructure, CI/CD',
  },
  {
    title: 'Predictive Modeling',
    desc: 'Regression, classification, and forecasting with Python and R',
  },
  {
    title: 'MLOps & Deployment',
    desc: 'Production ML workflows, Streamlit deployment, scalable AWS services',
  },
  {
    title: 'Stakeholder Delivery',
    desc: 'C-level communication, business cases, Agile/Scrum/SAFe delivery',
  },
];

export default function Experience() {
  const [ref, isVisible] = useInView();

  return (
    <section id="experience" className="section">
      <div className={`fade-in ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <div className="experience-heading">
          <span className="experience-heading-icon">
            <Briefcase size={20} />
          </span>
          <h2 className="section-title experience-heading-title">Work Experience</h2>
        </div>

        <p className="experience-preamble">
          End-to-end ownership across{' '}
          <span className="experience-preamble-highlight">
            requirements → modeling → delivery → adoption
          </span>
          , collaborating closely with Finance, Operations, and Engineering stakeholders.
        </p>

        <div className="competency-grid">
          {coreCompetencies.map((c) => (
            <div key={c.title} className="competency-card">
              <div className="competency-card-top">
                <Zap size={16} className="competency-icon" />
                <span className="competency-title">{c.title}</span>
              </div>
              <p className="competency-desc">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="timeline">
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`} className="timeline-item">
              <div className="timeline-top">
                <div className="timeline-brand">
                  <div className="timeline-logo">
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      loading="lazy"
                      style={job.logoScale ? { transform: `scale(${job.logoScale})` } : undefined}
                    />
                  </div>
                  <h3 className="timeline-company">{job.company}</h3>
                </div>
                <span className="timeline-location">{job.location}</span>
              </div>
              <p className="timeline-role">{job.role}</p>
              <p className="timeline-period">{job.period}</p>
              <ul className="timeline-bullets">
                {job.bullets.map((b) => (
                  <li key={b}>
                    <span className="timeline-bullet-dot">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {job.skills && (
                <div className="timeline-skills">
                  {job.skills.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              )}

              {job.highlights && (
                <div className="highlight-card">
                  <div className="highlight-card-body">
                    <div className="highlight-card-top">
                      <span className="highlight-card-icon">
                        <img src="/logos/powerbi.png" alt="Power BI" />
                      </span>
                      <span className="pill highlight-card-badge">{job.highlights.badge}</span>
                    </div>
                    <h4 className="highlight-card-title">{job.highlights.title}</h4>
                    <p className="highlight-card-desc">{job.highlights.description}</p>
                    <ul className="highlight-card-features">
                      {job.highlights.features.map((f) => (
                        <li key={f}>
                          <span className="highlight-card-feature-icon">▪</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" className="highlight-card-cta">
                      <span className="highlight-card-cta-label">Want the details? Let's talk</span>
                      <ArrowRight size={14} className="highlight-card-cta-chevron" />
                    </a>
                  </div>
                  <div className="highlight-card-metrics">
                    {job.highlights.metrics.map((m) => (
                      <div key={m.label} className="highlight-metric-tile">
                        <span className="highlight-metric-value">{m.value}</span>
                        <span className="highlight-metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {job.testimonial && (
                <a
                  href={`${profile.linkedin}details/recommendations/`}
                  target="_blank"
                  rel="noreferrer"
                  className="timeline-testimonial-link"
                >
                  <blockquote className="timeline-testimonial">
                    <p className="timeline-testimonial-quote">"{job.testimonial.quote}"</p>
                    <footer className="timeline-testimonial-footer">
                      <img
                        src={job.testimonial.photo}
                        alt={job.testimonial.author}
                        className="timeline-testimonial-photo"
                      />
                      <div className="timeline-testimonial-attribution">
                        <span className="timeline-testimonial-author">{job.testimonial.author}</span>
                        <span className="timeline-testimonial-role">{job.testimonial.role}</span>
                      </div>
                      <Linkedin size={16} className="timeline-testimonial-linkedin" />
                    </footer>
                  </blockquote>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
