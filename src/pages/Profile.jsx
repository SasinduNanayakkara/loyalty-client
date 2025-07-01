import React from 'react'

function Profile() {
    const user = {
    firstName: 'Sasindu',
    lastName: 'Nanayakkara',
    email: 'sasindu@example.com',
    phone: '+94 71 234 5678',
    avatar: 'https://i.pravatar.cc/150?img=3',
    points: 1500
  };
  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
          <img
            className="mx-auto h-24 w-24 rounded-full object-cover"
            src={user.avatar}
            alt="User Avatar"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            {user.firstName} {user.lastName}
          </h2>
          <p className="mt-2 text-sm text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-600">{user.phone}</p>
          <p className="text-sm text-gray-600 font-bold pt-3">Loyalty Points {user.points}</p>

          <button
            className="mt-6 w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Payment History
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile