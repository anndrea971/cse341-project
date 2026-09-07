# Contacts API — W01 Part 1

A simple Express + MongoDB API for storing contact information.

## Project structure

```
contacts-api/
├── server.js            # entry point: loads env vars, connects to DB, mounts routes
├── db/
│   └── connect.js       # MongoDB connection (init/get)
├── controllers/
│   └── contacts.js      # request handling + database queries
├── routes/
│   ├── index.js         # top-level router
│   └── contacts.js      # /contacts routes
├── seed.js               # optional: inserts 3 sample contacts
├── .env.example
└── .gitignore
```

## Setup

1. `npm install`
2. Copy `.env.example` to `.env` and fill in your real MongoDB connection string:
   ```
   cp .env.example .env
   ```
3. Run locally:
   ```
   npm run dev
   ```
   The server starts on `http://localhost:3000` (or the `PORT` you set).

## Adding sample data

Either insert 3+ documents directly in the MongoDB Atlas UI (Browse Collections →
Insert Document) in a `contacts` collection, **or** run:

```
node seed.js
```

Each contact needs: `firstName`, `lastName`, `email`, `favoriteColor`, `birthday`.

## Endpoints (Part 1)

| Method | Path            | Description                     |
|--------|-----------------|----------------------------------|
| GET    | `/contacts`     | Returns all contacts            |
| GET    | `/contacts/:id` | Returns one contact by Mongo `_id` |

## Deployment (Render)

- Build command: `npm install`
- Start command: `npm start`
- Environment variables to add in Render's dashboard: `MONGODB_URI`, `DB_NAME`
- In MongoDB Atlas → Network Access, allow access from anywhere (`0.0.0.0/0`),
  since Render's outbound IPs aren't static on the free tier.
