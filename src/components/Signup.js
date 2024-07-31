import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../Images/shoe.png';

function Signup() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      name: formData.get('name'),
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
      password_confirmation: formData.get('password_confirmation')
    };

    if (data.password !== data.password_confirmation) {
      setAlert('Passwords do not match');
      return;
    } else {
      setAlert(null);

      try {
        const response = await fetch('http://localhost:5000/api/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          navigate('/');
        } else {
          const errorResponse = await response.json();
          setAlert(errorResponse.message || 'Signup failed');
        }
      } catch (error) {
        console.error('Error:', error);
        setAlert('An error occurred');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-20 w-auto" src={Logo} alt="Logo" />
        <h2 className="mt-0 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Create a new account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-black max-w">
          Or {" "}
          <a href="/login" className="font-medium text-black focus:outline-none focus:underline transition ease-in-out duration-150">
            login to your account
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {alert && (
            <div className="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
              <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
              </svg>
              <span className="sr-only">Info</span>
              <div className="ml-3 text-sm font-medium">
                {alert}
              </div>
              <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" aria-label="Close" onClick={() => setAlert(null)}>
                <span className="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
              </button>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">Name</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input id="name" name="name" placeholder="John Doe" type="text" required
                       className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-black transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="username" className="block text-sm font-medium leading-5 text-gray-700">Username</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  @
                </span>
                <input id="username" name="username" placeholder="john" type="text" required
                       className="flex-1 border border-gray-300 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">Email address</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input id="email" name="email" placeholder="user@example.com" type="email" required
                       className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-black transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">Password</label>
              <div className="mt-1 rounded-md shadow-sm">
                <input id="password" name="password" type="password" required
                       className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-black transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="password_confirmation" className="block text-sm font-medium leading-5 text-gray-700">Confirm Password</label>
              <div className="mt-1 rounded-md shadow-sm">
                <input id="password_confirmation" name="password_confirmation" type="password" required
                       className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-black transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black focus:outline-none focus:border-black focus:shadow-outline-indigo active:bg-black transition duration-150 ease-in-out">
                  Create account
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
