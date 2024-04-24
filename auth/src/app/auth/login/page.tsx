"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./style.css";

import Tooltip from "services/app/_components/Tooltip";
import TextInput from "services/app/_components/TextInput";
import Form from "services/app/_components/Form";
import CheckBox from "services/app/_components/CheckBox";

import { toObject } from "services/app/_lib/toObject";
import {
  checkEmailSchema,
  loginSchema,
} from "services/app/_lib/validationSchema";
import { useAppDispatch } from "services/app/hooks/useAppDispatch.hook";
import { createAlert } from "services/redux/actions/alert";

export default function page() {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [passwordError, setPasswordError] = useState<string | undefined>(
    undefined
  );
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [apiEndPoint, setApiEndPoint] = useState<"checkEmail" | "login">(
    "checkEmail"
  );

  const dispatch = useAppDispatch();

  function onErrorForm(error: unknown) {
    let statusCode: string = "500";
    if (error && Object.prototype.hasOwnProperty.call(error, "message")) {
      statusCode = (error as { status: string }).status;
    }
    if (apiEndPoint === "checkEmail") {
      switch (statusCode) {
        case "400":
          setEmailError("Invalid Email");
          break;
        case "404":
          setEmailError("User not found");
          break;
        default:
          dispatch(
            createAlert({
              show: true,
              message: "Server Error, try this again later",
              type: "error",
              horizontalPosition: "left",
              verticalPosition: "bottom",
              duration: 5000,
            })
          );
          break;
      }
    } else {
      switch (statusCode) {
        case "401":
          setPasswordError("Incorrect password");
        default:
          dispatch(
            createAlert({
              show: true,
              message: "Server Error, try this again later",
              type: "error",
              horizontalPosition: "left",
              verticalPosition: "bottom",
              duration: 5000,
            })
          );
      }
    }
  }

  function onSuccessForm(data: unknown) {
    if (apiEndPoint === "checkEmail") {
      setApiEndPoint("login");
    } else {
      console.log(data);
    }
  }

  function beforeSubmit(data: FormData): boolean {
    setEmailError(undefined);
    setPasswordError(undefined);

    let validation;
    if (apiEndPoint === "checkEmail") {
      const email = data.get("email");
      validation = checkEmailSchema.safeParse(email);
      if (!validation.success) {
        const emailError = validation.error.errors;
        emailError.forEach((error) => {
          setEmailError(error.message);
        });
        return false;
      }
    } else {
      validation = loginSchema.safeParse(toObject(data));
      if (!validation.success) {
        const errors = validation.error.errors;
        for (let error of errors) {
          if (error.path[0] === "password") {
            setPasswordError(error.message);
            break;
          }
        }
        return false;
      }
    }
    return true;
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
        api={`api/${apiEndPoint}`}
        buttonPlaceholder="Sign Up"
        buttonStyle="rounded-lg"
        onError={onErrorForm}
        onSuccess={onSuccessForm}
        beforeSubmit={beforeSubmit}
      >
        <TextInput
          type="email"
          name="email"
          error={emailError}
          clearError={() => setEmailError(undefined)}
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />

        {apiEndPoint === "login" && (
          <TextInput
            type="password"
            name="password"
            error={passwordError}
            clearError={() => setPasswordError(undefined)}
            placeholder="Password"
            value={password}
            setValue={setPassword}
          />
        )}

        <div className="w-full flex justify-between items-center h-auto">
          <CheckBox
            option="Remember Me"
            name="rememberMe"
            checked={rememberMe}
            setCheck={setRememberMe}
            labelClassName="text-base"
            inputClassName="w-8 h-8"
            className="w-1/2"
          />
          <p className="text-base underline text-[#603FEF] cursor-pointer">
            Forgot Password?
          </p>
        </div>
      </Form>
    </div>
  );
}
