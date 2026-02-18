import { useState } from 'react';
import './page.css';

const cats = ['全部', '公告', '技术问答', '反馈', '建议'];
const posts = [
  { title: 'CRM v3.2 更新说明', author: '管理员', time: '2小时前', replies: 12, tag: '公告' },
  { title: '财务系统报销流程卡在审批节点', author: '张三', time: '5小时前', replies: 8, tag: '技术问答' },
  { title: '建议增加移动端扫码登录', author: '李四', time: '1天前', replies: 15, tag: '建议' },
  { title: 'API 网关偶发 502 问题', author: '王五', time: '2天前', replies: 6, tag: '技术问答' },
  { title: '生产系统排程结果不准确', author: '赵六', time: '3天前', replies: 4, tag: '反馈' },
];

export default function ForumPage() {
  const [cat, setCat] = useState(0);
  return (
    <div className="forum-layout">
      <aside className="forum-sidebar">
        {cats.map((c, i) => (
          <div key={c} className={`forum-cat${i === cat ? ' active' : ''}`} onClick={() => setCat(i)}>{c}</div>
        ))}
      </aside>
      <main className="forum-main">
        {posts.map(p => (
          <div key={p.title} className="forum-post">
            <h4>{p.title}</h4>
            <div className="forum-post-meta">
              <span>{p.author}</span>
              <span>{p.time}</span>
              <span>{p.replies} 回复</span>
              <span className="forum-post-tag">{p.tag}</span>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
