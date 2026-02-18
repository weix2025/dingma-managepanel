import { Outlet } from '@modern-js/runtime/router';
import { ThemeProvider } from '@/context/ThemeContext';
import '@/styles/theme.css';
import '@/styles/global.css';

export default function Layout() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}
