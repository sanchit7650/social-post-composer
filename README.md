# 📱 Social Post Composer

A full-stack MERN application that allows users to compose and manage social media posts for multiple platforms with real-time validation.

---

## 📌 Project Overview

Social Post Composer is designed to help users create posts that can be shared across different social media platforms such as Twitter (X), LinkedIn, Instagram, and Facebook.

The application provides:
- Real-time character counting
- Platform-specific validation
- Secure user authentication
- Post management using MongoDB

---

## 🚀 Features

### User Authentication
- User Registration
- User Login
- JWT Authentication
- Secure Password Hashing using bcrypt

### Post Composer
- Create a new post
- Enter post title
- Write post content
- Select multiple social media platforms
- Real-time character counter
- Platform-specific validation
- Publish posts

### Post Management
- Save posts in MongoDB Atlas
- View all published posts

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Bootstrap
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcryptjs

---

# 📂 Project Structure

```text
social-post-composer/

│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │      Navbar.jsx
│   │   │      PostForm.jsx
│   │   │      PostList.jsx
│   │   │
│   │   ├── pages/
│   │   │      Login.jsx
│   │   │      Register.jsx
│   │   │      Dashboard.jsx
│   │   │
│   │   ├── services/
│   │   │      api.js
│   │   │
│   │   ├── styles/
│   │   │      Dashboard.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server/
│   ├── config/
│   │      db.js
│   │
│   ├── controllers/
│   │      authController.js
│   │      postController.js
│   │
│   ├── middleware/
│   │      authMiddleware.js
│   │
│   ├── models/
│   │      User.js
│   │      Post.js
│   │
│   ├── routes/
│   │      authRoutes.js
│   │      postRoutes.js
│   │
│   ├── uploads/
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

# 🏗️ System Architecture

```text
                    User

                      │
                      ▼

          Login / Register (React)

                      │
                      ▼

              JWT Authentication

                      │
                      ▼

                Dashboard

                      │
                      ▼

             Create New Post

                      │
        ┌─────────────┼─────────────┐
        │             │             │
        ▼             ▼             ▼

      Title        Content     Platform Selection

                      │
                      ▼

         Character Counter & Validation

                      │
                      ▼

               Publish Post

                      │
                      ▼

             Axios HTTP Request

                      │
                      ▼

          Express.js REST API

                      │
                      ▼

         JWT Authentication Middleware

                      │
                      ▼

               MongoDB Atlas

                      │
                      ▼

          Retrieve & Display Posts
```

---

# 📊 Platform Validation

| Platform | Character Limit |
|-----------|----------------:|
| Twitter (X) | 280 |
| LinkedIn | 3000 |
| Instagram | 2200 |
| Facebook | 63206 |

---

# 🔐 Authentication Flow

```text
Register
    │
    ▼
Store User in MongoDB
    │
    ▼
Login
    │
    ▼
Generate JWT Token
    │
    ▼
Store Token in Local Storage
    │
    ▼
Access Protected APIs
```

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/Winstar444/social-post-composer
```

---

## Backend

```bash
cd server

npm install

npm run dev
```

---

## Frontend

```bash
cd client

npm install

npm run dev
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

MONGO_URI=Your_MongoDB_Atlas_Connection_String

JWT_SECRET=Your_JWT_Secret
```

---

# 🎯 Learning Outcomes

- React Component Development
- REST API Integration
- JWT Authentication
- MongoDB CRUD Operations
- Real-Time Form Validation
- Responsive UI using Bootstrap
- MERN Stack Architecture

---

# 👨‍💻 Author

**Shubham Mehrotra**

Social Post Composer – MERN Stack Project
