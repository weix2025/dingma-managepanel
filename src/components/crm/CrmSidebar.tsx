import { useState } from 'react';
import { Link, useLocation } from '@modern-js/runtime/router';
import './CrmSidebar.css';

const navItems = [
  { key: '/crm/opportunities', label: '首页', icon: 'home' },
  { key: '/crm/leads', label: '线索', icon: 'lead' },
  { key: '/crm/customers', label: '客户', icon: 'customer' },
  { key: '/crm/opportunities', label: '商机', icon: 'opportunity' },
  { key: '/crm/dashboard', label: '仪表板', icon: 'dashboard' },
  { key: '/crm/products', label: '产品', icon: 'product' },
  { key: '/crm/ai-assistant', label: '智能体', icon: 'ai' },
];

const systemSubs = [
  { key: '/crm/system/org-structure', label: '组织架构' },
  { key: '/crm/system/permissions', label: '角色权限' },
  { key: '/crm/system/module-settings', label: '模块设置' },
  { key: '/crm/system/messages', label: '消息设置' },
  { key: '/crm/system/enterprise-settings', label: '企业设置' },
  { key: '/crm/system/license', label: 'License' },
  { key: '/crm/system/system-logs', label: '系统日志' },
];

const icons: Record<string, React.ReactNode> = {
  home: <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  lead: <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  customer: <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  opportunity: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
  dashboard: <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  product: <svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
  ai: <svg viewBox="0 0 24 24"><path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/><path d="M18 14h.01"/><path d="M6 14h.01"/><path d="M12 18v4"/><path d="M8 22h8"/></svg>,
  settings: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
};

export default function CrmSidebar() {
  const { pathname } = useLocation();
  const [sysOpen, setSysOpen] = useState(pathname.startsWith('/crm/system'));
  const isSystem = pathname.startsWith('/crm/system');

  return (
    <aside className="crm-sidebar">
      <div className="crm-sidebar-logo">CORDYS</div>
      <nav className="crm-sidebar-nav">
        {navItems.map(n => (
          <Link key={n.key + n.label} to={n.key} className={`crm-nav-item${pathname === n.key ? ' active' : ''}`}>
            <span className="nav-icon">{icons[n.icon]}</span>
            <span>{n.label}</span>
          </Link>
        ))}
        <div
          className={`crm-nav-item${isSystem ? ' active' : ''}${sysOpen ? ' expanded' : ''}`}
          onClick={() => setSysOpen(!sysOpen)}
        >
          <span className="nav-icon">{icons.settings}</span>
          <span>系统</span>
          <span className="expand-arrow"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></span>
        </div>
        <div className={`crm-sub-nav${sysOpen ? ' open' : ''}`}>
          {systemSubs.map(s => (
            <Link key={s.key} to={s.key} className={`crm-nav-item${pathname === s.key ? ' active' : ''}`}>
              <span>{s.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
}
