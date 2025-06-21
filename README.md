# 📚 Library Management API

A RESTful Library Management System built with **Express**, **TypeScript**, **MongoDB (Mongoose)**, and **Zod** for schema validation.

## 🚀 Features

- 📘 Create, update, delete, and retrieve books
- 🔍 Filter books by genre with sorting and pagination
- 📥 Borrow books with automatic availability check
- 📊 Aggregated summary of borrowed books (via MongoDB aggregation pipeline)
- ✅ Schema validation using Zod
- 🔄 Mongoose middleware, instance methods, and modular service logic
- 🔐 Error handling with standardized response format

## 📁 Folder Structure

\`\`\`
src/
├── app/
├── interfaces/ # Mongoose TypeScript
├── models/ # Mongoose schemas
├── controllers/ # Route controllers
├── services/ # Business logic
├── routes/ # Express routers
├── validators/ # Zod schemas
├── middlewares/ # Middleware (e.g. validation)
├── utils/ # Enums and constants
\`\`\`

## 🌐 API Endpoints

### 📚 Books

- \`POST /api/books\` – Add a new book (Zod validation applied)
- \`GET /api/books?filter=GENRE&sortBy=createdAt&sort=desc&limit=5\` – Get filtered/sorted books
- \`GET /api/books/:bookId\` – Get book by ID
- \`PUT /api/books/:bookId\` – Update book details
- \`DELETE /api/books/:bookId\` – Delete a book

### 📥 Borrow

- \`POST /api/borrow\` – Borrow a book (checks quantity and adjusts availability)
- \`GET /api/borrow\` – Aggregated borrow summary (total quantity borrowed per book)

### 🔁 Error Response Format

\`\`\`json
{
"message": "Validation failed",
"success": false,
"error": {
"name": "ZodError",
...
}
}
\`\`\`

## 🧑‍💻 Tech Stack

- **Backend:** Express.js with TypeScript
- **Database:** MongoDB with Mongoose ODM
- **Validation:** Zod
- **Architecture:** MVC + Service Layer
- **Tooling:** ESLint, ts-node-dev

## 🛠️ Local Setup

1. **Clone the Repository**

```bash
git clone https://github.com/Araman99/library-api
cd library-api
```

2. **Install Dependencies**

```bash
npm install
```

3. **Start MongoDB**

Ensure MongoDB is running locally or update the connection string in \`src/app.ts\`.

4. **Run the Server**

```bash
npm run dev
```

App runs on \`http://localhost:5000\`

## 🌍 Live Deployment

**Link:** [https://library-api-backend.vercel.app/](https://library-api-backend.vercel.app/)

> Deployed using Render / Vercel / Railway (choose your platform).

## 🎥 Video Walkthrough

[📺 Watch here](https://araman.me/videos/explanation.mp4)

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Submit a pull request 🚀

## 👤 Author

**Amanur Rahman**  
GitHub: [@Amanur Rahman](https://github.com/araman99)

## 📝 License

This project is licensed under the MIT License.
