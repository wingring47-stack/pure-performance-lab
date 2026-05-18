#!/bin/bash

echo "🚀 Pure Performance Lab - 快速部署脚本"
echo "======================================="
echo ""

# 检查 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI 未安装"
    echo "安装: npm i -g vercel"
    exit 1
fi

# 进入项目目录
cd "$(dirname "$0")/nextjs-app" || exit

echo "📍 当前目录: $(pwd)"
echo ""

# 登录检查
echo "🔐 检查 Vercel 登录状态..."
if ! vercel whoami &> /dev/null; then
    echo "❌ 未登录 Vercel"
    echo ""
    echo "请运行以下命令登录："
    echo "  vercel login"
    echo ""
    echo "登录后重新运行此脚本"
    exit 1
fi

echo "✅ 已登录: $(vercel whoami)"
echo ""

# 部署
echo "🚀 开始部署到 Vercel..."
echo ""

vercel --prod

echo ""
echo "✅ 部署完成！"
echo ""
echo "链接已显示在上方 👆"
