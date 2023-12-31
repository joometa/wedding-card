import ReactModal from "react-modal";
import React, { ReactNode, useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/firebasedb";
import "./_guestbook-modal.scss";
import { ListItem } from "@/components/GuestBook/GuestBook";
import { formatDate } from "@/core/formatDate";

interface Props {
  isOpen: boolean;
  children?: ReactNode;
  onClose: () => void;
  list?: ListItem[];
  type: "write" | "list";
  refreshList?: () => void;
}

export const GuestBookModal = ({
  isOpen,
  children,
  onClose,
  list,
  type,
  refreshList,
}: Props) => {
  const date = new Date();
  const [name, setName] = useState<string>("");
  const [msg, setMsg] = useState<string>("");

  const closeModal = () => {
    onClose();
  };

  const resetData = () => {
    setName("");
    setMsg("");
  };

  const handleClickComplete = async () => {
    if (name.length === 0 || msg.length === 0) return;
    try {
      const docRef = await addDoc(collection(db, "guest-book"), {
        name: name,
        content: msg,
        createdAt: date.toISOString(),
      });
      refreshList && refreshList();
      resetData();
      onClose();
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickLeave = () => {
    resetData();
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
          width: "fit-content",
          height: "fit-content",
          maxWidth: "90vw",
          maxHeight: "90vh",
        },
      }}
      shouldFocusAfterRender
      preventScroll
    >
      <div className="guestbook-modal-container">
        <div className="guestbook-modal-title">
          <strong>방명록</strong>
        </div>
        {type === "list" && (
          <div className="list-container">
            {list &&
              list.length > 0 &&
              list.map((d, i) => {
                return (
                  <div key={d.id} className="list-item">
                    <div className="list-item--header">
                      <strong>{d.name}</strong>
                      <span className="time">
                        {d.createdAt && formatDate(d.createdAt)}
                      </span>
                    </div>
                    <p className="list-item--content">{d.content}</p>
                  </div>
                );
              })}
          </div>
        )}
        {type === "write" && (
          <div className="write-container">
            <div className="write-content">
              <label htmlFor="name">성함</label>
              <input
                className="input-name"
                type="text"
                id="name"
                placeholder="OOO"
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="msg">메세지</label>
              <textarea
                className="input-msg"
                id="msg"
                placeholder="메세지를 작성해주세요!"
                rows={6}
                maxLength={200}
                onChange={(e) => setMsg(e.target.value)}
              />
            </div>
            <div className="write-btn-box">
              <button className="btn-complete" onClick={handleClickComplete}>
                보내기
              </button>
              <button onClick={handleClickLeave} className="btn-cancel">
                나가기
              </button>
            </div>
          </div>
        )}
      </div>
    </ReactModal>
  );
};
