Expense Tracker – Backend-Focused Full Stack Project

A backend-driven expense tracking application built using Node.js, Express, MongoDB, and JWT authentication, with a minimal React frontend for demonstration.

This project focuses on real-world backend fundamentals such as authentication, authorization, REST API design, and clean project architecture.

What This Project Demonstrates

Secure user authentication using JWT

Password hashing with bcrypt

User-specific data access (authorization)

RESTful API design

MongoDB schema modeling using Mongoose

Clean separation of concerns (routes, controllers, middleware)

Error handling and backend stability

Environment-based configuration (production-ready)

Key Backend Concepts Covered

Stateless authentication (JWT)

Middleware-based authorization

Protected API routes

CRUD operations with MongoDB

Secure handling of credentials

Scalable backend structure

Tech Stack

Backend

Node.js

Express.js

MongoDB

Mongoose

JSON Web Token (JWT)

bcryptjs

Frontend

React (Create React App)

Fetch API

Basic CSS (UI not the focus)

<img width="474" height="464" alt="image" src="https://github.com/user-attachments/assets/fdbf40e0-d214-4fae-89c3-367ba984c161" />


Authentication Flow

User signs up with email and password

Password is hashed using bcrypt

User logs in with credentials

Backend generates a JWT token

Token is sent to client

Client sends token in Authorization header

Middleware verifies token for protected routes

API Endpoints
Authentication

POST /api/auth/signup

POST /api/auth/login

Expenses (JWT Protected)

POST /api/expenses

GET /api/expenses

PUT /api/expenses/:id

DELETE /api/expenses/:id

Authorization Header

Authorization: Bearer <JWT_TOKEN>

⚙️ Environment Variables

Create a .env file in the backend directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Running the Project Locally

Backend
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm start
