import { readFile } from "node:fs/promises";
import { createServer } from "node:http";

const PORT = Number(process.env.PORT ?? 3000);

const server = createServer(async (request, response) => {
  if (request.url !== "/") {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  const page = await readFile(new URL("./index.html", import.meta.url));
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end(page);
});

server.listen(PORT, () => {
  console.log(`Home page on http://localhost:${PORT}`);
});
