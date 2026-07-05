import { profile } from '../data/profile';
import LaneSwitcher from './LaneSwitcher';
import './Navbar.css';

export default function Navbar({ activeLane, onLaneChange }) {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="navbar-brand">{profile.name}</a>
        <nav className="navbar-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="navbar-switcher">
          <LaneSwitcher activeLane={activeLane} onChange={onLaneChange} compact />
        </div>
      </div>
    </header>
  );
}
