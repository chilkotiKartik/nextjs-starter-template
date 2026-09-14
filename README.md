<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=220&color=0:0F172A,50:1E293B,100:0F172A&text=Next.js%20Production%20Starter%20Template&fontColor=FFFFFF&fontSize=36&fontAlignY=40&desc=Next.js%20%20TypeScript%20%20Tailwind%20CSS%20%20Auth%20Middleware%20%20Lucide&descColor=94A3B8&descFontSize=15&descAlignY=62" width="100%" alt="Next.js Production Starter Template" />

<br />

[![GitHub stars](https://img.shields.io/github/stars/chilkotiKartik/=for-the-badge&logo=github&color=1E293B)](https://github.com/chilkotiKartik/nextjs-starter-template/stargazers)
[![License](https://img.shields.io/badge/License-MIT-0284c7?style=for-the-badge)](LICENSE)
[![Maintained](https://img.shields.io/badge/Maintained%3F-yes-10b981?style=for-the-badge)](https://github.com/chilkotiKartik/nextjs-starter-template)
[![Author](https://img.shields.io/badge/Author-Kartik%20Chilkoti-6366f1?style=for-the-badge)](https://github.com/chilkotiKartik)

</div>

---

## 📌 Project Overview

A modern, batteries-included Next.js production starter equipped with authentication middleware, theme providers, dark-mode utilities, SEO meta configurations, and reusable UI components.

---

## 🚀 Key Features

- **Edge Middleware:** Instant session protection and authentication redirection.
- **Production Boilerplate:** Preconfigured ESLint, Prettier, TypeScript, and absolute path aliases.

---

## 🛠️ Architecture & Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js App Router, React 19, TypeScript |
| **Styling** | Tailwind CSS, Lucide Icons |
| **Security** | Edge Middleware, Protected Route Handlers |

---

## 📂 Repository Structure

`	ext
nextjs-starter-template/
??? app/                    # App router routes & protected layouts
??? components/             # Reusable UI primitives
??? middleware.ts           # Route protection & edge logic
`

---

## ⚙️ Environment Configuration

Create a .env.local or .env file in the root directory:

`nv
NEXTAUTH_SECRET=generate_with_openssl_rand_base64_32
NEXT_PUBLIC_APP_URL=http://localhost:3000
`

---

## 🚦 Getting Started

### 1. Clone the Repository
`ash
git clone https://github.com/chilkotiKartik/nextjs-starter-template.git
cd nextjs-starter-template
`

### 2. Install Dependencies
`ash
npm install
`

### 3. Run Development Server
`ash
npm run dev
`

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 👤 Author

**Kartik Chilkoti**
- **GitHub:** [@chilkotiKartik](https://github.com/chilkotiKartik)
- **Email:** [chilkotikartik@gmail.com](mailto:chilkotikartik@gmail.com)

---

<div align="center">
<sub>Engineered with precision by <strong>Kartik Chilkoti</strong> &bull; All rights reserved.</sub>
</div>