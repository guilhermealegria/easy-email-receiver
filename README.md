# Easy E-mail Receiver Service

Serviço básico para receber e‑mails em múltiplas contas de um único domínio.

```bash
# Build e levante tudo
docker compose up --build

# Stard docker
docker compose up -d

## Remove docker e volume
docker compose down -v

```

Endpoints REST:
- **POST /api/accounts** `{"email":"user@dominio.com"}` – cria conta
- **GET  /api/accounts** – lista contas
- **GET /api/accounts/${e-mail@dominio.com}/emails** - Lista de E-mails
- **GET /api/accounts/${e-mail@dominio.com}/emails/<id>** - Visualizar um E-mail

O servidor SMTP escuta na porta configurada (`25` por padrão). Utilize um registro MX apontando para o host e porta correspondentes.