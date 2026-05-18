# Pure Performance Lab - 快速部署

## 🚀 Vercel 一键部署（推荐）

由于Netlify CLI问题，推荐使用Vercel：

### 方式 1：通过GitHub部署
1. 将代码推送到GitHub
2. 访问 https://vercel.com/new
3. 导入仓库
4. 选择 `nextjs-app` 作为根目录
5. 点击 Deploy

### 方式 2：使用Vercel CLI
```bash
cd ~/clawd/pure-performance-lab/nextjs-app
npx vercel --prod
```

## 📦 当前状态

✅ **构建成功**
- Next.js 16.2.6
- Static + API routes
- Mock产品数据（3个脂质产品）
- 购物车功能

## 🔗 部署后链接格式

Vercel: `https://pure-performance-lab-xxx.vercel.app`

---

## 🎯 立即可用

项目已构建完成，在 `.next` 文件夹中。
只需要一个托管服务即可上线。
