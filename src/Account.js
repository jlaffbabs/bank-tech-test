class Account {
  constructor () {
    this.balance = 0.00
    this.transactions = []
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
    var statement = new Statement;
    return statement.printStatement(this.transactions);
  };
};
