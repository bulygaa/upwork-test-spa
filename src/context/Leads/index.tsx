import { useDatabase } from "hooks/useDatabase";
import React, { createContext, useEffect, useState } from "react";
import { ILead, ILeadsContext } from "types/Lead";

export const LeadsContext = createContext({} as ILeadsContext);

const LeadsProvider = ({ children }: any) => {
  const { getLeads, fetchLeads } = useDatabase();

  const [leads, setLeads] = useState<ILead[] | []>(getLeads());
  const [editable, setEditable] = useState<boolean>(false);

  useEffect(() => {
    if (!leads) {
      const data = fetchLeads();
      setLeads(data);
    }
  }, [leads]);

  return (
    <LeadsContext.Provider value={{ editable, leads, setEditable }}>
      {children}
    </LeadsContext.Provider>
  );
};

export default LeadsProvider;
