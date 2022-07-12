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
}
