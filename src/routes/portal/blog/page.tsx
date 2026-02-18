import './page.css';

const posts = [
  { icon: '🚀', tag: 'release', tagLabel: 'Release', title: 'CRM v3.2 正式发布', desc: '新增智能体模块，支持自然语言操作CRM', date: '2025-08-10', author: '产品团队' },
  { icon: '📚', tag: 'training', tagLabel: '培训', title: '财务系统操作培训', desc: '面向全员的线上培训，涵盖报销与预算', date: '2025-08-08', author: 'IT部门' },
  { icon: '⬆️', tag: 'upgrade', tagLabel: '升级', title: '生产系统 v2.1 升级', desc: '优化排程算法，提升30%效率', date: '2025-08-05', author: '技术团队' },
  { icon: '🔒', tag: 'security', tagLabel: '安全', title: '安全策略更新通知', desc: '密码策略升级，启用MFA二次验证', date: '2025-08-01', author: '安全团队' },
  { icon: '✨', tag: 'feature', tagLabel: '功能', title: 'OA审批流程优化', desc: '支持移动端审批，新增代理审批功能', date: '2025-07-28', author: '产品团队' },
  { icon: '⚡', tag: 'optimize', tagLabel: '优化', title: 'API网关性能优化', desc: '响应时间降低40%，支持更高并发', date: '2025-07-25', author: '架构组' },
];

export default function BlogPage() {
  return (
    <div className="blog-grid">
      {posts.map(p => (
        <div key={p.title} className="blog-card">
          <div className="blog-card-icon">{p.icon}</div>
          <span className={`blog-tag ${p.tag}`}>{p.tagLabel}</span>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <div className="blog-meta">{p.date} · {p.author}</div>
        </div>
      ))}
    </div>
  );
}
