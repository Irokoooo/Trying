
# 模板介绍

| 项目信息       | 详情                                                                                  |
| -------------- | ------------------------------------------------------------------------------------- |
| 原始项目地址   | [ justboil/admin-one-vue-tailwind](https://github.com/justboil/admin-one-vue-tailwind)                                 |
| 原始项目Stars   | [![GitHub stars](https://img.shields.io/github/stars/justboil/admin-one-vue-tailwind?style=social)](https://github.com/justboil/admin-one-vue-tailwind/stargazers) |

> 以下是原始项目的 README 内容：

---

#这是我的第一个Vue项目，用于学习前端开发

[![版本](https://img.shields.io/github/v/release/justboil/admin-one-vue-tailwind)](https://justboil.me/tailwind-admin-templates/free-vue-dashboard/) [![许可证](https://img.shields.io/badge/license-MIT-blue.svg)](https://justboil.me/tailwind-admin-templates/free-vue-dashboard/)

###很高级的英文名们

[![带深色模式的免费 Vue 3 Tailwind 3 管理仪表板模式](https://static.justboil.me/templates/one/repo-tailwind-vue.png)](https://justboil.github.io/admin-one-vue-tailwind/)

[![Vue Tailwind 白色和深色样式](https://static.justboil.me/templates/one/repo-styles.png)](https://justboil.github.io/admin-one-vue-tailwind/)

### 自带响应式的页面，挺适合拿来打大创比赛的网页使用欸；
**Admin One** 是简单、美观且免费的 Vue.js 3.x Tailwind CSS 3.x 管理仪表板。可与 Nuxt 3.x 或 Laravel 9.x 集成

* 使用 **Vue.js 3**、**Tailwind CSS 3** 框架和 **Composition API** 构建
* **Vite** 底层 &mdash; [信息](https://vitejs.dev)
* **Nuxt 3** 集成可用 &mdash; [信息](#nuxt-3-integration)
* **Laravel Breeze Inertia Vue** 集成可用 &mdash; [信息](#laravel-9x-integration)
* **SFC** `<script setup>` &mdash; [信息](https://v3.vuejs.org/api/sfc-script-setup.html)
* **Pinia** 状态库（官方 Vuex 5）&mdash; [信息](https://pinia.vuejs.org/)
* **暗模式**
* **样式化**滚动条
* 带**路由器**的 SPA
* **生产 CSS** 仅 **&thickapprox;38kb**
* 可重复使用的组件
* 根据 MIT 许可免费提供
* [高级版本](https://justboil.me/tailwind-admin-templates/vue-dashboard/) 可用

## 目录

* [React TypeScript 版本](#looking-for-react-typescript-version)
* [响应式布局](#responsive-layout)
* [移动和平板电脑](#mobile--tablet)
* [小型笔记本电脑](#small-laptops-1024px)
* [笔记本电脑和台式机](#laptops--desktops)
* [演示](#demo)
* [免费仪表板演示](#free-dashboard-demo)
* [高级仪表板演示](#premium-dashboard-demo)
* [快速入门](#quick-start)
* [获取代码并安装](#get-code--install)
* [Vite 构建](#vite-builds)
* [Linting](#linting)
* [Nuxt 3.x 集成](#nuxt-3x-integration)
* [Laravel 9.x 集成](#laravel-9x-integration)
* [文档](#docs)
* [浏览器支持](#browser-support)
* [报告问题](#reporting-issues)
* [许可](#licensing)
* [有用的链接](#useful-links)

## 正在寻找 React TypeScript 版本？

这是 **Tailwind Vue 仪表板** 版本

正在寻找 **Tailwind React TypeScript**？检查 [Admin One - React TypeScript Tailwind 仪表板](https://github.com/justboil/admin-one-react-tailwind) 版本

## 响应式布局

### 移动和平板电脑

带有隐藏侧边菜单和可折叠卡片和表格的移动布局

[![免费 Vue 3 Tailwind CSS 3 管理仪表板](https://static.justboil.me/templates/one/one-tailwind-vue-mobile.png)](https://justboil.github.io/admin-one-vue-tailwind/)

### 小型笔记本电脑 1024px

带有显示/隐藏侧边菜单选项的小型笔记本电脑布局

[![免费 Vue 3 Tailwind CSS 3 管理仪表板](https://static.justboil.me/templates/one/one-tailwind-vue-1024.png)](https://justboil.github.io/admin-one-vue-tailwind/)

[![免费 Vue 3 Tailwind CSS 3 管理仪表板](https://static.justboil.me/templates/one/one-tailwind-vue-1024-menu-open.png)](https://justboil.github.io/admin-one-vue-tailwind/)

### 笔记本电脑和台式机

经典布局，左侧有侧边菜单

[![免费 Vue 3 Tailwind CSS 3 管理仪表板](https://static.justboil.me/templates/one/one-tailwind-vue-widescreen.png)](https://justboil.github.io/admin-one-vue-tailwind/)

## 演示

### 免费仪表板演示

https://justboil.github.io/admin-one-vue-tailwind/

### 高级仪表板演示

https://tailwind-vue.justboil.me/

## 快速入门

获取代码并安装。然后使用 [Vite](#vite-builds) 进行 `dev` 或 `build`，或与 [Nuxt](#nuxt-3x-integration) 或 [Laravel](#laravel-9x-integration) 集成

* [获取代码并安装](#get-code--install)
* [Vite 构建](#vite-builds)
* [Linting](#linting)
* [Nuxt 3.x 集成](#nuxt-3x-integration)
* [Laravel 9.x 集成](#laravel-9x-integration)

### 获取代码并安装

#### 获取 repo

* [使用此模板创建新 repo](https://github.com/justboil/admin-one-vue-tailwind/generate)
* &hellip; 或在 GitHub 上克隆此 repo
* &hellip;或从 GitHub [下载 .zip](https://github.com/justboil/admin-one-vue-tailwind/archive/master.zip)

#### 安装

`cd` 到项目目录并运行 `npm install`

### Vite 构建

[Vite](https://vitejs.dev) 是下一代前端工具，具有未捆绑的 Web 开发功能

#### 用于开发的热重载

```
npm run dev
```

#### 用于生产的构建和最小化

```
npm run build
```

#### 提供最近构建的应用程序

```
npm run preview
```

### Linting

#### Lint

```
npm run lint
```

### Nuxt 3.x 集成

此仪表板可与 Nuxt 3.x 集成。[查看指南](https://github.com/justboil/admin-one-vue-tailwind/tree/master/.nuxt-guide) 了解更多信息

### Laravel 9.x 集成

此仪表板可与 Laravel 9.x Breeze Inertia + Vue.js 堆栈集成。 [查看指南](https://github.com/justboil/admin-one-vue-tailwind/tree/master/.laravel-guide) 了解更多信息

## 文档

自定义和信息：https://justboil.github.io/docs/

## 浏览器支持

我们尝试确保仪表板在所有主流浏览器的最新版本中都能正常工作

<img src="https://justboil.me/images/browsers-svg/chrome.svg" width="64" height="64" alt="Chrome"> <img src="https://justboil.me/images/browsers-svg/firefox.svg" width="64" height="64" alt="Firefox"> <img src="https://justboil.me/images/browsers-svg/edge.svg" width="64" height="64" alt="Edge"> <img src="https://justboil.me/images/browsers-svg/safari.svg" width="64" height="64" alt="Safari"> <img src="https://justboil.me/images/browsers-svg/opera.svg" width="64" height="64" alt="Opera">

## 报告问题

JustBoil 的免费项目仅限于 GitHub 上的社区支持。

问题列表专门用于错误报告和功能请求。这意味着我们不接受使用问题。如果您打开的问题不符合要求，它将被关闭。

1. 确保您使用的是最新版本的仪表板。过时版本的问题无关紧要
2. 提供重现步骤
3. 提供预期行为
4. 描述实际发生的情况
5. 平台、浏览器和版本，因为某些问题可能特定于浏览器

## 许可

- 版权所有 &copy; 2019-2022 JustBoil.me (https://justboil.me)
- MIT 许可

## 有用的链接

- [JustBoil.me](https://justboil.me/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vue.js 3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev)

# [Admin One &mdash; Free Vue 3.x Tailwind 3.x Admin Dashboard with dark mode](https://justboil.me/tailwind-admin-templates/free-vue-dashboard/)

[![version](https://img.shields.io/github/v/release/justboil/admin-one-vue-tailwind)](https://justboil.me/tailwind-admin-templates/free-vue-dashboard/)  [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://justboil.me/tailwind-admin-templates/free-vue-dashboard/)

### Tailwind 3.x Vue 3.x with Vite or Nuxt or Laravel

[![Free Vue 3 Tailwind 3 admin dashboard with dark mode](https://static.justboil.me/templates/one/repo-tailwind-vue.png)](https://justboil.github.io/admin-one-vue-tailwind/)

[![Vue Tailwind white & dark styles](https://static.justboil.me/templates/one/repo-styles.png)](https://justboil.github.io/admin-one-vue-tailwind/)

### Tailwind 3.x Vue 3.x with Vite or Nuxt or Laravel

**Admin One** is simple, beautiful and free Vue.js 3.x Tailwind CSS 3.x admin dashboard. Nuxt 3.x or Laravel 9.x integrations available

* Built with **Vue.js 3**, **Tailwind CSS 3** framework & **Composition API**
* **Vite** under the hood &mdash; [Info](https://vitejs.dev)
* **Nuxt 3** integration available &mdash; [Info](#nuxt-3-integration)
* **Laravel Breeze Inertia Vue** integration available &mdash; [Info](#laravel-9x-integration)
* **SFC** `<script setup>` &mdash; [Info](https://v3.vuejs.org/api/sfc-script-setup.html)
* **Pinia** state library (official Vuex 5) &mdash; [Info](https://pinia.vuejs.org/)
* **Dark mode**
* **Styled** scrollbars
* SPA with **Router**
* **Production CSS** is only **&thickapprox;38kb**
* Reusable components
* Free under MIT License
* [Premium version](https://justboil.me/tailwind-admin-templates/vue-dashboard/) available

## Table of Contents

* [React TypeScript version](#looking-for-react-typescript-version)
* [Responsive layout](#responsive-layout)
  * [Mobile & tablet](#mobile--tablet)
  * [Small laptops](#small-laptops-1024px)
  * [Laptops & desktops](#laptops--desktops)
* [Demo](#demo)
  * [Free dashboard demo](#free-dashboard-demo)
  * [Premium dashboard demo](#premium-dashboard-demo)
* [Quick Start](#quick-start)
  * [Get code & install](#get-code--install)
  * [Vite builds](#vite-builds)
  * [Linting](#linting)
  * [Nuxt 3.x integration](#nuxt-3x-integration)
  * [Laravel 9.x integration](#laravel-9x-integration)
* [Docs](#docs)
* [Browser Support](#browser-support)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)

## Looking for React TypeScript version?

This is **Tailwind Vue dashboard** version

Looking for **Tailwind React TypeScript**? Check [Admin One - React TypeScript Tailwind dashboard](https://github.com/justboil/admin-one-react-tailwind) version

## Responsive layout

### Mobile & tablet

Mobile layout with hidden aside menu and collapsable cards & tables

[![Free Vue 3 Tailwind CSS 3 admin dashboard](https://static.justboil.me/templates/one/one-tailwind-vue-mobile.png)](https://justboil.github.io/admin-one-vue-tailwind/)

### Small laptops 1024px

Small laptop layout with show/hide aside menu option

[![Free Vue 3 Tailwind CSS 3 admin dashboard](https://static.justboil.me/templates/one/one-tailwind-vue-1024.png)](https://justboil.github.io/admin-one-vue-tailwind/)

[![Free Vue 3 Tailwind CSS 3 admin dashboard](https://static.justboil.me/templates/one/one-tailwind-vue-1024-menu-open.png)](https://justboil.github.io/admin-one-vue-tailwind/)

### Laptops & desktops

Classic layout with aside menus on the left

[![Free Vue 3 Tailwind CSS 3 admin dashboard](https://static.justboil.me/templates/one/one-tailwind-vue-widescreen.png)](https://justboil.github.io/admin-one-vue-tailwind/)

## Demo

### Free Dashboard Demo

https://justboil.github.io/admin-one-vue-tailwind/

### Premium Dashboard Demo

https://tailwind-vue.justboil.me/

## Quick Start

Get code & install. Then `dev` or `build` with [Vite](#vite-builds) or integrate with [Nuxt](#nuxt-3x-integration) or [Laravel](#laravel-9x-integration)

* [Get code & install](#get-code--install)
* [Vite builds](#vite-builds)
* [Linting](#linting)
* [Nuxt 3.x integration](#nuxt-3x-integration)
* [Laravel 9.x integration](#laravel-9x-integration)

### Get code & install

#### Get the repo

* [Create new repo](https://github.com/justboil/admin-one-vue-tailwind/generate) with this template
* &hellip; or clone this repo on GitHub
* &hellip; or [download .zip](https://github.com/justboil/admin-one-vue-tailwind/archive/master.zip) from GitHub

#### Install

`cd` to project's dir and run `npm install`

### Vite builds

[Vite](https://vitejs.dev) is next Generation Frontend Tooling featuring unbundled web-development

#### Hot-reloads for development

```
npm run dev
```

#### Builds and minifies for production

```
npm run build
```

#### Serves recently built app

```
npm run preview
```

### Linting

#### Lint

```
npm run lint
```

### Nuxt 3.x integration

This dashboard can be integrated with Nuxt 3.x. [Check guide](https://github.com/justboil/admin-one-vue-tailwind/tree/master/.nuxt-guide) for more information

### Laravel 9.x integration

This dashboard can be integrated with Laravel 9.x Breeze Inertia + Vue.js stack. [Check guide](https://github.com/justboil/admin-one-vue-tailwind/tree/master/.laravel-guide) for more information

## Docs

Customization & info: https://justboil.github.io/docs/

## Browser Support

We try to make sure Dashboard works well in the latest versions of all major browsers

<img src="https://justboil.me/images/browsers-svg/chrome.svg" width="64" height="64" alt="Chrome"> <img src="https://justboil.me/images/browsers-svg/firefox.svg" width="64" height="64" alt="Firefox"> <img src="https://justboil.me/images/browsers-svg/edge.svg" width="64" height="64" alt="Edge"> <img src="https://justboil.me/images/browsers-svg/safari.svg" width="64" height="64" alt="Safari"> <img src="https://justboil.me/images/browsers-svg/opera.svg" width="64" height="64" alt="Opera">

## Reporting Issues

JustBoil's free items are limited to community support on GitHub.

The issue list is reserved exclusively for bug reports and feature requests. That means we do not accept usage questions. If you open an issue that does not conform to the requirements, it will be closed.

1. Make sure that you are using the latest version of the Dashboard. Issues for outdated versions are irrelevant
2. Provide steps to reproduce
3. Provide an expected behavior
4. Describe what is actually happening
5. Platform, Browser & version as some issues may be browser specific

## Licensing

- Copyright &copy; 2019-2022 JustBoil.me (https://justboil.me)
- Licensed under MIT

## Useful Links

- [JustBoil.me](https://justboil.me/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vue.js 3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev)
