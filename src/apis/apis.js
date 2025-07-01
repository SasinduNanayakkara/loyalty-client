import axios from 'axios';

const AppContext = createContext();

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post('/api/login', {
      email,
      password
    });

    if (response.status === 200) {

    }
  }
}