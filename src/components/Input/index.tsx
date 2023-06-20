import React from "react";

import "./input.css";

const Input = ({
  type = "text",
  name = "",
  required = false,
  onChange,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input onChange={onChange} name={name} {...rest} type={type} required={required} />;
};

export default Input;
