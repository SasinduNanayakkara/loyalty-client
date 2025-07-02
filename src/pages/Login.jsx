import { useState } from 'react'
import { loginUser } from '../apis/Apis';
import { useRecoilState } from 'recoil';
import userContextAtom from '../features/UserAtom';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useRecoilState(userContextAtom);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    console.log('handleLogin called with:', { email, password });
    try {
      const result = await loginUser(email, password);
      if (result.isAuthenticated) {
        setUser({
          userId: result.userId,
          userName: result.userName,
          token: result.token,
          isAuthenticated: true
        });
        console.log("Login successful", user);
        navigate('/products');
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  }


  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-40 w-auto" src="https://cdn3d.iconscout.com/3d/premium/thumb/cash-bonus-on-online-shopping-3d-icon-download-in-png-blend-fbx-gltf-file-formats--rewards-customer-loyalty-pack-e-commerce-icons-9764218.png?f=webp" alt="Your Company" />
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Welcome to Loyalty Cash App</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" onSubmit={handleLogin}>
      <div>
        <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
        <div class="mt-2">
          <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
          <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm/6 text-gray-500">
      Not a member?
      <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500"> Sign Up</a>
    </p>
  </div>
</div>
  )
}

export default Login