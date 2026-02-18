import { useState } from 'react';
import { useParams } from '@modern-js/runtime/router';
import CrmDetailLayout from '@/components/layout/CrmDetailLayout';
import Pipeline from '@/components/crm/Pipeline';
import Timeline from '@/components/crm/Timeline';
import Tabs from '@/components/ui/Tabs';
import Button from '@/components/ui/Button';
import SearchInput from '@/components/ui/SearchInput';
import './page.css';

const steps = [
  { label: '新建', done: true },
  { label: '需求明确', done: true },
  { label: '方案验证', done: true },
  { label: '立项汇报', done: true },
  { label: '商务采购', done: true },
  { label: '成功' },
];

const infoFields = [
  ['业务机会名', '2025-订阅增购'],
  ['区域', 'KA'],
  ['产品类型', 'JumpServer 企业版'],
  ['商机所有人', '张三丰'],
  ['客户名', '某某科技有限公司'],
  ['来源', '多期续费、维保、扩容、增购'],
  ['最终用户全称', '北京某某信息技术'],
  ['线上来源详情', '线下不涉及'],
  ['结束日期', '2025-08-12'],
  ['金额', '●000'],
  ['业务商机编号', 'Opp-202508-000087'],
  ['有效合同额', '●●00'],
];

const timelineData = [
  { date: '2025-08-12', type: '电话', contact: '联系人 / ***', updatedAt: '2025-08-12 20:40:09', updatedBy: '曹悦', content: '确认合同', onEdit: () => {}, onDelete: () => {} },
  { date: '2025-08-07', type: '电话', contact: '联系人 / ***', updatedAt: '2025-08-07 15:22:31', updatedBy: '曹悦', content: '火山云2个环境，需要2套JS许可', onEdit: () => {}, onDelete: () => {} },
  { date: '2025-07-26', type: '到访', typeVariant: 'visit' as const, contact: '联系人 / ***', updatedAt: '2025-07-26 10:15:47', updatedBy: '曹悦', content: '增购订阅', onEdit: () => {}, onDelete: () => {} },
];

const detailTabs = ['跟进记录', '跟进计划', '联系人信息'];

export default function OpportunityDetailPage() {
  const { id } = useParams();
  const [tab, setTab] = useState(0);
  const [search, setSearch] = useState('');

  const leftPanel = (
    <div className="detail-info">
      <h3 className="detail-info-title">基本信息</h3>
      {infoFields.map(([k, v]) => (
        <div key={k} className="detail-info-row">
          <span className="detail-info-label">{k}</span>
          <span className="detail-info-value">{v}</span>
        </div>
      ))}
    </div>
  );

  return (
    <CrmDetailLayout
      backTo="/crm/opportunities"
      title="2025-订阅增购"
      subtitle={`Opp-${id}`}
      left={leftPanel}
    >
      <Pipeline steps={steps} current={5} />
      <div className="detail-tab-bar">
        <Tabs items={detailTabs} active={tab} onChange={setTab} />
        <div className="detail-tab-actions">
          <Button variant="primary">写记录</Button>
          <SearchInput placeholder="搜索记录" value={search} onChange={setSearch} />
        </div>
      </div>
      <Timeline entries={timelineData} />
    </CrmDetailLayout>
  );
}
