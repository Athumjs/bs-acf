import Arrow from "@/components/Arrow";
import styles from "./page.module.css";

const token = process.env.TOKEN;

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await fetch(
    `https://www.abibliadigital.com.br/api/verses/acf/${id.split("-")[0]}/${
      id.split("-")[1]
    }`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const { book, chapter, verses } = await data.json();

  return (
    <main id={styles.page}>
      <h1>
        {book.name} {chapter.number} <span>Livro de {book.author}</span>
      </h1>
      <section>
        <ul>
          {verses.map((verse: any) => (
            <li key={verse.number}>
              {verse.number} {verse.text}
            </li>
          ))}
        </ul>
      </section>
      <Arrow
        path="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
        bookAbbr={id.split("-")[0]}
        chapter={id.split("-")[1]}
        chapters={id.split("-")[2]}
      />
      <Arrow
        path="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"
        bookAbbr={id.split("-")[0]}
        chapter={id.split("-")[1]}
        chapters={id.split("-")[2]}
      />
    </main>
  );
}
