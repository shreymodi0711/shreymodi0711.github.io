import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import './SidebarNav.css';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills & Stack' },
  { id: 'contact', label: 'Contact' },
];

export default function SidebarNav() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const [visible, setVisible] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const checkVisible = () => {
      const trigger = document.getElementById('about');
      if (!trigger) return;
      setVisible(trigger.getBoundingClientRect().top <= 120);
    };

    checkVisible();
    window.addEventListener('scroll', checkVisible, { passive: true });
    return () => window.removeEventListener('scroll', checkVisible);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const activeIdx = sections.findIndex((s) => s.id === activeId);
  const lastIdx = sections.length - 1;
  const progressFrac = activeIdx >= 0 ? activeIdx / lastIdx : 0;

  const navList = (
    <ul>
      {sections.map(({ id, label }, i) => {
        const isActive = activeId === id;
        const isPast = i <= activeIdx;
        return (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={() => setDrawerOpen(false)}
              className={
                isActive ? 'sidebar-nav-active' : isPast ? 'sidebar-nav-past' : ''
              }
            >
              <span className="sidebar-nav-dot" />
              <span className="sidebar-nav-label">{label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <nav
        className={`sidebar-nav ${visible ? 'sidebar-nav-visible' : ''}`}
        aria-label="Section navigation"
      >
        <div className="sidebar-nav-track" />
        <div
          className="sidebar-nav-progress"
          style={{ transform: `scaleY(${progressFrac})` }}
        />
        {navList}
      </nav>

      <div className={`sidebar-nav-mobile ${visible ? 'sidebar-nav-mobile-visible' : ''}`}>
        {drawerOpen && (
          <nav className="sidebar-nav-drawer" aria-label="Section navigation">
            {navList}
          </nav>
        )}
        <button
          type="button"
          className="sidebar-nav-fab"
          aria-label={drawerOpen ? 'Close section navigation' : 'Open section navigation'}
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen((open) => !open)}
        >
          {drawerOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </>
  );
}
