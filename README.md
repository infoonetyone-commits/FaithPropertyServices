# Faith Property Services

Marketing website for Faith Property Services — professional commercial cleaning across Victoria.

Built with **Next.js 15 (App Router)** + **Tailwind CSS**, ready to deploy on **Vercel**.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design system

| Token   | Value     | Use                          |
| ------- | --------- | ---------------------------- |
| Teal    | `#183030` | Primary brand / dark sections |
| Mint    | `#d7efe2` | Light accent backgrounds      |
| Ink     | `#020101` | Body text                     |
| White   | `#ffffff` | Page background               |

Fonts: **Bricolage Grotesque** (headings) + **Karla** (body), loaded via `next/font/google`.

## Notes

- Images are currently **placeholders** — drop real assets into `/public` and swap the placeholder `<div>`s in the section components for `next/image`.
- The quote form is **front-end only**. Wire it to an email/API service (e.g. a Next.js Route Handler, Resend, or Formspree) to receive submissions.

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
