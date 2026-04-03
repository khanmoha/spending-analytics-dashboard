"use client"

import EditTransactionModal from "@/components/EditTransactionModel"
import TransactionForm from "@/components/TransactionForm"
import TransactionList from "@/components/TransactionList"
import { Transaction } from "@/types/transaction"
import { useEffect, useState } from "react"

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null)

  const fetchTransactions = async () => {
    const res = await fetch("/api/transactions")
    const data = await res.json()
    setTransactions(data)
  }

  const handleUpdate = (updated: Transaction) => {
    setTransactions((prev) =>
      prev.map((t) => (t.id === updated.id ? updated : t))
    )
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
        onEdit={setEditingTransaction}
      />

      {editingTransaction && (
        <EditTransactionModal
          transaction={editingTransaction}
          onClose={() => setEditingTransaction(null)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  )
}
