import { useState } from 'react';
import Tabs from '@/components/ui/Tabs';
import SearchInput from '@/components/ui/SearchInput';
import Button from '@/components/ui/Button';
import DataTable from '@/components/ui/DataTable';
import Pagination from '@/components/ui/Pagination';
import Tag from '@/components/ui/Tag';
import './page.css';

const tabs = [
  '全部商机','我的商机','部门商机','成交商机','本月赢单',
  '2025年赢单','本月新建商机','本月开放商机','下月开放商机','2025年开放商机','10万以上的开放商机',
];

const tagColors: Record<string, 'blue'|'green'|'orange'|'purple'|'cyan'|'red'> = {
  ERP:'blue', CRM:'green', '大数据':'purple', WMS:'orange', '风控':'red',
  MES:'cyan', OA:'blue', '云服务':'purple', PLM:'green', SCM:'orange',
  IoT:'cyan', BI:'blue', EAM:'red',
};

const columns = [
  { key: 'name', title: '业务机会名', width: 200, render: (v: string) => <span style={{color:'var(--accent-blue)'}}>{v}</span> },
  { key: 'region', title: '区域', width: 80 },
  { key: 'product', title: '产品类型', width: 120, render: (v: string) => <Tag color={tagColors[v] || 'blue'}>{v}</Tag> },
  { key: 'owner', title: '商机所有人', width: 100 },
  { key: 'source', title: '来源', width: 90 },
  { key: 'sourceDetail', title: '线上来源详情', width: 120 },
  { key: 'ops', title: '操作', width: 200, render: (_: unknown, row: Record<string, unknown>) => (
    <div className="opp-ops">
      <button type="button">编辑</button>
      <button type="button">跟进</button>
      <button type="button">转移</button>
      <button type="button" className="danger">删除</button>
    </div>
  )},
];

const rows = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  name: `2025-${['订阅增购','新签合同','续费项目','扩容需求'][i % 4]}`,
  region: ['KA','SMB','Mid','KA'][i % 4],
  product: Object.keys(tagColors)[i % Object.keys(tagColors).length],
  owner: ['张三丰','李四','王五','赵六'][i % 4],
  source: ['线上','线下-合作伙伴','多期续费','线下-员工'][i % 4],
  sourceDetail: ['官网注册','线下不涉及','续费通知','内部推荐'][i % 4],
}));

export default function OpportunitiesPage() {
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  return (
    <>
      <div className="opp-header">
        <h2 style={{ fontSize: 16, fontWeight: 600 }}>商机管理</h2>
        <div className="opp-header-actions">
          <Button variant="primary">新建商机</Button>
          <Button variant="outline">导出所有页</Button>
        </div>
      </div>
      <Tabs items={tabs} active={tab} onChange={setTab} />
      <div className="opp-filter-bar">
        <select className="opp-view-select"><option>视图 全部商机</option></select>
        <SearchInput placeholder="输入客户/商机名称进行搜索" value={search} onChange={setSearch} />
      </div>
      <DataTable columns={columns} data={rows} showCheckbox showIndex />
      <Pagination current={page} total={3} onChange={setPage} />
    </>
  );
}
