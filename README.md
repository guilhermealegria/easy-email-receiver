# Email Receiver Service

Serviço básico para receber e‑mails em múltiplas contas de um único domínio.

```bash
# Build e levante tudo
docker compose up --build
```

Endpoints REST:
- **POST /api/accounts** `{"email":"user@dominio.com"}` – cria conta
- **GET  /api/accounts** – lista contas

O servidor SMTP escuta na porta configurada (`2525` por padrão). Utilize um registro MX apontando para o host e porta correspondentes.