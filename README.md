# Qedami - MERN Authentication App

A full-stack authentication application built with MongoDB, Express.js, React, and Node.js, featuring Clerk authentication with email code verification and Google OAuth.

## Features

- ✅ Email code verification (6-digit OTP)
- ✅ Google OAuth authentication
- ✅ Protected routes and dashboard
- ✅ MongoDB user storage
- ✅ Clean, professional UI with Qedami branding
- ✅ Mobile-responsive design

## Tech Stack

**Frontend:**
- React 18 with TypeScript
- Vite
- Tailwind CSS
- Clerk React SDK
- React Router DOM

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- Clerk Backend SDK
- Helmet for security

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account
- Clerk account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abdulhakimfedlu/Auth.git
cd Auth
```

2. Install backend dependencies:
```bash
cd mern-auth-app/backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

### Configuration

1. Create `.env` file in `backend/` folder:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_API_URL=https://api.clerk.com
```

2. Create `.env` file in `frontend/` folder:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. Start the frontend (in a new terminal):
```bash
cd frontend
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
mern-auth-app/
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── server.js
│   ├── package.json
│   └── .env
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── Home.tsx
    │   │   ├── SignIn.tsx
    │   │   ├── SignUp.tsx
    │   │   └── Dashboard.tsx
    │   ├── App.tsx
    │   └── main.tsx
    ├── package.json
    └── .env
```

## License

MIT
