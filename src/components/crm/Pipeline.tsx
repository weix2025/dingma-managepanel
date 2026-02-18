import './Pipeline.css';

export interface PipelineStep {
  label: string;
  done?: boolean;
}

export default function Pipeline({ steps, current = -1 }: { steps: PipelineStep[]; current?: number }) {
  const doneCount = current >= 0 ? current : steps.filter(s => s.done).length;
  const pct = steps.length > 1 ? 100 / (steps.length - 1) / 2 : 0;

  return (
    <div className="pipeline-container">
      <div className="pipeline">
        <div className="pipeline-line">
          <div
            className="pipeline-line-inner"
            style={{ left: `${pct}%`, right: `${100 - pct - (doneCount / (steps.length - 1)) * (100 - 2 * pct)}%` }}
          />
        </div>
        {steps.map((s, i) => (
          <div key={s.label} className="pipeline-step">
            <div className={`pipeline-circle${i < doneCount ? ' done' : i === doneCount ? ' current' : ''}`}>
              {i < doneCount ? '✓' : i + 1}
            </div>
            <div className="pipeline-step-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
