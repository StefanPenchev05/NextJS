import React from "react";
import style from "./styles.module.css";
import { type Tooltip } from "services/types/UIComponent";

const Tooltip: React.FC<Tooltip> = ({ className, ...rest }) => (
  <div className={style.tooltip}>
    {rest.children}
    <span className={`${style.tooltiptext} ${className}`}>{rest.text}</span>
  </div>
);

export default Tooltip;
