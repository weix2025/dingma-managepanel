import CrmSidebar from '@/components/crm/CrmSidebar';
import CrmTopbar from '@/components/crm/CrmTopbar';
import AnimatedOutlet from '@/components/ui/AnimatedOutlet';
import './CrmLayout.css';

export default function CrmLayout() {
  return (
    <div className="crm-app-layout">
      <CrmSidebar />
      <div className="crm-main-area">
        <CrmTopbar />
        <div className="crm-content">
          <AnimatedOutlet />
        </div>
      </div>
    </div>
  );
}
