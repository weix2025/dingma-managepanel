import './Timeline.css';

export interface TimelineEntry {
  date: string;
  type: string;
  typeVariant?: 'default' | 'visit';
  contact?: string;
  updatedAt?: string;
  updatedBy?: string;
  content: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="timeline">
      {entries.map((e, i) => (
        <div key={i} className="timeline-entry">
          <div className="timeline-header">
            <span className="timeline-date">{e.date}</span>
            <span className={`timeline-type${e.typeVariant === 'visit' ? ' visit' : ''}`}>{e.type}</span>
            {e.contact && <span className="timeline-contact">{e.contact}</span>}
          </div>
          {(e.updatedAt || e.updatedBy) && (
            <div className="timeline-meta">
              {e.updatedAt && <span>更新时间 {e.updatedAt}</span>}
              {e.updatedBy && <span>更新人 {e.updatedBy}</span>}
            </div>
          )}
          <div className="timeline-content">{e.content}</div>
          {(e.onEdit || e.onDelete) && (
            <div className="timeline-actions">
              {e.onEdit && <button type="button" onClick={e.onEdit}>编辑</button>}
              {e.onDelete && <button type="button" onClick={e.onDelete}>删除</button>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
