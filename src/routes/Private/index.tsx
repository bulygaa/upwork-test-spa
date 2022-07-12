import { useDatabase } from "hooks/useDatabase";
import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const Private: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const { getActiveUser } = useDatabase()

  const user = getActiveUser()

  useEffect(() => {
    if (user && user.status !== 'active') return navigate("/login");
  }, [user, navigate]);

  return <>{children}</>;
};

export default Private;
