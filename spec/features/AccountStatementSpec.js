describe('Account Statement should be comprehensive', function () {
  var account

  beforeEach(function () {
    account = new Account()
  })

  it('A user should see the type of transaction, value, total balance', function () {
    account.deposit(200.55)
    account.withdraw(75.54)
    expect(account.statementCreate()).toContain('credit || debit || balance')
    expect(account.statementCreate()).toContain('|| 75.54 || 125.01')
    expect(account.statementCreate()).toContain('200.55 || || 200.55')
  })
})
