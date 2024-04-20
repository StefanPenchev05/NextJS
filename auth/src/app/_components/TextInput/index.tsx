"use client";
import React, { useState, useEffect } from "react";
import style from "./style.module.css";

import { type TextInput } from "services/types/UIComponent";

const TextInput: React.FC<TextInput> = ({ setValue, value = "", ...rest }) => {
  const [onFocus, setOnFocus] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string | undefined>(
    rest.placeholder
  );

  const handleOnFocus = () => {
    setOnFocus(true);
    setPlaceholder(undefined);
  };

  const handleOnBlur = () => {
    setTimeout(() => {
      if (!value) {
        setOnFocus(false);
        setPlaceholder(rest.placeholder);
      }
    }, 100);
  };

  const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    if (!value) {
      rest.clearError && rest.clearError();
    }
  }, [value]);

  return (
    <>
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
          <span className={`${style.textInputTitle} ${value ? style.hasValue : ""}`}>
            {capitalizeFirstLetter(rest.type)}
          </span>
        )}
      </div>
      {rest.error && (
        <span className="text-red-700 pl-6 text-sm">{rest.error}</span>
      )}
    </>
  );
};

export default TextInput;
