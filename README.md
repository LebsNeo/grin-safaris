# Grin Safaris

Landing site for [grinsafaris.com](https://grinsafaris.com) — electric-powered guided safari tours in Kruger National Park.

Built with Next.js 16 + Tailwind 4. Deployed on Vercel.

## Local dev

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY
npm run dev
```

## Env vars

- `RESEND_API_KEY` — used by the partner-enquiry form to deliver leads to `CONTACT_INBOX`
- `CONTACT_INBOX` — destination address (defaults to `info@grinsafaris.com`)
