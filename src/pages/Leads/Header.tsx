import Button from "components/common/Button";
import Typography from "components/common/Typography";
import { useLeadsContext } from "hooks/useLeadsContext";
import { useUserContext } from "hooks/useUserContext";
import React, { FC, useEffect, useState } from "react";
import S from "./styled";

const Header: FC = () => {
  const { setEditable, pendingLead } = useLeadsContext();
  const { logout } = useUserContext();

  const [timer, setTimer] = useState<number>(120);

  useEffect(() => {
    if (!pendingLead) return;
    let interval: NodeJS.Timer | null = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (!interval && !timer) {
      setEditable(false);
    }
    return () => clearInterval(interval as NodeJS.Timer);
  }, [timer, setEditable, pendingLead]);

  return (
    <S.HeaderWrapper>
      <Typography>{pendingLead && `${timer} seconds left`}</Typography>
      <Button
        onClick={logout}
        styles={{ backgroundColor: "#c4c4c4", color: "#fff" }}
      >
        Exit
      </Button>
    </S.HeaderWrapper>
  );
};

export default Header;
