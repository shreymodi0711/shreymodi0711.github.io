import { education, certifications, awards } from '../data/profile';
import { useInView } from '../hooks/useCountUp';
import './Education.css';

export default function Education() {
  const [ref, isVisible] = useInView();

  return (
    <section id="education" className="section">
      <div className={`container fade-in ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <p className="section-label">Education & Certifications</p>
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
              </div>
            ))}
          </div>

          <div className="education-col">
            <h3 className="education-col-title">Certifications</h3>
            <div className="cert-list card">
              <ul>
                {certifications.map((c) => <li key={c}>{c}</li>)}
              </ul>
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
