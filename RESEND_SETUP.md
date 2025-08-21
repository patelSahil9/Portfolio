# Resend Email Integration Setup

This project was updated to use **Resend** via a small Express server.

## Prerequisites
- Node.js 18+
- A Resend account + API key: https://resend.com

## 1) Backend (Express + Resend)
```bash
cd server
npm install
cp .env.example .env
# Edit .env and set RESEND_API_KEY (and optionally TO_EMAIL, FROM_EMAIL)
npm run dev
```
Server starts on http://localhost:8787

## 2) Frontend (Vite React)
```bash
cd ..
npm install
npm run dev
```
The frontend points to `VITE_API_BASE=http://localhost:8787` (configured in `.env`).

## 3) Verify
- Visit your site, open Contact form, send a message.
- Check backend console for logs.
- Check your email inbox set in `TO_EMAIL`.

## Notes
- `FROM_EMAIL` defaults to `onboarding@resend.dev`. Replace it with your verified sender on Resend when ready.
- Removed EmailJS usage.
- If you deploy, host `server/` somewhere (Render, Railway, Fly.io, etc.) and set `VITE_API_BASE` to your server URL.
