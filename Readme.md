# Node.js Task Management API

A RESTful API for task management with user authentication, built using Node.js, Express, and MongoDB.

## Live Demo
API URL: https://ve3-node-assignment.onrender.com
Swagger Documentation: https://ve3-node-assignment.onrender.com/api-docs

## Features

- Task CRUD operations with pagination
- User authentication using JWT (24-hour token validity)
- API documentation using Swagger
- MongoDB database with Mongoose ORM
- Error handling and input validation
- Secure route protection with JWT middleware

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

Access the Swagger documentation at:
- Production: `https://ve3-node-assignment.onrender.com/api-docs`
- Local: `http://localhost:3000/api-docs`

### API Endpoints

#### Authentication
- POST /api/auth/register - Register a new user
  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```
- POST /api/auth/login - Login user
  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```

#### Tasks
- GET /api/tasks - Get all tasks (with pagination)
  - Query parameters:
    - page (default: 1)
    - limit (default: 10)
  - Returns:
    ```json
    {
      "tasks": [],
      "currentPage": 1,
      "totalPages": 1,
      "totalTasks": 0
    }
    ```
- GET /api/tasks/:id - Get task by ID
- POST /api/tasks - Create new task
  ```json
  {
    "title": "Task title",
    "description": "Task description",
    "status": "pending"
  }
  ```
- PUT /api/tasks/:id - Update task
- DELETE /api/tasks/:id - Delete task

### Authentication
All task endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

## Swagger API Testing Guide

### 1. Accessing Swagger UI
- Production: `https://ve3-node-assignment.onrender.com/api-docs`
- Local: `http://localhost:3000/api-docs`

### 2. Authentication Testing

#### Register User
1. Expand the `/auth/register` endpoint
2. Click "Try it out"
3. Enter test data:
```json
{
  "username": "testuser1",
  "password": "password123"
}
```
4. Click "Execute"
5. Verify 201 response with success message

#### Login User
1. Expand the `/auth/login` endpoint
2. Click "Try it out"
3. Enter credentials:
```json
{
  "username": "testuser1",
  "password": "password123"
}
```
4. Click "Execute"
5. Copy the JWT token from response

### 3. Authorize Swagger
1. Click the "Authorize" button (🔓) at the top
2. Enter token format: `Bearer your-token-here` //here you need to enter token only
3. Click "Authorize"
4. Click "Close"

### 4. Testing Task Endpoints

#### Create Task (POST /tasks)
1. Expand POST `/tasks`
2. Click "Try it out"
3. Enter task data:
```json
{
  "title": "Test Task",
  "description": "Testing task creation",
  "status": "pending"
}
```
4. Execute and verify 201 response

#### Get All Tasks (GET /tasks)
1. Expand GET `/tasks`
2. Click "Try it out"
3. Test pagination:
   - page: 1
   - limit: 10
4. Execute and verify pagination works

#### Get Single Task (GET /tasks/{id})
1. Expand GET `/tasks/{id}`
2. Enter task ID from create response
3. Execute and verify task details

#### Update Task (PUT /tasks/{id})
1. Expand PUT `/tasks/{id}`
2. Enter task ID
3. Update data:
```json
{
  "title": "Updated Task",
  "status": "completed"
}
```
4. Execute and verify changes

#### Delete Task (DELETE /tasks/{id})
1. Expand DELETE `/tasks/{id}`
2. Enter task ID
3. Execute and verify 204 response

### 5. Error Testing Scenarios

#### Authentication Errors
1. Test without token:
   - Remove authorization
   - Try any task endpoint
   - Verify 401 Unauthorized

#### Invalid Input
1. Create task without title:
```json
{
  "description": "Missing title"
}
```
2. Verify 400 Bad Request

#### Non-existent Resources
1. Try GET /tasks with invalid ID
2. Verify 404 Not Found

### 6. Testing Checklist

Authentication:
- [ ] Register new user
- [ ] Login successfully
- [ ] Get valid JWT token
- [ ] Authorize Swagger UI

Task Operations:
- [ ] Create new task
- [ ] Get all tasks with pagination
- [ ] Get single task
- [ ] Update task
- [ ] Delete task

Error Handling:
- [ ] Unauthorized access
- [ ] Invalid input
- [ ] Non-existent resources
- [ ] Pagination limits

## Deployment

This API is deployed on Render.com. To deploy your own instance:

1. Fork this repository
2. Create a new Web Service on Render
3. Connect your GitHub repository
4. Configure environment variables:
   ```
   DATABASE_URL=your_mongodb_atlas_url
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```
5. Deploy the service

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Swagger UI Express
- bcrypt for password hashing

## Error Handling

The API includes comprehensive error handling for:
- Invalid authentication
- Missing or expired tokens
- Invalid input validation
- Resource not found
- Server errors

## Response Codes

- 200: Success
- 201: Created
- 204: No Content
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Server Error

## Data Models

### User Model
```json
{
  "username": "string (required, unique)",
  "password": "string (required, hashed)"
}
```

### Task Model
```json
{
  "title": "string (required)",
  "description": "string",
  "status": "string (enum: ['pending', 'completed'])",
}
```
3. Pagination
   - Default: page=1, limit=10
   - Max limit: 100 items per page
