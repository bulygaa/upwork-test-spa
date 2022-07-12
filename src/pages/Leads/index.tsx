import Wrapper from "components/common/Wrapper";
import Leads from "components/Leads";
import { useDatabase } from "hooks/useDatabase";
import { useEmailsContext } from "hooks/useEmailsContext";
import React, { FC, useEffect } from "react";
import Header from "./Header";
import Modal from "./Modal";

const LeadsPage: FC = () => {
  const { editable, setPendingEmail } = useEmailsContext()
  const { getPendingEmail } = useDatabase()

  useEffect(() => {
    const pendingLead = getPendingEmail()
    setPendingEmail(pendingLead)
  }, [setPendingEmail, getPendingEmail])

  return (
    <Wrapper header={<Header/>}>
      <Leads />
      {!editable && <Modal/>}
    </Wrapper>
  );
};

export default LeadsPage;
