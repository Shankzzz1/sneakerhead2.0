import React, { useState } from 'react';
import axios from 'axios';

function Newpass() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/new-password", { newPassword });
      console.log('Response:', response.data);
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error:', error);
      setError('Error setting new password');
    }
  };

  return (
    <main id="content" role="main" className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white rounded-xl shadow-lg dark:bg-white dark:border-black border-2 border-black">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-black">Set New Password</h1>
            
          </div>

          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                <div>
                  <label htmlFor="new-password" className="block text-sm font-bold ml-1 mb-2 dark:text-black">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="new-password"
                      name="new-password"
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-black focus:ring-blue-500 shadow-sm"
                      required
                      aria-describedby="password-error"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block text-sm font-bold ml-1 mb-2 dark:text-black">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirm-password"
                      name="confirm-password"
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-black focus:ring-blue-500 shadow-sm"
                      required
                      aria-describedby="confirm-password-error"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <p className="hidden text-xs text-red-600 mt-2" id="confirm-password-error">
                    {error}
                  </p>
                </div>
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Set New Password
                </button>
              </div>
            </form>
            {message && (
              <div className="mt-4 text-center text-sm leading-5 text-green-600">
                {message}
              </div>
            )}
            {error && (
              <div className="mt-4 text-center text-sm leading-5 text-red-600">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">
        <a
          className="pr-3.5 inline-flex items-center gap-x-2 text-sm text-black decoration-2 hover:underline hover:text-black dark:text-black dark:hover:text-black"
          href="/"
          target="_blank"
        >
          View Github
        </a>
        <a
          className="pl-3 inline-flex items-center gap-x-2 text-sm text-black decoration-2 hover:underline hover:text-black dark:text-black dark:hover:text-black"
          href="/"
        >
          Contact us!
        </a>
      </p>
    </main>
  );
}

export default Newpass;
