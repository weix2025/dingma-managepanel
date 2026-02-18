import './Toggle.css';

export default function Toggle({ active, onChange }: { active: boolean; onChange: (v: boolean) => void }) {
  return <div className={`toggle-switch${active ? ' active' : ''}`} onClick={() => onChange(!active)} />;
}
