import { Outlet } from '@modern-js/runtime/router';
import PortalNavbar from '@/components/portal/PortalNavbar';
import PortalFooter from '@/components/portal/PortalFooter';
import './PortalLayout.css';

export default function PortalLayout() {
  return (
    <div className="portal-layout">
      <PortalNavbar />
      <div className="portal-content">
        <Outlet />
      </div>
      <PortalFooter />
    </div>
  );
}
