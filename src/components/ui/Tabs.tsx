import './Tabs.css';

export default function Tabs({ items, active, onChange }: {
  items: string[];
  active: number;
  onChange: (index: number) => void;
}) {
  return (
    <div className="tabs-bar">
      {items.map((label, i) => (
        <div key={label} className={`tab-item${i === active ? ' active' : ''}`} onClick={() => onChange(i)}>
          {label}
        </div>
      ))}
    </div>
  );
}
