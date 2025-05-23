import { Router } from 'express';
import { createAccount, listAccounts, listEmails, getEmail } from '../controllers/email.controller.js';

const router = Router();

// Accounts
router.post('/accounts', createAccount);
router.get('/accounts', listAccounts);

// Emails
router.get('/accounts/:email/emails', listEmails);
router.get('/accounts/:email/emails/:id', getEmail);

export default router;