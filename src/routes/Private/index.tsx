import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const Private: FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  const userStorage = localStorage.getItem("user");
  const user: any = userStorage ? JSON.parse(userStorage) : null;

  useEffect(() => {
    if (!user?.isAuth) return navigate("/login");
  }, [user, navigate]);

  return <>{children}</>;
};

export default Private;
