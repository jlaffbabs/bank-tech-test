describe('User Can Deposit Money', function () {
  var account

  beforeEach(function () {
    account = new Account()
  })

  it('A user should be able to deposit money in his account', function () {
    account.deposit(100.00)
    expect(account.balance).toEqual(100.00)
  })
})
