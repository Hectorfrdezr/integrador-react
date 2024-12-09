import React from 'react';
import styled from 'styled-components';

const Modal = ({ message, isVisible, onConfirm, onClose }) => {
  if (!isVisible) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <p>{message}</p>
        <button onClick={onConfirm}>Confirmar</button>
        <button onClick={onClose}>Cancelar</button>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

export default Modal;