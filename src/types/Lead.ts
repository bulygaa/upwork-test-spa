import React from "react";

export interface ILead {
  body: string;
  date: string;
  email_lead: string;
  status: string;
  subject: string;
}

export interface ILeadsContext {
  editable: boolean;
  leads: ILead[];
  setEditable: React.Dispatch<React.SetStateAction<boolean>>;
  pendingLead: ILead | null;
  setPendingLead: React.Dispatch<React.SetStateAction<ILead | null>>
}

export enum LeadActions {
  POSITIVE_REPLY = "POSITIVE_REPLY",
  NEUTRAL_REPLY = "NEUTRAL_REPLY",
  NOT_A_LEAD = "NOT_A_LEAD",
}
