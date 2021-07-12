import React, { ReactElement } from "react";
import styled from "@emotion/styled";

export interface TextareaProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => any;
  onSubmit: () => any;
}

export function Textarea({
  value,
  placeholder,
  onChange,
  onSubmit,
}: TextareaProps): ReactElement {
  const handleEnterKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter" && event.key === "Enter") {
      onSubmit();
    }
    return false;
  };

  return (
    <BoxStyle>
      <div>
        <TextareaStyle
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          // onKeyPress={(event) => handleEnterKeyDown(event)}
        />
      </div>
      <div>
        <button type="button">보내기</button>
      </div>
    </BoxStyle>
  );
}

Textarea.defaultProps = {
  value: "",
  placeholder: "",
};

const BoxStyle = styled.div`
  border: 1px solid #aaa;
`;

const TextareaStyle = styled.textarea``;
