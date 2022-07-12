import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;

  padding: 0 30px;
`;

const Container = styled.div`
  margin-top: 100px;
`;

const StatusesContainer = styled.div``;

const EmailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmailContainer = styled.div`
  width: 100%;

  margin-bottom: 50px;
`;

const EmailBody = styled.textarea`
  margin-top: 1rem;

  width: calc(100% - 30px);

  resize: none;

  overflow-y: auto;

  min-height: 500px;

  padding: 15px;
`;

const S = {
  Wrapper,
  Container,
  StatusesContainer,
  EmailsContainer,
  EmailContainer,
  EmailBody,
};

export default S;
