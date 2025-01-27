### 项目名称：

CORS Anywhere on Cloudflare

### 项目描述：

一个基于 Cloudflare Pages/Worker 的 CORS 代理服务，允许跨域请求的浏览器发送带 CORS 头的请求。此服务用于解决浏览器的同源策略限制，尤其是在开发和测试过程中，或者当你无法控制目标服务器的 CORS 设置时。

### 安装与使用：

1. **Fork 当前仓库**

2. **连接 Cloudflare Pages/Worker**

3. **配置部署设置**

4. **部署到 Cloudflare**

5. **使用服务**： 部署完成后，你可以使用你的 CORS 代理服务。

   假设你部署在 `https://your-cors-anywhere.workers.dev`，你可以通过以下方式访问：

   ```
   https://your-cors-anywhere.workers.dev/?url=https://example.com
   ```

   其中，`url` 参数应为你想要代理的目标 URL

### 示例请求：

> 以我自己搭建的[DEMO](https://cors-anywhere.ramrod.workers.dev/)举例

假设你需要从 `https://example.com` 获取数据并且遇到 CORS 问题，你可以通过代理服务来解决：

```
https://cors-anywhere.ramrod.workers.dev/?url=https://example.com
```

### 返回的错误信息：

如果没有提供 `url` 参数，服务将返回如下错误信息，提醒用户如何使用该服务：

```
Usage: Send a request with the "url" query parameter.
Example: https://[your-cors-anywhere.workers.dev]/?url=https://example.com
```

### 项目许可：

本项目使用 [MIT License](https://mit-license.org/) 许可