export async function POST({ request }) {
  try {
    const body = await request.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwOqLNWDOvosnNunGE7r6SV_2MuYEzBbumG-gAq8bNihGS8gzZBHN68eomKxX9v0Zr_/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Error al enviar formulario" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
