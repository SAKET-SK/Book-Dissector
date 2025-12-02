# 📚 Book Dissection Portal  
A minimalistic MERN-based note-taking system designed for dissecting books chapter-by-chapter.  
Users can add books, create chapter summaries, and view each chapter as an interactive flashcard.

---

## 🚀 Features

### 🔹 Book Management
- Add a new book (title + author)
- View all books in a clean card-based UI
- Navigate to chapters inside each book

### 🔹 Chapter Dissection
- Add chapter title, summary, and full content
- Flashcard-like UI for quick browsing
- Beautiful reading interface for detailed notes

### 🔹 Modern Minimal UI
- Tailwind (CDN) + DaisyUI for instant styling
- Responsive card layout
- Notion-style reading experience

### 🔹 Backend API (Node + Express)
- RESTful API for books & chapters
- Fully structured using models & routes
- MongoDB database (local)

---

## 🏗️ Tech Stack

### **Frontend**
- React (CRA)
- React Router DOM 7
- Axios
- DaisyUI (via CDN)
- TailwindCSS (CDN build)

### **Backend**
- Node.js
- Express.js
- Mongoose
- MongoDB (local server)

---

## 📁 Project Structure

```
book-portal/
│
├── backend/
│ ├── server.js
│ ├── db.js
│ ├── .env
│ ├── models/
│ │ ├── Book.js
│ │ └── Chapter.js
│ └── routes/
│ ├── bookRoutes.js
│ └── chapterRoutes.js
│
└── frontend/
├── public/
│ └── index.html ← DaisyUI + Tailwind CDN included here
├── src/
├── App.js
├── index.js
├── api/
│ └── api.js
├── components/
│ ├── Navbar.jsx
│ ├── BookCard.jsx
│ └── ChapterFlashCard.jsx
└── pages/
├── Books.jsx
├── Chapters.jsx
└── ChapterView.jsx
```

---

## ⚙️ Installation & Setup

### 🧩 Prerequisites
- Node.js (v18+ recommended)
- MongoDB Community Server installed locally
- MongoDB Compass (optional)
- Git

---

## 🛠️ Backend Setup

```bash
cd backend
npm install
```

## Create .env

```
MONGO_URI=mongodb://localhost:27017/bookPortal
PORT=5000
```

## Run Backend

```bash
npm run dev
```

Expected Output : 
MongoDB Connected
Server running on port 5000

---

## Frontend Setup

```bash
cd frontend
npm install
npm start
```

Your app opens up at localhost 3000

Make sure that your "public/index.html" contains:

```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@4.6.0/dist/full.css" rel="stylesheet" />
<script src="https://cdn.tailwindcss.com"></script>
```
