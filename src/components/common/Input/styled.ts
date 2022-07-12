import { convertStyles } from "helpers/convertStyles";
import styled from "styled-components";
import { InputProps } from "./types";

const Input = styled.input<InputProps>`
  width: 100%;

  border: none;
  border-bottom: 1px solid #979797 ;

  outline: none;

  font-size: 1rem;

  ${({styles}) => styles && convertStyles(styles)};
`;

const S = {
  Input,
};

export default S;
