import { supabase } from "@/lib/supabase"
import { NextResponse } from "next/server"

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
