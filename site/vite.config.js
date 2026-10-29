import { readFileSync } from "node:fs";
import { basename, resolve } from "node:path";
import { defineConfig } from "vite";

const root = import.meta.dirname;

const pages = {
  "index.html": "home",
  "how-to-play.html": "play",
  "crew.html": "crew",
  "discord.html": "discord",
  "buy-me-a-beer.html": "beer",
};

function layoutPlugin() {
  return {
    name: "keybro-layout",
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        const header = readFileSync(resolve(root, "src/partials/header.html"), "utf8");
        const footer = readFileSync(resolve(root, "src/partials/footer.html"), "utf8");
        const page = pages[basename(ctx.filename)] ?? "";
        const nav = header.replaceAll(
          `data-nav="${page}"`,
          `data-nav="${page}" aria-current="page"`,
        );
        return html
          .replace("<!--HEADER-->", nav)
          .replace("<!--FOOTER-->", footer);
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
