import Typography from "components/common/Typography";
import Wrapper from "components/common/Wrapper";
import React from "react";
import S from "./styled";

const NotFound = () => {
  return (
    <Wrapper>
      <S.Container>
        <Typography styles={{ fontSize: "2rem" }}>Not Found!</Typography>
      </S.Container>
    </Wrapper>
  );
};

export default NotFound;
