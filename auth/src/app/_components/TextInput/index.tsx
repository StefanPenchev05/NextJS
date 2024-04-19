"use client";
import React, { useState } from "react";
import style from "./style.module.css";

type TextInput = {
  type: string;
  name: string;
  placeholder: string;
  value:string | undefined;
  setValue: (value: string) => void;
  inputStyle?: string;
  inputTitleStyle?: string;
};

const TextInput: React.FC<TextInput> = ({ setValue, value = '', ...rest }) => {
  const [onFocus, setOnFocus] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string | undefined>(rest.placeholder);

  const handleOnFocus = () => {
    setOnFocus(true);
    setPlaceholder(undefined);
  }
  
  const handleOnBlur = () => {
    if(!value){
      setOnFocus(false);
    }
    setPlaceholder(rest.placeholder);
  }

  const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={style.textInputDiv}>
      <input
        id="input"
        name={rest.name}
        type={rest.type}
        placeholder={placeholder}
        className={style.textInput}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={(e) => setValue(e.target.value)}
        value={value}
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
