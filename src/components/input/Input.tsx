import React, { ReactElement } from "react";
import styled from "@emotion/styled";

export interface InputProps {
  type: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => any;
}

export function Input({
  type,
  value,
  placeholder,
  onChange,
}: InputProps): ReactElement {
  return (
    <InputStyle
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

Input.defaultProps = {
  type: "text",
  value: "",
  placeholder: "",
};

const InputStyle = styled.input`
  display: block;
  border: 1px solid #aaa;
`;
