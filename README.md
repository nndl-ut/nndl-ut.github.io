# Neural Networks and Deep Learning (NNDL) — Fall 2026

Course website for **Neural Networks and Deep Learning**, taught by **Dr. Ahmad Kalhor**,
School of Electrical and Computer Engineering, University of Tehran (Fall 2026 / 1405–1406).

Built with [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/) and [Alpine.js](https://alpinejs.dev/) — same stack as the NLP course site template.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in ./dist
```

## Editing the content

Everything (course info, logistics, staff, TAs, assignment schedule, grading, topics) lives in **`src/data.js`** —
you normally never need to touch the HTML.

| I want to…                         | Do this                                                                                       |
| ---------------------------------- | --------------------------------------------------------------------------------------------- |
| Add a TA photo                     | Put the image in `public/` and set `photo: 'file-name.jpg'` for that person in `src/data.js`  |
| Add LinkedIn / GitHub / email links | Fill `links: { linkedin, github, email, website }` — empty links show as greyed-out icons      |
| Rename the workshop TAs            | Edit `workshopTAs` in `src/data.js`                                                           |
| Change class time / room           | Edit `logistics` in `src/data.js`                                                             |
| Change dates or deadlines          | Edit the matching entry in `assignments`                                                      |

## Deploy to GitHub Pages

1. Push this repo to GitHub (branch `main`).
2. Go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and publishes the site on every push.
   It automatically sets the correct base path (`/<repo-name>/`).
