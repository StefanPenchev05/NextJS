"use client";
import { RxCross2 } from "react-icons/rx";
import { GoAlert, GoCheckCircle } from "react-icons/go";
import React, { useEffect } from "react";

import { useAppSelector } from "services/app/hooks/useAppSelector.hook";
import { useAppDispatch } from "services/app/hooks/useAppDispatch.hook";
import { clearAlert } from "services/redux/actions/alert";

import style from './style.module.css'

const Alert: React.FC = () => {
  const alert = useAppSelector((state) => state.alert);
  const dispatch = useAppDispatch();

  const verticalPosition: string = {
    bottom: "bottom-0",
    top: "top-0",
    center: "justify-center items-center",
  }[alert.verticalPosition];

  const horizontalPosition: string = {
    right: "right-0",
    left: "left-0",
  }[alert.horizontalPosition];

  const verticalAnimation: string = {
    bottom: "slideInFromBottom 3s",
    top: "slideInFromTop 3s",
    center: "",
  }[alert.verticalPosition];
  
  const horizontalAnimation: string = {
    right: "slideInFromRight 3s",
    left: "slideInFromLeft 3s",
  }[alert.horizontalPosition];

  const alertIcon = {
    error: <RxCross2 className="w-6 h-6 bg-red-500 rounded-full" />,
    warning: <GoAlert className="w-6 h-6 object-cover bg-yellow-500 rounded-full"/>,
    success: <GoCheckCircle className="w-6 h-6 bg-green-500 rounded-full"/>,
  }[alert.type || "warning"];

  const alertStyles = {
    error: {
      backgroundColor: "bg-red-300",
      titleColor: "text-red-500",
      borderColor: "border-red-600",
    },
    warning: {
      backgroundColor: "bg-yellow-300",
      titleColor: "text-yellow-500",
      borderColor: "border-yellow-600",
    },
    success: {
      backgroundColor: "bg-green-300",
      titleColor: "text-green-500",
      borderColor: "border-green-600",
    },
  };

  const { backgroundColor, titleColor, borderColor } = alertStyles[alert.type];

  function toFirstLetterCapital(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  function onClose(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();
    dispatch(clearAlert());
  }

  useEffect(() => {
    if (alert.show) {
      setTimeout(() => {
        dispatch(clearAlert());
      }, alert.duration);
    }
  }, [alert.show]);

  return (
    <>
      {alert.show && (
        <div
          id="alert"
          className={`absolute p-4 border-b-2 ${borderColor} ${backgroundColor} ${verticalPosition} ${horizontalPosition}`}
          style={{animation: `${verticalAnimation}, ${horizontalAnimation}`}}
        >
          <div className="flex relative items-center">
            <div className="mr-4">{alertIcon}</div>
            <div className="text-gray-500">
              <p className={`${titleColor} font-semibold`}>
                {toFirstLetterCapital(alert.type)}
              </p>
              <p>{alert.message}</p>
            </div>
            <button className="absolute top-[-25px] right-[-25px] bg-white rounded-full p-2" onClick={onClose}>
              <RxCross2 className="text-red-500"/>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
