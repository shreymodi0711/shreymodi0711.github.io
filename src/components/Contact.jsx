import { Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { useInView } from '../hooks/useCountUp';
import './Contact.css';

export default function Contact() {
  const [ref, isVisible] = useInView();

  return (
    <section id="contact" className="section">
      <div className={`fade-in ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <p className="section-label"><Mail size={14} /> Contact</p>
        <h2 className="section-title">Let's talk</h2>
        <p className="contact-pitch">
          I bring end-to-end data delivery — from requirements to dashboards to production ML —
          to teams solving real operational problems. If you have a role where that range is
          useful, let's talk.
        </p>

        <div className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>Email me</a>
          <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn btn-secondary" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>

        <div className="contact-meta">
          <span>{profile.phone}</span>
          <span>·</span>
          <span>{profile.location} — {profile.relocation}</span>
        </div>
      </div>
    </section>
  );
}
