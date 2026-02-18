import * as T from '@radix-ui/react-tooltip';
import type { ReactNode } from 'react';
import './Tooltip.css';

export default function Tooltip({ children, content }: { children: ReactNode; content: string }) {
  return (
    <T.Provider delayDuration={200}>
      <T.Root>
        <T.Trigger asChild>{children}</T.Trigger>
        <T.Portal>
          <T.Content className="tooltip-content" sideOffset={6}>
            {content}
            <T.Arrow className="tooltip-arrow" />
          </T.Content>
        </T.Portal>
      </T.Root>
    </T.Provider>
  );
}
