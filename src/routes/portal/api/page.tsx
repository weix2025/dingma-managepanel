import './page.css';

const endpoints = [
  { method: 'get', path: '/api/v1/finance/budgets', desc: '获取预算列表' },
  { method: 'post', path: '/api/v1/finance/expense', desc: '提交报销申请' },
  { method: 'get', path: '/api/v1/production/orders', desc: '获取工单列表' },
  { method: 'put', path: '/api/v1/production/orders/:id', desc: '更新工单状态' },
  { method: 'delete', path: '/api/v1/logistics/shipments/:id', desc: '取消发货单' },
];

export default function ApiPage() {
  return (
    <div className="api-layout">
      <aside className="api-sidebar">
        <h4>财务 API</h4>
        <a href="#">预算管理</a><a href="#">报销接口</a><a href="#">核算查询</a>
        <h4>生产 API</h4>
        <a href="#">工单管理</a><a href="#">排程接口</a>
        <h4>物流 API</h4>
        <a href="#">仓储管理</a><a href="#">运输接口</a><a href="#">签收确认</a>
      </aside>
      <main className="api-content">
        <h1>API 文档</h1>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 20 }}>
          认证方式：Bearer Token（通过 SSO 获取）
        </p>
        {endpoints.map(e => (
          <div key={e.path + e.method} className="api-endpoint">
            <span className={`api-method ${e.method}`}>{e.method.toUpperCase()}</span>
            <span className="api-path">{e.path}</span>
            <div className="api-desc">{e.desc}</div>
          </div>
        ))}
      </main>
    </div>
  );
}
