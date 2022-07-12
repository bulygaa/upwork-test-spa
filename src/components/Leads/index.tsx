import Button from "components/common/Button";
import { useDatabase } from "hooks/useDatabase";
import { useLeadsContext } from "hooks/useLeadsContext";
import React, { FC } from "react";
import { LeadActions } from "types/Lead";
import S from "./styled";

const Leads: FC = () => {
  const { pendingLead } = useLeadsContext();
  const { updateLeads } = useDatabase();

  const markEmail = (type: string) => {
    switch (type) {
      case LeadActions.POSITIVE_REPLY:
        updateLeads({ ...pendingLead!, status: LeadActions.POSITIVE_REPLY });
        break;
      case LeadActions.NEUTRAL_REPLY:
        updateLeads({ ...pendingLead!, status: LeadActions.NEUTRAL_REPLY });
        break;
      case LeadActions.NOT_A_LEAD:
        updateLeads({ ...pendingLead!, status: LeadActions.NOT_A_LEAD });
        break;

      default:
        break;
    }
    window.location.reload();
  };

  return (
    <S.Wrapper>
      {pendingLead ? (
        <>
          <S.ButtonsContainer>
            <Button onClick={() => markEmail(LeadActions.POSITIVE_REPLY)}>
              POSITIVE REPLY
            </Button>
            <Button onClick={() => markEmail(LeadActions.NEUTRAL_REPLY)}>
              NEUTRAL REPLY
            </Button>
            <Button onClick={() => markEmail(LeadActions.NOT_A_LEAD)}>
              NOT A LEAD
            </Button>
          </S.ButtonsContainer>
          <S.LeadContainer>
            <S.LeadTitle>EMAIL</S.LeadTitle>
            <S.LeadSubject value={pendingLead?.subject} readOnly />
            <S.LeadBody value={pendingLead?.body} readOnly></S.LeadBody>
          </S.LeadContainer>
        </>
      ) : (
        <S.EmptyLeads>
          No Emails
        </S.EmptyLeads>
      )}
    </S.Wrapper>
  );
};

export default Leads;
