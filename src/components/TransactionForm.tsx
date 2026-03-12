"use client"
import React, { useState } from "react"

export default function TransactionForm() {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log({
      title,
      amount
    })

    setTitle("")
    setAmount("")
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

      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Save Transaction
      </button>

    </form>
  )
}
