import './page.css';

const sidebar = [
  { group: '入门', items: ['公司简介', '平台概览', '快速开始'] },
  { group: '财务', items: ['预算管理', '报销流程', '核算规则'] },
  { group: '生产', items: ['工单管理', '排程配置', '质检标准'] },
];

export default function DocsPage() {
  return (
    <div className="docs-layout">
      <aside className="docs-sidebar">
        {sidebar.map(s => (
          <div key={s.group}>
            <h4>{s.group}</h4>
            {s.items.map((item, i) => (
              <a key={item} className={i === 0 && s.group === '入门' ? 'active' : ''} href="#">{item}</a>
            ))}
          </div>
        ))}
      </aside>
      <main className="docs-content">
        <h1>公司简介</h1>
        <p>欢迎使用企业治理平台文档。本平台整合了财务、生产、物流、办公等核心业务系统。</p>
        <h2>平台概览</h2>
        <p>平台采用微服务架构，支持 SSO 统一认证，提供标准 RESTful API 接口。</p>
        <pre>{`// 示例：获取用户信息\nconst res = await fetch('/api/v1/user/me', {\n  headers: { Authorization: 'Bearer <token>' }\n});`}</pre>
        <h2>快速开始</h2>
        <p>1. 使用企业邮箱登录 SSO → 2. 选择目标系统 → 3. 开始使用</p>
      </main>
      <aside className="docs-toc">
        <h4>目录</h4>
        <a href="#">公司简介</a>
        <a href="#">平台概览</a>
        <a href="#">快速开始</a>
      </aside>
    </div>
  );
}
