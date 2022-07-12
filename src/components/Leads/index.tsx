import Button from "components/common/Button";
import { useDatabase } from "hooks/useDatabase";
import { useEmailsContext } from "hooks/useEmailsContext";
import React, { FC } from "react";
import { EmailStatuses } from "types/Email";
import S from "./styled";

const Emails: FC = () => {
  const { pendingEmail } = useEmailsContext();
  const { updateEmails } = useDatabase();

  const markEmail = (type: string) => {
    switch (type) {
      case EmailStatuses.POSITIVE_REPLY:
        updateEmails({ ...pendingEmail!, status: EmailStatuses.POSITIVE_REPLY });
        break;
      case EmailStatuses.NEUTRAL_REPLY:
        updateEmails({ ...pendingEmail!, status: EmailStatuses.NEUTRAL_REPLY });
        break;
      case EmailStatuses.NOT_A_LEAD:
        updateEmails({ ...pendingEmail!, status: EmailStatuses.NOT_A_LEAD });
        break;

      default:
        break;
    }
    window.location.reload();
  };

  return (
    <S.Wrapper>
      {pendingEmail ? (
        <>
          <S.ButtonsContainer>
            <Button onClick={() => markEmail(EmailStatuses.POSITIVE_REPLY)}>
              POSITIVE REPLY
            </Button>
            <Button onClick={() => markEmail(EmailStatuses.NEUTRAL_REPLY)}>
              NEUTRAL REPLY
            </Button>
            <Button onClick={() => markEmail(EmailStatuses.NOT_A_LEAD)}>
              NOT A LEAD
            </Button>
          </S.ButtonsContainer>
          <S.EmailContainer>
            <S.EmailTitle>EMAIL</S.EmailTitle>
            <S.EmailSubject value={pendingEmail?.subject} readOnly />
            <S.EmailBody value={pendingEmail?.body} readOnly></S.EmailBody>
          </S.EmailContainer>
        </>
      ) : (
        <S.EmptyEmails>
          No Emails
        </S.EmptyEmails>
      )}
    </S.Wrapper>
  );
};

export default Emails;
