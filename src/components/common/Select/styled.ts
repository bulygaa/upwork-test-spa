import { convertStyles } from "helpers/convertStyles";
import styled from "styled-components";
import { SelectProps } from "./types";

const Select = styled.select<SelectProps>`
  padding: 10px 0;

  outline: none;

  ${({ styles }) => styles && convertStyles(styles)};
`;

const Option = styled.option``;

const S = {
  Select,
  Option,
};

export default S;
