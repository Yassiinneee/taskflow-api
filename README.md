<div align="center">

# 🚀 TaskFlow API

### A Secure RESTful Task Management API built with Node.js, Express.js & MongoDB

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Passport](https://img.shields.io/badge/Passport.js-34E27A?style=for-the-badge&logo=passport&logoColor=black)
![MIT License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

A secure RESTful API that enables users to authenticate, manage accounts, and perform complete CRUD operations on tasks. The project follows a modular MVC architecture and integrates security best practices including JWT authentication, Google OAuth, request validation, input sanitization, and MongoDB persistence.

</div>

---

# 📖 Table of Contents

- Overview
- Features
- Technology Stack
- Project Architecture
- Folder Structure
- Installation
- Environment Variables
- Running the Application
- API Endpoints
- Authentication
- Security Features
- Testing
- Future Improvements
- License
- Author

---

# 📌 Overview

TaskFlow API is a backend service designed for task management applications.

It provides:

- User Authentication
- JWT Authorization
- Google OAuth Authentication
- User Management
- Task Management
- MongoDB Database Integration
- Input Validation
- Secure Middleware
- RESTful API Architecture

The project follows industry best practices using Express.js and MongoDB with a clean separation of concerns.

---

# ✨ Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Google OAuth Login
- Password Hashing using bcryptjs

## User Management

- Create User
- Get User Profile
- Update User
- Delete User

## Task Management

- Create Task
- Get All Tasks
- Get Single Task
- Update Task
- Delete Task

## Security

- Helmet Security Headers
- HPP Protection
- XSS Protection
- Input Sanitization
- Express Validator
- JWT Protected Routes

---

# 🛠 Technology Stack

| Category | Technologies |
|-----------|--------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | JWT, Passport.js |
| OAuth | Google OAuth 2.0 |
| Password Encryption | bcryptjs |
| Validation | express-validator |
| Security | Helmet, HPP, XSS |
| Environment | dotenv |

---

# 📂 Project Architecture

The project follows the MVC (Model-View-Controller) architecture.

```
Client
      │
      ▼
 Express Routes
      │
      ▼
 Controllers
      │
      ▼
 Models (Mongoose)
      │
      ▼
 MongoDB
```

---

# 📁 Folder Structure

```
taskflow-api/
│
├── config/
│   ├── db.js
│   └── passport.js
│
├── controllers/
│   ├── authController.js
│   ├── taskController.js
│   └── userController.js
│
├── middlewares/
│   ├── auth.js
│   ├── errorHandler.js
│   └── sanitize.js
│
├── models/
│   ├── Task.js
│   └── User.js
│
├── routes/
│   ├── authRoutes.js
│   ├── healthRoutes.js
│   ├── taskRoutes.js
│   └── userRoutes.js
│
├── config/
├── app.js
├── server.js
├── package.json
└── .gitignore
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/taskflow-api.git
```

Navigate into the project

```bash
cd taskflow-api
```

Install dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback
```

---

# ▶️ Running the Application

Development

```bash
npm run dev
```

Production

```bash
npm start
```

Server will start at

```
http://localhost:5000
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login user |
| GET | /api/auth/google | Google OAuth Login |

---

## Users

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/users | Get all users |
| GET | /api/users/:id | Get user |
| PUT | /api/users/:id | Update user |
| DELETE | /api/users/:id | Delete user |

---

## Tasks

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/tasks | Create task |
| GET | /api/tasks | Get all tasks |
| GET | /api/tasks/:id | Get single task |
| PUT | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |

---

## Health Check

| Method | Endpoint |
|---------|----------|
| GET | /api/health |

---

# 🔐 Authentication

Protected routes require a JWT token.

Example

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

Google OAuth is also available through Passport.js for secure third-party authentication.

---

# 🛡 Security Features

- Password hashing using bcryptjs
- JWT authentication
- Google OAuth authentication
- Express Validator
- Helmet security headers
- HPP protection
- XSS protection
- Input sanitization middleware
- Centralized error handling
- Environment variable configuration

---

# 🧪 Testing

Example request using Postman

### Register

```http
POST /api/auth/register
```

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

---

### Login

```http
POST /api/auth/login
```

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

---

### Create Task

```http
POST /api/tasks
```

```json
{
  "title": "Complete REST API",
  "description": "Finish backend checkpoint",
  "status": "Pending"
}
```

---

# 🚀 Future Improvements

- Refresh Token Authentication
- Role-Based Access Control (RBAC)
- Email Verification
- Password Reset
- API Documentation using Swagger
- Docker Support
- Unit Testing
- Integration Testing
- Rate Limiting
- File Upload Support
- Task Categories
- Task Priority Levels
- Due Date Notifications

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Add new feature"
```

4. Push

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Yassine Kalthoum**

Software & Network Engineering

Master's Student in Software Engineering

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a star!

Made with ❤️ using Node.js, Express.js & MongoDB

</div>
