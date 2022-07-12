import users from "mockData/users.json";
import leads from "mockData/leads.json";
import { useCallback } from "react";
import { IUser } from "types/User";
import { ILead } from "types/Lead";

export const useDatabase = () => {
  const database = localStorage;

  const fetchUsers = useCallback((): IUser[] => {
    database.setItem("users", JSON.stringify(users));
    return users;
  }, [database]);

  const fetchLeads = useCallback((): ILead[] => {
    database.setItem("leads", JSON.stringify(leads));
    return leads;
  }, [database]);

  const getUsers = useCallback((): IUser[] | [] => {
    const dbUsers = database.getItem("users");
    return dbUsers ? JSON.parse(dbUsers) : [];
  }, [database]);

  const getAvailableUsers = useCallback((): IUser[] | null => {
    const dbUsers = database.getItem("users");
    return dbUsers
      ? JSON.parse(dbUsers).filter((user: IUser) => user.status !== "active")
      : null;
  }, [database]);

  const setUsers = useCallback(
    (users: IUser[]) => {
      database.setItem("users", JSON.stringify(users));
    },
    [database]
  );

  const getLeads = useCallback((): ILead[] | [] => {
    const dbLeads = database.getItem("leads");
    return dbLeads ? JSON.parse(dbLeads) : [];
  }, [database]);

  const getLead = useCallback(
    (id: number): ILead | null => {
      const dbLeads = getLeads();

      return dbLeads ? dbLeads.find((_, idx: number) => idx === id)! : null;
    },
    [getLeads]
  );

  const getPendingLead = useCallback((): ILead | null => {
    const dbLeads = getLeads();

    if (dbLeads) {
      const pendingLead = dbLeads.find((lead) => lead.status === "pending");

      if (pendingLead) return pendingLead;

      return null;
    }

    return null;
  }, [getLeads]);

  const getUser = useCallback(
    (id: string): IUser | null => {
      const dbUsers = getUsers();

      if (dbUsers) {
        const user = dbUsers.find((u) => u.name === id);

        if (user) return user;

        return null;
      }

      return null;
    },
    [getUsers]
  );

  const getActiveUser = useCallback((): IUser | null => {
    const dbUser = database.getItem("user");

    return dbUser ? JSON.parse(dbUser) : null;
  }, [database]);

  const setActiveUser = useCallback(
    (id: string): IUser | null => {
      const dbUsers = getUsers();
      const activeUser = getUser(id);

      if (!activeUser || !dbUsers.length) {
        return null;
      }

      setUsers(
        dbUsers.map((user: IUser) =>
          user.name === id ? { ...user, status: "active" } : user
        )
      );

      database.setItem(
        "user",
        JSON.stringify({ ...activeUser, status: "active" })
      );

      return { ...activeUser, status: "active" };
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
    getPendingLead,
  };
};
