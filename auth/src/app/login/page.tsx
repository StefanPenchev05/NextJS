import React from "react";
import Link from "next/link";
import "./style.css";

function page() {
  return (
    <div className=" flex flex-col justify-between space-y-6 bg-[#222229] rounded-xl w-1/3 h-1/2 p-8">
      <div className="space-y-2 w-full">
        <div className="flex justify-between">
          <Link href="/">
            <div className="tooltip">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="white"
                viewBox="0 0 24 24"
                id="home"
              >
                <path
                  fillRule="evenodd"
                  d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="tooltip-data">Home</span>
            </div>
          </Link>

          <p className="text-4xl font-bold italic text-orange-500">Log In</p>
        </div>
        <hr />
      </div>
      <div className="space-y-4">
        <input id="input" type="email" placeholder="Enter your email" />
        <input id="input" type="password" placeholder="Enter your password" />
      </div>
    </div>
  );
}

export default page;
