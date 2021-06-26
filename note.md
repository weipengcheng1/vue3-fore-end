## vite创建项目
命令
npm init @vitejs/app


vite获取环境变量
import.meta.env.MODE: {string} 应用运行的模式。

import.meta.env.BASE_URL: {string} 部署应用时的基本URL。他由base 配置项决定。

import.meta.env.PROD: {boolean} 应用是否运行在生产环境。

import.meta.env.DEV: {boolean} 应用是否运行在开发环境 (永远与 import.meta.env.PROD相反)。