import React, { useState } from "react";
import { Link } from "react-router-dom";
import Authpage from "./Authpage";
import bg from './bg.jpg'
import googlepng from './googlpng.png'

export default function Signup({isMobileView}) {
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
    validatepassword(value);
  };

  return (
    <>
      <div className={`signuppage flex justify-around ${isMobileView ?'flex-col items-center':''}`}>
        <div className="leftdesign my-4">
          <Authpage bg={bg} />
        </div>
        <div
          className={` my-4 flex flex-col items-center  ${isMobileView ?'w-3/4':'w-1/4'}`}
          style={{
            minHeight: "100vh",
          }}
        >
          <h1 className="text-3xl font-semibold my-4">Create Your account</h1>
          <form class="signupform w-full mt-5">
            <div class="mb-3 flex flex-col">
              <label for="name" class="flex text-xl font-medium text-gray-700">
                Email
              </label>
              <input
                type="mail"
                class="form-input border border-gray-400 border-opacity-60 block w-full h-10 text-lg mt-3 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:outline-none focus:border-blue-300"
                id="name"
                name="name"
                placeholder="  name@example.com"
                value={credentials.name}
                onChange={onChange}
                minLength={3}
                required
              />
            </div>

            <div class="mt-5 mb-3 flex flex-col">
              <label
                for="password"
                class="flex text-xl font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  class="form-input border border-gray-400 border-opacity-60 block w-full h-10 text-lg mt-3 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:outline-none focus:border-blue-300"
                  id="password"
                  name="password"
                  placeholder="  Password"
                  value={credentials.password}
                  onChange={onChange}
                  minLength={5}
                  pattern="^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$"
                  required
                />
                <button
                  onClick={togglePasswordVisibility}
                  className="absolute mt-1 top-1/2 right-2 transform -translate-y-1/2 cursor-pointer opacity-50"
                >
                  <i class="fa-solid fa-eye"></i>
                </button>
              </div>
              <span className="text-red-500 text-sm">{passwordValidation}</span>
            </div>
            <div class="mt-5 mb-3 flex flex-col">
              <label
                for="cpassword"
                class="flex text-xl font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  class="form-input border border-gray-400 border-opacity-60 block w-full h-10 text-lg mt-3 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:outline-none focus:border-blue-300"
                  id="cpassword"
                  name="cpassword"
                  placeholder="  confirm password "
                  value={credentials.cpassword}
                  onChange={onChange}
                />
                <button
                  onClick={togglePasswordVisibility}
                  className="absolute mt-1 top-1/2 right-2 transform -translate-y-1/2 cursor-pointer opacity-50"
                >
                  <i class="fa-solid fa-eye"></i>
                </button>
              </div>
            </div>

            <button
              type="submit"
              class={`btn block w-full mt-5 px-4 py-2 rounded-md bg-gradient-to-r from-blue-300 via-purple-500 to-blue-200 text-lg font-semibold hover:bg-blue-600`}
            >
              Signup
            </button>
          </form>{" "}
          <div className="my-5 w-full">
            <h3>
              If you already have an account,
              <Link className="mx-2 underline font-bold" to="/login">
                Login
              </Link>
            </h3>
            <div className="googleauth my-4">
              <h4 className="mt-5 font-semibold">OR CONTINUE WITH</h4>
              <div className="my-3 w-full h-0.5 bg-gray-400 opacity-70"></div>
              <button
                type="submit"
                class={`btn text-xl flex justify-center items-center w-full mt-1 px-4 py-2 bg-gradient-to-r from-blue-300 via-purple-500 to-blue-200 rounded-md bg-6b00d7-500  font-semibold hover:bg-blue-600`}
              >
                <span><img className="w-9" src={googlepng} alt="" /></span>Google
              </button>
              <p className=" my-4">
                By continuing you agree to our{" "}
                <span className="underline font-semibold cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="underline font-semibold cursor-pointer">Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
