# 🚀 Pure Performance Lab - 立即部署

**时间：** 2026-05-18 00:53 PDT  
**状态：** ✅ 构建完成，开发服务器运行中

---

## 🎯 三种部署方式

### 方式 1：本地预览（已运行）✅

**开发服务器正在运行：**
```
http://localhost:3000
```

在浏览器打开查看完整网站！

---

### 方式 2：Vercel 一键部署（推荐）

**步骤：**

1. **访问 Vercel 认证页面**
   ```
   https://vercel.com/oauth/device?user_code=TNWN-CBWJ
   ```
   或者新开一个认证流程：
   ```bash
   cd ~/clawd/pure-performance-lab/nextjs-app
   vercel login
   ```

2. **登录后，部署**
   ```bash
   cd ~/clawd/pure-performance-lab/nextjs-app
   vercel --prod
   ```

3. **选择配置**
   - Set up and deploy? **Y**
   - Which scope? 选择你的账号
   - Link to existing project? **N**
   - Project name? **pure-performance-lab**
   - Directory? **./** (默认)
   - Override settings? **N**

4. **获取链接！** 🎉
   ```
   ✅ Production: https://pure-performance-lab.vercel.app
   ```

**预计时间：** 2-3 分钟

---

### 方式 3：GitHub + Vercel Web（无需 CLI）

**步骤：**

1. **在 GitHub 创建仓库**
   - 访问：https://github.com/new
   - Repository name: `pure-performance-lab`
   - Public
   - 不要初始化任何文件
   - Create repository

2. **推送代码**
   ```bash
   cd ~/clawd/pure-performance-lab
   git remote add origin https://github.com/你的用户名/pure-performance-lab.git
   git branch -M main
   git push -u origin main
   ```

3. **导入到 Vercel**
   - 访问：https://vercel.com/new
   - Import Git Repository
   - 选择 `pure-performance-lab`
   - **重要！Root Directory:** `nextjs-app`
   - Deploy

4. **完成！**
   ```
   https://pure-performance-lab.vercel.app
   ```

**预计时间：** 3-4 分钟

---

## 📦 当前部署包含

✅ **页面：**
- 首页 - Hero + 特色产品
- 商店页面 - 产品目录
- 产品详情 - 完整产品页
- API 路由 - RESTful endpoints

✅ **功能：**
- 响应式设计
- 购物车系统（客户端状态）
- 产品筛选
- 添加到购物车
- 数量调整

✅ **产品（Mock 数据）：**
1. Phosphatidylcholine - $48 起
2. Phosphatidylserine - $56 起
3. Ceramide C24 - $68 起

---

## 🔗 预期部署链接

**Vercel（自动生成）：**
```
https://pure-performance-lab.vercel.app
或
https://pure-performance-lab-[hash].vercel.app
```

**自定义域名（可选）：**
- 部署后可在 Vercel 项目设置中添加
- 例如：pureperformancelab.com

---

## ✅ 部署后测试清单

访问你的链接后，测试：

**桌面端：**
- [ ] 首页加载
- [ ] 点击 "Browse Catalog" → 跳转到商店
- [ ] 点击任意产品卡片 → 查看详情
- [ ] 选择规格（100mg/500mg/1g）
- [ ] 调整数量
- [ ] 点击 "Add to Cart"
- [ ] 购物车滑出（从右侧）
- [ ] 在购物车中调整数量
- [ ] 点击产品标题 → 返回产品详情

**移动端：**
- [ ] 打开首页（响应式布局）
- [ ] 导航菜单可用
- [ ] 购物车图标可点击
- [ ] 产品卡片正常显示
- [ ] 购物车滑出正常

---

## 🛠️ 故障排除

**问题：Vercel 部署失败**
- 确保 Root Directory 设置为 `nextjs-app`
- 检查构建日志是否有错误
- Node 版本应该 ≥ 20

**问题：页面显示 404**
- Next.js 首次部署需要 1-2 分钟初始化
- 刷新页面重试

**问题：购物车不工作**
- 客户端状态管理需要 JavaScript
- 确保浏览器启用了 JavaScript
- 清除浏览器缓存重试

**问题：图片不显示**
- Mock 数据使用占位符图片
- 实际生产需要上传真实图片到 `/public/images/products/`

---

## 🎉 快速总结

**当前状态：**
```bash
✅ 代码完成
✅ 构建成功
✅ 开发服务器运行中 (http://localhost:3000)
✅ Git 仓库已初始化
✅ Vercel 配置就绪
```

**最快部署：**
1. 打开 https://vercel.com/oauth/device?user_code=TNWN-CBWJ
2. 登录授权
3. 在终端运行：`cd ~/clawd/pure-performance-lab/nextjs-app && vercel --prod`
4. 完成！

**链接会立即显示在终端：**
```
✅ Production: https://pure-performance-lab.vercel.app
```

---

## 📞 需要帮助？

**Vercel 文档：**
https://vercel.com/docs

**Next.js 部署：**
https://nextjs.org/docs/deployment

**GitHub 推送帮助：**
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

---

**项目位置：** `~/clawd/pure-performance-lab/`  
**开发服务器：** http://localhost:3000 (运行中)  
**准备状态：** ✅ 100% 就绪

🚀 **立即部署，2 分钟上线！**
