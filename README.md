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

---

## API Endpoints:

| Method |  Endpoint  |   Description   |
|:------:|:----------:|:---------------:|
| GET    | /api/books | Get all books   |
| POST   | /api/books | Create new book |

## Book Chapters:

| Method |          Endpoint         |        Description       |
|:------:|:-------------------------:|:------------------------:|
| GET    | /api/chapters/:bookId     | Get chapters for book    |
| POST   | /api/chapters/:bookId     | Add new chapter          |
| GET    | /api/chapters/chapter/:id | Get full chapter details |

---

## Backend Code Overview

### Book Model

```js
{
  title: String,
  author: String,
  createdAt: Date
}
```

### Chapter Model

```js
{
  bookId: ObjectId,
  title: String,
  summary: String,
  content: String,
  createdAt: Date
}
```

---

## Frontend Code Overview

Components:
- BookCard.jsx → UI for each book card
 -ChapterFlashCard.jsx → UI for chapter flashcards
 -Navbar.jsx → App header

Pages:
- Books.jsx → Add/view books
- Chapters.jsx → Add/view chapters
- ChapterView.jsx → Full-page chapter reader

---

## 🧪 Testing the Application
1. Add a book: Go to / → enter title + author → click Add Book
2. Add a chapter: Open a book → fill fields → click Add Chapter
3. Read chapter: Click on any flashcard → full chapter viewer opens

---

## 📝 Future Enhancements (Optional)

- User login system
- Tags & search filter
 -Dark mode toggle
- Export chapter as PDF
- Autosave notes
- AI-assisted book summaries
- Markdown editor
- Book cover uploads

---

## 🤝 Contributing

- Fork the repo
- Create a branch
 -Write code
- Submit a pull request

---

## 📄 License

This project is open-source and available under the MIT License.

---

If you need:

- UI revamp
- New features
- Deployment help
- API extensions
  
Just open an issue or ask for enhancements.
