import type { ReactNode } from 'react';
import './AuthLayout.css';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="auth-layout">
      <div className="auth-card">
        <div className="auth-logo">CORDYS</div>
        <div className="auth-subtitle">企业智能工作平台</div>
        {children}
      </div>
    </div>
  );
}
