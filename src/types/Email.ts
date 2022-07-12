import React from "react";

export type IEmail = {
  body: string;
  date: string;
  email_lead: string;
  status: string;
  subject: string;
};

export interface IEmailsContext {
  editable: boolean;
  emails: IEmail[];
  setEditable: React.Dispatch<React.SetStateAction<boolean>>;
  pendingEmail: IEmail | null;
  setPendingEmail: React.Dispatch<React.SetStateAction<IEmail | null>>;
}

export type EmailTotalByStatus = {
  [k: string]: number;
};

export enum EmailStatuses {
  POSITIVE_REPLY = "POSITIVE_REPLY",
  NEUTRAL_REPLY = "NEUTRAL_REPLY",
  NOT_A_LEAD = "NOT_A_LEAD",
}
