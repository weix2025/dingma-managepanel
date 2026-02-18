import PortalNavbar from '@/components/portal/PortalNavbar';
import PortalFooter from '@/components/portal/PortalFooter';
import AnimatedOutlet from '@/components/ui/AnimatedOutlet';
import './PortalLayout.css';

export default function PortalLayout() {
  return (
    <div className="portal-layout">
      <PortalNavbar />
      <div className="portal-content">
        <AnimatedOutlet />
      </div>
      <PortalFooter />
    </div>
  );
}
