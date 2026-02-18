import type { ReactNode } from 'react';
import CrmSidebar from '@/components/crm/CrmSidebar';
import './CrmThreeColLayout.css';

export default function CrmThreeColLayout({ middlePanel, middleWidth = 250, children }: {
  middlePanel: ReactNode;
  middleWidth?: number;
  children: ReactNode;
}) {
  return (
    <div className="crm-three-col">
      <CrmSidebar />
      <div className="middle-panel" style={{ width: middleWidth, minWidth: middleWidth }}>
        {middlePanel}
      </div>
      <div className="main-panel">{children}</div>
    </div>
  );
}
