import { useState } from 'react';
import CrmThreeColLayout from '@/components/layout/CrmThreeColLayout';
import ChatMessage from '@/components/crm/ChatMessage';
import SearchInput from '@/components/ui/SearchInput';
import Button from '@/components/ui/Button';
import './page.css';

const defaultMsgs = [
  { role: 'bot' as const, content: '您好，我是 Cordys CRM 添加记录小助手，你可以通过自然语言添加线索或客户的跟进记录。' },
  { role: 'user' as const, content: '帮我添加影视传媒公司线索的跟进记录，跟进内容：对MaxKB专业版产品进行讲解，跟进方式：到访，跟进时间：今天。' },
];

export default function AiAssistantPage() {
  const [msgs, setMsgs] = useState(defaultMsgs);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setMsgs(p => [...p, { role: 'user', content: input }]);
    setInput('');
  };

  const middlePanel = (
    <>
      <div className="agent-panel-header">
        <select><option>智能记录</option><option>智能查询</option><option>智能新建</option></select>
      </div>
      <div style={{ padding: 12 }}>
        <SearchInput placeholder="通过名称搜索" value={search} onChange={setSearch} />
      </div>
      <div className="agent-list">
        <div className="agent-section-title">☆ 我的收藏</div>
        <div className="agent-item active">添加记录小助手</div>
        <div className="agent-section-title">📁 全部智能体</div>
        <div className="agent-item">飞致云</div>
      </div>
      <div className="agent-panel-footer">
        <Button variant="outline" style={{ width: '100%', fontSize: 12 }}>新建对话</Button>
      </div>
    </>
  );

  return (
    <CrmThreeColLayout middlePanel={middlePanel} middleWidth={260}>
      <div className="chat-area">
        <div className="chat-header">
          <span className="chat-header-title">添加记录小助手</span>
        </div>
        <div className="chat-messages">
          {msgs.map((m, i) => <ChatMessage key={i} msg={m} />)}
        </div>
        <div className="chat-input-area">
          <div className="chat-input-wrap">
            <input
              className="chat-input"
              placeholder="请输入问题"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
            />
            <div className="chat-input-bottom">
              <button type="button" className="input-chip">📎 附件</button>
              <button type="button" className="send-btn" onClick={send}>➤</button>
            </div>
          </div>
        </div>
      </div>
    </CrmThreeColLayout>
  );
}
