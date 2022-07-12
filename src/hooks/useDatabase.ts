import users from "mockData/users.json";
import leads from "mockData/leads.json";
import { useCallback } from "react";

export const useDatabase = () => {
  const database = localStorage;

  const fetchUsers = useCallback(() => {
    database.setItem("users", JSON.stringify(users));
  }, [database]);

  const fetchLeads = useCallback(() => {
    database.setItem("leads", JSON.stringify(leads));
  }, [database]);

  const getUsers = useCallback(() => {
    const dbUsers = database.getItem("users");
    return dbUsers ? JSON.parse(dbUsers) : null;
  }, [database]);

  const setUsers = useCallback((users: any) => {
    database.setItem("users", users);
  }, []);

  const getLeads = useCallback(() => {
    const dbLeads = database.getItem("users");
    return dbLeads ? JSON.parse(dbLeads) : null;
  }, [database]);

  const getLead = useCallback(
    (id: number) => {
      const dbLeads = getLeads();

      return dbLeads.find((_: any, idx: number) => idx === id);
    },
    [getLeads]
  );

  const getUser = useCallback(
    (id: string) => {
      const dbUsers = getUsers();

      return dbUsers.find((user: any) => user.name === id);
    },
    [getUsers]
  );

  const getActiveUser = useCallback(() => {
    const dbUser = database.getItem("user");

    return dbUser ? JSON.parse(dbUser) : null;
  }, [database]);

  const setActiveUser = useCallback(
    (id: string) => {
      const dbUsers = getUsers();
      const activeUser = getUser(id);

      setUsers(
        dbUsers.map((user: any) =>
          user.name === id ? { ...user, status: "active" } : user
        )
      );

      localStorage.setItem(
        "user",
        JSON.stringify({ ...activeUser, status: "active" })
      );
    },
    [getUser]
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
  };
};
