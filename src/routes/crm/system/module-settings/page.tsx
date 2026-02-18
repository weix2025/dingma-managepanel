import { useState } from 'react';
import { DndContext, closestCenter, type DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import CrmThreeColLayout from '@/components/layout/CrmThreeColLayout';
import Toggle from '@/components/ui/Toggle';
import './page.css';

const initNavItems = [
  { id: '1', icon: '🏠', label: '首页' },
  { id: '2', icon: '📋', label: '线索' },
  { id: '3', icon: '👥', label: '客户' },
  { id: '4', icon: '💼', label: '商机' },
  { id: '5', icon: '📊', label: '仪表板' },
  { id: '6', icon: '📦', label: '产品' },
  { id: '7', icon: '⚙️', label: '系统' },
];

const modules = [
  { icon: '🏠', name: '首页', links: [] },
  { icon: '📋', name: '线索', links: ['线索表单设置','线索池设置','线索库容设置','更多'] },
  { icon: '👥', name: '客户', links: ['客户表单设置','联系人表单设置','公海设置','更多'] },
  { icon: '💼', name: '商机', links: ['商机表单设置','商机关闭规则','更多'] },
  { icon: '📦', name: '产品', links: ['产品表单设置'] },
  { icon: '📊', name: '仪表板', links: [] },
];

function SortableItem({ id, icon, label }: { id: string; icon: string; label: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition };
  return (
    <div ref={setNodeRef} style={style} className="drag-item" {...attributes} {...listeners}>
      <span className="drag-handle">⋮⋮</span>
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

export default function ModuleSettingsPage() {
  const [navItems, setNavItems] = useState(initNavItems);
  const [toggles, setToggles] = useState(() => Object.fromEntries(modules.map(m => [m.name, true])));

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (over && active.id !== over.id) {
      setNavItems(items => {
        const oldIdx = items.findIndex(i => i.id === active.id);
        const newIdx = items.findIndex(i => i.id === over.id);
        return arrayMove(items, oldIdx, newIdx);
      });
    }
  };

  const middlePanel = (
    <>
      <div className="config-panel-header">
        <h3>主导航配置</h3>
        <Toggle active onChange={() => {}} />
      </div>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={navItems} strategy={verticalListSortingStrategy}>
          <div className="drag-list">
            {navItems.map(n => (
              <SortableItem key={n.id} {...n} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
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
