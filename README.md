# Serviots Assignment

This project contains a full-stack application with a Node.js/Express backend and a React/Vite frontend.

## Project Structure

- `server/`: Backend application (Node.js, Express, Mongoose)
- `frontend/`: Frontend application (React, Vite, TailwindCSS)

## Setup Instructions

### Prerequisites
- Node.js (v14 or later recommended)
- MongoDB (local or cloud instance)

### Backend Setup

1. **Navigate to the server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the `server` directory with the following variables:
   ```env
   MONGODB_URL=mongodb://localhost:27017/your_database_name
   JWT_SECRET=your_secure_jwt_secret_key
   CORS_ORIGIN=http://localhost:5173
   BACKEND_PORT=3000
   ```
   *Note: Adjust `CORS_ORIGIN` to match your frontend URL if it differs.*

4. **Run the backend server:**
   ```bash
   npm run dev
   ```
   The server typically starts on `http://localhost:3000`.

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**
   Create a `.env` file in the `frontend` directory with the following variables:
   ```env
   VITE_BACKEND_URL="http://localhost:3000/"
   ```
   
4. **Run the frontend development server:**
   ```bash
   npm run dev
   ```
   The application generally runs on `http://localhost:5173`.

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **TypeScript**
- **JWT (JSON Web Token)**
- **bcrypt**
- **React.js**
- **Vite**
- **TailwindCSS**

---

## API Endpoints

### Authentication Routes
Base URL: `/auth`

| Method | Endpoint    | Description                     | Body Parameters              |
|--------|-------------|---------------------------------|------------------------------|
| POST   | `/register` | Register a new user             | `username`, `email`, `password` |
| POST   | `/login`    | Login a user and get JWT        | `email`, `password`          |
| POST   | `/logout`   | Logout user (clear cookies/session)| N/A                         |

### Task Routes
Base URL: `/tasks`
*Note: All task routes require a valid JWT token in the `Authorization` header (`Bearer <token>`).*

| Method | Endpoint | Description                | Body Parameters / Notes       |
|--------|----------|----------------------------|-------------------------------|
| GET    | `/`      | Get all tasks for the user | N/A                           |
| POST   | `/`      | Create a new task          | `title`, `description`, etc.  |
| PUT    | `/:id`   | Update a specific task     | Updated task fields           |
| DELETE | `/:id`   | Delete a specific task     | N/A                           |
