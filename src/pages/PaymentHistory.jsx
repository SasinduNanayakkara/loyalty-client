import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getPaymentHistory } from '../apis/Apis';
import { useRecoilState } from 'recoil';
import userContextAtom from '../features/UserAtom';
import Navbar from '../components/Navbar';

function PaymentHistory() {

  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user] = useRecoilState(userContextAtom);


  useEffect(() => {
    const getUserPaymentHistory = async () => {
      try {
        setLoading(true);
        const response = await getPaymentHistory(user.userId);
        if (response && Array.isArray(response)) {
          setPayments(response);
        } else {
          console.log('Response is not an array:', response);
          setPayments([]);
        }
      }
      catch (error) {
        console.error('Error fetching payment history:', error);
        setPayments([]);
      } finally {
        setLoading(false);
      }
    }

    if (user?.userId) {
      getUserPaymentHistory();
    }
  }, [user?.userId]);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen px-6 py-12 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 mb-10">
          Payment History
        </h2>

        {loading ? (
          <div className="text-center">
            <p className="text-gray-600">Loading payment history...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {payments && payments.length > 0 ? (
              payments.map((payment, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-4 shadow hover:shadow-md transition"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {payment.description}
                    </h3>
                    <span className="text-sm font-medium text-indigo-600">
                      {payment.currency} {payment.amount?.toFixed(2)}
                    </span>
                  </div>

                  <div className="text-sm text-gray-600">
                    <p>Quantity: {payment.quantity}</p>
                    <p className="mt-1 break-all">Order ID: {payment.order_id}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No payment history found.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default PaymentHistory