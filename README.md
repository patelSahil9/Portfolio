## Email via Resend

Configure environment variables (in local `.env` or deployment settings):

- `RESEND_API_KEY` – re_BaSpMvYM_7NZ5viLaAc99hTJfyTXbyBQW

- `CONTACT_TO_EMAIL` – destination email address

Frontend contact forms POST to `/api/send-email` which is handled by `api/send-email.ts` using Resend.



