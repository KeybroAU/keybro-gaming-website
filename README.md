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

Open http://localhost:5173

## Build

From `site/`:

```bash
npm install
npm run build
npm run preview
```

`npm run build` writes the static site to `site/dist/`. `npm run preview` serves that folder locally.

## Placeholders that still need real content

Do not treat a placeholder section as server policy.

- **Rules, getting started, and common questions.** Those three sections on How to play are still empty placeholders.
- **Bios.** Crew bios for Keybro and the open crew slots are placeholders.

How to play lists the live server, SandShack Hardcore Nasdara at `103.62.51.132:5332`, plus player guides for Terje Medicine and Base Building Plus.

Discord links out to [https://discord.gg/nJQcJ5FJhn](https://discord.gg/nJQcJ5FJhn) and opens in a new tab.

Buy me a beer links out to [https://buymeacoffee.com/keybro](https://buymeacoffee.com/keybro). That page explains the donation supports Keybro Gaming. No payment keys are stored in this repo.
