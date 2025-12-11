export async function GET() {
  const data = await fetch("https://www.abibliadigital.com.br/api/books", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  const json = await data.json();
  return Response.json(json);
}
