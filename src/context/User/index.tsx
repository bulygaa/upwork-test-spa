import { useDatabase } from "hooks/useDatabase";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { IUser, IUserContext } from "types/User";

export const UserContext = createContext({
  user: null,
  users: [],
} as IUserContext);

const UserProvider = ({ children }: any) => {
  const { fetchUsers, getUsers, getActiveUser } = useDatabase();

  const [user, setUser] = useState<IUser | null>(getActiveUser());
  const [users, setUsers] = useState<IUser[] | []>(getUsers());

  useEffect(() => {
    if (!users.length) {
      const data = fetchUsers();
      setUsers(data);
    }
  }, [fetchUsers, users]);

  return (
    <UserContext.Provider
      value={{ user, setUser, users }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
