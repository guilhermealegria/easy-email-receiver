import express from 'express';
import morgan from 'morgan';
import routes from './routes/email.routes.js';
import { startSMTPServer } from './services/email.service.js';
import { PORT } from './config/env.js';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Servidor HTTP rodando em http://localhost:${PORT}`);
});

// Inicia servidor SMTP paralelamente
startSMTPServer();