import type { ReactNode } from 'react';
import './DataTable.css';

export interface Column { key: string; title: string; width?: number | string; render?: (val: any, row: any) => ReactNode }

export default function DataTable({ columns, data, showCheckbox, showIndex }: {
  columns: Column[];
  data: Record<string, any>[];
  showCheckbox?: boolean;
  showIndex?: boolean;
}) {
  return (
    <div className="data-table-wrap">
      <div className="data-table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              {showCheckbox && <th className="col-cb"><input type="checkbox" /></th>}
              {showIndex && <th className="col-seq">序号</th>}
              {columns.map(c => <th key={c.key} style={c.width ? { width: c.width } : undefined}>{c.title}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {showCheckbox && <td className="col-cb"><input type="checkbox" /></td>}
                {showIndex && <td className="col-seq">{i + 1}</td>}
                {columns.map(c => <td key={c.key}>{c.render ? c.render(row[c.key], row) : row[c.key]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
