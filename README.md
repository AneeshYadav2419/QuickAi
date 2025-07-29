# QuickAi 🧠✨

QuickAi is a powerful AI-driven web application that allows users to:
- ✍️ Generate blogs, articles, and creative content
- 🖼️ Create and edit images (remove background/objects)
- 📄 Review and improve resumes using AI
- 🔐 Secure user authentication via Clerk
- ☁️ Deploy-ready for platforms like Vercel

- ## 🚀 Features

- AI blog/article generator with custom prompts
- Image generator from text
- Background and object remover
- Smart resume review system with AI suggestions
- Responsive, clean UI with dark mode

-# Install dependencies
npm install

# Add environment variables
# .env file example:
VITE_BASE_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
OPENAI_API_KEY=your_openai_key
REPLICATE_API_TOKEN=your_replicate_token

## 🧰 Tech Stack

| Layer       | Technology           | Description                                      |
|-------------|----------------------|--------------------------------------------------|
| Frontend    | React, Tailwind CSS  | UI components, responsive design                 |
| Backend     | Node.js, Express.js  | API logic and server-side operations             |
| Database    | PostgreSQL           | Stores user data, creations, and other records   |
| Authentication | Clerk             | Handles user login/signup and session management |
| AI Services | OpenAI, Replicate, Remove.bg | Powers content creation and image processing |
| Deployment  | Vercel               | Deploys the frontend/backend for public access   |




| Endpoint                            | Method | Description                |
| ----------------------------------- | ------ | -------------------------- |
| `/api/user/get-published-creations` | GET    | Fetch all public creations |
| `/api/ai/generate-image`            | POST   | Generate image from prompt |
| `/api/user/toggle-like`             | POST   | Like/unlike a creation     |


