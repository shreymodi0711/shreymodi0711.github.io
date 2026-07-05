import { lanes } from '../data/lanes';
import { languages } from '../data/profile';
import { useInView } from '../hooks/useCountUp';
import './About.css';

export default function About({ activeLane }) {
  const lane = lanes[activeLane];
  const [ref, isVisible] = useInView();

  return (
    <section id="about" className="section">
      <div className={`container fade-in ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <p className="section-label">About</p>
        <h2 className="section-title">Versatile across the data lifecycle</h2>
        <div className="about-grid">
          <p className="about-summary">{lane.summary}</p>
          <div className="about-side card">
            <h3 className="about-side-title">Currently framed as</h3>
            <p className="about-side-value gradient-text">{lane.fullLabel}</p>
            <h3 className="about-side-title">Languages</h3>
            <ul className="about-languages">
              {languages.map((l) => <li key={l}>{l}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
