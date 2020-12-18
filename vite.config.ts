/**
 * 配置项：https://github.com/vitejs/vite/blob/master/src/node/config.ts
 */

import * as path from 'path';

export default {
  base: './',
  publicPath: '/',
  alias: {
    '/@/': path.resolve(__dirname, './src'),
  },
  sourcemap: true,
  port: 8000,
  open: false,
  chokidarWatchOptions: {
    // 去掉无意义的监听
    ignored: ['**/dist/**'],
  },
};
