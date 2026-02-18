import { useECharts } from '@/hooks/useECharts';
import './page.css';

const projects = [
  { icon: '💳', name: 'Alipay', desc: 'An inner quality they cannot reach or touch', team: 'Sci Team', time: 'just now' },
  { icon: '🅰️', name: 'Angular', desc: 'Hope is a good thing, maybe the best', team: 'Wu Team', time: '9y ago' },
  { icon: '⭐', name: 'Ant Design', desc: 'So many bars in town, yet she walked into mine', team: 'Girl Team', time: 'just now' },
  { icon: '🅿️', name: 'Ant Design Pro', desc: 'Back then I only thought about what I wanted', team: 'Dev Daily', time: '9y ago' },
  { icon: '🅱️', name: 'Bootstrap', desc: 'Winter is coming', team: 'Design Team', time: '9y ago' },
  { icon: '⚛️', name: 'React', desc: 'Life is like a box of chocolates', team: 'CS Team', time: '9y ago' },
];

const activities = [
  { avatar: 'Q', text: '曲丽丽 在 设计团队 创建了项目 六月冲刺', time: '8 分钟前' },
  { avatar: 'F', text: '付小小 将 生产排程 更新为已完成', time: '30 分钟前' },
  { avatar: 'L', text: '林东东 在 技术问答 发布了新帖', time: '2 小时前' },
  { avatar: 'Z', text: '周星星 提交了 财务报销 审批', time: '5 小时前' },
  { avatar: 'W', text: '吴加好 关闭了 Bug #1024', time: '1 天前' },
];

const radarOption = {
  radar: {
    indicator: [
      { name: '引用', max: 1 }, { name: '口碑', max: 1 },
      { name: '产出', max: 1 }, { name: '贡献', max: 1 }, { name: '热度', max: 1 },
    ],
    shape: 'polygon',
    splitArea: { areaStyle: { color: 'transparent' } },
    axisLine: { lineStyle: { color: '#2a2a35' } },
    splitLine: { lineStyle: { color: '#2a2a35' } },
    axisName: { color: '#9898a6', fontSize: 11 },
  },
  series: [{
    type: 'radar',
    data: [
      { value: [0.7, 0.8, 0.5, 0.9, 0.6], name: 'A', areaStyle: { color: 'rgba(59,130,246,0.15)' }, lineStyle: { color: '#3b82f6' }, itemStyle: { color: '#3b82f6' } },
      { value: [0.5, 0.6, 0.8, 0.4, 0.7], name: 'B', areaStyle: { color: 'rgba(139,92,246,0.15)' }, lineStyle: { color: '#8b5cf6' }, itemStyle: { color: '#8b5cf6' } },
    ],
  }],
};

export default function AdminWorkplacePage() {
  const radarRef = useECharts(radarOption);

  return (
    <div className="workplace-grid">
      <div>
        <h3 className="section-title">进行中的项目</h3>
        <div className="project-grid">
          {projects.map(p => (
            <div key={p.name} className="project-card">
              <div className="project-card-header">
                <span className="project-icon">{p.icon}</span>
                <h4>{p.name}</h4>
              </div>
              <p>{p.desc}</p>
              <div className="project-card-footer">
                <span>{p.team}</span><span>{p.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="section-title">动态</h3>
        <div className="activity-list">
          {activities.map(a => (
            <div key={a.text} className="activity-item">
              <span className="activity-avatar">{a.avatar}</span>
              <div>
                <div>{a.text}</div>
                <div className="activity-time">{a.time}</div>
              </div>
            </div>
          ))}
        </div>
        <h3 className="section-title" style={{ marginTop: 24 }}>指标</h3>
        <div ref={radarRef} className="radar-box" />
      </div>
    </div>
  );
}
