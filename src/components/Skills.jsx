import { Code, Globe } from 'lucide-react';
import { languages, softSkills, allSkills } from '../data/profile';
import { useInView } from '../hooks/useCountUp';
import './Skills.css';

export default function Skills() {
  const [ref, isVisible] = useInView();

  return (
    <section id="skills" className="section">
      <div className={`fade-in ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <div className="skills-heading">
          <span className="skills-heading-icon"><Code size={18} /></span>
          <h2 className="section-title skills-heading-title">Skills</h2>
        </div>

        <div className="skills-layout">
          <div className="skills-side">
            <h3 className="skills-side-title">
              <span className="skills-side-icon"><Globe size={14} /></span> Languages
            </h3>
            <div className="skills-languages">
              {languages.map((l, i) => {
                const [name, level] = l.split(/\s*\(/);
                const cleanLevel = level ? level.replace(')', '') : '';
                return (
                  <div key={l} className="skills-language-row">
                    <span>{name}</span>
                    <span className={i === 0 ? 'skills-language-native' : 'skills-language-level'}>
                      {cleanLevel}
                    </span>
                  </div>
                );
              })}
            </div>

            <h3 className="skills-side-title skills-side-title-spaced">Soft Skills</h3>
            <div className="skills-soft-tags">
              {softSkills.map((skill) => (
                <span key={skill} className="skills-soft-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skills-stack">
            <h3 className="skills-side-title">Technical Stack</h3>
            <div className="skills-stack-grid">
              {Object.entries(allSkills).map(([group, items]) => (
                <div key={group} className="skills-stack-card card">
                  <span className="skills-stack-card-label">{group}</span>
                  <div className="skills-stack-card-items">
                    {items.map((item) => (
                      <span key={item} className="skills-stack-chip">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
