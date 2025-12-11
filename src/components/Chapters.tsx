"use client";
import { JSX } from "react/jsx-runtime";
import styles from "./styles/Chapters.module.css";
import { useEffect, useRef, useState } from "react";

interface ChaptersParams {
  book: any;
  setBook: any;
}

export default function Chapters({
  book,
  setBook,
}: ChaptersParams): JSX.Element {
  const [chapters, setChapters] = useState<number[]>([]);
  useEffect(() => {
    const list = Array.from({ length: Number(book.chapters) }, (_, i) => i + 1);
    setChapters(list);
  }, [book.chapters]);
  const chaptersRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!book.name) return;
    chaptersRef.current!.style.display = "block";
    document.body.style.overflow = "hidden";
  }, [book]);
  return (
    <section id={styles.chapters} ref={chaptersRef}>
      <div>
        <h1>{book.name}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#fff"
          onClick={() => {
            setBook({});
            chaptersRef.current!.style.display = "none";
            document.body.style.overflow = "";
          }}
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </div>
      <ul>
        {chapters.map((chapter) => (
          <li
            className={
              localStorage.getItem("currentBook") === book.name &&
              localStorage.getItem("currentChapter") === chapter.toString()
                ? styles.continue
                : ""
            }
            key={chapter}
            onClick={() => {
              open(
                `/bible/${book.abbrev.pt}-${chapter}-${book.chapters}`,
                "_self"
              );
              localStorage.setItem("currentChapter", chapter.toString());
              localStorage.setItem("currentBook", book.name);
            }}
          >
            {chapter.toString()}
          </li>
        ))}
      </ul>
    </section>
  );
}
