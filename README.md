# Olowookere Miracle: Personal Website

The personal website of Olowookere Miracle, Software Developer & UI Designer.
It is a small, single-page site (Hero, About, Contact) meant to grow over time.

## Tech

- [React](https://react.dev) + [Vite](https://vite.dev)
- Plain CSS (`src/index.css`) with design tokens in `:root`
- Hosted on [Vercel](https://vercel.com), deployed by GitHub Actions

No backend, database or environment variables are needed for the app itself.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Project structure

```
index.html              page shell (title, meta, fonts)
public/images/          static images (profile photo, nav logo)
src/data/site.js        name, role, email, social links, photo, edit this first
src/components/         Nav, Hero, About, Contact, Footer
src/index.css           all styles; colours and fonts are variables at the top
.github/workflows/cd.yml  deployment workflow
vercel.json             Vercel config (Git auto-deploy disabled, Actions deploys instead)
```

## Updating the website

- **Details / links:** edit `src/data/site.js`. Add a social profile by adding an entry to `socials`.
- **Copy:** edit the text in `src/components/Hero.jsx` and `src/components/About.jsx`
  (placeholder copy is marked with `PLACEHOLDER` comments).
- **Accent colour:** change `--accent` in `src/index.css`.
- **Photo:** replace `public/images/profile.jpg` (keep it square, about 800×800).
- **Logo:** replace `public/images/logo.png` (square, transparent background works best).

Then commit and push to `main`; the site redeploys automatically.

## Deployment

Pushing to `main` runs `.github/workflows/cd.yml`, which installs dependencies with `npm ci`,
builds the site, and deploys it to Vercel production using the Vercel CLI.
Vercel's own Git integration deploys are turned off in `vercel.json` so there is only one pipeline.

### One-time setup

1. Create a Vercel account and a token at <https://vercel.com/account/tokens>.
2. In this folder run `npx vercel link` and follow the prompts to create/link the project.
   This writes `.vercel/project.json` (ignored by git) containing `orgId` and `projectId`.
3. In GitHub, go to **Settings → Secrets and variables → Actions** and add:

   | Secret              | What it is                                    |
   | ------------------- | --------------------------------------------- |
   | `VERCEL_TOKEN`      | The token from step 1; lets Actions deploy    |
   | `VERCEL_ORG_ID`     | `orgId` from `.vercel/project.json`           |
   | `VERCEL_PROJECT_ID` | `projectId` from `.vercel/project.json`       |

4. Push to `main` (or run the workflow manually from the **Actions** tab).

Never commit tokens; they belong only in GitHub secrets.
