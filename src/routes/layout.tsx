import { Outlet } from '@modern-js/runtime/router';
import { ThemeProvider } from '@/context/ThemeContext';
import { Toaster } from 'sonner';
import CommandPalette from '@/components/ui/CommandPalette';
import '@/styles/theme.css';
import '@/styles/global.css';

export default function Layout() {
  return (
    <ThemeProvider>
      <Outlet />
      <Toaster position="top-right" richColors theme="dark" />
      <CommandPalette />
    </ThemeProvider>
  );
}
