"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main id={styles.page}>
      <section id={styles.content}>
        <h1>Bíblia Sagrada</h1>
        <h2>Almeida Corrigida Fiel</h2>
        <p>
          "Quem crer e for batizado será salvo; mas quem não crer será
          condenado." - <span>Marcos 16:16</span>
        </p>
        <div>
          <button onClick={() => open("/bible", "_self")}>Comece a Ler</button>
          <button onClick={() => open("/search", "_self")}>
            Pesquisar por palavra
          </button>
        </div>
      </section>
      <section id={styles.bible}>
        <Image src="/bible.png" alt="biblia imagem" width={336} height={500} />
      </section>
    </main>
  );
}
