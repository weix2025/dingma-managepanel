import './SearchInput.css';

export default function SearchInput({ placeholder = '搜索...', className = '', value, onChange }: {
  placeholder?: string; className?: string; value?: string; onChange?: (v: string) => void;
}) {
  return (
    <div className={`search-input ${className}`}>
      <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input type="text" placeholder={placeholder} value={value} onChange={e => onChange?.(e.target.value)} />
    </div>
  );
}
