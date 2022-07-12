import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 30px;
`;

const ModalWrapper = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;

  height: 100%;

  z-index: 1200;

  background-color: #00000080;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  min-width: 200px;
  max-width: 500px;
  width: 100%;

  background-color: #fff;

  padding: 15px;

  border-radius: 5px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ModalTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 600;

  color: #828282;
`;
const ModalContent = styled.span``;
const ModalActions = styled.span``;

const S = {
  HeaderWrapper,
  ModalWrapper,
  ModalContainer,
  ModalTitle,
  ModalContent,
  ModalActions
};

export default S;
