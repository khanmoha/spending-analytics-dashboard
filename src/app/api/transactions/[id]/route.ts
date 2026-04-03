import { supabase } from "@/lib/supabase"
import { NextRequest, NextResponse } from "next/server"

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params

  if (!id) {
    return NextResponse.json(
      { error: "Missing ID in request" },
      { status: 400 }
    )
  }

  const { error } = await supabase
    .from("transactions")
    .delete()
    .eq("id", id)

    if (error) {
      console.error("DELETE ERROR:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ message: "Transaction deleted" })
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  console.log("ID from params:", id)
  const body = await req.json()

  const { title, amount, category, date } = body

  const { data, error } = await supabase
    .from("transactions")
    .update({
      title,
      amount,
      category,
      date
    })
    .eq("id", id)
    .select("*")
    .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
}
