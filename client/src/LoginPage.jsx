import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useLoginMutation } from "./slices/usersApiSlice";
import { login } from "./slices/authSlice";

const LoginPage = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginMutation, { isLoading }] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/create-listing");
    }
  }, [navigate, userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(async (dispatch) => {
      try {
        const res = await loginMutation({ email, password }).unwrap();
        dispatch(login(res));
        navigate("/create-listing");
      } catch (err) {
        console.error(err?.data?.message || err.message);
        setError("Invalid email or password");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Login
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600"></p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && <div className="text-red-500 text-left mb-4">{error}</div>}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Facebook</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2C5.59 2 2 5.59 2 10c0 4.41 3.59 8 8 8 4.41 0 8-3.59 8-8 0-4.41-3.59-8-8-8zM6.91 5H9v3H7V9h1V8.11C8 7.31 8.45 7 9 7h1v2h-1v6H9v-6h-.57C7.8 9 7 9.84 7 11v1H6v-1c0-1.65 1.35-3 3-3h1V7H9c-.55 0-1 .45-1 1v1H7V6.91c-.28-.06-.56-.09-.09-.09z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Twitter</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2C5.59 2 2 5.59 2 10c0 4.41 3.59 8 8 8 4.41 0 8-3.59 8-8 0-4.41-3.59-8-8-8zM15.8 8.69c.01.15.01.29.01.43 0 4.48-3.41 9.65-9.65 9.65-1.91 0-3.68-.56-5.17-1.53.28 0 .56.01.85.01 1.64 0 3.15-.56 4.35-1.5-1.53 0-2.82-1.03-3.27-2.41.21 0 .42.01.64.01.31 0 .61-.05.89-.14-1.56-.31-2.73-1.69-2.73-3.34 0-.01 0-.03 0-.04.46.26.98.41 1.54.43-.91-.61-1.52-1.66-1.52-2.84 0-.62.17-1.2.47-1.7 1.71 2.09 4.26 3.47 7.13 3.62-.06-.26-.09-.53-.09-.81 0-1.97 1.59-3.56 3.56-3.56 1.02 0 1.94.43 2.59 1.12.81-.16 1.58-.45 2.27-.85-.27.83-.83 1.52-1.56 1.96.72-.09 1.41-.28 2.06-.56-.48.71-1.08 1.34-1.77 1.85z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with GitHub</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2C5.59 2 2 5.59 2 10c0 4.41 3.59 8 8 8 4.41 0 8-3.59 8-8 0-4.41-3.59-8-8-8zm1.24 14.24h-.02c-2.19.49-3.48-.99-3.48-2.29l-.01-.26c.03-.89.37-1.37.77-1.68-.09-.24-.34-1.14.06-2.37 0 0 .76-.24 2.48.92.72-.2 1.49-.3 2.26-.3.77 0 1.54.1 2.26.3 1.72-1.16 2.48-.92 2.48-.92.4 1.23.15 2.13.06 2.37.41.31.74.79.77 1.68 0 1.3-1.29 2.78-3.48 2.29zm-1.24-7.24c-1.15 0-2.08.93-2.08 2.08s.93 2.08 2.08 2.08 2.08-.93 2.08-2.08-.93-2.08-2.08-2.08zM10 4c-.45 0-.87.08-1.27.24-.38.16-.73.39-1.03.68-.3.3-.53.65-.69 1.03-.16.4-.24.82-.24 1.27s.08.87.24 1.27c.16.38.39.73.68 1.03.3.3.65.53 1.03.69.4.16.82.24 1.27.24s.87-.08 1.27-.24c.38-.16.73-.39 1.03-.69.3-.3.53-.65.69-1.03.16-.4.24-.82.24-1.27s-.08-.87-.24-1.27c-.16-.38-.39-.73-.69-1.03-.3-.3-.65-.53-1.03-.68-.4-.16-.82-.24-1.27-.24z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
