# PERN Todo App

Full‑stack todo list built with PostgreSQL, Express, React, and Node. The frontend (Vite + React + Tailwind) talks to a small REST API that persists todos in Postgres.

## Project structure
- `backend/` – Express server, Postgres connection, and REST routes.
- `frontend/` – Vite + React UI styled with Tailwind CSS v4.

## Prerequisites
- Node.js 18+ and npm.
- PostgreSQL running locally 

## Database setup
Adjust the credentials in `backend/db.js` if needed, then create the database and table:

```sql
CREATE DATABASE tododb;
\c tododb
CREATE TABLE todo (
  todo_id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE
);
```

## Run the app locally
In separate terminals:

```bash
# Backend
cd backend
npm install
npm run dev   # or: npm start

# Frontend
cd frontend
npm install
npm run dev   # defaults to http://localhost:5173
```

The frontend expects the API at `http://localhost:5000/todos` (configured via axios calls in `frontend/src/App.jsx`).

## API reference
Base URL: `http://localhost:5000/todos`

| Method | Path        | Description                  | Body (JSON)                     |
| ------ | ----------- | ---------------------------- | ------------------------------ |
| GET    | `/`         | List all todos               | —                              |
| POST   | `/`         | Create a todo                | `{ description, completed? }`  |
| PUT    | `/:id`      | Update description/completed | `{ description, completed? }`  |
| DELETE | `/:id`      | Delete a todo                | —                              |

## Frontend features
- Create, edit, delete, and toggle completion status.
- Loading state and inline error messages for API failures.
- Styled with Tailwind; icons from `react-icons`.

## Scripts
- Backend: `npm run dev` (nodemon) or `npm start`.
- Frontend: `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`.
