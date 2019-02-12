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
      var trans = this.transactions[i];
      if (trans.type === 'credit') {
        state += trans.date.toLocaleDateString('en-GB') + ' || ' + trans.amount + ' || || ' + trans.balance + '\n'
      } else if (trans.type === 'debit') {
        state += trans.date.toLocaleDateString('en-GB') + ' || ' + trans.amount + ' || ' + trans.balance + '\n'
      };
    };
    return state;
  };
};
