import React, { useEffect } from 'react'
import { getUserProfile } from '../apis/Apis';
import { useRecoilState } from 'recoil';
import userContextAtom from '../features/UserAtom';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function Profile() {

  const [user, setUser] = useRecoilState(userContextAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserLoyaltyProfile = async () => {
      try {
        const response = await getUserProfile(user.userId);
        if (response && response.loyalty_account) {
          setUser({ ...user, points: response.loyalty_account.balance });
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    }

    getUserLoyaltyProfile();
  }, []);

console.log("balance - " + user.points);

  return (
    <>
    <Navbar/>
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
          <img
            className="mx-auto h-24 w-24 rounded-full object-cover"
            src={"https://cdn-icons-png.flaticon.com/512/6522/6522516.png"}
            alt="User Avatar"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            {user.userName}
          </h2>
          <p className="text-sm text-gray-600 font-bold pt-3">Loyalty Points {user.points}</p>
          <button
            onClick={() => navigate("/history")}
            className="mt-6 w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Payment History
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile