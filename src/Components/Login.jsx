import React from "react";
import { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    const validEmail = "123";
    const validPassword = "123";

    if (email === validEmail && password === validPassword) {
      onLogin();
      navigate("/home");
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <>
      <div className="h-screen  ">
        <div className={`text-gray-700 `}>
          <div className="flex flex-col items-center justify-center px-9 py-8 mx-auto md:h-screen lg:py-0">
            <span className="flex items-center mb-6 text-2xl font-semibold text-white ">
              Login&nbsp;
              <AiOutlineLogin className="" />
            </span>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Let's Start
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Email Id
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={handleLogin}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-white-700 dark:focus:ring-blue-800"
                    >
                      Log in
                    </button>
                  </div>
                  {errorMessage && (
                    <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                  )}

                  <p className="text-sm font-light  ">
                    Forgot Password?{" "}
                    <a href="/login" className="font-medium ">
                      Click here
                    </a>
                  </p>

                  <p className="text-sm font-light mt-2 ">
                    New here?{" "}
                    <NavLink to="/signup" className="font-bold text-blue-500">
                      Lets Signup
                    </NavLink>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
