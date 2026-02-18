import type { ReactNode } from 'react';
import './Tag.css';

type Color = 'blue' | 'green' | 'orange' | 'purple' | 'cyan' | 'red';

export default function Tag({ color = 'blue', children }: { color?: Color; children: ReactNode }) {
  return <span className={`tag tag-${color}`}>{children}</span>;
}
