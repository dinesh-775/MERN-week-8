# User Management Backend

A Node.js + Express + MongoDB backend for user management system.

---

## Features

- Create user
- Get all users
- Delete user (soft delete using isActive)
- REST API support

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## API Routes

### User Routes

- POST `/user-api/user` → Create user
- GET `/user-api/users` → Get all users
- DELETE `/user-api/users/:id` → Delete user (set inactive)

---

## Setup

### Install dependencies
```bash
npm install
