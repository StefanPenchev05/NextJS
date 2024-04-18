"use client";
import React, { useState } from "react";
import style from "./style.module.css";

type TextInput = {
  type: string;
  placeholder: string;
  inputStyle?: string;
  inputTitleStyle?: string;
};

const TextInput: React.FC<TextInput> = ({ ...rest }) => {
  const [onFocus, setOnFocus] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string | undefined>(rest.placeholder);

  const handleOnFocus = () => {
    setOnFocus(true);
    setPlaceholder(undefined);
  }
  
  const handleOnBlur = () => {
    setOnFocus(false);
    setPlaceholder(rest.placeholder);
  }

  const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={style.textInputDiv}>
      <input
        id="input"
        type={rest.type}
        placeholder={placeholder}
        className={style.textInput}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      {onFocus && (
        <span className={style.textInputTitle}>
          {capitalizeFirstLetter(rest.type)}
        </span>
      )}
    </div>
  );
};

export default TextInput;
