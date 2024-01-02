import React, { ReactNode, useEffect } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

interface Props {
  isOpen: boolean;
  children?: ReactNode;
  onClose: () => void;
}
export function ImageModal({ isOpen, children, onClose }: Props) {
  const closeModal = () => {
    onClose();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      ReactModal.setAppElement("#react-modals");
    }
  }, []);

  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      onRequestClose={closeModal}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 100,
        },
        content: {
          padding: 0,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          border: "none",
          display: "flex",
          minWidth: "100%",
          height: "fit-content",
          borderRadius: 0,
          // maxWidth: "90vw",
          maxHeight: "90vh",
        },
      }}
      shouldFocusAfterRender
      preventScroll
    >
      <ModalContent>{children}</ModalContent>
    </ReactModal>
  );
}

const ModalContent = styled.div`
  padding: 0;
  width: 100%;
  height: 100%;
  img {
    object-fit: contain;
  }
`;
