import React, { useState } from "react";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <>
      <div className="contact mt-[70px]">
        <div className="container mx-auto px-4 flex justify-center items-center flex-col">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] uppercase my-8 text-center">
            contact section
          </h1>

          <div className="shape mb-6 flex justify-between items-center">
            <div className="line h-1 w-16 bg-[#2C3E50] mx-3"></div>
            <i className="fa-solid fa-star text-[#2C3E50]"></i>
            <div className="line h-1 w-16 bg-[#2C3E50] mx-3"></div>
          </div>

          <div className="w-full max-w-2xl mx-auto m-10 mb-50">
            {/* userName */}
            <div className="relative mb-10">
              <input
                id="userName"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-4 rounded-lg border-b border-gray-400 focus:outline-none focus:border-[#1abc9c]"
              />
              <label
                htmlFor="userName"
                className={`absolute left-2 cursor-text text-gray-500 transition-all duration-300 ${
                  userName.length > 0
                    ? "-top-3 text-lg text-teal-500 font-semibold"
                    : "top-3 text-lg"
                }`}
              >
                userName
              </label>
            </div>

            {/* userAge */}
            <div className="relative mb-10">
              <input
                id="userAge"
                type="number"
                value={userAge}
                onChange={(e) => setUserAge(e.target.value)}
                className="w-full px-4 py-4 rounded-lg border-b border-gray-400 focus:outline-none focus:border-[#1abc9c]"
              />
              <label
                htmlFor="userAge"
                className={`absolute left-2 cursor-text text-gray-500 transition-all duration-300 ${
                  userAge.length > 0
                    ? "-top-3 text-lg text-teal-500 font-semibold"
                    : "top-3 text-lg"
                }`}
              >
                userAge
              </label>
            </div>

            {/* userEmail */}
            <div className="relative mb-10">
              <input
                id="userEmail"
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full px-4 py-4 rounded-lg border-b border-gray-400 focus:outline-none focus:border-[#1abc9c]"
              />
              <label
                htmlFor="userEmail"
                className={`absolute left-2 text-gray-500 cursor-text transition-all duration-300 ${
                  userEmail.length > 0
                    ? "-top-3 text-lg text-teal-500 font-semibold"
                    : "top-3 text-lg"
                }`}
              >
                userEmail
              </label>
            </div>

            {/* userPassword */}
            <div className="relative mb-10">
              <input
                id="userPassword"
                type="password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                className="w-full px-4 py-4 rounded-lg border-b border-gray-400 focus:outline-none focus:border-[#1abc9c]"
              />
              <label
                htmlFor="userPassword"
                className={`absolute left-2 cursor-text text-gray-500 transition-all duration-300 ${
                  userPassword.length > 0
                    ? "-top-3 text-lg text-teal-500 font-semibold"
                    : "top-3 text-lg"
                }`}
              >
                userPassword
              </label>
            </div>

            <button className="bg-[#1ABC9C] hover:bg-[#16a085] text-white font-semibold my-5 py-4 px-8 rounded-lg w-full sm:w-auto">
              send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
