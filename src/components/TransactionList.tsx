import { Transaction } from "@/types/transaction"

type Props = {
  transactions: Transaction[]
}

export default function TransactionList({ transactions }: Props) {
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
            {transactions.map((t) => (
              <tr key={t.id}>
                <td className="p-2 border">{t.date}</td>
                <td className="p-2 border">{t.title}</td>
                <td className="p-2 border">{t.category}</td>
                <td className="p-2 border">{t.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
