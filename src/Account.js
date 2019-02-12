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
    console.log(this.transactions)
    for (var i = 0; i < arrLength; i++) {
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
    console.log(this.transactions[i])
    this.statement += txn.date.toLocaleDateString('en-GB') + ' || ' + txn.amount + ' || || ' + txn.balance + '\n';
  };

  debitFormat (i) {
    console.log(this.transactions)
    var txn = this.transactions[i]
    this.statement += txn.date.toLocaleDateString('en-GB') + ' || || ' + txn.amount + ' || ' + txn.balance + '\n';
  };
};
