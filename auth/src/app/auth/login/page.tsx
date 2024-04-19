"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./style.css";

import Tooltip from "services/app/_components/Tooltip";
import TextInput from "services/app/_components/TextInput";
import Form from "services/app/_components/Form";

export default function page() {
  const [email, setEmail] = useState<string | undefined>(undefined);

  function onErrorForm(error: any){
    const statusCode = error && error.message;
    switch(statusCode){
      case "400":
        console.log("Invalid Email");
        break;
      case "404":
        console.log("User not found")
        break;
      default: 
        console.log("Server Error")
        break;
    }
  }

  return (
    <div className=" flex flex-col space-y-6 bg-[#222229] rounded-xl w-1/3 h-1/2 p-8">
      <div className="space-y-2 w-full">
        <div className="flex items-center">
          <Link href="/" className="grow">
            <Tooltip text="Home">
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
            </Tooltip>
          </Link>
          <p className="text-4xl font-bold italic text-orange-500 grow">
            Log In
          </p>
        </div>
        <hr />
      </div>
      <Form
        api="api/checkEmail"
        buttonPlaceholder="Sign Up"
        buttonStyle="rounded-lg"
        onError={onErrorForm}
        onSuccess={(data) => console.log(data)}
      >
        <TextInput
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={email}
          setValue={setEmail}
        />
      </Form>
    </div>
  );
}
