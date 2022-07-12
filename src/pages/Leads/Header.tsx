import Button from "components/common/Button";
import Typography from "components/common/Typography";
import { useLeadsContext } from "hooks/useLeadsContext";
import React, { useEffect, useRef, useState } from "react";
import S from "./styled";

const Header = () => {
  const { setEditable } = useLeadsContext();

  const [timer, setTimer] = useState<number>(120);

  useEffect(() => {
    let interval: NodeJS.Timer | null = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (interval && !timer) {
      setEditable(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval as NodeJS.Timer);
  }, [timer]);

  return (
    <S.Wrapper>
      <Typography>{timer} seconds left</Typography>
      <Button styles={{ backgroundColor: "#c4c4c4", color: "#fff" }}>
        Exit
      </Button>
    </S.Wrapper>
  );
};

export default Header;
