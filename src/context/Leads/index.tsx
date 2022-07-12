import { useDatabase } from "hooks/useDatabase";
import React, { createContext, useEffect, useState } from "react";
import { ILead, ILeadsContext } from "types/Lead";

export const LeadsContext = createContext({} as ILeadsContext);

interface Props {
  children: React.ReactNode;
}

const LeadsProvider = ({ children }: Props) => {
  const { getLeads, fetchLeads, getPendingLead } = useDatabase();

  const [leads, setLeads] = useState<ILead[] | []>(getLeads());
  const [pendingLead, setPendingLead] = useState<ILead | null>(getPendingLead());
  const [editable, setEditable] = useState<boolean>(true);

  useEffect(() => {
    if (!leads.length) {
      const data = fetchLeads();
      setLeads(data);
    }
  }, [leads, fetchLeads]);

  return (
    <LeadsContext.Provider
      value={{ editable, leads, setEditable, pendingLead, setPendingLead }}
    >
      {children}
    </LeadsContext.Provider>
  );
};

export default LeadsProvider;
