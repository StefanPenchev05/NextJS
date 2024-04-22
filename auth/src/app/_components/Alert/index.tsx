import { useAppSelector } from "services/app/hooks/useAppSelector.hook";

const Alert: React.FC = () => {
  const alert = useAppSelector((state) => state.alert);

  const verticalPosition: string = {
    bottom: "bottom-0",
    top: "top-0",
    center: "flex justify-center items-center",
  }[alert.verticalPosition];

  const horizontalPosition: string = {
    right: "right-0",
    left: "left-0",
  }[alert.horizontalPosition];

  return (
    <div
      className={`absolute ${verticalPosition} ${horizontalPosition} `}
    ></div>
  );
};

export default Alert;
