# Keybro Gaming

Public site for Keybro Gaming, plus the existing `@SandshackServerPack` DayZ server mod. The mod and the site are separate. The site does not pack or change the mod.

The look is a field manual: olive, khaki, and stencil type. Pages:

- Home
- How to play
- Crew
- Discord
- Buy me a beer

## Run the site

From the repository root:

```bash
npm install
npm run dev
```

Open http://localhost:5173 for local work. The public address is https://keybrogaming.com.

## Build

From the repository root:

```bash
npm install
npm run build
npm run preview
```

`npm run build` writes the static site to `dist/`. `npm start` serves that folder on `0.0.0.0` and `PORT` (or 4173). `npm run preview` is the Vite preview server for local checks.

## cPanel

Streamline (au.web.sline.gg) hosts the Node app from the repository root. Leave the application path blank. Use Node 22 and npm. No database and no environment variables are required. cPanel sets `PORT` when it starts the app.

| Field | Value |
| --- | --- |
| Application path | *(blank — repository root)* |
| Node version | `22` |
| Package manager | `npm` |
| Build command | `npm run build` |
| Startup command | `npm start` |
| Output directory | `dist` |

`npm start` runs `node server.mjs`, which serves `dist/` on `0.0.0.0` and `process.env.PORT`. Vite is a production dependency because the build runs on the host.

## Domain

The canonical URL is [https://keybrogaming.com](https://keybrogaming.com). GitHub Pages builds the repository root from [KeybroAU/keybro-gaming-website](https://github.com/KeybroAU/keybro-gaming-website) `main` and publishes `dist/`. The Pages custom domain is `keybrogaming.com`. `www.keybrogaming.com` is the recommended alias: once its DNS record exists, GitHub redirects it to the apex.

Pages settings: https://github.com/KeybroAU/keybro-gaming-website/settings/pages

This repo cannot change the DNS registrar. Add these records at the registrar. GitHub’s current Pages addresses are documented at https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site. Do not use a wildcard such as `*.keybrogaming.com`.

Apex `keybrogaming.com` — four `A` records and four `AAAA` records, all named `@`:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

If the registrar supports `ALIAS` or `ANAME` instead of `A`/`AAAA`, one record named `@` pointing at `KeybroAU.github.io` can replace that list. Remove any old apex `A`, `AAAA`, or `CNAME` records that conflict.

`www` — one `CNAME`. Point it at the user site, not at the repository path and not at the apex:

| Type | Name | Value |
| --- | --- | --- |
| CNAME | `www` | `KeybroAU.github.io` |

After the records propagate (GitHub says this can take up to 24 hours), open:

- https://keybrogaming.com/
- https://www.keybrogaming.com/ (should redirect to the apex)

Until those records exist, the Pages deploy is only on the `github.io` host. Enforce HTTPS in the Pages settings after the certificate is issued.

## Placeholders that still need real content

Do not treat a placeholder section as server policy.

- **Rules, getting started, and common questions.** Those three sections on How to play are still empty placeholders.
- **Bios.** Keybro’s bio and the open crew slot are still placeholders. Kiwigreen and KiwiKurt are on the Crew page. Rambo and Mick Dundee are named in KiwiKurt’s bio and do not have cards yet.

How to play lists the live server, SandShack Hardcore Nasdara at `103.62.51.132:5332`, plus player guides for Terje Medicine and Base Building Plus.

Discord links out to [https://discord.gg/nJQcJ5FJhn](https://discord.gg/nJQcJ5FJhn) and opens in a new tab.

Buy me a beer links out to [https://buymeacoffee.com/keybro](https://buymeacoffee.com/keybro). That page explains the donation supports Keybro Gaming. No payment keys are stored in this repo.
