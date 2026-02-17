# Task Management System

This is a Task Management application built using the MERN stack. 
Users can register, login, and manage their tasks securely using JWT authentication.

## Features
 User Registration & Login
 JWT Authentication
 Create, Update, Delete Tasks
 Protected Routes
 Role-based Access (Admin/User)

## Tech Stack
Frontend: React.js, Axios
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT, bcrypt

## Installation


1. Install backend dependencies
cd backend
npm install

2. Create .env file
Add:
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret

3. Start backend
node server.js

4. Start frontend
cd frontend
npm install
npm start


## API Routes

POST /api/v1/auth/register
POST /api/v1/auth/login
GET /api/v1/tasks
POST /api/v1/tasks

## Author
BALRAM
GitHub: https://github.com/Balram-Gupta
