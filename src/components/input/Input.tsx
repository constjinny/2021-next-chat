import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import colors from "@constants/colors";

export interface IInputProps {
  id: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => any;
}

export function Input({
  id,
  type,
  value,
  placeholder,
  onChange,
}: IInputProps): ReactElement {
  return (
    <LabelStyle htmlFor={id}>
      <InputStyle
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </LabelStyle>
  );
}

Input.defaultProps = {
  type: "text",
  value: "",
  placeholder: "",
};

const LabelStyle = styled.label`
  display: flex;
  width: 100%;
  padding: 10px 20px;
  border: 1px solid ${colors.gray};
  border-radius: 30px;
  box-sizing: border-box;
`;

const InputStyle = styled.input`
  display: block;
  width: 100%;
  height: 20px;
  margin-left: 10px;
`;
