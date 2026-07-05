import { projects } from '../data/profile';
import { useInView } from '../hooks/useCountUp';
import './Projects.css';

export default function Projects() {
  const [ref, isVisible] = useInView();

  return (
    <section id="projects" className="section">
      <div className={`container fade-in ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I've built</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.name} className="project-card card">
              <span className="project-tag">{project.tag}</span>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-period">{project.period}</p>
              <ul className="project-bullets">
                {project.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
