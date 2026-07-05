import { experience } from '../data/profile';
import { useInView } from '../hooks/useCountUp';
import './Experience.css';

export default function Experience() {
  const [ref, isVisible] = useInView();

  return (
    <section id="experience" className="section">
      <div className={`container fade-in ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I've delivered impact</h2>

        <div className="timeline">
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <p className="timeline-company">{job.company} · {job.location}</p>
                  </div>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <ul className="timeline-bullets">
                  {job.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
