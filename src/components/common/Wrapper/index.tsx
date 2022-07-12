import React, { FC } from "react";
import S from "./styled";

interface Props {
  children: React.ReactNode;
}

const Wrapper: FC<Props> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Wrapper;
