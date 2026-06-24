<div align="center">

# 🧠 QuickAI
### AI-Powered Content Generation Platform

[![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?style=for-the-badge&logo=postgresql)](https://postgresql.org/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge&logo=clerk)](https://clerk.dev/)
[![OpenAI](https://img.shields.io/badge/OpenAI-API-412991?style=for-the-badge&logo=openai)](https://openai.com/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

<br/>

> **Generate · Create · Remove · Review**
>
> A full-stack AI platform that brings together content generation, image creation, background removal, and resume review — all in one place, powered by OpenAI, Replicate, and Remove.bg.

<br/>

**[🚀 Live Demo](https://quick-ai-client-wheat.vercel.app/)** · **[📦 GitHub](https://github.com/AneeshYadav2419/QuickAi)** · **[🐛 Report Bug](https://github.com/AneeshYadav2419/QuickAi/issues)**

</div>

---

## 🎯 What Is QuickAI?

Most AI tools do one thing. **QuickAI does everything.**

Write a blog, generate an image from a prompt, remove a background, review a resume — all from a single platform with a clean UI, community feed, and secure authentication. Built with a production-ready full-stack architecture using React, Node.js, PostgreSQL, and multiple AI APIs.

---

## ✨ Features

### 🤖 AI Capabilities
- **Blog & Article Generator** — Generate high-quality written content from custom prompts using OpenAI
- **AI Image Generator** — Convert text descriptions into stunning images via Replicate API
- **Background Remover** — Remove image backgrounds instantly using Remove.bg API
- **Object Remover** — AI-powered object removal from images
- **Resume Reviewer** — Get smart AI suggestions to improve your resume

### 🌐 Community
- **Community Feed** — Explore all published creations from users stored on Cloudinary
- **Like System** — Toggle likes on community creations
- **Public Gallery** — Browse and discover AI-generated content from the community

### 🔐 Authentication & Access
- Secure login/signup via **Clerk**
- Role-based access control
- Session management handled server-side

### 🎨 UI/UX
- Fully **responsive** design
- Clean, modern interface with **dark mode**
- Built with **Tailwind CSS**

---

## 🏗️ Architecture

```
┌─────────────────────────────────────┐
│         React Frontend              │
│    Tailwind CSS + Clerk UI          │
└──────────────┬──────────────────────┘
               │ REST API
┌──────────────▼──────────────────────┐
│        Express.js Backend           │
│         Node.js Server              │
└──────┬───────────┬──────────────────┘
       │           │
┌──────▼───┐  ┌────▼──────────────────┐
│PostgreSQL│  │    AI Services        │
│ Database │  │  ┌─ OpenAI (Text)     │
└──────────┘  │  ├─ Replicate (Image) │
              │  └─ Remove.bg (BG)    │
              └───────────────────────┘
                        │
              ┌─────────▼─────────┐
              │    Cloudinary     │
              │  (Media Storage)  │
              └───────────────────┘
```

---

## 📁 Project Structure

```
QuickAI/
│
├── client/                          # React Frontend
│   └── src/
│       ├── pages/                   # Generate, Community, Resume, Profile
│       ├── components/              # Navbar, Cards, Forms
│       ├── context/                 # Global state
│       └── assets/
│
└── server/                          # Express Backend
    └── src/
        ├── controllers/             # AI, User, Auth logic
        ├── routes/                  # API route definitions
        ├── middlewares/             # Clerk auth guard
        └── config/                  # DB, Cloudinary, API config
```

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React.js, Tailwind CSS | UI components, responsive design |
| **Backend** | Node.js, Express.js | API logic and server-side operations |
| **Database** | PostgreSQL | User data, creations, likes |
| **Authentication** | Clerk | Login/signup, session management |
| **AI — Text** | OpenAI API | Blog, article, resume review |
| **AI — Image** | Replicate API | Text-to-image generation |
| **AI — Removal** | Remove.bg API | Background & object removal |
| **Media Storage** | Cloudinary | CDN-backed image storage |
| **Deployment** | Vercel | Frontend & backend hosting |

---

## ⚡ Quick Start

### Prerequisites
- Node.js v18+
- PostgreSQL database
- API Keys: OpenAI, Replicate, Remove.bg, Clerk, Cloudinary

### 1. Clone the Repository

```bash
git clone https://github.com/AneeshYadav2419/QuickAi.git
cd QuickAi
```

### 2. Backend Setup

```bash
cd server
npm install
cp .env.example .env
# Fill in your environment variables
npm run dev
```

### 3. Frontend Setup

```bash
cd client
npm install
cp .env.example .env
# Fill in your environment variables
npm run dev
```

---

## 🔧 Environment Variables

### Frontend (`client/.env`)

```env
VITE_BASE_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Backend (`server/.env`)

```env
DATABASE_URL=postgresql://...
CLERK_SECRET_KEY=your_clerk_secret
OPENAI_API_KEY=your_openai_key
REPLICATE_API_TOKEN=your_replicate_token
REMOVEBG_API_KEY=your_removebg_key
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 📡 API Reference

### Base URL
```
http://localhost:5000/api
```

### AI Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/ai/generate-content` | Generate blog/article from prompt |
| `POST` | `/api/ai/generate-image` | Generate image from text prompt |
| `POST` | `/api/ai/remove-background` | Remove image background |
| `POST` | `/api/ai/review-resume` | Get AI resume suggestions |

### User Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/user/get-published-creations` | Fetch all public creations |
| `POST` | `/api/user/toggle-like` | Like/unlike a creation |
| `POST` | `/api/user/publish-creation` | Publish creation to community |

---

## 🔮 Roadmap

- [x] AI blog & article generation
- [x] Text-to-image generation
- [x] Background & object removal
- [x] AI resume review
- [x] Community feed with likes
- [x] Clerk authentication
- [x] Cloudinary media storage
- [ ] 💬 Comments on community creations
- [ ] 📊 User dashboard with usage analytics
- [ ] 🔔 Notifications system
- [ ] 📱 Mobile app (React Native)
- [ ] 🎨 Image editing suite
- [ ] 💰 Subscription & credit system

---

## 💡 Key Engineering Decisions

| Decision | Rationale |
|----------|-----------|
| Clerk for auth | Handles OAuth, sessions, and JWT out of the box — zero auth boilerplate |
| PostgreSQL over MongoDB | Relational data (users, creations, likes) fits structured schema better |
| Replicate for images | Flexible model selection — swap image models without code changes |
| Cloudinary for storage | CDN delivery ensures fast global media access |
| Separate client/server | Independent deployment — frontend on Vercel, backend scalable separately |

---

## 📸 Screenshots

| Home / Generate | Community Feed |
|-----------------|---------------|
| ![Home](./screenshots/home.png) | ![Community](./screenshots/community.png) |

| Image Generator | Resume Review |
|----------------|---------------|
| ![Image](./screenshots/image.png) | ![Resume](./screenshots/resume.png) |

> 💡 Add screenshots in a `/screenshots` folder and update paths above.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with 🧠 by [Aneesh Yadav](https://github.com/AneeshYadav2419)**

*Full Stack Developer · React · Node.js · PostgreSQL · OpenAI · Clerk*

⭐ **Star this repo if you found it helpful!** ⭐

</div>
