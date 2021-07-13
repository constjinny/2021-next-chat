import React, { ReactElement } from "react";
import styled from "@emotion/styled";

import { Button } from "../button";

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
  const handleEnterKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.code === "Enter" && event.key === "Enter") {
      onSubmit();
    }
    return false;
  };

  return (
    <BoxStyle>
      <TextareaBoxStyle>
        <TextareaStyle
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          onKeyUp={(event) => handleEnterKeyDown(event)}
        />
      </TextareaBoxStyle>
      <ButtonBoxStyle>
        <Button onClick={onSubmit}>보내기</Button>
      </ButtonBoxStyle>
    </BoxStyle>
  );
}

Textarea.defaultProps = {
  value: "",
  placeholder: "내용을 작성해주세요.",
};

const BoxStyle = styled.div`
  border: 1px solid #999;
`;

const TextareaBoxStyle = styled.div`
  padding: 8px 10px;
`;

const TextareaStyle = styled.textarea`
  display: block;
  width: 100%;
  height: 80px;
  border: 0 none;
  outline: 0 none;
  resize: none;
`;

const ButtonBoxStyle = styled.div`
  overflow: hidden;
  padding: 8px 10px;
  background-color: #e4e4e4;
  border-top: 1px solid #999;
  > button {
    float: right;
  }
`;
