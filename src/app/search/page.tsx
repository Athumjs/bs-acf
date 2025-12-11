"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [books, setBooks] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");
  const ulRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    async function main() {
      if (!search.trim()) return;
      ulRef.current!.innerHTML = `<li>Procurando versículos que contém "${search}"...</li>`;
      const data = await fetch(`/api/search/${search}`);
      const response = await data.json();
      if (response.length <= 0)
        return (ulRef.current!.innerHTML =
          "<li>Nenhum versículo encontrado.</li>");
      ulRef.current!.innerHTML = "";
      setBooks(response);
    }
    main();
  }, [search]);
  return (
    <main id={styles.page}>
      <section>
        <input
          type="search"
          id={styles.search}
          placeholder="Pesquise uma palavra..."
          onKeyUp={(ev) => {
            if (ev.key !== "Enter") return;
            setSearch(ev.currentTarget.value.toLowerCase());
          }}
        />
      </section>
      <ul ref={ulRef}>
        {books.map((verse: any, index: number) => {
          const regex = new RegExp(`(${search})`, "gi");
          return (
            <li
              key={index}
              onClick={() =>
                open(
                  `/bible/${verse.book.abbrev.pt}-${verse.chapter}-${verse.book.chapters}-${verse.number}`,
                  "_self"
                )
              }
            >
              <span className={styles.info}>
                {verse.book.abbrev.pt} {verse.chapter}:{verse.number}
              </span>{" "}
              {verse.text.split(regex).map((value: any, i: number) => {
                if (!regex.test(value)) return value;
                return <span key={i}>{value}</span>;
              })}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
