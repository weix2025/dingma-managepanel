import { Link, useLocation } from '@modern-js/runtime/router';
import './AdminSidebar.css';

const menu = [
  { group: 'Dashboard', icon: '📊', items: [
    { to: '/admin', label: 'Workplace' },
  ]},
  { group: 'Form', icon: '📝', items: [
    { to: '#', label: 'Basic Form' },
    { to: '#', label: 'Step Form' },
  ]},
  { group: 'List', icon: '📋', items: [
    { to: '#', label: 'Table List' },
    { to: '#', label: 'Basic List' },
  ]},
];

export default function AdminSidebar() {
  const { pathname } = useLocation();
  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-logo">CORDYS Admin</div>
      <nav className="admin-sidebar-nav">
        {menu.map(g => (
          <div key={g.group} className="admin-menu-group">
            <div className="admin-menu-group-title">{g.icon} {g.group}</div>
            {g.items.map(item => (
              <Link
                key={item.label}
                to={item.to}
                className={`admin-menu-item${pathname === item.to ? ' active' : ''}`}
              >{item.label}</Link>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}
