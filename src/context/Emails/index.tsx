import { useDatabase } from "hooks/useDatabase";
import React, { createContext, useEffect, useState } from "react";
import { IEmail, IEmailsContext } from "types/Email";

export const EmailsContext = createContext({} as IEmailsContext);

interface Props {
  children: React.ReactNode;
}

const EmailsProvider = ({ children }: Props) => {
  const { getEmails, fetchEmails, getPendingEmail } = useDatabase();

  const [emails, setEmails] = useState<IEmail[] | []>(getEmails());
  const [pendingEmail, setPendingEmail] = useState<IEmail | null>(getPendingEmail());
  const [editable, setEditable] = useState<boolean>(true);

  useEffect(() => {
    if (!emails.length) {
      const data = fetchEmails();
      setEmails(data);
    }
  }, [emails, fetchEmails]);

  return (
    <EmailsContext.Provider
      value={{ editable, emails, setEditable, pendingEmail, setPendingEmail }}
    >
      {children}
    </EmailsContext.Provider>
  );
};

export default EmailsProvider;
