import { lanes, laneOrder } from '../data/lanes';
import { profile } from '../data/profile';
import { useInView } from '../hooks/useCountUp';
import './ContactCV.css';

export default function ContactCV({ activeLane }) {
  const lane = lanes[activeLane];
  const [ref, isVisible] = useInView();

  const uniqueCvFiles = [...new Map(laneOrder.map((key) => [lanes[key].cvFile, lanes[key]])).values()];

  return (
    <section id="contact" className="section">
      <div className={`container fade-in ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's talk</h2>

        <div className="contact-grid">
          <div className="contact-links card">
            <a className="contact-link" href={`mailto:${profile.email}`}>
              <span className="contact-link-label">Email</span>
              <span>{profile.email}</span>
            </a>
            <a className="contact-link" href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>
              <span className="contact-link-label">Phone</span>
              <span>{profile.phone}</span>
            </a>
            <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="contact-link-label">LinkedIn</span>
              <span>{profile.linkedinLabel}</span>
            </a>
            <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
              <span className="contact-link-label">GitHub</span>
              <span>{profile.githubLabel}</span>
            </a>
            <div className="contact-link contact-location">
              <span className="contact-link-label">Location</span>
              <span>{profile.location} — {profile.relocation}</span>
            </div>
          </div>

          <div className="contact-cv card">
            <h3 className="contact-cv-title">Download my CV</h3>
            <p className="contact-cv-sub">
              Get the version tailored to <span className="gradient-text">{lane.fullLabel}</span>, or grab any other lane below.
            </p>
            <a className="btn btn-primary contact-cv-primary" href={lane.cvFile} download>
              Download {lane.fullLabel} CV
            </a>
            <div className="contact-cv-all">
              {uniqueCvFiles.map((l) => (
                <a key={l.cvFile} className="chip contact-cv-chip" href={l.cvFile} download>
                  {l.fullLabel} CV
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
