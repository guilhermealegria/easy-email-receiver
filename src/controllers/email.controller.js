import { accountModel } from '../models/account.model.js';
import { emailModel } from '../models/email.model.js';

// Accounts
export const createAccount = (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email é obrigatório' });
    accountModel.create(email);
    return res.status(201).json({ email });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const listAccounts = (_req, res) => res.json({ accounts: accountModel.list() });

// Emails
export const listEmails = (req, res) => {
  const { email } = req.params;
  if (!accountModel.exists(email)) return res.status(404).json({ message: 'Conta não encontrada' });
  return res.json({ messages: emailModel.list(email) });
};

export const getEmail = (req, res) => {
  const { email, id } = req.params;
  if (!accountModel.exists(email)) return res.status(404).json({ message: 'Conta não encontrada' });
  const msg = emailModel.getById(email, id);
  if (!msg) return res.status(404).json({ message: 'Mensagem não encontrada' });
  return res.json(msg);
};