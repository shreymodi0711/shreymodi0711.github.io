import { Briefcase, FolderGit2, Mail, Award } from 'lucide-react';
import { useInView } from '../hooks/useCountUp';
import { story, storyBeats, stats, testimonial } from '../data/narrative';
import Metrics from './Metrics';
import './About.css';

const lineClassByVariant = {
  lead: 'about-line about-line-lead',
  muted: 'about-line about-line-muted',
  body: 'about-why',
};

const beatClassByVariant = {
  bold: 'about-beat about-beat-bold',
  muted: 'about-beat about-beat-muted',
  highlight: 'about-beat about-beat-highlight',
};

export default function About() {
  const [ref, isVisible] = useInView();

  return (
    <section id="about" className="section about-section">
      <div className={`about-story fade-in ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        {story.map((line) =>
          line.variant === 'lead' ? (
            <p key={line.id} className={lineClassByVariant[line.variant]}>
              <span className="gradient-text about-line-strong">{line.strong}</span>
              {line.text.slice(line.strong.length)}
            </p>
          ) : (
            <p key={line.id} className={lineClassByVariant[line.variant]}>
              {line.text}
            </p>
          ),
        )}

        <Metrics metrics={stats} />

        <div className="about-testimonial">
          <span className="about-testimonial-icon"><Award size={22} /></span>
          <div>
            <p className="about-testimonial-quote">{testimonial.quote}</p>
            <p className="about-testimonial-attribution">
              <span className="about-testimonial-name">{testimonial.name}</span>{' '}
              <span className="about-testimonial-title">{testimonial.title}</span>
            </p>
          </div>
        </div>

        <div className="about-beats">
          {storyBeats.map((beat) => (
            <p key={beat.id} className={beatClassByVariant[beat.variant]}>{beat.text}</p>
          ))}
        </div>

        <nav className="about-nav">
          <a href="#experience" className="about-nav-pill">
            <Briefcase size={14} /> Where I've worked
          </a>
          <a href="#projects" className="about-nav-pill">
            <FolderGit2 size={14} /> What I've built
          </a>
          <a href="#contact" className="about-nav-pill about-nav-pill-highlight">
            <Mail size={14} /> Let's talk
          </a>
        </nav>
      </div>
    </section>
  );
}
