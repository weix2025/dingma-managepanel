import './PortalFooter.css';

export default function PortalFooter() {
  return (
    <footer className="portal-footer">
      <div className="portal-footer-grid">
        <div className="portal-footer-brand">
          <span className="portal-logo">Enterprise Portal</span>
          <p>企业级一站式治理平台</p>
        </div>
        <div>
          <h4>快速链接</h4>
          <a href="/portal/docs">指南</a>
          <a href="/portal/api">API 文档</a>
          <a href="/portal/blog">博客</a>
          <a href="/portal/forum">讨论区</a>
        </div>
        <div>
          <h4>业务系统</h4>
          <a href="#">财务系统</a>
          <a href="#">生产系统</a>
          <a href="#">OA 系统</a>
          <a href="#">HR 系统</a>
        </div>
        <div>
          <h4>支持</h4>
          <a href="#">联系 IT</a>
          <a href="#">常见问题</a>
          <a href="#">意见反馈</a>
        </div>
      </div>
      <div className="portal-footer-bottom">© Cordys · 仅限内部使用</div>
    </footer>
  );
}
