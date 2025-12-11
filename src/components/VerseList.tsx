"use client";
import { JSX } from "react/jsx-runtime";
import styles from "./styles/VerseList.module.css";
import { useEffect, useRef } from "react";

export default function VerseList({
  verses,
  active,
}: {
  verses: any;
  active: string;
}): JSX.Element {
  const liRef = useRef<HTMLLIElement>(null);
  useEffect(() => {
    if (!liRef.current) return;
    liRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, []);
  return (
    <ul id={styles.ul}>
      {verses.map((verse: any) => {
        const isActive: boolean = parseInt(active) === verse.number;
        return (
          <li
            key={verse.number}
            ref={isActive ? liRef : null}
            className={isActive ? styles.active : ""}
          >
            <span>{verse.number}</span> {verse.text}
          </li>
        );
      })}
    </ul>
  );
}
