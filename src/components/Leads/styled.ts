import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 3rem 0;
`;

const LeadTitle = styled.span`
  font-size: 2rem;
`;

const LeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;

  margin: 0 auto;
`;

const LeadSubject = styled.input`
  width: calc(100% - 30px);

  padding: 15px;
`;

const LeadBody = styled.textarea`
  margin-top: 1rem;

  width: calc(100% - 30px);

  resize: none;

  overflow-y: auto;

  min-height: 500px;

  padding: 15px;
`;

const EmptyLeads = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const S = {
  Wrapper,
  ButtonsContainer,
  LeadTitle,
  LeadBody,
  LeadContainer,
  LeadSubject,
  EmptyLeads
};

export default S;
