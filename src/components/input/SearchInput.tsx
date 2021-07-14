import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import colors from "@constants/colors";

export interface ISearchInputProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => any;
}

export function SearchInput({
  value,
  placeholder,
  onChange,
}: ISearchInputProps): ReactElement {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

  return (
    <LabelStyle htmlFor="searchInput">
      {searchIcon}
      <InputStyle
        id="searchInput"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </LabelStyle>
  );
}

SearchInput.defaultProps = {
  value: "",
  placeholder: "",
};

const LabelStyle = styled.label`
  display: flex;
  width: 100%;
  padding: 10px 20px;
  border: 1px solid ${colors.gray};
  border-radius: 30px;
  svg {
    font-size: 18px;
    color: ${colors.gray};
    margin-top: 1px;
  }
`;

const InputStyle = styled.input`
  display: block;
  width: 100%;
  height: 20px;
  margin-left: 10px;
`;
