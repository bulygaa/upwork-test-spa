import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 3rem 0;
`;

const EmailTitle = styled.span`
  font-size: 2rem;
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;

  margin: 0 auto;
`;

const EmailSubject = styled.input`
  width: calc(100% - 30px);

  padding: 15px;
`;

const EmailBody = styled.textarea`
  margin-top: 1rem;

  width: calc(100% - 30px);

  resize: none;

  overflow-y: auto;

  min-height: 500px;

  padding: 15px;
`;

const EmptyEmails = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const S = {
  Wrapper,
  ButtonsContainer,
  EmailTitle,
  EmailBody,
  EmailContainer,
  EmailSubject,
  EmptyEmails
};

export default S;
