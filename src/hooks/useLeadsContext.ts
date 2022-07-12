import { LeadsContext } from "context/Leads";
import { useContext } from "react";

export const useLeadsContext = () => {
  return useContext(LeadsContext);
};
