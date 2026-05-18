# Pure Performance Lab - 手动部署指南

**时间：** 2026-05-18 01:07 PDT

---

## 🚀 最简单的部署方式

由于 Vercel CLI 需要交互式授权，推荐使用 Web 界面部署：

---

### 方式 1：通过 Vercel Web 界面（推荐）

**步骤 1：推送到 GitHub**

1. 在 https://github.com/new 创建新仓库
   - Repository name: `pure-performance-lab`
   - Public
   - **不要**勾选任何初始化选项
   - 点击 "Create repository"

2. 在终端推送代码：
   ```bash
   cd ~/clawd/pure-performance-lab
   git remote add origin https://github.com/你的用户名/pure-performance-lab.git
   git branch -M main
   git push -u origin main
   ```

**步骤 2：导入到 Vercel**

1. 访问：https://vercel.com/new

2. 点击 "Import Git Repository"

3. 选择 `pure-performance-lab` 仓库

4. **重要配置：**
   - Root Directory: `nextjs-app` ⚠️ 必须设置！
   - Framework Preset: Next.js (自动检测)
   - Build Command: `npm run build` (默认)
   - Output Directory: `.next` (默认)

5. 点击 "Deploy"

6. 等待 1-2 分钟，完成！

**链接：** `https://pure-performance-lab.vercel.app`

---

### 方式 2：通过终端（如果登录成功）

```bash
cd ~/clawd/pure-performance-lab/nextjs-app

# 1. 登录（会打开浏览器）
vercel login

# 2. 部署
vercel --prod --yes

# 3. 完成！链接会显示在终端
```

---

### 方式 3：使用 Vercel Token（高级）

如果有 Vercel API Token：

```bash
cd ~/clawd/pure-performance-lab/nextjs-app
export VERCEL_TOKEN="你的token"
vercel --prod --yes --token $VERCEL_TOKEN
```

获取 Token：https://vercel.com/account/tokens

---

## 📦 当前状态

✅ **代码就绪**
- 所有文件已提交到 Git
- 构建成功
- 配置完成

✅ **本地可用**
- http://localhost:3000 (开发服务器运行中)

✅ **项目结构**
```
~/clawd/pure-performance-lab/
├── nextjs-app/          ← Vercel Root Directory
│   ├── app/             (页面)
│   ├── components/      (组件)
│   ├── lib/             (工具)
│   ├── public/          (静态文件)
│   ├── package.json
│   └── next.config.ts
└── [文档文件]
```

---

## 🔗 预期部署链接

**Vercel：**
```
https://pure-performance-lab.vercel.app
```

或

```
https://pure-performance-lab-[hash].vercel.app
```

---

## ✅ 部署后测试清单

访问链接后，检查：

**首页 (/)：**
- [ ] Hero section 显示
- [ ] 3 个产品卡片显示
- [ ] "Browse Catalog" 按钮工作
- [ ] Trust bar 显示

**商店页面 (/shop)：**
- [ ] 产品网格显示
- [ ] 分类筛选工作
- [ ] 产品卡片可点击

**产品详情 (/product/phosphatidylcholine)：**
- [ ] 产品信息显示
- [ ] 规格选择器工作
- [ ] 数量调整工作
- [ ] "Add to Cart" 按钮工作

**购物车：**
- [ ] 点击导航栏购物车图标
- [ ] 购物车滑出
- [ ] 显示已添加的商品
- [ ] 数量调整工作

**响应式：**
- [ ] 桌面端正常
- [ ] 移动端正常
- [ ] 导航工作

---

## 🛠️ 常见问题

**Q: 部署失败？**
- 确保 Root Directory 设置为 `nextjs-app`
- 检查 Build Logs 查看错误

**Q: 页面 404？**
- 等待 1-2 分钟，Next.js 需要初始化
- 清除浏览器缓存

**Q: 图片不显示？**
- Mock 数据使用占位符
- 实际图片需要上传到 `/public/images/products/`

**Q: 想要自定义域名？**
- Vercel 项目设置 → Domains → Add Domain

---

## 📞 推荐部署流程

**最快：通过 GitHub + Vercel Web**

1. GitHub 创建仓库（1 分钟）
2. 推送代码（30 秒）
3. Vercel 导入并部署（2 分钟）

**总计：** 3-4 分钟

---

## 🎉 快速总结

**当前状态：**
```
✅ 代码完成
✅ 构建成功
✅ Git 就绪
✅ 配置完成
✅ 本地运行中
```

**推荐方案：**
1. GitHub 创建仓库
2. Push 代码
3. Vercel 导入
4. 完成！

**链接预期：**
`https://pure-performance-lab.vercel.app`

---

**项目位置：** `~/clawd/pure-performance-lab/`  
**开发服务器：** http://localhost:3000  
**文档时间：** 2026-05-18 01:07 PDT

✅ **所有准备就绪，等待 GitHub 推送！**
