import styled from "styled-components";
import { createPortal } from "react-dom";

export const Backdrop = ({ onClose }) => {
  return (
    <>
      {createPortal(
        <StyledBackDrop onClick={onClose} />,
        document.getElementById("backdrop")
      )}
    </>
  );
};

export const Modal = ({ onClose, children }) => {
  return (
    <>
      <Backdrop onClose={onClose} />
      {createPortal(
        <>
          <Card>{children}</Card>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};

const Card = styled.div`
  background-color: #cacacaeb;
  padding: 10px;

  box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  border-radius: 30 px;
`;

const StyledBackDrop = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;

  width: 100%;
  height: 100%;
  z-index: 12;
`;
