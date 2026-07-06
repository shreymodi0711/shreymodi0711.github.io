import { FolderGit2, Github } from 'lucide-react';
import { profile, projects } from '../data/profile';
import { useInView } from '../hooks/useCountUp';
import './Projects.css';

export default function Projects() {
  const [ref, isVisible] = useInView();

  return (
    <section id="projects" className="section">
      <div className={`fade-in ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <div className="projects-heading">
          <p className="section-label"><FolderGit2 size={14} /> Projects</p>
          <a href={profile.github} target="_blank" rel="noreferrer" className="projects-github-link">
            <Github size={14} /> {profile.githubLabel}
          </a>
        </div>
        <h2 className="section-title">Things I've built</h2>

        <div className={`projects-grid stagger-children ${isVisible ? 'is-visible' : ''}`}>
          {projects.map((project) => (
            <div key={project.name} className="project-card card">
              <div className="project-top">
                <span className="project-tag">{project.tag}</span>
                <span className={`pill project-status ${project.status === 'Academic' ? 'project-status-muted' : ''}`}>
                  {project.status}
                </span>
              </div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-period">{project.period}</p>

              {project.problem && (
                <p className="project-problem">
                  <span className="project-problem-label">Problem —</span> {project.problem}
                </p>
              )}

              <ul className="project-bullets">
                {project.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>

              {project.impact && (
                <p className="project-impact">
                  <span className="project-impact-label">Impact —</span> {project.impact}
                </p>
              )}

              <div className="project-stack">
                {project.stack.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
