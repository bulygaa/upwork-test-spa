import { useUserContext } from "hooks/useUserContext";
import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const Private: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (!user || (user && user.status !== "active")) return navigate("/login");
  }, [user, navigate]);

  return <>{children}</>;
};

export default Private;
