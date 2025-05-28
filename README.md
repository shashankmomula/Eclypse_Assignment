# Eclypse E-commerce Website

A modern e-commerce website built with React, TypeScript, TailwindCSS, and Node.js.

## Project Structure

```
eclypse/
├── client/             # React frontend
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/     # Page components
│   │   ├── types/     # TypeScript types
│   │   └── utils/     # Utility functions
└── server/             # Node.js backend
    ├── src/
    │   ├── routes/    # API routes
    │   ├── models/    # Data models
    │   └── data/      # Dummy data
```

## Features

- Modern, responsive UI based on Figma designs
- Product listing and details
- Shopping cart functionality
- User authentication (dummy)
- RESTful API endpoints

## Tech Stack

- Frontend:
  - React 18
  - TypeScript
  - TailwindCSS
  - React Router
  - Axios

- Backend:
  - Node.js
  - Express
  - TypeScript
  - RESTful API

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install frontend dependencies
   cd client
   npm install

   # Install backend dependencies
   cd ../server
   npm install
   ```

3. Start the development servers:
   ```bash
   # Start frontend (from client directory)
   npm run dev

   # Start backend (from server directory)
   npm run dev
   ```

4. Open http://localhost:5173 in your browser

## Development

- Frontend runs on port 5173
- Backend runs on port 3000

## License

MIT 