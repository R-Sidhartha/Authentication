import React, { useState } from "react";
import { Link } from "react-router-dom";
import Authpage from "./Authpage";
import googlepng from "./googlpng.png";
import logo from './logo.png'

export default function Signup({ isMobileView }) {
  const [credentials, setcredentials] = useState({
    Email: "",
    cpassword: "",
    password: "",
  });

  //   const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [passwordValidation, setpasswordValidation] = useState("");

  const validatepassword = (password) => {
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    if (passwordPattern.test(password)) {
      setpasswordValidation(""); // Email is valid, clear any previous validation message
    } else {
      setpasswordValidation(
        "Password length should be 8 and must contain one uppercase, one number and one symbol"
      );
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setcredentials({
      ...credentials,
      [name]: value,
    });
    if (name === "password") {
      validatepassword(value);
    }
  };

  return (
    <>
      <div
        className={`min-h-screen signuppage flex-row-reverse justify-around flex  ${
          isMobileView ? "flex-col-reverse items-center" : ""
        }`}
      >
        <div
          className={` my-4 ${
            isMobileView ? "invisible" : "w-3/5"
          } mx-3 flex justify-center  items-cente bg-gradient-to-r from-blue-300 via-purple-500 to-blue-200 `}
        >
          <Authpage />
        </div>
        <div
          className={` flex flex-col items-center mx-10 ${ 
            isMobileView ? "w-3/4 mt-2" : "w-2/5  my-4"
          }`}
        >
            <div className={`flex ${isMobileView ? 'w-screen':'w-full '} items-center`}>
            <span className="w-1/6"><img className="w-20" src={logo} alt="" /></span><h1 className={`text-2xl font-semibold w-2/3 ${isMobileView ?'mx-1':''}`}>Create Your Account</h1></div>
          <div className={`${isMobileView ? 'w-full':'w-3/4'} mt-5`}>
          
            <form class=" w-full ">
              <div class="mb-3 flex flex-col">
                <label
                  for="name"
                  class="flex font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="mail"
                  class="form-input px-1 border border-gray-400 border-opacity-60 block w-full h-9 mt-3 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:outline-none focus:border-blue-300 text-sm"
                  id="name"
                  name="name"
                  placeholder="name@domain.com"
                  value={credentials.name}
                  onChange={onChange}
                  minLength={3}
                  required
                />
              </div>

              <div class="mt-5 mb-3 flex flex-col">
                <label
                  for="password"
                  class="flex font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    class="form-input border border-gray-400 border-opacity-60 block w-full h-9  px-1 mt-3 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:outline-none focus:border-blue-300 text-sm"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={onChange}
                    minLength={5}
                    pattern="^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$"
                    required
                  />
                  <button
                    onClick={togglePasswordVisibility}
                    className="absolute mt-1 top-1/2 right-2 transform -translate-y-1/2 cursor-pointer opacity-40 hover:opacity-70"
                  >
                    <i class="fa-solid fa-eye"></i>
                  </button>
                </div>
                <span className="text-red-500 text-sm mt-2">
                  {passwordValidation}
                </span>
              </div>
              <div class="mt-5 mb-3 flex flex-col">
                <label
                  for="cpassword"
                  class="flex font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    class="form-input border border-gray-400 border-opacity-60 block w-full h-9 px-1 mt-3 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:outline-none focus:border-blue-300 text-sm"
                    id="cpassword"
                    name="cpassword"
                    placeholder="Confirm Password "
                    value={credentials.cpassword}
                    onChange={onChange}
                  />
                  <button
                    onClick={togglePasswordVisibility}
                    className="absolute mt-1 top-1/2 right-2 transform -translate-y-1/2 cursor-pointer opacity-40 hover:opacity-70"
                  >
                    <i class="fa-solid fa-eye"></i>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                class={`btn block w-full mt-7 px-4 py-2 rounded-md bg-gradient-to-r from-blue-300 via-purple-500 to-blue-200 font-semibold hover:opacity-90 text-lg`}
              >
                Signup
              </button>
            </form>{" "}
            <div className="my-5 w-full">
              <h3>
                If you already have an account,
                <Link className="mx-2 underline font-bold hover:opacity-70" to="/login">
                  Login
                </Link>
              </h3>
              <div className="googleauth my-4">
                <div className="flex justify-center items-center mt-8">
                  <span className="w-1/4 mr-2 h-0.5 bg-gray-400 opacity-70"></span>
                  <p className=" text-sm font-semibold"> OR CONTINUE WITH </p>
                  <span className=" w-1/4 ml-2 h-0.5 bg-gray-400 opacity-70"></span>
                </div>
                <button
                  type="submit"
                  class={`btn text-lg flex justify-center items-center w-full mt-5 px-4 py-2 bg-gradient-to-r from-blue-300 via-purple-500 to-blue-200 rounded-md bg-6b00d7-500  font-semibold hover:opacity-90`}
                >
                  <span>
                    <img className="w-8" src={googlepng} alt="" />
                  </span>
                  Google
                </button>
                <p className=" my-4">
                  By continuing you agree to our{" "}
                  <span className="underline font-semibold cursor-pointer hover:opacity-70">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="underline font-semibold cursor-pointer hover:opacity-70">
                    Privacy Policy
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
