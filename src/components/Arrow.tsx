"use client";
import { JSX } from "react/jsx-runtime";
import styles from "./styles/Arrow.module.css";

export default function Arrow({
  path,
  bookAbbr,
  chapter,
  chapters,
}: {
  path: string;
  bookAbbr: string;
  chapter: string;
  chapters: string;
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="50px"
      viewBox="0 -960 960 960"
      width="50px"
      fill="#f2eadf"
      id={styles.svg}
      className={path.startsWith("m313") ? styles.l : styles.r}
      onClick={() => {
        if (path.startsWith("m313")) if (chapter <= "1") return;
        if (!path.startsWith("m313")) if (chapter >= chapters) return;
        localStorage.setItem("currentChapter", chapter);
        open(
          `/${bookAbbr}-${
            path.startsWith("m313")
              ? parseInt(chapter) - 1
              : parseInt(chapter) + 1
          }-${chapters}`,
          "_self"
        );
      }}
    >
      <path d={path} />
    </svg>
  );
}
