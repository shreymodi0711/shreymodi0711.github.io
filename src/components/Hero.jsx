import { Check } from 'lucide-react';
import { hero } from '../data/narrative';
import { profile } from '../data/profile';
import { useTypewriter } from '../hooks/useTypewriter';
import profilePhoto from '../assets/profile-photo.jpg';
import './Hero.css';

export default function Hero() {
  const [typed, typedDone] = useTypewriter(hero.headlineTyped, {
    speed: 42,
    startDelay: 250,
  });

  return (
    <section id="top" className="hero">
      <div className="hero-glow-wrap" aria-hidden="true">
        <div className="hero-glow hero-glow-cyan" />
        <div className="hero-glow hero-glow-purple" />
      </div>

      <div className="container hero-inner">
        <div className="hero-avatar-wrap">
          <div className="hero-avatar-glow" />
          <div className="hero-avatar-frame" />
          <div className="hero-avatar-ring">
            <img className="hero-avatar" src={profilePhoto} alt={profile.name} />
          </div>
          <span className="hero-avatar-badge" title="Open to work"><Check size={18} strokeWidth={3} /></span>
        </div>

        <div className="hero-text">
          <p className="hero-greeting">
            {hero.greeting} <span className="accent-cyan">{profile.name.split(' ')[0]}</span>,
          </p>

          <h1 className="hero-headline">
            <span className="gradient-text hero-typewriter">
              {typed}
              <span className={`hero-cursor ${typedDone ? 'hero-cursor-done' : ''}`}>|</span>
            </span>
            <br />
            {hero.headlineRest}{' '}
            <span className="hero-beam">
              <span className="hero-beam-text">
                {hero.beamParts.map((part, i) => (
                  <span key={part}>
                    {i > 0 && <span className="hero-beam-plus"> + </span>}
                    {part}
                  </span>
                ))}
              </span>
            </span>
          </h1>

          <div className="hero-pills">
            {hero.credentials.map((cred) => (
              <span key={cred} className="hero-pill">{cred}</span>
            ))}
            <span className="hero-pill hero-pill-highlight">
              {profile.location} · {profile.relocation}
            </span>
          </div>

          <div className="hero-cta-row">
            <a href="#experience" className="btn btn-primary">View my work</a>
            <a href="#contact" className="btn btn-secondary">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}
