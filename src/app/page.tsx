"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main id={styles.s1}>
        <section id={styles.content}>
          <h1>Bíblia Sagrada</h1>
          <h2>Almeida Corrigida Fiel</h2>
          <p>
            "Quem crer e for batizado será salvo; mas quem não crer será
            condenado." - <span>Marcos 16:16</span>
          </p>
          <div>
            <button onClick={() => open("/bible", "_self")}>
              Comece a Ler
            </button>
            <button onClick={() => open("/search", "_self")}>Pesquisar</button>
          </div>
        </section>
        <section id={styles.bible}>
          <Image
            src="/bible.png"
            alt="biblia imagem"
            width={336}
            height={500}
            onClick={() => open("https://www.bibliafielcomentada.com/")}
          />
        </section>
      </main>
      <main id={styles.s2}>
        <h1>Conheça também:</h1>
        <section>
          <div onClick={() => open("https://www.universal.org/")}>
            <Image src="/iurd.png" alt="iurd imagem" width={100} height={80} />
            <h1>Universal (IURD)</h1>
          </div>
          <div onClick={() => open("https://www.univervideo.com/")}>
            <Image
              src="/univer.png"
              alt="iurd imagem"
              width={100}
              height={100}
            />
            <h1>Univer Vídeo</h1>
          </div>
        </section>
      </main>
    </>
  );
}
