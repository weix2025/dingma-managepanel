import { Link } from '@modern-js/runtime/router';
import AuthLayout from '@/components/layout/AuthLayout';

export default function RegisterPage() {
  return (
    <AuthLayout>
      <div className="auth-field">
        <label>用户名</label>
        <input type="text" placeholder="请输入用户名" />
      </div>
      <div className="auth-field">
        <label>邮箱</label>
        <input type="email" placeholder="请输入邮箱" />
      </div>
      <div className="auth-field">
        <label>密码</label>
        <input type="password" placeholder="请输入密码" />
      </div>
      <div className="auth-field">
        <label>确认密码</label>
        <input type="password" placeholder="请再次输入密码" />
      </div>
      <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: 8 }}>注册</button>
      <div className="auth-footer">
        已有账号？<Link to="/login" className="auth-link">立即登录</Link>
      </div>
    </AuthLayout>
  );
}
