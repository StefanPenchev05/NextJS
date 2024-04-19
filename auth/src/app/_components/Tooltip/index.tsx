import React from "react";
import style from "./styles.module.css";

type TooltipProp = {
  children: React.ReactNode;
  text: string;
  className?: string;
};

const Tooltip: React.FC<TooltipProp> = ({ className, ...rest }) => (
  <div className={style.tooltip}>
    {rest.children}
    <span className={`${style.tooltiptext} ${className}`}>{rest.text}</span>
  </div>
);

export default Tooltip;
