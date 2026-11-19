import { readFile } from "node:fs/promises";
import { createServer } from "node:http";

const PORT = Number(process.env.PORT ?? 3000);

// Seconds the server waits before sending the home page.
const HOME_PAGE_DELAY_SECONDS = 8;

const wait = (seconds) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));

const server = createServer(async (request, response) => {
  if (request.url !== "/") {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  await wait(HOME_PAGE_DELAY_SECONDS);
  const page = await readFile(new URL("./index.html", import.meta.url));
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end(page);
});

server.listen(PORT, () => {
  console.log(`Home page on http://localhost:${PORT}`);
});
