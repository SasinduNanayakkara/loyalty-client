import React from 'react'
import products from '../data/products.js'
import { useRecoilState } from 'recoil';
import userContextAtom from '../features/UserAtom.js';
import Navbar from '../components/Navbar.jsx';
import { buyProduct, redeemLoyaltyPoints } from '../apis/Apis.js';

function Products() {
  const [user] = useRecoilState(userContextAtom);
  console.log("name - " + user.userName);

  const handleBuyNow = async (productProp) => {
    if (!user.isAuthenticated) {
      alert("Please login to buy products");
      return;
    }
    // Logic to handle product purchase
    const product = {
      customer_id: user.userId,
      amount: productProp.amount,
      description: productProp.name,
      currency: productProp.currency,
      quantity: "1"
    }
    console.log("Product to buy:", product);
    
    const response = await buyProduct(product);
    if (response) {
      alert(`Purchase successful for ${productProp.name}!`);
    }
  }

  const handleRedeemLoyaltyPoints = async (productProp) => {
    if (!user.isAuthenticated) {
      alert("Please login to buy products");
      return;
    }
    // Logic to handle product purchase
    const product = {
      customer_id: user.userId,
      amount: productProp.amount,
      description: productProp.name,
      currency: productProp.currency,
      quantity: "1"
    }
    console.log("Product to buy:", product);
    
    const response = await redeemLoyaltyPoints(product);
    if (response) {
      alert(`Redemption successful for ${productProp.name}!`);
    }
  }
  
  return (
    <>
    <Navbar/>
    <div className="min-h-screen px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-4xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 mb-10">
          Featured Products
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-xl border border-gray-200 p-4 shadow hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-indigo-600 font-bold mt-1">{product.price}</p>
              <button
                onClick={() => handleBuyNow(product)}
                className="mt-4 w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Buy Now
              </button>
              <button
                onClick={() => handleRedeemLoyaltyPoints(product)}
                className="mt-4 w-full rounded-md bg-indigo-400 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Redeem Loyalty Points
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}   

export default Products