import React from 'react'

function PaymentHistory() {

    const payments = [
  {
    amount: 1000,
    description: 'Asus ROG-2',
    currency: 'USD',
    quantity: 1,
    order_id: '0PX39mGshJJOF9Fy4U4NwC0TIf4F',
  },
  {
    amount: 199,
    description: 'AirPods Case',
    currency: 'USD',
    quantity: 2,
    order_id: '8A2CK1sJfwKON9Rlz1d7qE2Nhz9W',
  },
];

  return (
    <div className="min-h-screen px-6 py-12 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 mb-10">
          Payment History
        </h2>

        <div className="space-y-6">
          {payments.map((payment, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {payment.description}
                </h3>
                <span className="text-sm font-medium text-indigo-600">
                  {payment.currency} {payment.amount.toFixed(2)}
                </span>
              </div>

              <div className="text-sm text-gray-600">
                <p>Quantity: {payment.quantity}</p>
                <p className="mt-1 break-all">Order ID: {payment.order_id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PaymentHistory