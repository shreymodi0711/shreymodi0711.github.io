import { lanes } from '../data/lanes';
import { profile } from '../data/profile';
import LaneSwitcher from './LaneSwitcher';
import './Hero.css';

export default function Hero({ activeLane, onLaneChange, hasPickedLane }) {
  const lane = lanes[activeLane];

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <p className="section-label">{profile.location} · {profile.relocation}</p>
        <h1 className="hero-name">{profile.name}</h1>

        {hasPickedLane ? (
          <>
            <h2 className="hero-headline gradient-text">{lane.headline}</h2>
            <p className="hero-tagline">{lane.tagline}</p>
          </>
        ) : (
          <>
            <h2 className="hero-headline gradient-text">Data & AI Professional</h2>
            <p className="hero-tagline">
              Business Analysis · Data Analytics · Data Engineering · Data Science · AI/ML
            </p>
          </>
        )}

        <p className="hero-summary">{lane.summary}</p>

        <div className="hero-lane-picker">
          <p className="hero-lane-prompt">See me through the lens of:</p>
          <LaneSwitcher activeLane={activeLane} onChange={onLaneChange} />
        </div>

        <div className="hero-actions">
          <a className="btn btn-primary" href={lane.cvFile} download>
            Download {lane.fullLabel} CV
          </a>
          <a className="btn btn-secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
