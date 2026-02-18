import { Link, useLocation } from '@modern-js/runtime/router';
import { useTheme } from '@/context/ThemeContext';
import './PortalNavbar.css';

const links = [
  { to: '/portal', label: '首页' },
  { to: '/portal/docs', label: '指南' },
  { to: '/portal/api', label: 'API' },
  { to: '/portal/blog', label: '博客' },
  { to: '/portal/forum', label: '讨论区' },
];

export default function PortalNavbar() {
  const { pathname } = useLocation();
  const { toggle } = useTheme();

  return (
    <nav className="portal-navbar">
      <div className="portal-navbar-left">
        <span className="portal-logo">Enterprise Portal</span>
        <div className="portal-nav-links">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`portal-nav-link${pathname === l.to ? ' active' : ''}`}
            >{l.label}</Link>
          ))}
        </div>
      </div>
      <div className="portal-navbar-right">
        <input className="portal-search" placeholder="搜索 Ctrl+K" readOnly />
        <button type="button" className="portal-lang-btn">中/EN</button>
        <button type="button" className="portal-theme-btn" onClick={toggle}>🌓</button>
      </div>
    </nav>
  );
}
