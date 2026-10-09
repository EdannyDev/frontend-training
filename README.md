# 🚀 Skillhub – Frontend

## 📌 Overview
Skillhub Frontend is a Next.js application that provides a structured and role-based interface for corporate ERP training.

It communicates securely with the backend API and dynamically adapts content based on user roles.

## 🎨 UI & Architecture

- Feature-based page organization  
- Reusable component structure  
- Axios-based API communication  
- Role-based conditional rendering  
- Progress visualization modules  

## 🔐 Authentication Handling

- JWT-based session sent as a Bearer token (stored in `localStorage`)
- Role-based UI rendering and redirects for admin-only screens (authorization is enforced by the API)
- Redirect to `/login` when there is no token

## 📊 Core Features

- Training module with real-time progress tracking  
- Evaluation interface  
- FAQ module  
- Administrative dashboard  
- User management interface  

## 🛠 Tech Stack

`Next.js` · `React` · `Axios`  

`Emotion Styled` · `Cloudinary` · `Yarn`  

## ⚙️ Getting Started

### Installation

```bash
git clone https://github.com/EdannyDev/frontend-training.git
cd frontend-training
yarn install
```

### Environment Variables

Copy `.env.example` to `.env.local` and adjust the values for your environment:

```bash
cp .env.example .env.local
```

| Variable                              | Description                                | Example                         |
|-----------------------------------------|-----------------------------------------------|-------------------------------------|
| `NEXT_PUBLIC_BACKEND_URL`             | Base URL of the backend REST API           | `http://localhost:5000/api`         |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`   | Cloudinary cloud name for uploads          | `your_cloud_name`                   |
| `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`| Cloudinary unsigned upload preset          | `your_upload_preset`                |

### Running the App

```bash
yarn dev
```

The app will be available at `http://localhost:3000`.

---

Backend API: [backend-training](https://github.com/EdannyDev/backend-training) · Author: [@EdannyDev](https://github.com/EdannyDev)