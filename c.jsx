import React, { useState } from "react";

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [aadhaar, setAadhaar] = useState("");

  const handleOtpLogin = () => {
    alert(`OTP sent to ${mobile}`);
  };

  const handleAadhaarLogin = () => {
    alert(`Aadhaar OTP sent for ${aadhaar}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">SAATHI</h1>
        <p className="text-center text-gray-500 mb-8">Simplifying Access to Approvals</p>

        {/* Mobile/Email OTP */}
        <label className="block mb-2 text-sm font-medium text-gray-700">Mobile / Email</label>
        <input 
          type="text" 
          placeholder="Enter Mobile or Email"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 mb-4"
        />
        <button 
          onClick={handleOtpLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get OTP
        </button>

        <div className="text-center my-4 text-gray-500">OR</div>

        {/* Aadhaar OTP */}
        <label className="block mb-2 text-sm font-medium text-gray-700">Aadhaar Number</label>
        <input 
          type="text" 
          placeholder="Enter Aadhaar (XXXX-XXXX-XXXX)"
          value={aadhaar}
          onChange={(e) => setAadhaar(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 mb-4"
        />
        <button 
          onClick={handleAadhaarLogin}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Login with Aadhaar OTP
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account? <a href="#" className="text-blue-600 hover:underline">Register</a>
        </p>

        <div className="mt-4 flex justify-center space-x-3">
          <button className="px-3 py-1 border rounded text-sm">English</button>
          <button className="px-3 py-1 border rounded text-sm">हिन्दी</button>
          <button className="px-3 py-1 border rounded text-sm">मराठी</button>
        </div>
      </div>

      {/* Chatbot */}
      <button className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700">
        💬
      </button>
    </div>
  );
}
