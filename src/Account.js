class Account {
  constructor () {
    this.balance = 0.00;
    this.transactions = [];
  };

  deposit (amount) {
    this.balance += amount;
    var transaction = new Transaction(amount, 'credit', this.balance);
    this.transactions.push(transaction);
  };

  withdraw (amount) {
    this.balance -= amount;
    var transaction = new Transaction(amount, 'debit', this.balance);
    this.transactions.push(transaction);
  };

  statement () {
    var state = "date || credit || debit || balance \n"
    var arrLength = this.transactions.length;
    for (var i = 0; i < arrLength; i ++) {
      if (this.transactions[i].type === 'credit') {
        state += 'date || ' + this.transactions[i].amount + ' || || ' + this.transactions[i].balance + '\n'
      } else if (this.transactions[i].type === 'debit') {
        state += 'date || ' + this.transactions[i].amount + ' || ' + this.transactions[i].balance + '\n'
      };
    };
    return state;
  };
};
