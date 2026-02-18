import { Link } from '@modern-js/runtime/router';
import Button from '@/components/ui/Button';
import './page.css';

const features = [
  { icon: '💰', name: '财务', desc: '预算、报销、核算' },
  { icon: '🏭', name: '生产', desc: '工单、排程、质检' },
  { icon: '🚚', name: '物流', desc: '仓储、运输、签收' },
  { icon: '📦', name: '快递', desc: '寄件、收件、追踪' },
  { icon: '📝', name: '办公', desc: '审批、公告、日程' },
  { icon: '👥', name: '人事', desc: '考勤、薪资、招聘' },
  { icon: '📊', name: '运营', desc: '数据、报表、分析' },
  { icon: '🔗', name: '集成', desc: 'SSO、API、Webhook' },
];

const news = [
  { title: 'CRM v3.2 正式发布', desc: '新增智能体模块，支持自然语言操作', date: '2025-08-10' },
  { title: '财务系统培训通知', desc: '本周五下午2点，线上培训', date: '2025-08-08' },
  { title: '生产系统升级公告', desc: '周末维护窗口，预计影响2小时', date: '2025-08-05' },
];

export default function PortalHomePage() {
  return (
    <>
      <div className="portal-hero">
        <span className="portal-hero-badge">系统在线 · 一切正常</span>
        <h1>企业治理平台</h1>
        <p>统一入口，高效协作，智能决策</p>
        <div className="portal-hero-btns">
          <Link to="/portal/docs"><Button variant="primary">开始使用</Button></Link>
          <Link to="/portal/api"><Button variant="outline">查看 API</Button></Link>
        </div>
      </div>
      <div className="portal-features">
        {features.map(f => (
          <div key={f.name} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.name}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="portal-section">
        <h2>最新动态</h2>
        <div className="news-grid">
          {news.map(n => (
            <div key={n.title} className="news-card">
              <h4>{n.title}</h4>
              <p>{n.desc}</p>
              <div className="news-date">{n.date}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
