# Ankur Kharb — Portfolio

Berserk (Guts) themed portfolio. Next.js 16, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Editing content

Everything shown on the site lives in `src/config/`:

| File | What it holds |
| --- | --- |
| `Hero.tsx` | Name, intro text, resume button, social links, avatar |
| `About.tsx` | The "Arsenal" skill icons |
| `Experience.tsx` | Jobs and internships (`*text*` renders bold) |
| `Projects.tsx` | Project cards; the home page shows the first four |
| `Achievements.tsx` | Achievements and education |
| `Github.ts` | GitHub username for the activity calendar |

Project screenshots are in `public/project/`, company logos in `public/company/`.

To use a photo instead of the Brand of Sacrifice, put it in `public/assets/`
and set `avatar` in `src/config/Hero.tsx`.

## Updating the resume

Replace `public/Ankur_Kharb_Resume.pdf` with the new PDF (keep the same file name) and push.

## Deploying

The site is hosted on Vercel and connected to this GitHub repo.
Every push to `main` deploys automatically:

```bash
git add .
git commit -m "Describe the change"
git push
```

Vercel builds a preview for other branches and pull requests, so you can check a change before it goes live.
