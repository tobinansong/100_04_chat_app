# ChatApp

A full-stack real-time chat application built with React, Express, Socket.io, and MongoDB.

## Features

- **Real-time messaging** — instant delivery via WebSockets
- **Image sharing** — upload images in chat or as profile pictures (Cloudinary)
- **User authentication** — JWT-based auth with HTTP-only cookies
- **Online status** — see who's online in real time
- **Theme switching** — 32 built-in themes with persistent selection
- **Message management** — edit and delete your own messages
- **Responsive design** — works on desktop and mobile

## Tech Stack

### Frontend

- **React 18** with Vite
- **Zustand** for state management
- **Tailwind CSS** + **DaisyUI** for styling
- **Socket.io Client** for real-time communication
- **Axios** for HTTP requests
- **Lucide React** for icons
- **React Hot Toast** for notifications

### Backend

- **Express.js** with Node.js
- **MongoDB** with Mongoose
- **Socket.io** for WebSocket server
- **JWT** for authentication
- **Bcrypt.js** for password hashing
- **Cloudinary** for image storage

## Project Structure

```
chat_app/
├── backend/
│   └── src/
│       ├── config/          # Database connection
│       ├── controllers/     # Route handlers (auth, messages)
│       ├── lib/             # Socket.io, Cloudinary, utilities
│       ├── middleware/       # JWT auth middleware
│       ├── models/          # Mongoose schemas (User, Message)
│       ├── routes/          # API route definitions
│       └── index.js         # Server entry point
├── frontend/
│   └── src/
│       ├── components/      # UI components
│       │   ├── ChatContainer.jsx
│       │   ├── ChatHeader.jsx
│       │   ├── MessageInput.jsx
│       │   ├── Navbar.jsx
│       │   ├── Sidebar.jsx
│       │   ├── NoChatSelected.jsx
│       │   └── AuthImpagePatern.jsx
│       ├── constants/       # Theme list
│       ├── lib/             # Axios instance
│       ├── pages/           # Route pages
│       │   ├── HomePage.jsx
│       │   ├── LoginPage.jsx
│       │   ├── SignUpPage.jsx
│       │   ├── ProfilePage.jsx
│       │   └── SettingsPage.jsx
│       ├── store/           # Zustand stores
│       │   ├── useAuthStore.js
│       │   ├── useChatStore.js
│       │   └── useThemeStore.js
│       └── App.jsx          # Root component with routing
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- Cloudinary account

### Environment Variables

Create a `.env` file in the `backend/` directory:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Installation

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Running the App

```bash
# Start the backend (from /backend)
npm run dev

# Start the frontend (from /frontend)
npm run dev
```

The frontend runs at `http://localhost:5173` and the backend at `http://localhost:5001`.

## API Endpoints

### Auth (`/api/auth`)

| Method | Route            | Description          | Auth |
|--------|------------------|----------------------|------|
| POST   | `/signup`        | Create account       | No   |
| POST   | `/login`         | Sign in              | No   |
| POST   | `/logout`        | Sign out             | No   |
| PUT    | `/update-profile`| Update profile picture | Yes |
| GET    | `/check`         | Verify auth status   | Yes  |

### Messages (`/api/messages`)

| Method | Route    | Description              | Auth |
|--------|----------|--------------------------|------|
| GET    | `/users` | Get all users for sidebar | Yes |
| GET    | `/:id`   | Get messages with a user  | Yes |
| POST   | `/:id`   | Send message to a user    | Yes |
| PUT    | `/:id`   | Edit a message            | Yes |
| DELETE | `/:id`   | Delete a message          | Yes |

## Real-time Events

| Event            | Direction       | Description                  |
|------------------|-----------------|------------------------------|
| `getOnlineUsers` | Server → Client | List of online user IDs      |
| `newMessage`     | Server → Client | New message received         |
| `messageDeleted` | Server → Client | Message was deleted          |
| `messageEdited`  | Server → Client | Message was edited           |
