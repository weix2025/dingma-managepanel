import './Pagination.css';

export default function Pagination({ total, current, onChange }: {
  total: number; current: number; onChange: (p: number) => void;
}) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className="pagination">
      <button className="page-btn" onClick={() => onChange(Math.max(1, current - 1))}>‹</button>
      {pages.map(p => (
        <button key={p} className={`page-btn${p === current ? ' active' : ''}`} onClick={() => onChange(p)}>{p}</button>
      ))}
      <button className="page-btn" onClick={() => onChange(Math.min(total, current + 1))}>›</button>
    </div>
  );
}
