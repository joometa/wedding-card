import React, { ReactNode, useEffect, useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

interface Props {
  isOpen: boolean;
  children?: ReactNode;
  onClose: () => void;
  src: any;
}
export function ImageModal({ isOpen, src, children, onClose }: Props) {
  const [imgClass, setImgClass] = useState<string>("");

  const closeModal = () => {
    onClose();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      ReactModal.setAppElement("#react-modals");
    }
  }, []);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      if (image.naturalWidth > image.naturalHeight) {
        // 이미지가 가로형인 경우
        setImgClass("horizontal");
      } else {
        // 이미지가 세로인 경우
        setImgClass("vertical");
      }
    };
    if (typeof window !== "undefined") {
      ReactModal.setAppElement("#react-modals");
    }
  }, [src]);

  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      preventScroll
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
          minWidth: "fit-content",
          backgroundColor: "transparent",
          borderRadius: 0,
          maxHeight: "90vh",
          height: "100%",
        },
      }}
      shouldFocusAfterRender
    >
      <ModalContent>
        <img
          src={src}
          alt="detail-image"
          className={imgClass}
          onClick={() => onClose()}
        />
      </ModalContent>
    </ReactModal>
  );
}

const ModalContent = styled.div`
  /* padding: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  /* background-color: transparent */
  display: flex; /* Flexbox 컨테이너로 설정 */
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */
  background-color: transparent;
  height: inherit;

  img.horizontal {
    width: 100%; // 가로 길이 제한
    max-height: 100vh; // 높이는 자동 조정
    height: auto;
    object-fit: contain;
  }
  img.vertical {
    width: auto; // 가로 길이 자동 조정
    max-width: 100vw; // 세로 길이 제한
    height: auto;
    object-fit: contain;
  }
`;
