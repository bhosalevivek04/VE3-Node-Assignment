# Node.js Task Management API

A RESTful API for task management with user authentication, built using Node.js, Express, and MongoDB.

## Features

- Task CRUD operations
- User authentication using JWT
- API documentation using Swagger
- MongoDB database with Mongoose ORM
- Error handling and input validation

## Prerequisites

- Node.js (v14+)
- MongoDB
- npm

## Installation

1. Clone the repository:
```bash
git clone https://github.com/bhosalevivek04/VE3-Node-Assignment.git
cd VE3-Node-Assignment
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file in the root directory with:
```env
DATABASE_URL=mongodb://localhost:27017/task-manager
JWT_SECRET=your_secure_secret_here
PORT=3000
```

4. Start the server:
```bash
npm start
```

## API Documentation

Access the Swagger documentation at: `http://localhost:3000/api-docs`

### API Endpoints

#### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user

#### Tasks
- GET /api/tasks - Get all tasks
- GET /api/tasks/:id - Get task by ID
- POST /api/tasks - Create new task
- PUT /api/tasks/:id - Update task
- DELETE /api/tasks/:id - Delete task

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Swagger UI