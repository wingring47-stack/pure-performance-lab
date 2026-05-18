# Pure Performance Lab - 最快部署方案 🚀

**时间：** 2分钟部署上线

---

## 方式 A：Vercel CLI（最快）

```bash
cd ~/clawd/pure-performance-lab/nextjs-app

# 1. 安装 Vercel CLI（如果还没有）
npm i -g vercel

# 2. 登录
vercel login

# 3. 部署
vercel --prod

# 4. 按照提示操作：
# - Project name: pure-performance-lab
# - Directory: ./ (当前目录)
# - Override settings: No
```

**完成后会显示链接！**

---

## 方式 B：通过 GitHub Web 界面

**步骤：**

1. **在 GitHub 创建新仓库**
   - 访问：https://github.com/new
   - Repository name: `pure-performance-lab`
   - Public
   - 不勾选任何初始化选项
   - 点击 "Create repository"

2. **推送代码**
   ```bash
   cd ~/clawd/pure-performance-lab
   git remote add origin https://github.com/[你的用户名]/pure-performance-lab.git
   git branch -M main
   git push -u origin main
   ```

3. **部署到 Vercel**
   - 访问：https://vercel.com/new
   - 点击 "Import Git Repository"
   - 选择 `pure-performance-lab`
   - **Root Directory:** 设置为 `nextjs-app` ⚠️ 重要！
   - 点击 "Deploy"
   
4. **等待部署** (约30秒)
   - 完成后会显示：`https://pure-performance-lab.vercel.app` ✅

---

## 方式 C：已有 GitHub 账号？

```bash
cd ~/clawd/pure-performance-lab

# 1. 设置 Git remote（替换成你的仓库URL）
git remote add origin https://github.com/你的用户名/pure-performance-lab.git

# 2. 推送
git branch -M main
git push -u origin main

# 3. 然后去 Vercel 导入
```

---

## 🔗 预期链接

部署成功后，你会得到：

**Vercel:**
```
https://pure-performance-lab.vercel.app
或
https://pure-performance-lab-[hash].vercel.app
```

**自定义域名（可选）：**
- 在 Vercel 项目设置中添加
- 例如：pureperformancelab.com

---

## ✅ 部署后测试

访问你的链接，应该看到：

1. ✅ **首页** - Hero section + 3个特色脂质产品
2. ✅ **商店页面** (`/shop`) - 产品目录
3. ✅ **产品详情** (`/product/phosphatidylcholine`) - 完整产品页
4. ✅ **购物车** - 点击导航栏购物车图标

---

## 🎯 当前功能

已部署功能：
- ✅ 响应式首页
- ✅ 产品目录（3个脂质）
- ✅ 产品详情页
- ✅ 购物车系统
- ✅ 导航 + 页脚

Mock 数据：
- Phosphatidylcholine - $48
- Phosphatidylserine - $56
- Ceramide C24 - $68

---

## 📱 测试清单

部署后请测试：

**桌面端：**
- [ ] 首页加载
- [ ] 点击产品卡片
- [ ] 查看产品详情
- [ ] 添加到购物车
- [ ] 打开购物车滑出栏
- [ ] 调整数量
- [ ] 查看商店页面

**移动端：**
- [ ] 响应式布局正常
- [ ] 导航可用
- [ ] 购物车滑出

---

## 🚨 常见问题

**Q: 部署失败？**
A: 确保 Root Directory 设置为 `nextjs-app`

**Q: 页面 404？**
A: Next.js 需要1-2分钟初始化，稍等再试

**Q: 想要自定义域名？**
A: Vercel 项目设置 → Domains → 添加域名

**Q: 图片不显示？**
A: Mock 数据使用的是占位符，实际部署需要上传产品图片到 `/public/images/products/`

---

## 🎉 快速部署总结

**最快方式：**
1. `cd ~/clawd/pure-performance-lab/nextjs-app`
2. `vercel login`
3. `vercel --prod`
4. 完成！ ✅

**链接会立即显示：**
```
✅ Production: https://pure-performance-lab.vercel.app [copied]
```

---

**文档时间：** 2026-05-18 00:57 PDT  
**项目状态：** ✅ 构建成功，准备部署  
**预计部署时间：** 2-3 分钟
