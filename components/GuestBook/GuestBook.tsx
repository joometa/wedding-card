"use client";
import { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/firebasedb";
import IconList from "public/assets/icons/list.svg";
import IconWrite from "public/assets/icons/write.svg";
import { formatDate } from "@/core/formatDate";
import { GuestBookModal } from "@/components";

import "./_guestbook.scss";

export interface ListItem {
  content: string;
  id: string;
  name: string;
  createdAt: string;
}
export const GuestBook = () => {
  const date = new Date();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"write" | "list">("write");
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [list, setList] = useState<ListItem[]>([]);

  const handleClickComplete = async () => {
    if (name.length === 0 || content.length === 0) return;
    try {
      const docRef = await addDoc(collection(db, "guest-book"), {
        name: name,
        content: content,
        createdAt: date.toISOString(),
      });
      console.log(docRef);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickCancel = () => {
    console.log(date.toLocaleString());
  };

  // const snap = onSnapshot(collection(db, "guest-book"), (querySnapshot) => {
  //   let _temp: any[] = [];

  //   querySnapshot.forEach((doc) => {
  //     let data = doc.data();
  //     data = { ...data, id: doc.id };
  //     _temp.push(data);
  //   });
  //   setList(_temp);
  // });

  const handleClickPostButton = () => {
    setModalType("write");
    setIsOpenModal(true);
  };

  const handleClickListButton = () => {
    setModalType("list");
    setIsOpenModal(true);
  };

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "guest-book"));
    let _temp: any[] = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      data = { ...data, id: doc.id };
      _temp.push(data);
    });
    setList(_temp);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(date.toISOString());

  return (
    <>
      <section className="guestbook-section">
        <h2 className="guestbook-header">방명록</h2>

        <div className="guest-book-control-box">
          <button className="btn-write" onClick={handleClickPostButton}>
            <IconWrite />
          </button>
          <button className="btn-show-total" onClick={handleClickListButton}>
            <IconList />
          </button>
        </div>
        <div className="guest-book-container">
          {list.length > 0 &&
            list.map((d, i) => {
              if (i > 2) return;
              return (
                <div key={d.id} className="guest-book-item">
                  <div className="guest-book-item--header">
                    <strong>{d.name}</strong>
                    <span className="time">
                      {d.createdAt && formatDate(d.createdAt)}
                    </span>
                  </div>
                  <p className="guest-book-item--content">{d.content}</p>
                </div>
              );
            })}
        </div>
      </section>
      <GuestBookModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        type={modalType}
        refreshList={fetchData}
        list={list}
      />
    </>
  );
};
