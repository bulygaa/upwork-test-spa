import users from "mockData/users.json";
import leads from "mockData/leads.json";
import { useCallback } from "react";
import { IUser } from "types/User";
import { ILead } from "types/Lead";

export const useDatabase = () => {
  const database = localStorage;

  const fetchUsers = useCallback((): void => {
    database.setItem("users", JSON.stringify(users));
  }, [database]);

  const fetchLeads = useCallback((): void => {
    database.setItem("leads", JSON.stringify(leads));
  }, [database]);

  const getUsers = useCallback((): IUser[] | null => {
    const dbUsers = database.getItem("users");
    return dbUsers ? JSON.parse(dbUsers) : null;
  }, [database]);

  const getAvailableUsers = useCallback((): IUser[] | null => {
    const dbUsers = database.getItem("users");
    return dbUsers ? JSON.parse(dbUsers).filter((user: IUser) => user.status !== "active") : null;
  }, [database]);

  const setUsers = useCallback(
    (users: IUser[]) => {
      database.setItem("users", JSON.stringify(users));
    },
    [database]
  );

  const getLeads = useCallback((): ILead[] | null => {
    const dbLeads = database.getItem("users");
    return dbLeads ? JSON.parse(dbLeads) : null;
  }, [database]);

  const getLead = useCallback(
    (id: number): ILead | null => {
      const dbLeads = getLeads();

      return dbLeads ? dbLeads.find((_, idx: number) => idx === id)! : null;
    },
    [getLeads]
  );

  const getUser = useCallback(
    (id: string): IUser | null => {
      const dbUsers = getUsers();

      return dbUsers ? dbUsers.find((user) => user.name === id)! : null;
    },
    [getUsers]
  );

  const getActiveUser = useCallback((): IUser | null => {
    const dbUser = database.getItem("user");

    return dbUser ? JSON.parse(dbUser) : null;
  }, [database]);

  const setActiveUser = useCallback(
    (id: string): void => {
      const dbUsers = getUsers();
      const activeUser = getUser(id);

      setUsers(
        dbUsers
          ? dbUsers.map((user: IUser) =>
              user.name === id ? { ...user, status: "active" } : user
            )
          : []
      );

      database.setItem(
        "user",
        JSON.stringify({ ...activeUser, status: "active" })
      );
    },
    [getUser, database, getUsers, setUsers]
  );

  return {
    fetchLeads,
    fetchUsers,
    getLead,
    getLeads,
    getUser,
    getUsers,
    getActiveUser,
    setActiveUser,
    getAvailableUsers,
  };
};
