import { useTheme } from '@/context/ThemeContext';
import './AdminNavbar.css';

export default function AdminNavbar() {
  const { toggle } = useTheme();
  return (
    <header className="admin-navbar">
      <div className="admin-breadcrumb">Dashboard / Workplace</div>
      <div className="admin-navbar-right">
        <button type="button" className="admin-nav-btn" onClick={toggle}>🌓</button>
        <span className="admin-nav-btn">中/EN</span>
        <span className="admin-avatar">U</span>
      </div>
    </header>
  );
}
