class Statement {
  constructor () {
    this.statement = 'date || credit || debit || balance \n'
  };

  printStatement (transactions) {
    var arrLength = transactions.length
    for (var i = arrLength - 1; i >= 0; --i) {
      transactions[i].type === 'credit' ? this.creditFormat(i, transactions) : this.debitFormat(i, transactions)
    };
    return this.statement
  };

  creditFormat(i, transactions) {
    this.statement += transactions[i].date.toLocaleDateString('en-GB');
    this.statement += ' || ' + transactions[i].amount + ' || || ';
    this.statement += transactions[i].balance +'\n';
  };

  debitFormat(i, transactions) {
    this.statement += transactions[i].date.toLocaleDateString('en-GB');
    this.statement += ' || || ' + transactions[i].amount + ' || ';
    this.statement += transactions[i].balance + '\n';
  };
};

