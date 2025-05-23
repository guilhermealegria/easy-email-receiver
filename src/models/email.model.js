import { v4 as uuid } from 'uuid';

export class EmailModel {
    constructor() {
        this.storage = new Map();
    }

    add(account, parsed) {
        const id = uuid();
        const meta = {
            id,
            from: parsed.from?.text || '',
            to: parsed.to?.text || account,
            subject: parsed.subject || '',
            date: parsed.date || new Date(),
            text: parsed.text || '',
            html: parsed.html || '',
            headers: Object.fromEntries(parsed.headers),
        };
        if (!this.storage.has(account)) this.storage.set(account, []);
        this.storage.get(account).push(meta);
        return meta;
    }

    list(account) {
        return this.storage.get(account) || [];
    }

    getById(account, id) {
        return (this.storage.get(account) || []).find(m => m.id === id);
    }
}

export const emailModel = new EmailModel();