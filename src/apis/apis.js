import axios from 'axios';

// Define baseUrl directly here to avoid import issues
const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:8081/api/v1";
console.log('baseUrl in Apis.js:', baseUrl);

export const loginUser = async (email, password) => {
  console.log('loginUser function called with:', { email, password });
  console.log('baseUrl inside function:', baseUrl);
  console.log('Using API URL:', `${baseUrl}/login`);
  
  try {
    const response = await axios.post(`${baseUrl}/login`, {
      email,
      password
    });

    if (response.status === 200) {
      const token = response?.data?.data?.token;
      const userId = response?.data?.data?.customer?.id;
      const userName = response?.data?.data?.customer?.name;
      return {
        userId,
        userName,
        token,
        isAuthenticated: true
      };
    }
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}

export const buyProduct = async (product) => {

  console.log('buyProduct function called with:', product);
  console.log('baseUrl inside function:', baseUrl);
  console.log('Using API URL:', `${baseUrl}/buy`);

  try {
    const response = await axios.post(`${baseUrl}/transaction`, product);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Purchase failed:', error);
    throw error;
  }
}

export const redeemLoyaltyPoints = async (product) => {
  console.log('redeemLoyaltyPoints function called with:', product);
  console.log('baseUrl inside function:', baseUrl);
  console.log('Using API URL:', `${baseUrl}/redeem`);

  try {
    const response = await axios.post(`${baseUrl}/redeem`, product);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Redemption failed:', error);
    throw error;
  }
}

export const getUserProfile = async (userId) => {

  try {
    const response = await axios.get(`${baseUrl}/customer/${userId}`);

    if (response.status === 200) {
      return response.data.data;
    }
  }
  catch (error) {
    console.error('Failed to fetch user profile:', error);
    throw error;
  }
}

export const getPaymentHistory = async (userId) => {

  try {
    const response = await axios.get(`${baseUrl}/customer/history/${userId}`);

    if (response.status === 200) {
      console.log('Payment history response:', response.data.data);
      
      return response.data.data;
    }
  } catch (error) {
    console.error('Failed to fetch payment history:', error);
    throw error;
  }
}


