import { SMTPServer } from 'smtp-server';
import { simpleParser } from 'mailparser';
import { accountModel } from '../models/account.model.js';
import { emailModel } from '../models/email.model.js';
import { SMTP_PORT } from '../config/env.js';

export const startSMTPServer = () => {
  const server = new SMTPServer({
    // Desabilita autenticação para simplificar — adicione depois se precisar
    authOptional: true,

    // Valida RCPT TO: <user@dominio.com>
    onRcptTo(address, _session, callback) {
      if (!accountModel.exists(address.address)) return callback(new Error('Conta inexistente'));
      return callback();
    },

    // Recebe dados do e‑mail
    async onData(stream, session, callback) {
      try {
        const parsed = await simpleParser(stream);
        session.envelope.rcptTo.forEach(rcpt => emailModel.add(rcpt.address, parsed));
        console.log('Mensagem armazenada para', session.envelope.rcptTo.map(r => r.address).join(','));
        // TODO: persistir no banco, S3 etc.
        callback();
      } catch (err) {
        callback(err);
      }
    },
  });

  server.listen(SMTP_PORT, () => {
    console.log(`Servidor SMTP escutando na porta ${SMTP_PORT}`);
  });
};
