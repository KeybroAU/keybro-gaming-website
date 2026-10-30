import { readFileSync } from "node:fs";
import { basename, resolve } from "node:path";
import { defineConfig } from "vite";

const root = import.meta.dirname;

const siteOrigin = "https://keybrogaming.com";

const pages = {
  "index.html": "home",
  "how-to-play.html": "play",
  "crew.html": "crew",
  "discord.html": "discord",
  "buy-me-a-beer.html": "beer",
};

const pagePaths = {
  "index.html": "/",
  "how-to-play.html": "/how-to-play.html",
  "crew.html": "/crew.html",
  "discord.html": "/discord.html",
  "buy-me-a-beer.html": "/buy-me-a-beer.html",
};

function escapeAttr(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
}

function canonicalTags(filename, html) {
  const path = pagePaths[filename] ?? "/";
  const url = `${siteOrigin}${path}`;
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "Keybro Gaming";
  const description =
    html.match(/name="description"\s+content="([^"]*)"/)?.[1] ??
    "Keybro Gaming";
  const safeTitle = escapeAttr(title);
  const safeDescription = escapeAttr(description);
  return `    <link rel="canonical" href="${url}" />
    <meta property="og:site_name" content="Keybro Gaming" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDescription}" />
    <meta property="og:image" content="${siteOrigin}/keybro-logo.png" />
`;
}

function layoutPlugin() {
  return {
    name: "keybro-layout",
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        const header = readFileSync(resolve(root, "src/partials/header.html"), "utf8");
        const footer = readFileSync(resolve(root, "src/partials/footer.html"), "utf8");
        const file = basename(ctx.filename);
        const page = pages[file] ?? "";
        const nav = header.replaceAll(
          `data-nav="${page}"`,
          `data-nav="${page}" aria-current="page"`,
        );
        return html
          .replace("<!--HEADER-->", nav)
          .replace("<!--FOOTER-->", footer)
          .replace("</head>", `${canonicalTags(file, html)}\n  </head>`);
      },
    },
  };
}

export default defineConfig({
  plugins: [layoutPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        play: resolve(root, "how-to-play.html"),
        crew: resolve(root, "crew.html"),
        discord: resolve(root, "discord.html"),
        beer: resolve(root, "buy-me-a-beer.html"),
      },
    },
  },
});
