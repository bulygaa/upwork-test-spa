import React from "react";

export interface IUser {
  name: string;
  status: string;
}

export interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  users: IUser[] | [];
}
