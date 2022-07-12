import React, { FC } from "react";
import S from "./styled";

interface Props {
  children: React.ReactNode;
  header?: React.ReactNode;
}

const Wrapper: FC<Props> = ({ children, header }) => {
  return (
    <S.Wrapper>
      {header && <S.Header>{header}</S.Header>}
      {children}
    </S.Wrapper>
  );
};

export default Wrapper;
