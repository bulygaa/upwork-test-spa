import { convertStyles } from "helpers/convertStyles";
import styled from "styled-components";
import { TypographyProps } from "./types";

const Typography = styled.p<TypographyProps>`
  ${({ styles }) => styles && convertStyles(styles)};
  ${({ color }) => `
    color: ${color || '#000'};
  `}
`;

const S = {
  Typography,
};

export default S;
