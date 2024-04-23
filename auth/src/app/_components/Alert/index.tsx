import { useAppSelector } from "services/app/hooks/useAppSelector.hook";
import { RxCross2 } from "react-icons/rx";
import { GoAlert, GoCheckCircle } from "react-icons/go";



const Alert: React.FC = () => {
  const alert = useAppSelector((state) => state.alert);

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
    error: <RxCross2/>,
    warning: <GoAlert/>,
    success: <GoCheckCircle/>
  }[alert.type || "warning"]

  return (
    <div
      className={`flex absolute ${verticalPosition} ${horizontalPosition} shadow-xl`}
    >
     {alertIcon}
     <span>{alert.message}</span>
    </div>
  );
};

export default Alert;
