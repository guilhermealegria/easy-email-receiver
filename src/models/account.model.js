export class AccountModel {
    constructor() {
        this.accounts = new Set();
    }

    /** Cria nova conta */
    create(email) {
        if (this.accounts.has(email)) throw new Error('Conta já existe');
        this.accounts.add(email);
        return email;
    }

    /** Lista contas */
    list() {
        return Array.from(this.accounts);
    }

    /** Verifica se conta existe */
    exists(email) {
        return this.accounts.has(email);
    }
}

export const accountModel = new AccountModel();