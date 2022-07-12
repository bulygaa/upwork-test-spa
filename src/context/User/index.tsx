import { useDatabase } from "hooks/useDatabase";
import React, { createContext, useEffect, useState } from "react";
import { IUser, IUserContext } from "types/User";

export const UserContext = createContext({
  user: null,
  users: [],
} as IUserContext);

interface Props {
  children: React.ReactNode;
}

const UserProvider = ({ children }: Props) => {
  const { fetchUsers, getUsers, userLogout } = useDatabase();

  const [user, setUser] = useState<IUser | null>(null);
  const [users, setUsers] = useState<IUser[] | []>(getUsers());

  useEffect(() => {
    if (!users.length) {
      const data = fetchUsers();
      setUsers(data);
    }
  }, [fetchUsers, users]);

  const logout = () => {
    if (!user) return;
    userLogout(user.name);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, users, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
