import TransactionForm from "@/components/TransactionForm"

export default function TransactionsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Transaction
      </button>

      <TransactionForm />
    </div>
  )
}
