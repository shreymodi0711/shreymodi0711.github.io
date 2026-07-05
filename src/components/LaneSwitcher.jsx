import { lanes, laneOrder } from '../data/lanes';
import './LaneSwitcher.css';

export default function LaneSwitcher({ activeLane, onChange, compact = false }) {
  return (
    <div className={`lane-switcher ${compact ? 'lane-switcher-compact' : ''}`} role="radiogroup" aria-label="Choose a role lens">
      {laneOrder.map((key) => {
        const lane = lanes[key];
        const isActive = key === activeLane;
        return (
          <button
            key={key}
            type="button"
            role="radio"
            aria-checked={isActive}
            className={`lane-pill ${isActive ? 'lane-pill-active' : ''}`}
            onClick={() => onChange(key)}
          >
            {lane.label}
          </button>
        );
      })}
    </div>
  );
}
