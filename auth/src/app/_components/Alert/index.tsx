"use client";
import { RxCross2 } from "react-icons/rx";
import { GoAlert, GoCheckCircle } from "react-icons/go";
import { useEffect } from "react";

import { useAppSelector } from "services/app/hooks/useAppSelector.hook";
import { useAppDispatch } from "services/app/hooks/useAppDispatch.hook";
import { clearAlert } from "services/redux/actions/alert";

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

  const alertIcon = {
    error: <RxCross2 />,
    warning: <GoAlert />,
    success: <GoCheckCircle />,
  }[alert.type || "warning"];

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
          className={`flex absolute ${verticalPosition} ${horizontalPosition} shadow-xl`}
        >
          {alertIcon}
          <span>{alert.message}</span>
        </div>
      )}
    </>
  );
};

export default Alert;
