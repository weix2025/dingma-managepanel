import './ChatMessage.css';

export interface ChatMsg {
  role: 'bot' | 'user';
  content: string;
}

export default function ChatMessage({ msg }: { msg: ChatMsg }) {
  return (
    <div className={`chat-msg ${msg.role}`}>
      <div className="msg-avatar">{msg.role === 'bot' ? '🤖' : '👤'}</div>
      <div className="msg-bubble">{msg.content}</div>
    </div>
  );
}
