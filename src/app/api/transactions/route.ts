import { NextResponse } from "next/server"

// temporary in-memory storage
const transactions: any[] = []

export async function GET() {
  return NextResponse.json(transactions)
}

export async function POST(request: Request) {
  const body = await request.json()

  const newTransaction = {
    id: crypto.randomUUID(),
    ...body
  }

  transactions.push(newTransaction)

  return NextResponse.json(newTransaction)
}
