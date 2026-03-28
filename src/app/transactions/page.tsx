"use client"

import TransactionForm from "@/components/TransactionForm"
import TransactionList from "@/components/TransactionList"
import { Transaction } from "@/types/transaction"
import { useEffect, useState } from "react"

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = async () => {
    const res = await fetch("/api/transactions")
    const data = await res.json()
    setTransactions(data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <div className="p-6">
      <TransactionForm onAdd={fetchTransactions} />
      <TransactionList
        transactions={transactions}
        onDelete={fetchTransactions}
      />
    </div>
  )
}
