import { GraduationCap, Linkedin } from 'lucide-react';
import { profile, education, certifications, awards } from '../data/profile';
import { useInView } from '../hooks/useCountUp';
import CertLogo from './CertLogo';
import './Education.css';

export default function Education() {
  const [ref, isVisible] = useInView();

  return (
    <section id="education" className="section">
      <div className={`fade-in ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <p className="section-label"><GraduationCap size={14} /> Education & Certifications</p>
        <h2 className="section-title">Foundations</h2>

        <div className="education-grid">
          <div className="education-col">
            <h3 className="education-col-title">Education</h3>
            {education.map((e) => (
              <div key={e.degree} className="education-item card">
                <h4 className="education-degree">{e.degree}</h4>
                <p className="education-school">{e.school}</p>
                <div className="education-meta">
                  <span>{e.period}</span>
                  <span className="gradient-text education-detail">{e.detail}</span>
                </div>

                {e.testimonial && (
                  <a
                    href={`${profile.linkedin}details/recommendations/`}
                    target="_blank"
                    rel="noreferrer"
                    className="education-testimonial-link"
                  >
                    <blockquote className="education-testimonial">
                      <p className="education-testimonial-quote">"{e.testimonial.quote}"</p>
                      <footer className="education-testimonial-footer">
                        <img
                          src={e.testimonial.photo}
                          alt={e.testimonial.author}
                          className="education-testimonial-photo"
                        />
                        <div className="education-testimonial-attribution">
                          <span className="education-testimonial-author">{e.testimonial.author}</span>
                          <span className="education-testimonial-role">{e.testimonial.role}</span>
                        </div>
                        <Linkedin size={16} className="education-testimonial-linkedin" />
                      </footer>
                    </blockquote>
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="education-col">
            <h3 className="education-col-title">Certifications</h3>
            <div className="cert-rows">
              {certifications.map((cert, i) => {
                const Tag = cert.url ? 'a' : 'div';
                return (
                  <Tag
                    key={cert.title}
                    {...(cert.url ? { href: cert.url, target: '_blank', rel: 'noreferrer nofollow' } : {})}
                    className={`cert-row ${i % 2 === 1 ? 'cert-row-alt' : ''}`}
                  >
                    <div className="cert-row-text">
                      <p className="cert-row-title">{cert.title}</p>
                      <p className="cert-row-org">{cert.org}</p>
                    </div>
                    <span className="cert-row-logo">
                      <CertLogo logo={cert.logo} />
                    </span>
                  </Tag>
                );
              })}
            </div>

            <h3 className="education-col-title education-col-title-spaced">Awards</h3>
            <div className="cert-list card">
              <ul>
                {awards.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
