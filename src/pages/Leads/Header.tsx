import Button from "components/common/Button";
import Typography from "components/common/Typography";
import { useEmailsContext } from "hooks/useEmailsContext";
import { useUserContext } from "hooks/useUserContext";
import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import S from "./styled";

const Header: FC = () => {
  const { setEditable, pendingEmail } = useEmailsContext();
  const { logout } = useUserContext();
  const navigate = useNavigate();

  const [timer, setTimer] = useState<number>(120);

  useEffect(() => {
    if (!pendingEmail) return;
    let interval: NodeJS.Timer | null = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (!interval && !timer) {
      setEditable(false);
    }
    return () => clearInterval(interval as NodeJS.Timer);
  }, [timer, setEditable, pendingEmail]);

  return (
    <S.HeaderWrapper>
      <Typography>{pendingEmail && `${timer} seconds left`}</Typography>
      <S.HeaderActionsContainer>
        <Button onClick={() => navigate("/overview")}>OVERVIEW PAGE</Button>
        <Button
          onClick={logout}
          styles={{
            backgroundColor: "#c4c4c4",
            color: "#fff",
            marginLeft: "10px",
          }}
        >
          Exit
        </Button>
      </S.HeaderActionsContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
