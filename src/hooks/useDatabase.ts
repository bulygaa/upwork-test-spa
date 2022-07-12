import users from "mockData/users.json";
import emails from "mockData/emails.json";
import { useCallback } from "react";
import { IUser } from "types/User";
import { EmailTotalByStatus, IEmail } from "types/Email";

export const useDatabase = () => {
  const database = localStorage;

  const fetchUsers = useCallback((): IUser[] => {
    database.setItem("users", JSON.stringify(users));
    return users;
  }, [database]);

  const fetchEmails = useCallback((): IEmail[] => {
    database.setItem("emails", JSON.stringify(emails));
    return emails;
  }, [database]);

  const getUsers = useCallback((): IUser[] | [] => {
    const dbUsers = database.getItem("users");
    return dbUsers ? JSON.parse(dbUsers) : [];
  }, [database]);

  const getAvailableUsers = useCallback((): IUser[] => {
    const dbUsers = database.getItem("users");
    return dbUsers
      ? JSON.parse(dbUsers).filter((user: IUser) => user.status !== "active")
      : [];
  }, [database]);

  const updateUsers = useCallback(
    (users: IUser[]): void => {
      database.setItem("users", JSON.stringify(users));
    },
    [database]
  );

  const getEmails = useCallback((): IEmail[] | [] => {
    const dbEmails = database.getItem("emails");
    return dbEmails ? JSON.parse(dbEmails) : [];
  }, [database]);

  const getEmail = useCallback(
    (id: number): IEmail | null => {
      const dbEmails = getEmails();

      return dbEmails ? dbEmails.find((_, idx: number) => idx === id)! : null;
    },
    [getEmails]
  );

  const getPendingEmail = useCallback((): IEmail | null => {
    const dbEmails = getEmails();

    if (dbEmails) {
      const pendingEmails = dbEmails.filter((email) => email.status === "pending");
      const randomIndex = Math.floor(Math.random() * pendingEmails.length);

      return pendingEmails[randomIndex];
    }

    return null;
  }, [getEmails]);

  const updateEmails = useCallback(
    (email: IEmail): void => {
      const emails = getEmails();

      database.setItem(
        "emails",
        JSON.stringify(emails.map((l) => (l.body === email.body ? email : l)))
      );
    },
    [database, getEmails]
  );

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

      updateUsers(
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
    [getUser, database, getUsers, updateUsers]
  );

  const userLogout = useCallback(
    (id: string): void => {
      const dbUsers = getUsers();
      database.removeItem("user");
      updateUsers(
        dbUsers.map((user: IUser) =>
          user.name === id ? { ...user, status: "inactive" } : user
        )
      );
    },
    [getUsers, database, updateUsers]
  );

  const getTotalEmailsByStatus = useCallback((): EmailTotalByStatus => {
    const emails = getEmails();
    const totalByStatus = (emails as IEmail[]).reduce((obj, email) => {
      return {
        ...obj,
        [email.status]: obj[email.status] ? obj[email.status] + 1 : 1,
      };
    }, {} as EmailTotalByStatus);

    return totalByStatus;
  }, [getEmails]);

  const resetDatabase = useCallback((): void => {
    database.removeItem("user");
    database.setItem("emails", JSON.stringify(emails));
    database.setItem("users", JSON.stringify(users));
  }, [database]);

  return {
    fetchEmails,
    fetchUsers,
    getEmail,
    getEmails,
    getUser,
    getUsers,
    getActiveUser,
    setActiveUser,
    getAvailableUsers,
    getPendingEmail,
    updateEmails,
    userLogout,
    getTotalEmailsByStatus,
    resetDatabase,
  };
};
