import { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { useNavigate } from '@modern-js/runtime/router';
import './CommandPalette.css';

const pages = [
  { name: '商机列表', path: '/crm/opportunities', group: 'CRM' },
  { name: '仪表板', path: '/crm/dashboard', group: 'CRM' },
  { name: '智能体', path: '/crm/ai-assistant', group: 'CRM' },
  { name: '角色权限', path: '/crm/system/permissions', group: '系统' },
  { name: '模块设置', path: '/crm/system/module-settings', group: '系统' },
  { name: '门户首页', path: '/portal', group: '门户' },
  { name: 'API 文档', path: '/portal/api', group: '门户' },
  { name: '后台工作台', path: '/admin', group: '后台' },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(o => !o);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  if (!open) return null;

  return (
    <Command.Dialog open={open} onOpenChange={setOpen} label="命令面板">
      <div className="cmdk-dialog">
        <Command.Input placeholder="搜索页面..." />
        <Command.List>
          <Command.Empty>无匹配结果</Command.Empty>
          {['CRM', '系统', '门户', '后台'].map(g => (
            <Command.Group key={g} heading={g}>
              {pages.filter(p => p.group === g).map(p => (
                <Command.Item key={p.path} onSelect={() => { nav(p.path); setOpen(false); }}>
                  {p.name}
                </Command.Item>
              ))}
            </Command.Group>
          ))}
        </Command.List>
      </div>
    </Command.Dialog>
  );
}
