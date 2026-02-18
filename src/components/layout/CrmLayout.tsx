import { Outlet } from '@modern-js/runtime/router';
import CrmSidebar from '@/components/crm/CrmSidebar';
import CrmTopbar from '@/components/crm/CrmTopbar';
import './CrmLayout.css';

export default function CrmLayout() {
  return (
    <div className="crm-app-layout">
      <CrmSidebar />
      <div className="crm-main-area">
        <CrmTopbar />
        <div className="crm-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
