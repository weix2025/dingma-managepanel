import { Link } from '@modern-js/runtime/router';
import AuthLayout from '@/components/layout/AuthLayout';

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="auth-field">
        <label>邮箱</label>
        <input type="email" placeholder="请输入邮箱" />
      </div>
      <div className="auth-field">
        <label>密码</label>
        <input type="password" placeholder="请输入密码" />
      </div>
      <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: 8 }}>登录</button>
      <div className="auth-footer">
        还没有账号？<Link to="/register" className="auth-link">立即注册</Link>
      </div>
    </AuthLayout>
  );
}
