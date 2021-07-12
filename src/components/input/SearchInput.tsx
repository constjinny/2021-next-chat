import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export interface SearchInputProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => any;
}

export function SearchInput({
  value,
  placeholder,
  onChange,
}: SearchInputProps): ReactElement {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

  return (
    <LabelStyle htmlFor="searchInput">
      {searchIcon}
      <input
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
  display: block;
  border: 1px solid #aaa;
`;
