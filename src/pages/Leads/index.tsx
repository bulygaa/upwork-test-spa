import Wrapper from "components/common/Wrapper";
import Leads from "components/Leads";
import { useDatabase } from "hooks/useDatabase";
import { useLeadsContext } from "hooks/useLeadsContext";
import React, { FC, useEffect } from "react";
import Header from "./Header";
import Modal from "./Modal";

const LeadsPage: FC = () => {
  const { editable, setPendingLead } = useLeadsContext()
  const { getPendingLead } = useDatabase()

  useEffect(() => {
    const pendingLead = getPendingLead()
    setPendingLead(pendingLead)
  }, [setPendingLead])

  return (
    <Wrapper header={<Header/>}>
      <Leads />
      {!editable && <Modal/>}
    </Wrapper>
  );
};

export default LeadsPage;
