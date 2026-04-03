"use client"

import { Transaction } from "@/types/transaction"
import React, { useState, useEffect } from "react"

type Props = {
  transaction: Transaction
  onClose: () => void
  onUpdate: (transaction: Transaction) => void
}

export default function EditTransactionModal({
  transaction,
  onClose,
  onUpdate
}: Props) {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("")
  const [date, setDate] = useState("")
  
  // Pre-fill form when transaction changes
  useEffect(() => {
    if (transaction) {
      setTitle(transaction.title)
      setAmount(transaction.amount.toString())
      setCategory(transaction.category)
      setDate(transaction.date)
    }
  }, [transaction])

  if (!transaction) return null

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch(`/api/transactions/${transaction.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        amount: Number(amount),
        category,
        date,
      })
    })

    const updated = await res.json()
    onUpdate(updated) // update UI
    onClose() // close modal
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-96">
        <h2 className="text-lg font-semibold mb-4">Edit Transaction</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />

          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
          />

          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose}>
              Cancel
            </button>

            <button type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
