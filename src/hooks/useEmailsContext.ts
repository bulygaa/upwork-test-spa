import { EmailsContext } from "context/Emails";
import { useContext } from "react";

export const useEmailsContext = () => {
  return useContext(EmailsContext);
};
