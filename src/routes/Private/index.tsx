import { useDatabase } from "hooks/useDatabase";
import { useUserContext } from "hooks/useUserContext";
import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const Private: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const { getActiveUser } = useDatabase();
  const { user, setUser } = useUserContext();

  useEffect(() => {
    if (!user || (user && user.status !== "active")) {
      const dbUser = getActiveUser();
      if (!dbUser) {
        return navigate("/login");
      }

      setUser(dbUser);
    }
  }, [user, navigate, setUser, getActiveUser]);

  return <>{children}</>;
};

export default Private;
