"use client";
import { formatDistanceToNow, isToday, isYesterday, format } from "date-fns";
import koLocale from "date-fns/locale/ko";
import { useState } from "react";
import styled from "styled-components";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import firebase from "firebase/app";
import { db } from "@/lib/firebase/firebasedb";
import { formatDate } from "@/core/formatDate";

interface ListItem {
  content: string;
  id: string;
  name: string;
  createdAt: string;
}
export const GuestBook = () => {
  const date = new Date();

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

  const snap = onSnapshot(collection(db, "guest-book"), (querySnapshot) => {
    let _temp: any[] = [];

    querySnapshot.forEach((doc) => {
      let data = doc.data();
      data = { ...data, id: doc.id };
      _temp.push(data);
    });
    setList(_temp);
  });

  // console.log(date.toISOString());

  return (
    <Container>
      <label htmlFor="name">이름</label>
      <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
      <label htmlFor="content">내용</label>
      <input
        type="text"
        id="content"
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="btn-container">
        <button className="btn-complete" onClick={handleClickComplete}>
          완료
        </button>
        <button onClick={handleClickCancel} className="btn-cancel">
          취소
        </button>
      </div>

      <strong>방명록</strong>

      {list.length > 0 &&
        list.map((d, i) => (
          <div key={d.id} className="guest-book-item">
            <div className="guest-book-item--header">
              <strong>{d.name}</strong>
              <span>{d.createdAt && formatDate(d.createdAt)}</span>
            </div>
            <p className="guest-book-item--content">{d.content}</p>
          </div>
        ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .btn-container {
    display: flex;
    button {
      width: 100px;
      padding: 8px 16px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      &:hover {
        filter: brightness(80%);
      }
    }

    .btn-complete {
      background-color: lightblue;
    }
    .btn-cancel {
      background-color: lightcoral;
    }
  }

  .guest-book-item {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background-color: lightpink;
    &--header {
      display: flex;
      justify-content: space-between;
    }
    &--content {
    }
  }
`;
