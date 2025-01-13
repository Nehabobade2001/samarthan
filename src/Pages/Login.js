
import React, { useState } from "react";
// import loginimage from "../assets/rotate-cointex-1.png";
// import man from "../assets/loginbg.png";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const [captchaValid, setCaptchaValid] = useState(false);

  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaValid(true);
    } else {
      setCaptchaValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValid) {
      alert("Please verify you are not a robot.");
      return;
    }
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#050E2B] to-[#151E3F] text-white px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl items-center mx-auto bg-transparent">
        {/* Left Section */}
        <div className="hidden lg:flex flex-1 items-center justify-center relative ">
          {/* <img src={man} alt="Background Illustration" className="w-3/4 md:w-2/3 lg:w-full z-10" />
          <img
            src={loginimage}
            alt="Rotating Illustration"
            className="absolute w-1/2 md:w-2/3 lg:w-[40rem] bottom-0 md:bottom-[10%] left-[-5%] opacity-50 pointer-events-none z-0 animate-spin"
            style={{
              animation: "spin 60s linear infinite",
            }}
          /> */}
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-[#1D2333] rounded-lg shadow-lg p-6 md:p-12 space-y-6 w-full lg:w-auto">
          <h1 className="text-3xl font-bold text-white text-center lg:text-left">Welcome to AI World</h1>
          <p className="text-sm text-gray-400 text-center lg:text-left">
            To keep connected with us, please login with your personal information
            by user ID and password.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-300 text-sm mb-1">
                Email / User Name
              </label>
              <input
                type="email"
                placeholder="Enter Email / Register ID"
                className="w-full px-4 py-2 rounded-md bg-[#252D40] text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-2 rounded-md bg-[#252D40] text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your actual site key
                onChange={handleCaptchaChange}
                className="my-4"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md text-white font-semibold hover:opacity-90 transition"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center text-gray-400">
            Don't Have an Account?{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
