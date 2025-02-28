# React + Express Template

A minimal template for full-stack applications using React (Vite) with TypeScript and Express backend.

## Quick Start

1. **Clone and install dependencies**
   ```bash
   # Clone the template
   git clone <your-repo-url>
   cd <project-name>

   # Install client dependencies
   cd client && npm install
   
   # Install server dependencies
   cd ../server && npm install
   ```

2. **Start the application**
   ```bash
   # Terminal 1: Start the server
   cd server && npm run dev

   # Terminal 2: Start the client
   cd client && npm run dev
   ```

3. **View the app**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3001

## Features

- ⚡️ **Vite** - Lightning fast frontend tooling
- 🔥 **Hot Module Replacement**
- 📦 **TypeScript** - For both frontend and backend
- 🔄 **Auto-reload** - For backend development
- ⚙️ **Express** - Fast, unopinionated backend framework
- 🔒 **CORS enabled** - Configured for frontend/backend communication

## Development

- Frontend code lives in `client/src/`
- Backend code lives in `server/src/`
- API endpoints are defined in `server/src/index.ts`
- Environment variables:
  - Backend: `server/.env`
  - Frontend: `client/.env`

## Scripts

**Client (`cd client`)**
```bash
npm run dev    # Start development server
npm run build  # Build for production
```

**Server (`cd server`)**
```bash
npm run dev    # Start development server
npm run build  # Build TypeScript
```
