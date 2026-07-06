import { useCountUp, useInView } from '../hooks/useCountUp';
import './Metrics.css';

function MetricTile({ metric, isVisible }) {
  const value = useCountUp(metric.value, isVisible);
  const decimals = metric.value % 1 !== 0 ? 1 : 0;

  return (
    <div className="metric-tile card">
      <p className="metric-value gradient-text">
        {value.toFixed(decimals)}
        {metric.suffix}
      </p>
      <p className="metric-label">{metric.label}</p>
    </div>
  );
}

export default function Metrics({ metrics }) {
  const [ref, isVisible] = useInView();

  return (
    <div className={`metrics-grid fade-in ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      {metrics.map((metric) => (
        <MetricTile key={metric.label} metric={metric} isVisible={isVisible} />
      ))}
    </div>
  );
}
