export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwOqLNWDOvosnNunGE7r6SV_2MuYEzBbumG-gAq8bNihGS8gzZBHN68eomKxX9v0Zr_/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(req.body),
        },
      );
      const data = await response.json();
      res.status(200).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error al enviar formulario" });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
