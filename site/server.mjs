import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = normalize(fileURLToPath(new URL("./dist/", import.meta.url)));
const port = Number(process.env.PORT) || 4173;
const host = "0.0.0.0";

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

function fileFor(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const relative = decoded.replace(/^\/+/, "");
  const target = normalize(join(root, relative === "" ? "index.html" : relative));
  if (target !== root && !target.startsWith(root.endsWith(sep) ? root : root + sep)) {
    return null;
  }
  if (existsSync(target) && statSync(target).isDirectory()) {
    const index = join(target, "index.html");
    return existsSync(index) ? index : null;
  }
  return existsSync(target) && statSync(target).isFile() ? target : null;
}

const server = createServer((request, response) => {
  const file = fileFor(request.url ?? "/");
  if (!file) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }
  response.writeHead(200, {
    "content-type": types[extname(file)] ?? "application/octet-stream",
  });
  if (request.method === "HEAD") {
    response.end();
    return;
  }
  createReadStream(file).pipe(response);
});

server.listen(port, host, () => {
  console.log(`Keybro Gaming site listening on ${host}:${port}`);
});
