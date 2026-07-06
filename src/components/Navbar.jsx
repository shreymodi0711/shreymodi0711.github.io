import { profile } from '../data/profile';
import ThemeToggle from './ThemeToggle';
import profilePhoto from '../assets/profile-photo.jpg';
import './Navbar.css';

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="navbar-brand">
          <img className="navbar-avatar" src={profilePhoto} alt="" />
          <span>{profile.name}</span>
        </a>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  );
}
