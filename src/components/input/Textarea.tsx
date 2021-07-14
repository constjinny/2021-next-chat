import React, { ReactElement, useCallback } from "react";
import styled from "@emotion/styled";
import colors from "@constants/colors";
import { debounce } from "lodash";

import { Button } from "@components/button";

export interface ITextareaProps {
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
}: ITextareaProps): ReactElement {
  const handleEnterKeyDown = debounce(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.code === "Enter" && event.key === "Enter") {
        onSubmit();
      }
      return false;
    },
    200
  );

  return (
    <BoxStyle>
      <TextareaBoxStyle>
        <TextareaStyle
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => handleEnterKeyDown(event)}
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
  border: 1px solid ${colors.gray};
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
  background-color: ${colors.white2};
  border-top: 1px solid ${colors.gray};
  > button {
    float: right;
  }
`;
