import { LeadsContext } from "context/Leads";
import React, { useContext } from "react";

export const useLeadsContext = () => {
  return useContext(LeadsContext);
};
