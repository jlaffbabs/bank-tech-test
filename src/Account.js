class Account {
  constructor () {
    this.balance = 0.00
    this.transactions = []
    this.statement = 'date || credit || debit || balance \n'
  };

  deposit (amount) {
    this.balance += amount
    var transaction = new Transaction(amount, 'credit', this.balance)
    this.transactions.push(transaction)
  };

  withdraw (amount) {
    this.balance -= amount
    var transaction = new Transaction(amount, 'debit', this.balance)
    this.transactions.push(transaction)
  };

  statementCreate () {
    this.statement = 'date || credit || debit || balance \n'
    var arrLength = this.transactions.length
    for (var i = arrLength - 1; i >= 0; --i) {
      if (this.transactions[i].type === 'credit') {
        this.creditFormat(i);
      } else if (this.transactions[i].type === 'debit') {
        this.debitFormat(i);
      };
    };
    return this.statement
  };

  creditFormat (i) {
    var txn = this.transactions[i]
    this.statement += txn.date.toLocaleDateString('en-GB') + ' || ' + txn.amount + ' || || ' + txn.balance + '\n';
  };

  debitFormat (i) {
    var txn = this.transactions[i]
    this.statement += txn.date.toLocaleDateString('en-GB') + ' || || ' + txn.amount + ' || ' + txn.balance + '\n';
  };
};
