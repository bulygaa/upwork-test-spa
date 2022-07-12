import React, { FC } from "react";
import S from "./styled";
import { InputProps } from "./types";

const Input: FC<InputProps> = ({ styles, ...rest }) => {
  return <S.Input styles={styles} {...rest as any} />;
};

export default Input;
