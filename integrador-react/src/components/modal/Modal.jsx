import React from 'react';
import styled from 'styled-components';

const Modal = ({ message, isVisible, onConfirm, onClose }) => {
  if (!isVisible) return null;

  return (
    <ModalOverlay>
    <ModalContainer>
      <setModalMessage>{message}</setModalMessage>
      <ModalButtons>
        {onConfirm && <ConfirmButton onClick={onConfirm}>Confirmar</ConfirmButton>}
        <CancelButton onClick={onClose}>Cancelar</CancelButton>
      </ModalButtons>
    </ModalContainer>
  </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin-left:20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 300px;
  width: 100%;
  @media(max-width:525px){
    margin-left:60px;
  }
`;

const setModalMessage = styled.p`
  font-size: 18px;
  color: black;
  margin-bottom: 50px;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top:20px;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: background 0.3s ease;
`;

const ConfirmButton = styled(Button)`
  background-color: #4CAF50;
  color: white;

  &:hover {
    background-color: #45a049;
  }
`;

const CancelButton = styled(Button)`
  background-color: #f44336;
  color: white;

  &:hover {
    background-color: #d32f2f;
  }
`;


export default Modal;