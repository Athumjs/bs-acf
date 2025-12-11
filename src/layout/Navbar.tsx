"use client";
import { JSX } from "react/jsx-runtime";
import styles from "./styles/Navbar.module.css";
import { useEffect } from "react";

export default function Navbar(): JSX.Element {
  useEffect(() => {
    const style = document.documentElement.style;
    style.setProperty(
      "--bodyColor",
      localStorage.getItem("darkMode") === "false" ? "#202020" : "var(--cor1)"
    );
    style.setProperty(
      "--bgColor",
      localStorage.getItem("darkMode") === "false" ? "#303030" : "white"
    );
    style.setProperty(
      "--textColor",
      localStorage.getItem("darkMode") === "false" ? "white" : "black"
    );
  }, []);
  return (
    <nav id={styles.nav}>
      <h1 onClick={() => open("/", "_self")}>Bíblia Sagrada ACF</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="32px"
        viewBox="0 -960 960 960"
        width="32px"
        fill="#f2eadf"
        onClick={() => {
          const style = document.documentElement.style;
          style.setProperty(
            "--bodyColor",
            style.getPropertyValue("--textColor") === "black"
              ? "#202020"
              : "var(--cor1)"
          );
          style.setProperty(
            "--bgColor",
            style.getPropertyValue("--textColor") === "black"
              ? "#303030"
              : "white"
          );
          style.setProperty(
            "--textColor",
            style.getPropertyValue("--textColor") === "black"
              ? "white"
              : "black"
          );
          style.getPropertyValue("--textColor") === "black"
            ? localStorage.setItem("darkMode", "true")
            : localStorage.setItem("darkMode", "false");
        }}
      >
        <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
      </svg>
      <section>
        <a href="https://www.bibliafielcomentada.com/" target="_blank">
          Bíblia Fiel Comentada
        </a>
        <a href="https://www.universal.org/" target="_blank">
          Universal
        </a>
      </section>
    </nav>
  );
}
