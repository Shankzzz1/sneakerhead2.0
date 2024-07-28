import React from 'react';
import Logo from '../Images/shoe.png';

function Signup() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-20 w-auto" src={Logo} alt="Workflow" />
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
            <form method="POST" action="http://localhost:5000/api/auth">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">Name</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input id="name" name="name"  placeholder="John Doe" type="text" required
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
    </>
  );
}

export default Signup;
