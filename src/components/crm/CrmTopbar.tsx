import { useTheme } from '@/context/ThemeContext';
import SearchInput from '@/components/ui/SearchInput';
import './CrmTopbar.css';

export default function CrmTopbar() {
  const { theme, toggle } = useTheme();
  return (
    <header className="crm-topbar">
      <SearchInput placeholder="搜索..." className="topbar-search" />
      <div className="topbar-icon" title="通知">
        <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
      </div>
      <div className="topbar-icon" title="帮助">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      </div>
      <button className="theme-toggle" onClick={toggle}>
        {theme === 'dark' ? '☀️ 白天' : '🌙 夜间'}
      </button>
    </header>
  );
}
