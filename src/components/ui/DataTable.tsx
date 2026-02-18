import { useRef, type ReactNode } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import './DataTable.css';

export interface Column { key: string; title: string; width?: number | string; render?: (val: any, row: any) => ReactNode }

const ROW_HEIGHT = 38;
const VIRTUAL_THRESHOLD = 50;

export default function DataTable({ columns, data, showCheckbox, showIndex }: {
  columns: Column[];
  data: Record<string, any>[];
  showCheckbox?: boolean;
  showIndex?: boolean;
}) {
  const parentRef = useRef<HTMLDivElement>(null);
  const useVirtual = data.length > VIRTUAL_THRESHOLD;

  const virtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 10,
    enabled: useVirtual,
  });

  const renderRow = (row: Record<string, any>, i: number) => (
    <>
      {showCheckbox && <td className="col-cb"><input type="checkbox" /></td>}
      {showIndex && <td className="col-seq">{i + 1}</td>}
      {columns.map(c => (
        <td key={c.key}>{c.render ? c.render(row[c.key], row) : row[c.key]}</td>
      ))}
    </>
  );

  return (
    <div className="data-table-wrap">
      <div className="data-table-scroll" ref={parentRef}>
        <table className="data-table">
          <thead>
            <tr>
              {showCheckbox && <th className="col-cb"><input type="checkbox" /></th>}
              {showIndex && <th className="col-seq">序号</th>}
              {columns.map(c => (
                <th key={c.key} style={c.width ? { width: c.width } : undefined}>{c.title}</th>
              ))}
            </tr>
          </thead>
          {useVirtual ? (
            <tbody style={{ height: virtualizer.getTotalSize(), position: 'relative' }}>
              {virtualizer.getVirtualItems().map(vRow => (
                <tr
                  key={vRow.index}
                  style={{
                    position: 'absolute', top: 0, left: 0, width: '100%',
                    height: ROW_HEIGHT, transform: `translateY(${vRow.start}px)`,
                  }}
                >
                  {renderRow(data[vRow.index], vRow.index)}
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>{renderRow(row, i)}</tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
