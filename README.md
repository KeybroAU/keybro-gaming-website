# Keybro Gaming

Public site for Keybro Gaming, plus the existing `@SandshackServerPack` DayZ server mod. The mod and the site are separate. The site does not pack or change the mod.

The look is a field manual: olive, khaki, and stencil type. Pages:

- Home
- How to play
- Crew
- Discord
- Buy me a beer

## Run the site

From `site/`:

```bash
npm install
npm run dev
```

Open http://localhost:5173 for local work. The public address is https://keybrogaming.com.

## Build

From `site/`:

```bash
npm install
npm run build
npm run preview
```

`npm run build` writes the static site to `site/dist/`. `npm run preview` serves that folder locally.

## Domain

The canonical URL is [https://keybrogaming.com](https://keybrogaming.com). The site that hostname should serve is this repo’s `site/dist/` output, from [KeybroAU/keybro-gaming-website](https://github.com/KeybroAU/keybro-gaming-website) `main`:

- https://keybrogaming.com/
- https://keybrogaming.com/how-to-play.html
- https://keybrogaming.com/crew.html
- https://keybrogaming.com/discord.html
- https://keybrogaming.com/buy-me-a-beer.html

Each page sets that URL as its canonical link and Open Graph URL. This repo has no host or DNS config, and the domain is not deployed from here. Point keybrogaming.com at a static host for `site/dist/` when you are ready.

## Placeholders that still need real content

Do not treat a placeholder section as server policy.

- **Rules, getting started, and common questions.** Those three sections on How to play are still empty placeholders.
- **Bios.** Crew bios for Keybro and the open crew slots are placeholders.

How to play lists the live server, SandShack Hardcore Nasdara at `103.62.51.132:5332`, plus player guides for Terje Medicine and Base Building Plus.

Discord links out to [https://discord.gg/nJQcJ5FJhn](https://discord.gg/nJQcJ5FJhn) and opens in a new tab.

Buy me a beer links out to [https://buymeacoffee.com/keybro](https://buymeacoffee.com/keybro). That page explains the donation supports Keybro Gaming. No payment keys are stored in this repo.
