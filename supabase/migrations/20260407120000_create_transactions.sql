-- Creates the table expected by the app's API routes:
-- - src/app/api/transactions/route.ts
-- - src/app/api/transactions/[id]/route.ts
--
-- Notes:
-- - RLS is intentionally NOT enabled here because the current app does not implement auth.
-- - If you enable RLS later, add policies tied to auth.uid() and a user_id column.

create extension if not exists pgcrypto;

create table if not exists public.transactions (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  amount numeric not null,
  category text not null,
  date date not null,
  created_at timestamptz not null default now()
);

create index if not exists transactions_created_at_idx
  on public.transactions (created_at desc);

