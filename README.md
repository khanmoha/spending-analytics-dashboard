# Spending Analytics Dashboard

A full-stack web application for tracking, managing, and analyzing personal spending. Built with Next.js, React, TypeScript, Tailwind CSS, and Supabase.

## Demo

![Spending Analytics Dashboard Screenshot](public/screenshot.png)

## Features

- Create, read, update, and delete transactions
- Real-time UI updates after creating, editing, and deleting entries
- Edit transactions via modal interface
- API routes using Next.js App Router
- Supabase integration with PostgreSQL
- Row Level Security (RLS) for secure data access

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Supabase (PostgreSQL)

## Project Structure

src/app/api/transactions/route.ts → GET, POST  
src/app/api/transactions/[id]/route.ts → PUT, DELETE  
src/app/transactions/page.tsx → Main dashboard page  

src/components/ → UI components  
src/lib/supabase.ts → Supabase client  

## API Endpoints

- GET `/api/transactions` → Fetch all transactions  
- POST `/api/transactions` → Create a transaction  
- PUT `/api/transactions/[id]` → Update a transaction  
- DELETE `/api/transactions/[id]` → Delete a transaction  

## Environment Variables

Create a `.env.local` file:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url  
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key  

## Getting Started

### Option A: Local Supabase (recommended)

Prerequisite: Docker Desktop (Supabase local runs via Docker)

1) Start Supabase and apply migrations:

```bash
npm install
npm run db:start
npm run db:reset
```

`npm run db:reset` recreates the local database and re-applies all migrations in `supabase/migrations/`. Run it the first time you set up the project locally, and whenever migrations change.

2) Configure `.env.local` using values from:

```bash
npm run db:status
```

3) Start the app:

```bash
npm run dev
```

Open:

- `http://localhost:3000/transactions`

### Option B: Hosted Supabase

1) Create a Supabase project and set in `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

2) Create the schema in your hosted project using the Supabase SQL Editor:

   - In the [Supabase Dashboard](https://supabase.com/dashboard), open your project.
   - Go to **SQL Editor** → **New query**.
   - Open the migration file in this repo: `supabase/migrations/20260407120000_create_transactions.sql`.
   - Copy its full contents into the query editor and click **Run** (or press the run shortcut).
   - You should see success; the `public.transactions` table will exist in your hosted database.

## Troubleshooting

- **`supabase start` fails with “Cannot connect to the Docker daemon”**
  - Docker Desktop isn’t running (or isn’t installed). Start Docker Desktop and retry.

- **Saving a transaction “does nothing”**
  - Check the browser Network tab for `POST /api/transactions` and the response status/body.
  - Check the dev server logs for Supabase errors printed by the API route.

- **Supabase error: “Could not find the table `public.transactions` in the schema cache”**
  - The schema hasn’t been applied to the database you’re pointing at. For local dev, run `npm run db:reset`.
  - Also confirm `.env.local` points to local Supabase (`http://127.0.0.1:54321`) and uses the **Publishable** key from `npm run db:status`.

## Current Progress

- Transaction creation and deletion  
- Transaction editing via modal  
- Full CRUD API implementation  
- Supabase database integration  
- UI updates synced with backend  

## Planned Features

- Data visualization (charts and analytics)  
- Category-based insights  
- Authentication  
- Improved UI/UX  
- Deployment (Vercel)  

## What I Learned

- Building full-stack apps with Next.js App Router  
- Designing RESTful APIs  
- Working with Supabase and PostgreSQL  
- Handling real-world debugging (RLS, API mismatches)  
- Managing state between frontend and backend  

## License

This project is for educational and portfolio purposes.
