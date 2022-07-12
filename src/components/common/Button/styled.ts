import { convertStyles } from "helpers/convertStyles";
import styled from "styled-components";
import { ButtonProps } from "./types";

const Button = styled.button<ButtonProps>`
  color: #fff;

  background-color: #000;

  color: #fff;

  padding: 10px 30px;

  border: none;
  border-radius: 100px;

  cursor: pointer;

  font-weight: 600;

  display: block;

  ${({ styles }) => styles && convertStyles(styles)}
`;

const S = {
  Button,
};

export default S;
