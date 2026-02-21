# MERN CRUD (Minimal scaffold)

Server
- location: `server`
- ports: `5000` (API)

Client
- location: `client`
- runs on Vite dev server (default port `5173`)

Run locally

1. Start MongoDB (local instance) e.g. `mongod` or use a connection string in `MONGO` env var.

2. Start server:

```powershell
cd server
npm install
npm run dev
```

3. Start client in a separate terminal:

```powershell
cd client
npm install
npm run dev
```

Open the client URL shown by Vite (usually http://localhost:5173). The client talks to `http://localhost:5000`.

Notes
- Ensure MongoDB is running at `mongodb://127.0.0.1:27017/mern_crud` or set `MONGO` environment variable for the server.
- This is a minimal scaffold: add validation, error handling, and production build adjustments as needed.
