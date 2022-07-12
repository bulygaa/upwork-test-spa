import React, { FC } from "react";
import S from "./styled";
import { TypographyProps } from "./types";

const Typography: FC<TypographyProps> = ({ children, ...rest }) => {
  return <S.Typography {...rest}>{children}</S.Typography>;
};

export default Typography;
