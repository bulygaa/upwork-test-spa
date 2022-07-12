import Button from "components/common/Button";
import Typography from "components/common/Typography";
import React from "react";
import S from "./styled";

const Modal = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <S.ModalWrapper>
      <S.ModalContainer>
        <S.ModalTitle>Session expired</S.ModalTitle>
        <S.ModalContent>
          <Typography>
            Page will be refreshed because session has expired
          </Typography>
        </S.ModalContent>
        <S.ModalActions>
          <Button
            onClick={refreshPage}
            styles={{ backgroundColor: "#2196f3", borderRadius: "5px" }}
          >
            OK
          </Button>
        </S.ModalActions>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default Modal;
