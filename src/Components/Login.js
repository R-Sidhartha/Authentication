import React, { useState } from "react";
import { Link } from "react-router-dom";
import Authpage from "./Authpage";
import bg from './bg.jpg'
export default function Login({isMobileView}) {
  const [credentials, setcredentials] = useState({
    Email: "",
    password: "",
  });
//   const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false);

const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};
  const onChange = (e) => {
    setcredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
 

  return (
    <>
    <div className={`signuppage flex justify-around ${isMobileView ?'flex-col items-center':''}`}>
    <div className="leftdesign my-4">
      <Authpage  bg={bg} />
    </div>
    <div
          className={` my-4 flex flex-col items-center ${isMobileView ?'w-3/4':'w-1/4'}`}
        >
          <h1 className="text-4xl my-4">Login to Your account</h1>
          <form class="w-full">
            <div class="mb-3 flex flex-col mt-5">
              <label for="name" class="flex text-xl font-medium text-gray-700">
                Email:
              </label>
              <input
                type="mail"
                class="form-input border border-gray-400 block w-full h-10 text-lg mt-3 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:outline-none focus:border-blue-300"
                id="name"
                name="name"
                value={credentials.name}
                onChange={onChange}
                minLength={3}
                required
              />
            </div>

            <div class="mb-3 flex flex-col">
              <label
                for="password"
                class="flex text-xl font-medium text-gray-700"
              >
                Password:
              </label>
              <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                class="form-input border border-gray-400 block w-full h-10 text-lg mt-3 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:outline-none focus:border-blue-300"
                id="password"
                name="password"
                value={credentials.password}
                onChange={onChange}
                minLength={5}
                required
              />
              <button
                onClick={togglePasswordVisibility}
                className="absolute mt-1 top-1/2 right-2 transform -translate-y-1/2 cursor-pointer opacity-50"
              ><i class="fa-solid fa-eye"></i></button>
              </div>
            </div>

            <button
              type="submit"
              class={`btn block w-full mt-5 px-4 py-2 rounded-md bg-gradient-to-r from-blue-400 via-purple-500 to-blue-200 text-lg font-semibold hover:bg-blue-600`}
            >
              Login
            </button>
          </form>{" "}
          <div className="my-5 w-full">
            <h3>
              If you don't have an account, Sigup using
              <Link className="mx-2 underline font-bold" to="/">
                Signup
              </Link>
            </h3>
            <div className="googleauth my-4">
              <h4 className="my-5">OR CONTINUE WITH</h4>
              <button
                type="submit"
                class={`btn text-xl block w-full mt-1 px-4 py-2 rounded-md bg-gradient-to-r from-blue-400 via-purple-500 to-blue-200  font-semibold hover:bg-blue-600`}
              >
                Google
              </button>
              <p className=" my-4">By continuing you agree to our <span className="underline font-semibold cursor-pointer">Terms of Service</span> and <span className="underline font-semibold cursor-pointer">Privacy Policy</span></p>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}
