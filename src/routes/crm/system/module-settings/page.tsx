import { useState } from 'react';
import CrmThreeColLayout from '@/components/layout/CrmThreeColLayout';
import Toggle from '@/components/ui/Toggle';
import './page.css';

const navItems = [
  { icon: '🏠', label: '首页' },
  { icon: '📋', label: '线索' },
  { icon: '👥', label: '客户' },
  { icon: '💼', label: '商机' },
  { icon: '📊', label: '仪表板' },
  { icon: '📦', label: '产品' },
  { icon: '⚙️', label: '系统' },
];

const modules = [
  { icon: '🏠', name: '首页', links: [] },
  { icon: '📋', name: '线索', links: ['线索表单设置','线索池设置','线索库容设置','更多'] },
  { icon: '👥', name: '客户', links: ['客户表单设置','联系人表单设置','公海设置','更多'] },
  { icon: '💼', name: '商机', links: ['商机表单设置','商机关闭规则','更多'] },
  { icon: '📦', name: '产品', links: ['产品表单设置'] },
  { icon: '📊', name: '仪表板', links: [] },
];

export default function ModuleSettingsPage() {
  const [toggles, setToggles] = useState(() => Object.fromEntries(modules.map(m => [m.name, true])));

  const middlePanel = (
    <>
      <div className="config-panel-header">
        <h3>主导航配置</h3>
        <Toggle active onChange={() => {}} />
      </div>
      <div className="drag-list">
        {navItems.map(n => (
          <div key={n.label} className="drag-item">
            <span className="drag-handle">⋮⋮</span>
            <span>{n.icon}</span>
            <span>{n.label}</span>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <CrmThreeColLayout middlePanel={middlePanel} middleWidth={300}>
      <div className="module-grid">
        {modules.map(m => (
          <div key={m.name} className="module-card">
            <div className="module-card-left">
              <span className="module-icon">{m.icon}</span>
              <span style={{ fontSize: 14, fontWeight: 500 }}>{m.name}</span>
            </div>
            <div className="module-card-right">
              {m.links.length > 0 && (
                <div className="module-links">
                  {m.links.map(l => <a key={l} href="#">{l}</a>)}
                </div>
              )}
              <Toggle
                active={toggles[m.name]}
                onChange={() => setToggles(p => ({ ...p, [m.name]: !p[m.name] }))}
              />
            </div>
          </div>
        ))}
      </div>
    </CrmThreeColLayout>
  );
}
