# Uber Backend API

This is the backend API for the Uber clone project.

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Create a `.env` file (see `.env` in the repo for required variables).
3. Start the server:
   ```sh
   node server.js
   ```

## API Endpoints

### Register User

- **POST** `/users/register`
- **Body:**
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "user": { ... },
    "token": "JWT_TOKEN"
  }
  ```

### Login User

- **POST** `/users/login`
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "user": { ... },
    "token": "JWT_TOKEN"
  }
  ```

### Get User Profile

- **GET** `/users/profile`
- **Headers:**
  - `Authorization: Bearer JWT_TOKEN`
  - or send cookie `token=JWT_TOKEN`
- **Response:**
  ```json
  {
    "user": { ... }
  }
  ```

### Logout User

- **GET** `/users/logout`
- **Headers:**
  - `Authorization: Bearer JWT_TOKEN`
  - or send cookie `token=JWT_TOKEN`
- **Response:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

---

## Notes

- All endpoints return JSON.
- Protected routes require authentication via JWT token (in cookie or `Authorization` header).