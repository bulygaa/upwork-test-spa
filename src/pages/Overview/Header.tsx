import Button from "components/common/Button";
import Typography from "components/common/Typography";
import { useDatabase } from "hooks/useDatabase";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import S from "./styled";

const Header: FC = () => {
  const navigate = useNavigate();
  const { resetDatabase } = useDatabase();

  const resetAppHandler = () => {
    resetDatabase();
    navigate("/login");
  };

  return (
    <S.HeaderWrapper>
      <Button styles={{ backgroundColor: "#b17272" }} onClick={resetAppHandler}>
        RESET APPLICATION
      </Button>
      <Typography>OVERVIEW PAGE</Typography>
      <Button
        styles={{ backgroundColor: "#c4c4c4" }}
        onClick={() => navigate(-1)}
      >
        BACK
      </Button>
    </S.HeaderWrapper>
  );
};

export default Header;
