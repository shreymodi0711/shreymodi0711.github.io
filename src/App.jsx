import { useCallback, useEffect, useState } from 'react';
import { defaultLane, lanes } from './data/lanes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import ContactCV from './components/ContactCV';
import Footer from './components/Footer';

const STORAGE_KEY = 'shrey-portfolio-lane';

function getLaneFromHash() {
  const hash = window.location.hash.replace('#', '');
  const params = new URLSearchParams(hash);
  const lane = params.get('lane');
  return lane && lanes[lane] ? lane : null;
}

function getInitialLane() {
  const fromHash = getLaneFromHash();
  if (fromHash) return { lane: fromHash, hasPicked: true };

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && lanes[stored]) return { lane: stored, hasPicked: true };

  return { lane: defaultLane, hasPicked: false };
}

export default function App() {
  const [{ lane: activeLane, hasPicked }, setState] = useState(getInitialLane);

  const handleLaneChange = useCallback((lane) => {
    setState({ lane, hasPicked: true });
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, activeLane);
    const url = new URL(window.location.href);
    url.hash = `lane=${activeLane}`;
    window.history.replaceState(null, '', url);
  }, [activeLane]);

  return (
    <>
      <Navbar activeLane={activeLane} onLaneChange={handleLaneChange} />
      <Hero activeLane={activeLane} onLaneChange={handleLaneChange} hasPickedLane={hasPicked} />
      <Metrics activeLane={activeLane} />
      <About activeLane={activeLane} />
      <Skills activeLane={activeLane} />
      <Experience />
      <Projects />
      <Education />
      <ContactCV activeLane={activeLane} />
      <Footer />
    </>
  );
}
