describe('Transactions are attached to a date', function () {
  var account
  var txn1 = {amount: 320.00, date: new Date("2010-08-19"), type: 'credit', balance: 5000.00}

  beforeEach(function () {
    account = new Account()
  })

  it('A transaction should have a date attached for statement', function () {
    account.transactions.push(txn1)
    expect(account.statementCreate()).toContain("19/08/2010")
  })
})
