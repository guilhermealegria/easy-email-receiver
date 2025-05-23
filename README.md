# Easy E-mail Receiver Service

Serviço básico para receber e‑mails em múltiplas contas de um único domínio.


## Build e Start docker
```bash
# Build docker
docker compose build --no-cache

# Start docker
docker compose up -d

## Remove docker e volume
docker compose down -v

```

## Teste Local com Swaks
```bash
## Teste Local

# Install swaks
sudo apt update
sudo apt install swaks

# Send e-mail
swaks --to e-mail@meudominio.com \
      --from teste@exemplo.com \
      --server localhost:25 \
      --header "Subject: Postman Test" \
      --body "Mensagem vinda do swaks"

```

Endpoints REST:
- **POST /api/accounts** `{"email":"e-mail@dominio.com"}` – Cria uma conta
- **GET  /api/accounts** – Lista de contas
- **GET /api/accounts/${e-mail@dominio.com}/emails** - Lista de E-mails
- **GET /api/accounts/${e-mail@dominio.com}/emails/<id>** - Visualizar um E-mail

O servidor SMTP escuta na porta configurada (`25` por padrão). Utilize um registro MX apontando para o host e porta correspondentes.
