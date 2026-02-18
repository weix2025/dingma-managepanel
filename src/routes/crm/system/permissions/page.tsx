import { useState } from 'react';
import CrmThreeColLayout from '@/components/layout/CrmThreeColLayout';
import SearchInput from '@/components/ui/SearchInput';
import Tabs from '@/components/ui/Tabs';
import Button from '@/components/ui/Button';
import './page.css';

const roles = ['管理员', '销售经理', '销售专员'];

const permGroups = [
  { group: '系统管理', items: [
    { name: '组织架构', perms: ['查看','添加','编辑','删除','导入','同步','重置密码'] },
    { name: '角色权限', perms: ['查看','添加','编辑','删除','添加用户','移除用户'] },
    { name: '模块设置', perms: ['查看','编辑'] },
    { name: '消息设置', perms: ['查看','添加','编辑','删除'] },
    { name: '企业设置', perms: ['查看','添加','编辑','删除'] },
    { name: '系统日志', perms: ['查看'] },
    { name: 'License', perms: ['查看','编辑'] },
  ]},
  { group: '客户管理', items: [
    { name: '客户', perms: ['查看','添加','编辑','移入公海','删除','导出'] },
    { name: '公海', perms: ['查看','领取','分配','删除','导出'] },
  ]},
];

export default function PermissionsPage() {
  const [role, setRole] = useState(2);
  const [tab, setTab] = useState(0);
  const [search, setSearch] = useState('');

  const middlePanel = (
    <>
      <div className="role-panel-header">
        <h3>角色列表</h3>
        <Button variant="primary" style={{ padding: '4px 12px', fontSize: 12 }}>+ 新增</Button>
      </div>
      <div style={{ padding: 12 }}>
        <SearchInput placeholder="搜索角色" value={search} onChange={setSearch} />
      </div>
      <div className="role-list">
        {roles.map((r, i) => (
          <div key={r} className={`role-item${i === role ? ' active' : ''}`} onClick={() => setRole(i)}>
            <span className="role-badge">系</span>
            <span>{r}</span>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <CrmThreeColLayout middlePanel={middlePanel} middleWidth={250}>
      <div className="perm-header">
        <Tabs items={['权限', '成员']} active={tab} onChange={setTab} />
      </div>
      <div className="data-perm-section">
        <h4>数据权限</h4>
        <div className="data-perm-radios">
          {['全部数据','本部门数据','仅本人数据','指定部门数据'].map((d, i) => (
            <label key={d}><input type="radio" name="dataPerm" defaultChecked={i === 2} /> {d}</label>
          ))}
        </div>
      </div>
      <table className="perm-table">
        <thead><tr><th>功能</th><th>操作对象</th><th>权限</th></tr></thead>
        <tbody>
          {permGroups.map(g => (
            <>
              <tr key={g.group} className="perm-group-header"><td colSpan={3}>{g.group}</td></tr>
              {g.items.map(item => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td>
                    <div className="perm-checks">
                      {item.perms.map(p => (
                        <label key={p} className="perm-check-label">
                          <input type="checkbox" defaultChecked={p === '查看'} /> {p}
                        </label>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </CrmThreeColLayout>
  );
}
