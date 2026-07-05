import { lanes } from '../data/lanes';
import { allSkills } from '../data/profile';
import { useInView } from '../hooks/useCountUp';
import './Skills.css';

export default function Skills({ activeLane }) {
  const lane = lanes[activeLane];
  const topSkillSet = new Set(lane.topSkills);
  const [ref, isVisible] = useInView();

  return (
    <section className="section">
      <div className={`container fade-in ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <p className="section-label">Skills</p>
        <h2 className="section-title">
          Core strengths, tuned for <span className="gradient-text">{lane.fullLabel}</span>
        </h2>

        <div className="skills-highlight">
          {lane.topSkills.map((skill) => (
            <span key={skill} className="chip chip-highlight">{skill}</span>
          ))}
        </div>

        <div className="skills-groups">
          {Object.entries(allSkills).map(([group, skills]) => (
            <div key={group} className="skills-group">
              <h3 className="skills-group-title">{group}</h3>
              <div className="skills-chips">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`chip ${topSkillSet.has(skill) ? 'chip-highlight' : ''}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
