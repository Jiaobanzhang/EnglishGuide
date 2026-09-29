# EnglishGuide

基于 VuePress 2 的静态 Markdown 文档站点模板。

## 本地开发

环境要求：Node.js 22+、pnpm 10+。

```bash
pnpm install
pnpm dev
```

打开终端提示的本地地址即可预览网站。

## 构建

```bash
pnpm build
```

构建产物位于 `docs/.vuepress/dist/`。

## 编写内容

只需要在 `docs/` 下新增 Markdown 文件，然后在 `docs/.vuepress/sidebar/` 中补充导航入口即可。首页入口是 `docs/README.md`。

## 部署

项目已包含 GitHub Pages 工作流：推送到 `main` 分支后，GitHub Actions 会自动执行构建并发布 `docs/.vuepress/dist/`。

首次使用时，请在 GitHub 仓库的 Settings → Pages → Build and deployment 中选择 `GitHub Actions`。

如果使用自定义域名，把域名写入 `docs/.vuepress/public/CNAME`。
