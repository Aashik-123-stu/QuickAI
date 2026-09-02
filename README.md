# QuickAI ✨

QuickAI is a full-stack AI-powered SaaS platform that brings a suite of premium AI tools — content writing, image generation, background removal, and more — into a single, clean web app.


## 🚀 Features

- **Article Writer** – Generate long-form articles from a topic/prompt
- **Blog Title Generator** – Get catchy, SEO-friendly blog titles instantly
- **AI Image Generation** – Create images from text prompts using Google Gemini
- **Background Removal** – Remove image backgrounds automatically via Cloudinary
- **Community Feed** – Publish and browse AI-generated creations from other users
- **Authentication & Plans** – Secure sign-in with Clerk, including free/premium usage limits
- **Dashboard** – Track your past creations and usage history


## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- React Router
- Lucide React (icons)
- React Hot Toast (notifications)

**Backend**
- Node.js + Express
- Clerk (authentication & middleware)
- Neon (serverless PostgreSQL)
- Cloudinary (image storage, hosting & transformations)
- Google Gemini API (`@google/genai`) — AI text & image generation
- Multer (file uploads)



## 📁 Project Structure


QUICKAI/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── main.jsx
│   └── .env
└── server/                 # Express backend
    ├── configs/             # DB, Cloudinary, Multer configs
    ├── controllers/         # Route logic (AI, user, etc.)
    ├── middlewares/         # Auth & plan-check middleware
    ├── routes/
    ├── server.js
    └── .env


## ⚙️ Environment Variables

Create a `.env` file inside **both** `client/` and `server/` folders.

### `server/.env`
```env
PORT=3000

# Clerk
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Database (Neon)
DATABASE_URL=your_neon_postgres_connection_string

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Google Gemini
GEMINI_API_KEY=your_gemini_api_key
```

### `client/.env`
```env
VITE_BASE_URL=http://localhost:3000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

---

## 💻 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/quickai.git
cd quickai
```

### 2. Install dependencies

**Backend**
```bash
cd server
npm install
```

**Frontend**
```bash
cd client
npm install
```

### 3. Run the app

**Backend** (from `server/`)
```bash
npm run server
```

**Frontend** (from `client/`)
```bash
npm run dev
```

The app should now be running at `http://localhost:5173` (frontend) and `http://localhost:3000` (backend API).

---

## 🔑 Key Notes

- **Premium features** (like image generation) are gated behind a `plan !== 'premium'` check — make sure your Clerk billing/plan setup matches this logic.
- **Cloudinary API keys must have a role** (e.g. *Master Admin*) assigned — keys without a role will fail on upload with a `403` error even if valid.
- Image generation uses **Google Gemini**, not third-party image APIs — no external image-gen API key beyond `GEMINI_API_KEY` is required.

---

## 📄 License

This project is for educational/personal use. Add your preferred license (MIT, etc.) here if distributing publicly.

---

## 🙋 Support

For issues or questions, open an issue in this repository or reach out via the contact details in the app footer.

## Author
Aashik Ali