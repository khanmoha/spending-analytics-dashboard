import { Transaction } from "@/types/transaction"

type Props = {
  transactions: Transaction[]
  onDelete: () => void
}

export default function TransactionList({ transactions, onDelete }: Props) {
  const handleDelete = async (id: string) => {
    await fetch(`/api/transactions/${id}`, {
      method: "DELETE"
    })

    // refresh list
    onDelete()
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>

      {transactions.length === 0 ? (
        <p className="text-gray=500">No transactions yet.</p>
      ) : (
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Amount</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((t) => {
              return (
                <tr key={t.id}>
                  <td className="p-2 border">{t.date}</td>
                  <td className="p-2 border">{t.title}</td>
                  <td className="p-2 border">{t.category}</td>
                  <td className="p-2 border">{t.amount}</td>
                  <td className="p-2 border">
                    <button
                      className="text-red-600"
                      onClick={() => handleDelete(t.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}
