import Button from "components/common/Button";
import Select from "components/common/Select";
import { useDatabase } from "hooks/useDatabase";
import React, { FormEvent, useEffect, useMemo } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import S from "./styled";

const Login = () => {
  const navigate = useNavigate();
  const { setActiveUser, getAvailableUsers, getActiveUser } = useDatabase();

  const availableUsers = useMemo(
    () => getAvailableUsers(),
    [getAvailableUsers]
  );
  const [user, setUser] = useState<string | null>(
    availableUsers?.length ? availableUsers[0].name : null
  );

  useEffect(() => {
    const activeUser = getActiveUser();

    if (activeUser) navigate("/leads");
  }, [navigate, getActiveUser]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (user) {
      setActiveUser(user);
      navigate("/leads");
    }
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={submit}>
        <S.FormTitle>User</S.FormTitle>
        <S.FormContent>
          <Select
            styles={{ minWidth: "200px", width: "100%" }}
            options={
              availableUsers?.length
                ? availableUsers.map((user: any) => ({
                    label: user.name,
                    value: user.name,
                  }))
                : []
            }
            onChange={(e) => setUser(e.target.value as string)}
          />
        </S.FormContent>
        <S.FormActions>
          <Button styles={{ margin: "1.5rem auto 0 auto" }}>Login</Button>
        </S.FormActions>
      </S.Form>
    </S.Wrapper>
  );
};

export default Login;
