"use client";
import { JSX } from "react/jsx-runtime";
import styles from "./styles/Arrow.module.css";
import { useEffect, useState } from "react";

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
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const update = () =>
      setDarkMode(localStorage.getItem("darkMode") === "true");
    update();
    window.addEventListener("darkmode", update);
    return () => window.removeEventListener("darkmode", update);
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="50px"
      viewBox="0 -960 960 960"
      width="50px"
      fill={darkMode ? "#000" : "#fff"}
      id={styles.svg}
      className={`${path.startsWith("m313") ? styles.l : styles.r} ${
        path.startsWith("m313") && parseInt(chapter) === 1 ? styles.none : ""
      } ${
        !path.startsWith("m313") && parseInt(chapter) === parseInt(chapters)
          ? styles.none
          : ""
      }`}
      onClick={() => {
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
