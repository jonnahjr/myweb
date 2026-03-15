# Nexyovi Technologies - Production-Ready Tech Stack

Welcome to the Nexyovi Technologies codebase. This project is built with a high-end Glassmorphism UI and a robust Node.js/MongoDB backend.

## 🚀 Architecture Overview

### Frontend (React + TypeScript)
- **Styling**: TailwindCSS with custom glassmorphism utilities.
- **Animations**: Framer Motion for smooth transitions and scroll effects.
- **Icons**: Lucide React.
- **Routing**: React Router DOM.
- **Structure**: Component-driven design with layout-main separation.

### Backend (Node.js + Express)
- **Database**: MongoDB via Mongoose.
- **Auth**: JWT-ready structure (mocked for initial setup).
- **APIs**: Contact management, Blog storage, and Solution data.

---

## 🛠️ Installation Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)
- npm or yarn

### 1. Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure your `.env` file (one has been created for you).
4. Start the development server:
   ```bash
   npm run dev
   ```

### 2. Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite dev server:
   ```bash
   npm run dev
   ```

---

## 🌍 Deployment Guide

### Frontend (Vite)
- **Vercel**: Simply connect your GitHub repo and set the "Build Command" to `npm run build` and "Output Directory" to `dist`.
- **Netlify**: Similar to Vercel, use the same build settings.

### Backend (Express)
- **Render / Railway**: 
  - Host your Node.js app.
  - Set the environment variable `MONGO_URI` to your production MongoDB Atlas string.
  - Set `NODE_ENV` to `production`.

---

## 🏗️ Folder Structure

```text
/
├── frontend/           # React Application
│   ├── src/
│   │   ├── components/ # Atomic UI & Layout
│   │   ├── pages/      # All 10 website pages
│   │   └── App.tsx     # Routing & Provider setup
│   └── tailwind.config.js
└── backend/            # Express API
    ├── server.js       # Entry Point
    ├── models/         # Mongoose Schemas
    ├── controllers/    # Route Logic
    └── routes/         # API Endpoints
```
