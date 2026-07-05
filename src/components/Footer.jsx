import { profile } from '../data/profile';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="footer-built">Built with React & Vite · Hosted on GitHub Pages</p>
      </div>
    </footer>
  );
}
