// components/Navbar.jsx
import React from 'react';
import { useRecoilState } from 'recoil';
import userContextAtom from '../features/UserAtom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [user, setUser] = useRecoilState(userContextAtom);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md py-2 px-8 flex items-center justify-between">
      <div className="text-2xl flex flex-row items-center font-bold text-indigo-600 cursor-pointer" onClick={() => navigate('/')}>
    <img class="mx-auto h-20 w-auto" src="https://cdn3d.iconscout.com/3d/premium/thumb/cash-bonus-on-online-shopping-3d-icon-download-in-png-blend-fbx-gltf-file-formats--rewards-customer-loyalty-pack-e-commerce-icons-9764218.png?f=webp" alt="Your Company" />
        Loyalty Cash App
      </div>
      <div className="flex gap-6 items-center">
        <button onClick={() => navigate('/products')} className="text-gray-700 hover:text-indigo-600 font-medium">Products</button>
        <button onClick={() => navigate('/profile')} className="text-gray-700 hover:text-indigo-600 font-medium">Profile</button>
        {user && (
          <span className="text-gray-800 font-semibold">Hi, {user.userName}</span>
        )}
        <button
          onClick={handleLogout}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 font-semibold transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
