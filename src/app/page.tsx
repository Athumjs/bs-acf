"use client";
import Chapters from "@/components/Chapters";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const token = process.env.TOKEN;

export default function Home() {
  const [books, setBooks] = useState<any[]>([]);
  const [currentBook, setCurrentBook] = useState<any>({});
  useEffect(() => {
    async function main() {
      const data = await fetch("https://www.abibliadigital.com.br/api/books", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setBooks(await data.json());
    }
    main();
  }, []);
  return (
    <main id={styles.page}>
      <h2>Antigo Testamento</h2>
      <ul id={styles.at}>
        {books.map((book: any, index: number) => {
          if (book.testament === "VT")
            return (
              <li
                className={
                  localStorage.getItem("currentBook") === book.name
                    ? styles.continue
                    : ""
                }
                key={index}
                onClick={() => setCurrentBook(book)}
              >
                <span>{book.abbrev.pt}</span> {book.name}
              </li>
            );
        })}
      </ul>
      <h2>Novo Testamento</h2>
      <ul id={styles.nt}>
        {books.map((book: any, index: number) => {
          if (book.testament === "NT")
            return (
              <li
                className={
                  localStorage.getItem("currentBook") === book.name
                    ? styles.continue
                    : ""
                }
                key={index}
                onClick={() => setCurrentBook(book)}
              >
                <span>{book.abbrev.pt}</span> {book.name}
              </li>
            );
        })}
      </ul>
      <Chapters book={currentBook} setBook={setCurrentBook} />
    </main>
  );
}
