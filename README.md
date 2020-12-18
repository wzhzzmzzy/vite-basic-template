## Vite Basic Template

在 `yarn create vite-app <name>` 的基础上，添加了 ESLint 和 TypeScript 支持。

辅助工具方面，添加了`commitlint`、`husky`以及`lint-staged`。

### 注释

`vite.config.ts` 内的 `chokidarWatchOptions` 配置在目前（1.0.0r13）版本不生效，下一个版本才能生效。
