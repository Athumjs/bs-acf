export async function GET(
  request: any,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await fetch(
    "https://www.abibliadigital.com.br/api/verses/search",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        version: "acf",
        search: id,
      }),
    }
  );

  const json = await data.json();
  return Response.json(json.verses);
}
