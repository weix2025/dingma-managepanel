import type { ReactNode } from 'react';
import { Link } from '@modern-js/runtime/router';
import './CrmDetailLayout.css';

export default function CrmDetailLayout({ backTo, title, subtitle, actions, left, children }: {
  backTo: string;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  left: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <div className="crm-detail-topbar">
        <div className="crm-detail-topbar-left">
          <Link to={backTo} className="crm-detail-back">←</Link>
          <div className="crm-detail-title">
            {title}{subtitle && <span> / {subtitle}</span>}
          </div>
        </div>
        {actions && <div>{actions}</div>}
      </div>
      <div className="crm-detail-layout">
        <div className="crm-detail-left">{left}</div>
        <div className="crm-detail-right">{children}</div>
      </div>
    </>
  );
}
