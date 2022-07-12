import React, { FC } from "react";
import S from "./styled";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ children, styles, ...rest }) => {
  return <S.Button styles={styles} {...rest as any}>{children}</S.Button>;
};

export default Button;
