import Typography from "components/common/Typography";
import { convertText } from "helpers/convertText";
import { useDatabase } from "hooks/useDatabase";
import { useEmailsContext } from "hooks/useEmailsContext";
import React, { FC, useMemo } from "react";
import { EmailStatuses } from "types/Email";
import S from "./styled";

const Overview: FC = () => {
  const { getTotalEmailsByStatus } = useDatabase();
  const { emails } = useEmailsContext();

  const totalByStatus = useMemo(
    () => getTotalEmailsByStatus(),
    [getTotalEmailsByStatus]
  );

  return (
    <S.Wrapper>
      <S.Container>
        <S.StatusesContainer>
          {Object.values(EmailStatuses).map((status, index) => (
            <Typography key={`--status-${status}-${index}`}>
              {convertText(status)}: {totalByStatus[status] || 0}
            </Typography>
          ))}
        </S.StatusesContainer>
        <S.EmailsContainer>
          {emails.map((email) => (
            <S.EmailContainer
              key={`--email-data-${email.body.replaceAll(" ", "")}`}
            >
              <S.EmailBody
                value={`${email.subject}, ${email.body} Status: ${convertText(email.status)}`}
                readOnly
              />
            </S.EmailContainer>
          ))}
        </S.EmailsContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default Overview;
