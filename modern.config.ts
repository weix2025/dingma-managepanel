import { appTools, defineConfig } from '@modern-js/app-tools';
import { runtimePlugin } from '@modern-js/runtime/cli';

export default defineConfig({
  plugins: [appTools(), runtimePlugin()],
});
