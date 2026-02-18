export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>🚧</div>
      <h2 style={{ color: 'var(--text-primary)', marginBottom: 8 }}>{title}</h2>
      <p style={{ color: 'var(--text-muted)' }}>此页面正在建设中</p>
    </div>
  );
}
