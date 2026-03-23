"use client"
import React, { useState } from "react"

export default function TransactionForm() {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const transaction = {
      title,
      amount: Number(amount),
      category,
      date
    }

    const res = await fetch("/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transaction)
    })

    const data = await res.json()
    console.log("Response:", data)
    alert("Transaction added!")

    // clear form
    setTitle("")
    setAmount("")
    setCategory("")
    setDate("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        className="border p-2 w-full"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="date"
        className="border p-2 w-full"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Save Transaction
      </button>

    </form>
  )
}
