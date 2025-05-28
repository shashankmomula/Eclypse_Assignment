import { useState, useEffect } from 'react';

import type { CartItem } from '../types';
import { CreditCardIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export default function Checkout() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    aptNumber: '',
    state: ''
  });

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Shipping & Payment Forms */}
          <div className="space-y-8">
            {/* Shipping Information */}
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-semibold text-white mb-6">Shipping Information</h2>
              
              {/* First Row - First Name, Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-600"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-600"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Second Row - Street Address, Apt Number, State, ZIP */}
              <div className="grid grid-cols-4 gap-4 mt-4">
                <div className="col-span-2">
                  <label className="block text-gray-400 mb-2">Street Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-600"
                    placeholder="123 Fashion Street"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Apt Number</label>
                  <input
                    type="text"
                    name="aptNumber"
                    value={formData.aptNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-600"
                    placeholder="Apt 4B"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-600"
                    placeholder="NY"
                  />
                </div>
              </div>

              {/* Third Row - ZIP Code */}
              <div className="mt-4">
                <label className="block text-gray-400 mb-2">ZIP Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-600"
                  placeholder="10001"
                />
              </div>

              {/* Fourth Row - Cancel and Save Address Buttons */}
              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  className="flex-1 px-6 py-3 rounded-lg border border-gray-700 text-white hover:bg-gray-800 transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="flex-1 px-6 py-3 rounded-lg bg-white text-black hover:bg-gray-100 transition-all duration-300"
                >
                  Save Address
                </button>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-semibold text-white mb-6">Payment Information</h2>
              <div className="flex items-center gap-2 mb-6">
                <CreditCardIcon className="h-6 w-6 text-gray-400" />
                <span className="text-gray-400">Secure Payment</span>
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-600"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-400 mb-2">Name on Card</label>
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-600"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-gray-400 mb-2">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-600"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-600"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 sticky top-24">
              <h2 className="text-2xl font-semibold text-white mb-6">Order Summary</h2>
              
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-grow">
                      <h3 className="text-white font-medium">{item.name}</h3>
                      <p className="text-gray-400">Quantity: {item.quantity}</p>
                    </div>
                    <p className="text-white font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Order Totals */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-800 pt-4 mt-4">
                  <div className="flex justify-between text-xl font-semibold text-white">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Place Order Button */}
              <button className="w-full bg-white text-black px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg mb-4">
                Place Order
              </button>

              {/* Security Notice */}
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <LockClosedIcon className="h-4 w-4" />
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 